import { useState, useEffect } from "react"
// import { getProducts, getProductsByCategory} from '../../asyncMock'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"



const ItemListContainer = ({ greeting }) => {
    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const coleccionProductos = categoryId ? query(collection (db, "items"), where("category", "==", categoryId)):collection (db, "items")
        getDocs(coleccionProductos)
            .then((res) => {
                const list = res.docs.map((product)=>{
                    return{
                        idP:product.id,
                        ...product.data()
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
                        <ItemList products={product} />
                    </div>
            }
        </div>
    )
}

export default ItemListContainer;