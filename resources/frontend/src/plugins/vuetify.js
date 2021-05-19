import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: '#17252A',
        secondary: '#2B7A78',
        accent: '#3AAFA9',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        title: '#DEF2F1',
        subtitle: '#FEFFFF',
        background: '#3AAFA9',
      },
    },
  },
});
