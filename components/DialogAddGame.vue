<template>
    <v-row justify="left">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            fab
            dark
            v-bind="attrs"
            v-on="on"
            style="margin: 20px"
          >
          <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Ajouter un jeu</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="8"
                >
                  <v-text-field
                    label="Nom"
                    hint="Nom du jeu"
                    v-model="game.name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    type="number"
                    label="Quantité"
                    hint="Quantité"
                    v-model="game.quantity"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    type="number"
                    label="Prix tarif 1"
                    hint="Prix par jour tarification 1"
                    v-model="game.price1"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    type="number"
                    label="Prix tarif 2"
                    hint="Prix par jour tarification 2"
                    v-model="game.price2"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    type="number"
                    label="Caution"
                    hint="Prix de la caution"
                    v-model="game.caution"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="URL image"
                    hint="URL de l'image du jeu"
                    v-model="game.photo"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    label="Description"
                    v-model="game.description"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="writeUserData(); dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>


<script>
import { getDatabase , ref, set } from "firebase/database";

  export default {
    data() {
      return {
        dialog: false,
        game: {
          name: '',
          quantity: 0,
          price1: 0,
          price2: 0,
          caution: 0,
          photo: '',
          description: '',
        },
        games: []
      };
    },
    mounted() {
    },
    methods: {
        writeUserData() {
            const db = getDatabase();
            console.log(db)
            set(ref(db, 'games/' + this.game.name), {
                name: this.game.name,
                quantity: this.game.quantity,
                price1: this.game.price1,
                price2: this.game.price2,
                caution: this.game.caution,
                photo: this.game.photo,
                description : this.game.description,
            })}},
        readDataGames() {
          
        }
  }
</script>