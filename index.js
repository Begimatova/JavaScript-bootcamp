const allPoints = {
    products: 'https://fakestoreapi.com/products',
}

fetch(allPoints.products).then(function(data){
    return data.json()
}).then(function(result){
    console.log(result)
})

function stateDataInStorage(){
    console.log(products)
}