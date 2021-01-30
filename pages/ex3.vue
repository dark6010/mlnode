<template lang="pug">
  div.p-4
    h2.text-center CHILDRENS BOOK
    .grid.grid-cols-3
      small
        b Entrenamiento
        pre {{arrayToTrain}}
      small
        b test iterations
        pre {{iterations}}
      small
        b output

        pre(v-for="(val, index) in output" :key="index") run {{index+1}} {{iterations[index]+val}}


</template>

<script>
export default {
  head: {
    title: 'Libro de niños',
    script: [{ src: '//unpkg.com/brain.js' }]
  },
  data() {
    return {
      arrayToTrain: [
        'Jane saw Doug.',
        'Doug saw Jane.',
        'Spot saw Doug and Jane looking at each other.',
        'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.'
      ],
      iterations:[
        'Jane',
        'Soug',
        'Spot',
        'It',
      ],
      output:[]
    }
  },
  mounted(){

    const lstm = new brain.recurrent.LSTM();
    const result = lstm.train(this.arrayToTrain, {
      iterations: 1500,
      log: details => console.log(details),
      errorThresh: 0.011
    });
    this.iterations.forEach((val, index) => {
      this.output.push(lstm.run(val))
    })
  }
}
</script>

<style>
pre {
 white-space: pre-wrap;       /* css-3 */
 white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
 white-space: -pre-wrap;      /* Opera 4-6 */
 white-space: -o-pre-wrap;    /* Opera 7 */
 word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>