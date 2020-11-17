
const myApp = new Vue({
  el: "#root",
  data: {
    //nei data inserisco un array con le img da usare
    imgList: ['img/image1.jpg',
    'img/image2.jpg',
    'img/image3.jpg',
    'img/image4.jpg'],
    //inserisco il contatore dell'indice del mio array
    indexImg: 0,
  },
  //inserisco i metodi ovvero le funzioni
  methods: {
    //i metodi del tasto sinistra
    prev: function() {
      //se l'indice dell'array è uguale a 0 allora l'indice dovrà prendere l'ultimo elemento della lista
      if(this.indexImg === 0){
        this.indexImg = this.imgList.length -1;
      }
      //altrimenti l'indice decrementerà di uno
      else{
        this.indexImg--;
      }
    },
    //metodi del tasto destro
    next: function() {
      //se l'indice è uguale all'ultimo elemento dell'array allora dovrà prendere l'immagine all'indice zero
      if(this.indexImg === this.imgList.length -1){
        this.indexImg = 0;
      }
      //altrimenti l'indice aumenterà di uno
      else{
        this.indexImg++;
      }
    }
  }
});
