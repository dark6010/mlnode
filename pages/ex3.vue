<template lang="pug">
  div.p-4
    h2.text-center LBRO DE NIÑOS
    .grid.grid-cols-3
      small
        b Entrenamiento
        pre(v-for="(val,index) in arrayToTrain" :key="index") - {{val}}
      small
        b salida

        pre(v-for="(val, index) in output" :key="index") corrida {{index+1}}: {{iterations[index]+val}}
      small
        b test iterations
        pre {{iterations}}


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
        'La gallina vio a el aguila.',
        'El lobo vio a la gallina.',
        'El aguila vio a el lobo y la gallina mirándose.',
        'Eso fue amor a primera vista, y el aguila tenía bellas plumas. Eso fue un momento muy agradable para todos.',
        'Celeste vio a el aguila.'
      ],
      iterations:[
        'La gallina',
        'El lobo',
        'El aguila',
        'Eso',
        'Celeste'
      ],
      output:[]
    }
  },
  mounted(){

    const lstm = new brain.recurrent.LSTM();
    const result = lstm.train(this.arrayToTrain, {
      iterations: 1200,
      log: details => console.log(details),
      errorThresh: 0.012
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