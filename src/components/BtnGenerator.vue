<template>
  <v-btn
    elevation="2"
    :loading="loading"
    @click="getDisquette"
  >
    Générer
  </v-btn>
</template>

<script>
export default {
  name: 'BtnGenerator',
  props: {
    value: { type: String, default: '' }
  },
  data: () => ({
    loading: false,
    lastDisquette: '',
  }),
  methods: {
    getDisquette() {
      this.loading = true;
      setTimeout(() => {
          this.loading = false;

          this.lastDisquette = this.$store.getters.getDisquette(this.lastDisquette);

          this.$emit("generation", this.lastDisquette)
      }, Math.random() * (5000 - 1000) + 1000); 
    }
  }
}
</script>
