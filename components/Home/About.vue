<template>
  <section id="about">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12" lg="10" xl="9" class="d-flex flex-column">
          <h2 class="section-title">О нас</h2>
          <h3 class="display-1">Почувствуйте себя лендлордом прошлого тесячелетия</h3>
          <p>мыться не обязательно</p>
          <Link to="/about" class="ml-auto" disabled>Помыться</Link>
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
