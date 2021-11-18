<template>
  <section id="recent">
    <v-container class="text-center">
      <h2 class="section-title large">Красивые картинки</h2>
      <p>Невероятные иллюстрации для привлечения внимания</p>
    </v-container>
    <v-row no-gutters>
      <v-col v-for="(image, n) in IMAGES" :key="`recentImage${n}`" cols="12" sm="6" md="3">
<!--        <pre-image :src="image" aspect-ratio="1.5" />-->
        <v-img :src="image" />
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

const IMAGES = [
  `https://picsum.photos/id/${Math.floor(Math.random()*1000)}/400`,
  `https://picsum.photos/id/${Math.floor(Math.random()*1000)}/400`,
  `https://picsum.photos/id/${Math.floor(Math.random()*1000)}/400`,
  `https://picsum.photos/id/${Math.floor(Math.random()*1000)}/400`,
]

export default defineComponent({
  setup() {
    return {
      IMAGES,
    }
  },
})
</script>

<style lang="sass" scoped>
#recent
  background-color: black
  color: white
</style>
