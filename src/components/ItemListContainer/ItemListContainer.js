import { useState, useEffect } from "react"
// import { getProducts, getProductsByCategory} from '../../asyncMock'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()


    // useEffect(() => {
    //     const asyncFunc = categoryId ? getProductsByCategory : getProducts

    //     asyncFunc(categoryId)
    //         .then(response => {
    //             setProducts(response)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }, [categoryId])

    useEffect(() => {
        setLoading(true)
        const coleccionProductos = categoryId ? query(collection (db, "items"), where("category", "==", categoryId)):collection (db, "items")
        getDocs(coleccionProductos)
            .then((res) => {
                const list = res.docs.map((products)=>{
                    return{
                        id:products.id,
                        ...products.data()
                    }
                })
                setProducts(list)
            })

            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])


    return (
        <div>
            {
                loading ? <p>Cargando...</p>
                    : <div>
                        <h1>{greeting} <span> {categoryId && categoryId} </span> </h1>
                        <ItemList products={products} />
                    </div>
            }
        </div>
    )
}

export default ItemListContainer;