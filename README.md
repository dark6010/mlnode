# El juego de Piedra Papel Tijera usando Inteligencia Artificial

# :punch: vs :raised_hand: vs :v:

## Por que usar inteligencia Artificial?

Porque si :joy:. Quisimos probar la IA en un juego y resulta que nos encotramos una interesante libreria que esta descrita acontinuacion:

Brain.js es una libreria que en palabras simples hace uso de redes neuronales aceleradas por GPU en JavaScript, para conocer mas a detalle ver: [brain.js](https://brain.js.org/).

### Que es GPU?

Para un gamer es su tesoro mas preciado. para los mortales es la (Unidad de Procesamiento Grafico). ya habiendo repasado los conceptos basicos pues nos queda decir que Brain.js realiza cálculos utilizando GPU y recurre con elegancia a JavaScript puro cuando la GPU no está disponible. si quieres saber como es que que lo hace de manera elegante revisa el siguinete link: [GPU.js](https://github.com/gpujs/gpu.js/#readme).

## Lo que nos importa

El juego puede leer los patrones de los jugadores para determinar los pasos que tomará la IA para ganar.

## Como jugar?

1. Inicia el juego selecionando los botones de Piedra, Papel o Tijera.
2. A medida que seleciones los botones se crearan patrones:
    - :punch: :punch: :punch:,ect
    - :raised_hand: :punch: :punch:,etc
    - :v: :punch: :raised_hand:, etc
    - y continuas con las posibles convinaciones.
3. Continua jugando y dejanos saber si puedes ganar. :grin:

El juego fue contruido con las siguientes tecnologias:

  - Nuxt.js
  - Brain.js
  - Pug.js
  - Tailwindcss

## Levanta el Proyecto

Y ponte a Jugar

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```
Para mas detalles sobre Nuxt dirigete al siguiente link [Nuxt.js docs](https://nuxtjs.org).
