<template lang="pug">
  div.p-4
    h2.text-center XOR FUNCTION
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
        b output
        pre
          code {{output}}


</template>

<script>
import brain from 'brain.js/src'
export default {
  head: {
    title: 'Funcion xor'
    // script: [{ src: '//unpkg.com/brain.js' }]
  },
  data() {
    return {
      arrayToTrain: [{
          input: [0, 0],
          output: [0]
        },
        {
          input: [0, 1],
          output: [1]
        },
        {
          input: [1, 0],
          output: [1]
        },
        {
          input: [1, 1],
          output: [0]
        }
      ],
      test:[1, 0],
      output:[]
    }
  },
  mounted(){
    // provide optional config object (or undefined). Defaults shown.
    const config = {
      binaryThresh: 0.5, // ¯\_(ツ)_/¯
      hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
      activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
    };

    // create a simple feed forward neural network with backpropagation
    const net = new brain.NeuralNetwork(config);
    net.train(this.arrayToTrain);

    this.output = net.run(this.test); // [0.987]
  }
}
</script>

<style>

</style>