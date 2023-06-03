
<template>
    <div>
      <DatePickerRange @newDate="dateEventHandler"></DatePickerRange>
      <GameCard v-for="game in games" v-bind:name="game.name" v-bind:description="game.description"
      v-bind:image="game.photo" v-bind:price="game.price"></GameCard>
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
              console.log(snapshot.val());
              this.games = snapshot.val()
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
          get(child(dbRef, `reservations/`)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              this.reservations = snapshot.val()
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    },
    methods: {
        writeUserData() {
            const db = getDatabase();
            console.log(db)
            set(ref(db, 'games/' + Math.round((Math.random()*100000)).toString()), {
                name: this.game.name,
                photo: this.game.photo,
                description : this.game.description,
                price1: this.game.price
            })},
        readDataGames() {
          
        },
        checkReservation() {
          const startNewReservation = new Date(this.selectedDates[0])
          const endNewReservation = new Date(this.selectedDates[1])
          this.reservations.forEach(reservation => {
            console.log(reservation)
            const start = new Date(reservation.dates?.start)
            const end = new Date(reservation.dates?.end)
            if (end < startNewReservation || start > endNewReservation) {
                console.log('cestpossible')
            }
            else{
              console.log("aie")
              console.log(reservation.games)
              console.log(Array.from(reservation.games, Element))
              console.log(reservation.el)
              const parent = reservation.el;
              for (const game of parent.games) {
                console.log(game);
              }
              [reservation.game].forEach(function callback(value, index) {
                  console.log(index)
                  console.log(value)
              })
            }
          });
        },
        dateEventHandler(data) {
          console.log(data)
          let date1 = new Date(data[0])
          let date2 = new Date(data[1])
          if (date1 > date2) {
            this.selectedDates = [data[1], data[0]]
          }
          else {
            this.selectedDates = data
          }
          this.checkReservation()
        }
      },
      

  };
  </script>