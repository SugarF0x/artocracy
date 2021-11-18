<template>
  <section id="partners">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12" lg="10" xl="9" class="d-flex flex-column">
          <h2 class="section-title">Развлекаловка для всей семьи</h2>
          <h3 class="display-1">Купите у нас одно пиво по цене трёх</h3>
          <p>Детское шампанское для самых маленьких - всего 11% содержания</p>
          <Link to="/projects" class="ml-auto" disabled>Отдать деньги</Link>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {},
})
</script>
