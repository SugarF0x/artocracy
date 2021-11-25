<template>
  <section id="about">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12" lg="10" xl="9" class="d-flex flex-column">
          <h2 class="section-title">Lorem.</h2>
          <h3 class="display-1">Lorem ipsum dolor sit amet, consectetur.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cumque dicta distinctio eaque,
            laudantium neque nulla provident repudiandae totam ut.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae laudantium perspiciatis
            quibusdam quis, veniam.
          </p>
          <Link to="#" class="ml-auto" disabled>Lorem</Link>
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
