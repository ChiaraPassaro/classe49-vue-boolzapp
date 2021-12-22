/** 
 *  Milestone 1
 *  Visualizzazione dinamica della lista contatti: tramite la direttiva v -for, visualizzare nome e immagine di ogni contatto
*/

/** 
 * Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
 
*/

const app = new Vue({
  el: "#app",
  data: {
    indexContact: 0,
    numbers: [0, 4, 1],
    copyNumbers: [0, 4, 1],
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
  },
  created() {
    console.log(this.contacts[0].messages);
    console.log(this.contacts[0].messages[0].status);
    if (this.contacts[0].messages[0].status == "sent") {
      console.log("classe sent");
    }

    console.log(
      this.contacts[0].messages[2].status == "sent" ? "sent" : "received"
    );
    // console.log(window);

    //now
    let now = dayjs();

    // extend di day js per formati custom
    dayjs.extend(window.dayjs_plugin_customParseFormat);

    let year = dayjs("10/01/2020 15:50:00", "DD/MM/YYYY HH:mm:ss");

    console.log(year);

    let number = this.numbers.filter((element) => {
      return element < 2;
    });
    
    console.log(number);
    this.numbers = number;
    console.log(this.numbers);
    this.numbers = this.copyNumbers;
    console.log(this.numbers);
    // console.log(

    //   dayjs("20/03/2020 16:30:55", "DD/MM/YYYY HH:mm:ss")
    // );
  },
  methods: {
    changeContact(index) {
      console.log(index);
      this.indexContact = index;
    },
  },
});
