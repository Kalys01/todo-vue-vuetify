import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
          primary: colors.purple,
      },
      dark: {
          primary: colors.blue.lighten3,
      },
    },
  },
    options: {
      
    },
}

export default new Vuetify(opts)