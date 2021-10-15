<template>
  <transition
    name="fade"
    appear
  >
    <v-container fill-height>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12">
          <h1>La Disquette</h1>
        </v-col>
        <v-col v-if="disquette" cols="12">
          <h3>{{ disquette }}</h3>
        </v-col>
        <v-col v-if="isLoading" cols="12">
          <transition
            name="fade"
            appear
          >
            <BtnGenerator @generation="newDisquette"/>
          </transition>
        </v-col>
      </v-row> 
      <v-btn
        absolute
        top
        right
        icon
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>
          mdi-theme-light-dark
        </v-icon>
      </v-btn>
    </v-container>
</transition>
</template>

<script>
import BtnGenerator from '@/components/BtnGenerator.vue'

export default {
  name: 'Disquette',
  components: {
    BtnGenerator
  },
  data: () => ({
    disquette: '',
    isLoading: false,
  }),
  mounted(){
    setTimeout(() => {
      this.isLoading = true;
    }, 2000);
  },
  methods: {
    newDisquette(disquette){
      this.disquette = disquette;
    }
  }
}
</script>

<style scoped>
/* transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>