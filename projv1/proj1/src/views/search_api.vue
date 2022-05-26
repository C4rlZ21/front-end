<template>
  <h1>yes</h1>
  <input type="search" v-model="name_inp" v-on:keyup.enter="search()" />
  <br />

  <div v-for="(item, id) in list" :key="id">
    <div v-if="item.name == name_inp">
      <span>{{ item.name }} {{ item.id }}</span>
      <br />
      <img :src="item.images.sm" />
      <hr />
    </div>
    <div v-if="name_inp == ''">
      <span>{{ item.name }} {{ item.id }}</span>
      <br />
      <img :src="item.images.sm" />
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
      temp_id: 0,
      list: null,
      displaylist: null,
      name: "",
      name_inp: "",
      empty: 0
    };
  },
  async created() {
    const response = await axios.get(
      "https://akabab.github.io/superhero-api/api/all.json"
    );
    this.list = response.data; //Variável lista vai corresponder aos dados retornados pela api
  },
  methods: {
    search() {
      /*for (var i = 0; i < this.list.length; i++) {
        if (this.list.name == this.name_inp) {
          this.temp_id = this.list[i].id;
          console.log(this.temp_id);
        }
      }*/
      if(this.name_inp == '')
        this.empty=2;
    },
  },
};
</script>
