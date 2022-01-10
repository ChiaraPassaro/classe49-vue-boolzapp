/** 
 *  Milestone 1
 *  Visualizzazione dinamica della lista contatti: tramite la direttiva v -for, visualizzare nome e immagine di ogni contatto
*/

/** 
 * Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
*/

/** 
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
*/

/**
Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
 */

/** 
Milestone 5
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
*/

const app = new Vue({
  el: "#app",
  data: {
    indexContact: 0,
    numbers: [0, 4, 1],
    copyNumbers: [0, 4, 1],
    newMessage: "",
    textSearch: "",
    messageActive: {
      show: false,
      index: null,
    },
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
        avatar: "_6",
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

    //data attuale
    let now = dayjs();

    // extend di day js per formati custom
    dayjs.extend(window.dayjs_plugin_customParseFormat);
    //ora posso passare il tipo di data
    let data = dayjs("10/01/2020 15:50:00", "DD/MM/YYYY HH:mm:ss");

    //facciamo un filter
    let number = this.numbers.filter((element) => {
      return element < 2;
    });

    console.log(number);
    //sostituiamo il nostro array originale
    this.numbers = number;
    console.log(this.numbers);

    //ripristiniamo i dati con una copia
    this.numbers = this.copyNumbers;
    console.log(this.numbers);
  },
  methods: {
    changeContact(index) {
      console.log(index);
      this.resetMenu();
      this.indexContact = index;
    },
    sendMessage() {
      // {
      //       date: "10/01/2020 15:30:55",
      //       text: "Hai portato a spasso il cane?",
      //       status: "sent",
      //     },

      let data = dayjs().format("DD/MM/YYYY HH:mm:ss");

      const index = this.indexContact;

      let message = {
        date: data,
        text: this.newMessage,
        status: "sent",
      };

      this.contacts[index].messages.push(message);
      setTimeout(() => {
        let message = {
          date: data,
          text: "Ok",
          status: "received",
        };

        this.contacts[index].messages.push(message);
      }, 1000);
      // const self = this;
      // setTimeout(function () {
      //   console.log(this);
      // }, 1000);
      // console.log(message);
    },
    searchContact() {
      // {
      //   name: "Samuele",
      //   avatar: "_3",
      //   visible: true,
      //   messages: [
      //     {
      //       date: "28/03/2020 10:10:40",
      //       text: "La Marianna va in campagna",
      //       status: "received",
      //     },
      //     {
      //       date: "28/03/2020 10:20:10",
      //       text: "Sicuro di non aver sbagliato chat?",
      //       status: "sent",
      //     },
      //     {
      //       date: "28/03/2020 16:15:22",
      //       text: "Ah scusa!",
      //       status: "received",
      //     },
      //   ],
      // },
      let text = this.textSearch.toLowerCase();
      this.contacts.forEach(element => {
        // console.log(element.name.toLowerCase().includes(text))
        if (element.name.toLowerCase().includes(text)) {
          element.visible = true;
        } else {
          element.visible = false;
        }
      });
      console.log(this.contacts);
    },
    showMenu(index) {
       console.log(
         this.messageActive.show 
       );
       console.log(
        this.messageActive.index === index
       );
      
      console.log(
        this.messageActive.show && this.messageActive.index !== index
      );

      if (this.messageActive.show && this.messageActive.index === index) {
        this.messageActive.show = false;
        this.messageActive.index = null;
      } else {
        this.messageActive.index = index;
        this.messageActive.show = true;
      }
    },
    deleteMessage(index) {
      console.log(this.contacts[this.indexContact].messages[index]);
      this.contacts[this.indexContact].messages.splice(index, 1);
      this.messageActive.status = false;
      this.messageActive.index = null;
    },
    resetMenu() {
      this.messageActive.status = false;
      this.messageActive.index = null;
    }
  },
});
