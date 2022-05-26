<template>
  <h1>yes</h1>
  <input type="search" v-model="name"  v-on:keyup.enter="search()" />
  <br />
    <div v-if="listvalor == 0">
      <div v-for="(item, id) in list" :key="id">
          <span>{{ item.name }} {{ item.id }}</span>
          <br />
          <img :src="item.images.sm" />
          <hr />
      </div>
    </div>
    <div v-if="listvalor == 1">
      <div v-for="(item, id) in list2" :key="id">
          <span>{{ item.results[0].name }}</span>
          <br />
          <img :src="item.images.url" />
          <hr />
      </div>
    </div>


   
</template>

<!-- ana.caraban@staff.uma.pt -->

<script>
import axios from "axios";
export default {
  data() {
    return {
      listvalor: 0,
      list: null,
      list2: null,
      name: "",
    };
  },
  async created() {
    const response = await axios.get(
      "https://akabab.github.io/superhero-api/api/all.json"
    );
    this.list = response.data; //Variável lista vai corresponder aos dados retornados pela api
  },
    methods:{
    search(){
      
      axios
      .get('www.superheroapi.com/api.php/5330340260380663/search/'+this.name)
      .then(response => (this.list2 = response.data.results))
      this.listvalor=1;
      console.log(this.listvalor)
    }
  }
};
</script>
