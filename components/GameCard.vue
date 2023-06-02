<template>
    <v-card
      :loading="loading"
      class="mx-3 my-3"
      max-width="374"
      style="display: inline-block;"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        :src="image"
      ></v-img>
  
      <v-card-title>{{ name }}</v-card-title>
  
      <v-card-text>
  
        <div class="my-4 text-subtitle-1">
            {{ price }} €/jour
        </div>
  
        <div>{{ description }}</div>

      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="reserve"
        >
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>

<script>
export default {

    name: "Game",
    props: ["name", "description", "image", "price"],

  data: () => ({
    loading: false,
  }),

  methods: {
    reserve () {
        console.log(this.image)
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>