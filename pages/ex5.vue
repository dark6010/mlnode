<template lang="pug">
  .max-w-5xl.mx-auto(class='lg:flex lg:justify-evenly lg:items-start')
    .flex.flex-col.items-center.justify-center.text-center(class='lg:mt-10')
      SwitchLanguage
      .p-4
        h1.text-3xl.font-bold.text-indigo-500 {{ $t('title') }}
        h2.text-base.text-indigo-500 {{ $t('subtitle') }}
      .p-4
        h2.text-2xl.font-semibold.text-indigo-500
          | {{ $t('score') }}
        .flex.items-center.mt-4.items-row.justify-evenly
          .border-r.border-indigo-500(class='w-1/2')
            p.text-3xl.text-indigo-500 {{ scoreHuman }}
            p.mt-4.text-xl {{ $t('human') }}
            p.mt-4 {{ showChosenByHuman }}
          div(class='w-1/2')
            p.text-3xl.text-indigo-500 {{ scoreAI }}
            p.mt-4.text-xl {{ $t('ai') }}
            p.mt-4 {{ showChosenByAI }}
        .my-6.text-2xl.font-bold
          p.text-indigo-500(v-if="this.winner === 'human'")
            | {{ $t('youWin') }}
          p.text-red-500(v-else-if="this.winner === 'AI'")
            | {{ $t('youLose') }}
          p.text-blue-500(v-else-if="this.winner === 'draw'")
            | {{ $t('draw') }}
          p.text-gray-700(v-else='') {{ $t('gameStart') }}
        .mt-4
          .flex.flex-row.items-center.justify-center
            button.px-4.py-2.m-2.text-white.duration-500.bg-indigo-500.rounded(@click='humanInput(1)' class='hover:bg-indigo-600')
              | {{ $t('rock') }}
            button.px-4.py-2.m-2.text-white.duration-500.bg-indigo-500.rounded(@click='humanInput(2)' class='hover:bg-indigo-600')
              | {{ $t('paper') }}
            button.px-4.py-2.m-2.text-white.duration-500.bg-indigo-500.rounded(@click='humanInput(3)' class='hover:bg-indigo-600')
              | {{ $t('scissors') }}
            button.px-4.py-2.m-2.text-white.duration-500.bg-indigo-500.rounded(@click='whatShouldAIAnswer(false)' class='hover:bg-indigo-600')
              | que escojeras
          div
            button.px-4.py-2.m-2.text-indigo-500.border.rounded(@click='resetScore')
              | {{ $t('reset') }}
          .mt-8
            p {{ $t('gameCount') }}: {{ gameCount }}
    Explanation

</template>

<script>
import SwitchLanguage from '@/components/SwitchLanguage'
import Explanation from '@/components/Explanation'
export default {
  components: {
    SwitchLanguage,
    Explanation
  },
  head: {
    title: 'Rock Paper Scissors with AI',
    script: [{ src: '//unpkg.com/brain.js' }]
  },
  data() {
    return {
      pattern: [],
      scoreHuman: 0,
      scoreAI: 0,
      chosenByHuman: 0,
      chosenByAI: 0,
      winner: '', // human or AI or draw
      gameCount: 0,
      patternLength: 10
    }
  },
  computed: {
    showChosenByHuman() {
      return this.stringOf(this.chosenByHuman)
    },
    showChosenByAI() {
      return this.stringOf(this.chosenByAI)
    }
  },
  methods: {
    async humanInput(rockOrPaperOrScissors) {
      this.chosenByHuman = rockOrPaperOrScissors
      this.gameCount++
      await this.whatShouldAIAnswer()
      this.whoIsTheWinner()
    },
    prepareData() {
      console.log('preparando Datos')
      if (this.pattern.length < 1) {
        console.log('creando datos primera vez')
        for (let index = 1; index <= this.patternLength; index++) {
          this.pattern.push(Math.floor(Math.random() * 3) + 1)
        }
      }
    },
    updatePattern() {
      if (this.gameCount !== 0) {
        this.pattern.shift()
        this.pattern.push(this.chosenByHuman)
      }
    },
    async whatShouldAIAnswer(a=true) {
      this.prepareData()
      console.log(this.pattern)
      const net = new brain.recurrent.LSTMTimeStep()
      net.train([this.pattern], { iterations: 100, log: true })
      const humanWillChose = net.run(this.pattern)
      console.log(humanWillChose)
      if(a)
      this.updatePattern()


      const roundedHumanWillChose = Math.round(humanWillChose)
      const textShow = {1: 'piedra', 2:'papel', 3:'tijera'}
      if(!a)
      console.log('la persona escogera: ' + textShow[roundedHumanWillChose])
      else
      console.log('la persona escogera: ' + textShow[roundedHumanWillChose])
      this.chosenByAI = 1 <= roundedHumanWillChose && roundedHumanWillChose <= 3 ? (roundedHumanWillChose % 3) + 1 : 1
    },
    whoIsTheWinner() {
      if (this.chosenByHuman === this.chosenByAI) {
        this.winner = 'draw'
      } else if (
        (this.chosenByHuman === 1 && this.chosenByAI === 3) ||
        (this.chosenByHuman === 3 && this.chosenByAI === 2) ||
        (this.chosenByHuman === 2 && this.chosenByAI === 1)
      ) {
        this.winner = 'human'
        this.scoreHuman++
      } else {
        this.winner = 'AI'
        this.scoreAI++
      }
    },
    resetScore() {
      this.pattern = []
      this.scoreHuman = 0
      this.scoreAI = 0
      this.chosenByHuman = 0
      this.chosenByAI = 0
      this.winner = ''
      this.gameCount = 0
    },
    stringOf(integer) {
      switch (integer) {
        case 1:
          return this.$t('rock')
        case 2:
          return this.$t('paper')
        case 3:
          return this.$t('scissors')

        default:
          return ''
      }
    }
  }
}
</script>
