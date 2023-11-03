// Crea un array d’objectes amb la informació dels personatges i una fotografia (la url)
const personajes = [
    {
        nombre: 'Albert Einstein',
        frase: 'La imaginación es más importante que el conocimiento',
        imagen: 'https://www.fundacionaquae.org/wp-content/uploads/2014/11/AlbertEinstein.jpg'
    },
    {
        nombre: 'Martin Luther King Jr',
        frase: 'Tengo un sueño',
        imagen: 'https://cdn.britannica.com/18/1918-050-0166D6BB/Martin-Luther-King-Jr.jpg'
    },
    {
        nombre: 'Mahatma Gandhi',
        frase: 'Sé el cambio que quieres ver en el mundo',
        imagen: 'https://www.biografiasyvidas.com/monografia/gandhi/fotos/gandhi_mahatma.jpg'
    },
    {
        nombre: 'William Shakespeare',
        frase: 'Ser o no ser, esa es la cuestión',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/640px-Shakespeare.jpg'
    },
    {
        nombre: 'Marilyn Monroe',
        frase: 'Dale a una chica los zapatos adecuados y conquistará el mundo',
        imagen: 'https://aws-modapedia.vogue.es/prod/designs/v1/assets/640x764/191.jpg'
    },
    {
        nombre: 'Abraham Lincoln',
        frase: 'El gobierno del pueblo, por el pueblo y para el pueblo no perecerá de la Tierra',
        imagen: 'https://www.whitehouse.gov/wp-content/uploads/2021/01/16_abraham_lincoln.jpg'
    },
    {
        nombre: 'Winston Churchill',
        frase: 'Nunca en la historia de la humanidad tantos le deben tanto a tan pocos',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/800px-Sir_Winston_Churchill_-_19086236948.jpg'
    },
    {
        nombre: 'Coco Chanel',
        frase: 'La moda pasa, el estilo permanece',
        imagen: 'https://www.biografiasyvidas.com/biografia/c/fotos/chanel.jpg'
    },
    {
        nombre: 'Nelson Mandela',
        frase: 'La educación es el arma más poderosa que puedes usar para cambiar el mundo',
        imagen: 'https://www.biografiasyvidas.com/biografia/m/fotos/mandela_nelson_5.jpg'
    },
    {
        nombre: 'Steve Jobs',
        frase: 'Innovación es lo que distingue a un líder de un seguidor',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/640px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg'
    },
    {
        nombre: 'Audrey Hepburn',
        frase: 'La belleza es ser la mejor versión de ti mismo por dentro y por fuera',
        imagen: 'https://hips.hearstapps.com/hmg-prod/images/audrey-hepburn-gettyimages-517443052.jpg'
    },
    {
        nombre: 'Mark Twain',
        frase: 'El informe de mi muerte ha sido muy exagerado',
        imagen: 'https://www.biografiasyvidas.com/biografia/t/fotos/twain_mark.jpg'
    },
]

// Mitjançant el selector (select/option) es pugui seleccionar qualsevol dels noms dels personatges
const select = document.querySelector('#select')
const btnSelect = document.querySelector('#btnSelect')

function selects(){
    for (let i = 0; i < personajes.length; i++) {
        select.innerHTML += `<option value="${i+1}">${personajes[i].nombre}</option>`
    }
}
selects()

// En fer clic al botó ‘Veure personatge’ es mostri una targeta amb la informació del personatge seleccionat: el seu nom, la seva foto i la seva frase cèlebre.
const divCard = document.querySelector('#card')
btnSelect.addEventListener('click', seleccionar)
function seleccionar(){
    // Al costat de la frase ha de mostrar el moment (hh:mm:ss) en el que s’ha fet la consulta.
    let fecha = new Date()
    fecha = fecha.toLocaleTimeString()

    let i = select.value
    i = i - 1

    divCard.innerHTML = `
    <div class="card m-3" style="width: 18rem;">
        <img src="${personajes[i].imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${personajes[i].nombre}</h5>
            <p class="card-text" id="idFrase">Frase: ${personajes[i].frase} / ${fecha}</p>
        </div>
    </div>`
}

// Crea un cercador de frases cèlebres. Al introducir una paraula al input buscarà si existeix la paraula introduïda en la frase que es mostra a la targeta. Si existeix coincidencia ha de mostrar la frase amb la paraula marcada en verd
const btnBuscar = document.querySelector('#btnBuscar')
btnBuscar.addEventListener('click', buscarPalabra)

function buscarPalabra(){
    let palabra = document.querySelector('#palabraBuscar').value

    let i = select.value
    i = i - 1
    let fraseCelebre = personajes[i].frase
    let fraseMarcada = fraseCelebre.replaceAll(palabra, `<span class="bg-success text-light">${palabra}</span>`)
    
    document.querySelector('#fraseAcabada').innerHTML = fraseMarcada
}