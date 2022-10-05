const allPoints = {
    products: 'https://fakestoreapi.com/products',
}


const productsContainer = document.querySelector('#products')
function renderCard(products){
for (let product of products) {
    let card = document.createElement('div')
    card.classList.add('card')
    //title
    let title = document.createElement('p')
    title.innerText = product.title
    card.appendChild(title)
    //price
    let price = document.createElement('p')
    price.innerText = 'price: ' + product.price
    card.appendChild(price)
    //description
    let description = document.createElement('p')
    description.innerText = product.description
    card.appendChild(description)
    //category
    let category = document.createElement('p')
    category.innerText = product.category
    card.appendChild(category)
    //rating rate
    let ratingRate = document.createElement('p')
    ratingRate.innerText = 'rate: '+ product.rating.rate
    card.appendChild(ratingRate)
    //count
    let ratingCount = document.createElement('p')
    ratingCount.innerText = 'count: '+ product.rating.count
    card.appendChild(ratingCount)
    //image
    let image = document.createElement('img')
    image.src = product.image
    card.appendChild(image)
    productsContainer.appendChild(card)

}
    }

const fetchProducts = () => fetch(allPoints.products)
.then(function(data){
    return data.json()
}).then(renderCard).catch((reason) => {
    console.error('ERRORR!!!!', reason)
})

const button = document.querySelector('button')
button.onclick = fetchProducts  


function stateDataInStorage(){
    console.log(products)
}
