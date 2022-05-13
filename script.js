/// First code////
const elements = document.querySelectorAll('.ProductCard')

// Création d'une variable pour prendre les valeurs qui sont déjà passées par le viewport
const loggedProducts = []

function getDisplayedProducts() {
// Avec Array.from, je convertis la NodeCollection elements en array
    const reformattedElements = Array.from(elements).map(function(el) {
        const image = el.querySelector('.ProductCard__content')
        const title = el.querySelector('.ProductCard__title').innerText
        const price = el.querySelector('.ProductCard__price').innerText
// Création d'un objet avec les coordonées, l'information du prix et le titre 
        return {coordinates: image.getBoundingClientRect(), title, price}
    });

// Variable qui filtre les éléments qui sont en train d'être affichés dans le viewport
    const visible = reformattedElements.filter(element => {
        return element.coordinates.top < window.innerHeight && element.coordinates.bottom > 0 && !loggedProducts.includes(element.title)
    })


  // Boucle qui va envoyer les éléments déjà vus pour éviter les afficher à nouveau et log de l'information souhaitée
    visible.forEach(element => {
        loggedProducts.push(element.title)
        console.log(`${element.title} costs ${element.price}`)
    })
}


// eventListener qui va permettre d'avoir l'information quand on scroll 
window.addEventListener('scroll', getDisplayedProducts)

// Second code using observer

const elements = document.querySelectorAll('.ProductCard')

// Création d'une variable pour prendre les valeurs qui sont déjà passées par le viewport
const loggedProducts = []

function getDisplayedProducts() {
// Avec Array.from, je convertis la NodeCollection elements en array
    const reformattedElements = Array.from(elements).map(function(el) {
        const image = el.querySelector('.ProductCard__content')
        const title = el.querySelector('.ProductCard__title').innerText
        const price = el.querySelector('.ProductCard__price').innerText
// Création d'un objet avec les coordonées, l'information du prix et le titre 
        return {coordinates: image.getBoundingClientRect(), title, price}
    });

// Variable qui filtre les éléments qui sont en train d'être affichés dans le viewport
    const visible = reformattedElements.filter(element => {
        return element.coordinates.top < window.innerHeight && element.coordinates.bottom > 0 && !loggedProducts.includes(element.title)
    })


  // Boucle qui va envoyer les éléments déjà vus pour éviter les afficher à nouveau et log de l'information souhaitée
    visible.forEach(element => {
        loggedProducts.push(element.title)
        console.log(`${element.title} costs ${element.price}`)
    })
}


// eventListener qui va permettre d'avoir l'information quand on scroll 
window.addEventListener('scroll', getDisplayedProducts)
