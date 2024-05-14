import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme:{
      themes:{
        light:{
          colors:{
            primary: '#DF6851',
          }
        }
      }
    }
  })
  app.vueApp.use(vuetify)
})