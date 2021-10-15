<template>
  <v-container fill-height>
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <h1>I'm Lost</h1>
      </v-col>
      <v-col cols="12">
        <v-img
          :src="require('../assets/lost.gif')"
          contain
          height="500"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Lost',
  mounted() {
    setTimeout(() => this.$router.push({ path: '/'}), 5000);
  },
}
</script>