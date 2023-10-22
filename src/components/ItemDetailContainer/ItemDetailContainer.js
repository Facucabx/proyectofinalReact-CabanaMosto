import './ItemDetailContainer.css'
import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(false)
    const { itemId } = useParams()

    // useEffect(() => {
    //     getProductById(itemId)
    //         .then(response => {
    //             setProduct(response)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }, [itemId])

    useEffect(() => {
        setLoader(true);
        const collectionProd = collection(db, 'items');
        const referenciaAlDoc = doc(collectionProd, itemId);
        getDoc(referenciaAlDoc)
            .then((res) => setProduct({ id: res.id, ...res.data() }))
            .catch((error) => console.log(error))
            .finally(() => setLoader(false))
    }, [itemId])

    return (
        <div className='ItemDetailContainer'>
            {loader ? <p>Cargando...</p> : <ItemDetail  producto={product} />}            
        </div>
    )
}

export default ItemDetailContainer