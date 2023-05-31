export default {

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/tailwindcss', 'nuxt-webfontloader'],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-i18n'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  webfontloader: {
    google: {
      families: [
        'Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
      ]
    }
  },
  server: {
    port: 80,
  },
  i18n: {
    locales: ['es','en', 'id'],
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'es',
      messages: {
        es: {
          welcome: 'Bienvenido',
          title: 'Piedra Papel Tijera',
          subtitle: 'Con inteligencia Artificial',

          gameStart: 'Empezar a jugar',
          youWin: 'Ganaste',
          youLose: 'Perdiste',
          draw: 'Empate',

          score: 'Puntuacion',
          human: 'Humano',
          ai: 'IA',
          rock: 'Piedra',
          paper: 'Papel',
          scissors: 'Tijera',
          reset: 'Reiniciar',
          gameCount: 'Ronda',

          what: 'Que es esto?',
          thisIs:
            'Estes es un juego de piedra papel tijeras creado con inteligencia artificial.',
          thisGame:
            "Este juego puede aprender de los patrones de los jugadores para determinar los pasos que la inteligencia artificial debe tomar para ganar.",
          builtWith: 'Construido con Nuxt JS y el marco de trabajo Tailwind CSS.',

          how: 'Como jugar',
          step1: 'Tu puedes iniciar el juego seleccionando "piedra", "tijera" o "papel".',
          step2: 'Mientras selecciones crearas un patron.',
          step3: 'Ejemplos de patrones:',
          pattern1: 'piedra, piedra, piedra, piedra, etc.',
          pattern2: 'piedra, tijera, piedra, tijera, etc.',
          pattern3: 'piedra, tijera, papel, piedra, tijera, papel, etc.',
          pattern4: 'papel, papel, papel, papel, etc.',
          step4: 'Mira eso tu perderas.',

          source: 'Codifo fuente',
          brainjs: 'Contruido con la libreria',
          github: 'Obten este codigo en'
        },
        en: {
          welcome: 'Welcome',
          title: 'Rock Paper Scissors',
          subtitle: 'With Artificial Intellegence',

          gameStart: 'Start Game',
          youWin: 'You Win',
          youLose: 'You Lose',
          draw: 'Draw',

          score: 'Score',
          human: 'Human',
          ai: 'AI',
          rock: 'Rock',
          paper: 'Paper',
          scissors: 'Scissors',
          reset: 'Reset',
          gameCount: 'Game count',

          what: 'What is this?',
          thisIs:
            'This is a paper scissors rock game created using artificial intelligence.',
          thisGame:
            "This game can read the players' patterns to determine the steps the AI will take in order to win.",
          builtWith: 'Built with Nuxt JS & Tailwind CSS framework.',

          how: 'How to play',
          step1: 'You can start the game by selecting "rock", "scissors" or "paper".',
          step2: 'Choose continuously until you create a pattern.',
          step3: 'Examples of patterns:',
          pattern1: 'Rock, rock, rock, rock, etc.',
          pattern2: 'Rock, scissors, rock, scissors, etc.',
          pattern3: 'Rock, scissors, paper, rock, scissors, paper, etc.',
          pattern4: 'Paper, paper, paper, paper, etc.',
          step4: 'See that you will lose.',

          source: 'Source code',
          brainjs: 'Built with library',
          github: 'Get this code in'
        },
        id: {
          welcome: 'Selamat datang',
          title: 'Batu Gunting Kertas',
          subtitle: 'Dengan Kecerdasan Buatan',

          gameStart: 'Mulai Permainan',
          youWin: 'Anda Menang',
          youLose: 'Anda Kalah',
          draw: 'Seri',

          score: 'Skor',
          human: 'Manusia',
          ai: 'AI',
          rock: 'Batu',
          paper: 'Kertas',
          scissors: 'Gunting',
          reset: 'Ulangi dari awal',
          gameCount: 'Game ke',

          what: 'Apa ini?',
          thisIs:
            'Ini adalah permainan batu gunting kertas yang dibuat dengan menggunakan kecerdasan buatan.',
          thisGame:
            "Game ini dapat membaca pola pemainnya untuk menentukan langkah yang akan diambil oleh AI agar bisa menang.",
          builtWith: 'Dibuat dengan framework Nuxt JS & Tailwind CSS.',

          how: 'Cara bermain',
          step1: 'Anda bisa memulai permainan dengan memilih "batu", "gunting" atau "kertas".',
          step2: 'Pilihlah secara terus menerus sampai membuat pola.',
          step3: 'Contoh pola:',
          pattern1: 'Batu, batu, batu, batu, dst.',
          pattern2: 'Batu, gunting, batu, gunting, dst.',
          pattern3: 'Batu, gunting, kertas, batu, gunting, kertas, dst.',
          pattern4: 'Kertas, kertas, kertas, kertas, dst.',
          step4: 'Lihatlah bahwa Anda akan kalah.',

          source: 'Kode Sumber',
          brainjs: 'Dibuat dengan library',
          github: 'Dapatkan kode game ini di'
        }
      }
    }
  }
}
