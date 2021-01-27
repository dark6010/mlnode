<template lang="pug">
  div.p-4
    h2.text-center SIMPLE LETTER DETECTION
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
export default {
  head: {
    title: 'Rock Paper Scissors with AI',
    script: [{ src: '//unpkg.com/brain.js' }]
  },
  data() {
    return {
      arrayToTrain: [],
      test:[],
      output:[]
    }
  },
  mounted(){
    const a = character(
    '.#####.' +
    '#.....#' +
    '#.....#' +
    '#######' +
    '#.....#' +
    '#.....#' +
    '#.....#'
    );
    const b = character(
    '######.' +
    '#.....#' +
    '#.....#' +
    '######.' +
    '#.....#' +
    '#.....#' +
    '######.'
    );
    const c = character(
    '#######' +
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#######'
    );

    /**
     * Learn the letters A through C.
     */
    const net = new brain.NeuralNetwork();
    this.arrayToTrain=[{
        input: a,
        output: {
        a: 1
        }
    },
    {
        input: b,
        output: {
        b: 1
        }
    },
    {
        input: c,
        output: {
        c: 1
        }
    }
    ]
    net.train(this.arrayToTrain, {
    log: detail => console.log(detail)
    });

    /**
     * Predict the letter A, even with a pixel off.
     */
    this.test=character(
    '.#####.' +
    '#.....#' +
    '#.....#' +
    '###.###' +
    '#.....#' +
    '#.....#' +
    '#.....#'
    )
    this.output = brain.likely(this.test, net);
    console.log(this.output); // 'a'



    /**
     * Turn the # into 1s and . into 0s. for whole string
     * @param string
     * @returns {Array}
     */
    function character(string) {
    return string
        .trim()
        .split('')
        .map(integer);
    }

    /**
     * Return 0 or 1 for '#'
     * @param character
     * @returns {number}
     */
    function integer(character) {
    if ('#' === character) return 1;
    return 0;
    }
  }
}
</script>

<style>

</style>