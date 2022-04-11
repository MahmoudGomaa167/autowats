let clientImages = document.querySelectorAll('.test-clients .client-image');


const removeActive = () => {
    clientImages.forEach(client => {
        client.classList.remove('active')
    })
}


clientImages.forEach(client => {
    let image = client.querySelector('img');
    let review = client.querySelector('.client-test')

    image.addEventListener('click', () => {
        removeActive();
        client.classList.add('active')
    })
})

