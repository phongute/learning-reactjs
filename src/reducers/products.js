var initState = [
    {
        id: '10000',
        name: 'iphone 7+',
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81jqdc9RLdL._AC_SL1500_.jpg',
        description: 'Mo ta sp',
        price:  500,
        inventory: 10,
        rating: 4
    },
    {
        id: '100001',
        name: 'iphone 8+',
        imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-plus-spgray-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795419778',
        description: 'Mo ta sp',
        price:  1000,
        inventory: 15,
        rating: 5
    },
    {
        id: '100002',
        name: 'iphone X',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfPoUvertgK1vxzZUd2y_rtlrxzciygHKRV_5GXohBzZZRgd9J&usqp=CAU',
        description: 'Mo ta sp',
        price:  1500,
        inventory: 5,
        rating: 4
    },
];

const products = (state = initState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products;