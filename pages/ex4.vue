<template lang="pug">
  div.p-4
    h2.text-center Contraste de Color
    .grid.grid-cols-3
      small
        b Entrenamiento
        pre 
          code {{arrayToTrain}}
      small
        b test
        pre
          code {{test}}
      small
        b salida
        pre
          code {{output}}


</template>

<script>
export default {
  head: {
    title: 'Contraste de color',
    script: [{ src: '//unpkg.com/brain.js' }]
  },
  data() {
    return {
      arrayToTrain: [{
          input: {
            r: 0.03,
            g: 0.7,
            b: 0.5
          },
          output: {
            black: 1
          }
        },
        {
          input: {
            r: 0.16,
            g: 0.09,
            b: 0.2
          },
          output: {
            white: 1
          }
        },
        {
          input: {
            r: 0.5,
            g: 0.5,
            b: 1.0
          },
          output: {
            white: 1
          }
        }
      ],
      test:{
        r: 1,
        g: 0.4,
        b: 0
      },
      output:[]
    }
  },
  mounted(){
    var net = new brain.NeuralNetwork();

    net.train(this.arrayToTrain);

    this.output = net.run(this.test); // { white: 0.99, black: 0.002 }

  }
}
</script>

<style>

</style>