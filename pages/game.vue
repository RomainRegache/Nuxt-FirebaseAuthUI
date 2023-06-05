
<template>
    <div>
      <DatePickerRange @newDate="dateEventHandler"></DatePickerRange>
      <GameCard v-for="game in games" v-bind:name="game.name" v-bind:description="game.description"
      v-bind:image="game.photo" v-bind:price="game.price" v-bind:quantity="game.available"></GameCard>
      <DialogAddGame></DialogAddGame>
      <h1>Ajouter un jeu</h1>
        <label for="name">Nom :</label>
        <input id="name" v-model="game.name" type="text" required>
        
        <label for="photo">Photo :</label>
        <input id="photo" v-model="game.photo" type="text" required>
        
        <label for="description">Description :</label>
        <textarea id="description" v-model="game.description" required></textarea>
        
        <label for="price">Prix :</label>
        <input id="price" v-model.number="game.price" type="number" required>
        
        <button @click="writeUserData()">Enregistrer</button>
    </div>
  </template>
  
  <script>
  import { getDatabase , ref, set, child, get } from "firebase/database";
  import GameCard from "../components/GameCard.vue";
  import DialogAddGame from "../components/DialogAddGame.vue";
  import DatePickerRange from "../components/DatePickerRange.vue";
  
  export default {
    components: {
      GameCard,
      DialogAddGame,
      DatePickerRange
    },
    data() {
      return {
        game: {
          name: '',
          photo: '',
          description: '',
          price: 0,
        },
        games: [],
        reservations: [],
        selectedDates: [],
      };
    },
    mounted() {
      const dbRef = ref(getDatabase());
          get(child(dbRef, `games/`)).then((snapshot) => {
            if (snapshot.exists()) {
              var result = [];
              for(var i in snapshot.val())
                result.push(snapshot.val() [i]);
              this.games = result
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
          get(child(dbRef, `reservations/`)).then((snapshot) => {
            if (snapshot.exists()) {
              this.reservations = snapshot.val()
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    },
    methods: {
        readDataGames() {
          
        },
        checkReservation() {
          const startNewReservation = new Date(this.selectedDates[0])
          const endNewReservation = new Date(this.selectedDates[1])
          let quantityReserved = []
          this.reservations.forEach(reservation => {
            const start = new Date(reservation.dates?.start)
            const end = new Date(reservation.dates?.end)
            if (end < startNewReservation || start > endNewReservation) {
                console.log('cestpossible')
            }
            else{
              for (const game in reservation.games) {
                if (quantityReserved[game]) {
                  if (quantityReserved[game] < reservation.games[game].quantity) {
                    quantityReserved[game] = reservation.games[game].quantity
                  }
                }
                else {
                  quantityReserved[game] = reservation.games[game].quantity
                }
              }
            }
          });
          return quantityReserved
        },
        checkAvailableGames(quantityReserved) {
          let quantityAvailable = []
          this.games.forEach(game => {
            let quantityReservedPerGame = 0
            try {
              quantityReservedPerGame = quantityReserved[game.name]
            }
            catch {
              console.log("pas de " + game.name)
            }
            if (quantityReservedPerGame === undefined) {
              quantityReservedPerGame = 0
            }
            quantityAvailable[game.name] = game.quantity - quantityReservedPerGame
            game.available = game.quantity - quantityReservedPerGame
          })
          return quantityAvailable
        },
        dateEventHandler(data) {
          let date1 = new Date(data[0])
          let date2 = new Date(data[1])
          if (date1 > date2) {
            this.selectedDates = [data[1], data[0]]
          }
          else {
            this.selectedDates = data
          }
          const quantityReserved = this.checkReservation()
          const quantityAvailable = this.checkAvailableGames(quantityReserved)
        },
      },
      

  };
  </script>