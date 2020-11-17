
const myApp = new Vue({
  el: "#root",
  data: {
    imgList: ['img/image1.jpg',
    'img/image2.jpg',
    'img/image3.jpg',
    'img/image4.jpg'],
    indexImg: 0,
  }, methods: {
    prev: function() {
      if(this.indexImg === 0){
        this.indexImg = this.imgList.length -1;
      }
      else{
        this.indexImg--;
      }
    },
    next: function() {
      if(this.indexImg === this.imgList.length -1){
        this.indexImg = 0;
      }else{
        this.indexImg++;
      }
    }
  }
});
