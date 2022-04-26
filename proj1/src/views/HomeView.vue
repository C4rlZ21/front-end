<template>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<header>
<div class="head_main">
  <h1 class="t1">O melhor banco de imagens</h1>
  <h4 class="t1">10 imagens, fotos em "alta qualidade" para seus projetos.</h4>
  <div>
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
  </div>
</div>

</header>
<div style="line-height:35px;">
    <br>
</div>
<section class="section">
  <div>
    <h1>Imagens de 5€</h1>
    <div class="img_container">
      <a @click="additem(imgprice='5€',imgname='large background', adding='1')">
        <img class="grid-item" src="https://picsum.photos/600/250?random=1">
      </a>
      <a @click="additem(imgprice='5€',imgname='foto 200 por 250', adding='1')">
        <img class="grid-item" src="https://picsum.photos/200/250?random=2">
      </a>
      <a @click="additem(imgprice='5€',imgname='foto 200 por 250', adding='1')">
        <img class="grid-item" src="https://picsum.photos/200/250?random=3">
      </a>

    </div>
    <h1>Imagens de 10€</h1>
    <div class="img_container">
      <a @click="additem(imgprice='10€',imgname='normal background', adding='2')">
        <img class="grid-item" src="https://picsum.photos/400/250?random=4">
      </a>
      <a @click="additem(imgprice='10€',imgname='normal foto', adding='2')">
        <img class="grid-item" src="https://picsum.photos/250/250?random=5">
      </a>
      <a @click="additem(imgprice='10€',imgname='normal foto', adding='2')">
        <img class="grid-item" src="https://picsum.photos/350/250?random=6">
      </a>
    </div>
    <h1>Imagens com preços aleatorios</h1>
    <div class="img_container">
      <a @click="additem(imgprice='aleatorio',imgname='small foto', adding='3')">
        <img class="grid-item" src="https://picsum.photos/200/250?random=7">
      </a>
      <a @click="additem(imgprice='aleatorio',imgname='normal foto', adding='3')">
        <img class="grid-item" src="https://picsum.photos/250/250?random=9">
      </a>
      <a @click="additem(imgprice='aleatorio',imgname='normal foto', adding='3')">
        <img class="grid-item" src="https://picsum.photos/200/250?random=8">
      </a>
      <a @click="additem(imgprice='aleatorio',imgname='foto de 350 por 250 px', adding='3')">
        <img class="grid-item" src="https://picsum.photos/350/250?random=9">
      </a>
  </div>
  </div>
  <div class="cart">
  <h1>Carinho de compras</h1>
    <router-link to="/cart">
      <img src="../assets/shopping-cart.png" style="width: 80px">
    </router-link>
    <br>
    {{incart}} 
    <h1>Preço</h1>
    {{conta}}
  </div>
</section>

<futter>


</futter>

</template>

<script>
  export default {
    data() {
      return {
        imgprice: '',
        imgname:'',
        conta: 0,
        incart: [
        ],
      }
    },
    methods: {
      additem: function(){
        if(this.adding=='1'){
          this.conta+=5;
        }
        if(this.adding=='2'){
          this.conta+=10;
        }
        if(this.adding=='3'){
          this.conta+=Math.floor(Math.random() * 50) + 20;
        }
         this.incart.push({
          item: this.imgname,
          preço: this.imgprice,
      });
      console.log(this.conta);
      }
    },
  };
</script>

<style>
  .t1{
    color:white;
  }

  .head_main {
    padding: 25px;
    background-image: url('https://cdn.pixabay.com/photo/2016/10/20/20/47/banner-1756616_960_720.jpg'); 
    background-repeat: no-repeat;
    background-position:center;
    weight: fit-content;
    height: fit-content;
  }
  .img_container
    {
      
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding-right: 8px;
  }
  .grid-item {
    padding: 10px;
    font-size: 30px;
    text-align: center;

  }
  .section{
    display: flex;
    justify-content: center;
  }
  .cart{
    display: column;
    justify-content: flex-start;
    background-color: #778899;
    height: auto;
    width: 15%;
    color: black;
  }
</style>