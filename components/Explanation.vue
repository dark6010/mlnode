<template lang="pug">
  div(class='lg:ml-16')
    .p-4.mt-4.prose(class='lg:prose-xl')
      h2
        | {{ $t('what') }}
      div
        p
          | {{ $t('thisIs') }}
        p
          | {{ $t('thisGame') }}
        p {{ $t('builtWith') }}
    .p-4.mt-4.prose(class='lg:prose-xl')
      h2
        | {{ $t('how') }}
      div
        ol
          li
            | {{ $t('step1') }}
          li
            | {{ $t('step2') }}
          li
            | {{ $t('step3') }}
            ul
              li {{ $t('pattern1') }}
              li {{ $t('pattern2') }}
              li {{ $t('pattern3') }}
              li {{ $t('pattern4') }}
          li {{ $t('step4') }}
    .p-4.mt-4.prose(class='lg:prose-xl')
      h2
        | {{ $t('source') }}
      div
        p
          | {{ $t('brainjs') }}:
          a(href='https://github.com/BrainJS/brain.js') Brain JS
        p
          | {{ $t('github') }}:
          a(href='https://github.com/arifikhsan/batu-gunting-kertas-nuxt') Github

</template>

<script>
export default {

}
</script>

<style>

</style>