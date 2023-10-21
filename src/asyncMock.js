const products = [

    {
        id: '1',
        category: 'notebook',
        name: 'Notebook Samsung',
        stock: 25,
        price: 3000,
        description: 'Description de Notebook',
        img: 'https://http2.mlstatic.com/D_NQ_NP_876792-MLU70420822593_072023-V.webp',
    },
    { id: '2', name: 'Samsung S21', price: 800, category: 'celular', img: 'data:image/jpeg;base64,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', stock: 25, description: 'Samsung s21' },
    { id: '3', name: 'Ipad 8va generación', price: 1200, category: 'tablet', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdm8BW_SIEDDtpI3ktfn55nlw3ex0m2FJxA&usqp=CAU', stock: 25, description: 'Samsung s21' },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}