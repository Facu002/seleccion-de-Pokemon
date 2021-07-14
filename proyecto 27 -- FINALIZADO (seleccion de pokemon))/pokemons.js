// POKEMONES //
var pokemons = {
    'bulbasaur':{ 
        nombre: 'bulbasaur',
        tipo: 'planta',
        movimientos:['placaje', 'latigo'],
        experiencia: '0'
    },
    'charmander':{
        nombre: 'charmander',
        tipo: 'fuego',
        movimientos:['placaje', 'gruñido'],
        experiencia: '0'
    },
    'squirtle':{
        nombre: 'squirtle', 
        tipo: 'agua',
        movimientos: ['placaje', 'gruñido'],
        experiencia: '0'
    }
};


// PANTALLA DE INCIO //

const btnInicio = document.querySelector('.inicio');
const tituloBienvenida = document.querySelector('.bienvenido');

const genero = document.querySelector('.generos');

btnInicio.addEventListener('click', ()=>{
    btnInicio.classList.add('ocultar');
    tituloBienvenida.classList.add('ocultar');
    genero.classList.remove('ocultar');
    
});


// SELECCION DE GENERO //
const preguntaGenero = document.querySelector('.generos');
const chico = document.querySelector('.chico');
const chica = document.querySelector('.chica');

const imagenChico = document.querySelector('.imagenChico');
const imagenChica = document.querySelector('.imagenChica');

const preguntaPokemon = document.querySelector('.pokemonInicial');

chico.addEventListener('click', ()=>{
    chico.classList.add('personajeMasc')
    chica.classList.add('ocultar')
    preguntaGenero.classList.add('ocultar')
    imagenChico.classList.remove('ocultar')
    preguntaPokemon.classList.remove('ocultar')
});

chica.addEventListener('click', ()=>{
    chica.classList.add('personajefem')
    chico.classList.add('ocultar')
    preguntaGenero.classList.add('ocultar')
    imagenChica.classList.remove('ocultar')
    preguntaPokemon.classList.remove('ocultar')
});

// SELECCION DE POKEMON //

const bulbasaur = document.getElementById('001');
const squirtle = document.getElementById('004');
const charmander = document.getElementById('007');

const tituloDePokemonInicial = document.querySelector('.preguntaPokemon')

bulbasaur.addEventListener('click', ()=>{
    bulbasaur.classList.add('miPokemon')
    squirtle.classList.add('ocultar')
    charmander.classList.add('ocultar')
    tituloDePokemonInicial.classList.add('ocultar')
})

charmander.addEventListener('click', ()=>{
    charmander.classList.add('miPokemon')
    bulbasaur.classList.add('ocultar')
    squirtle.classList.add('ocultar')
    tituloDePokemonInicial.classList.add('ocultar')
})

squirtle.addEventListener('click', ()=>{
    squirtle.classList.add('miPokemon')
    bulbasaur.classList.add('ocultar')
    charmander.classList.add('ocultar')
    tituloDePokemonInicial.classList.add('ocultar')
})