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
  <div class="img_container">
    <div v-for="(product, id) in products" :key="id">
      <div v-if="id%3==0">
        <h1>Imagens de {{product.price}}€</h1><br>
      </div>

      <a @click="additem(product)">
        <img class="grid-item" :src="product.url">
      </a>
    </div>

    <div v-for="(test, aa) in testin" :key="aa">
        <img class="grid-item" :src="test.url">
    </div>
    
    <div v-for="(product, id) in testin" :key="id">
      <a @click="additem(product)">
        <img class="grid-item" :src="product.url">
      </a>
    </div>


  </div>
  <div class="cart">
  <h1>Carinho de compras</h1>
    <router-link to="/cart">
      <img src="../assets/shopping-cart.png" style="width: 80px">
    </router-link>
    
    <br>

    <tbody>
      <tr class="cartlist" v-for="(maria,index) in incart" :key="index">
      <td >{{maria.qtt}} Unidade.</td>
        <td >{{maria.price}} Preço</td>
        <td >{{maria.item}} Imagem</td>
        <button @click="removeitem(maria,index)">Remover</button>
        <hr>
      </tr>
    </tbody>
    
    <h1>Preço</h1>
    {{conta}}€
  </div>
</section>

<futter>


</futter>

</template>

<script>
import axios from "axios";
  export default {
    data() {
      return {
        imgprice: '',
        imgname:'',
        conta: 0,
        incart: [],
        testin: null,
        products: [
          {
            price: 5,
            url: "https://picsum.photos/600/250?random=1",
            qtt: 1,
          }, 
          {
            price: 5,
            url: "https://picsum.photos/200/250?random=2",
            qtt: 1,
          },
          {
            price: 5,
            url: "https://picsum.photos/200/250?random=3",
            qtt: 1,
          },
          {
            adding: 2,
            price: 10,
            url: "https://picsum.photos/200/250?random=4",
            qtt: 1,
          },
          {
            adding: 2,
            price: 10,
            url: "https://picsum.photos/200/250?random=5",
            qtt: 1,
          },
          {
            adding: 2,
            price: 10,
            url: "https://picsum.photos/200/250?random=6",
           qtt: 1,
          },
          {
            adding: 3,
            price: 20,
            url: "https://picsum.photos/200/250?random=7",
            qtt: 1,
          },
          {
            adding: 3,
            price: 20,
            url: "https://picsum.photos/200/250?random=8",
            qtt: 1,
          },
          {
            adding: 3,
            price: 20,
            url: "https://picsum.photos/200/250?random=9",
            qtt: 1,
          },
          
        ]
      }
    },
    methods: {
      additem(product){
         if(this.incart.indexOf(product) == -1){
            this.incart.push(product);
         } else {
          product.qtt = product.qtt + 1;
        }
      this.conta = this.conta + product.price;
      },
      removeitem(product, index) {
        this.conta = this.conta - product.price;
        if(product.qtt>=2){
          product.qtt=product.qtt-1;
        }
        else {
          product.qtt = 1;
           this.incart.splice(index, 1);
        }
      },
    },
    async created(){
        const response = await axios.get(
          "https://projt1-8a5e4-default-rtdb.europe-west1.firebasedatabase.app/.json"
        );
        this.testin = response.data;
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
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      width: fit-content;
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
  .cartlist{
    display: flex;
    flex-direction: column;
  }
</style>