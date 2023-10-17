const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'data:image/jpeg;base64,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',
        stock: 25,
        description: 'Description de Iphone 12'
    },
    {
        id: '4',
        name: 'Notebook Samsung',
        price: 3000,
        category: 'notebook',
        img: 'data:image/jpeg;base64,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',
        stock: 25,
        description: 'Description de Notebook'
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