<template>
  <div class="a">
    <div id="registo">
        <h1 class="head">Sign Up</h1>
        <div class="inputs">
          <input class="in" v-model="emailin" type="text" placeholder="Email"/>
          
          <input class="in" v-model="nomein" type="text" placeholder="username"/>
          
          <input class="in" v-model="passin" type="password" placeholder="Password"/>
          
          <input class="in" v-model="passtempin" type="password" placeholder="Confirm Password"/>
          
          <button class="registo_bu"  @click="addregistos()">Sign Up</button>
          <router-link to="/login">login</router-link> 
        </div>
    </div>
  </div>

  <div v-if="alerta==1">
    <p class="test">todos os campos têm de ser preenchidos</p>
  </div>
  <div v-if="alerta==2">
    <p class="test">conta criada com sucesso</p>
  </div>
 
    
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      emailin: '',
      nomein: '',
      passin: '',
      passtempin:'',
      alerta: 0,
      registos: [
        {
          email: "jose@jose.jose",
          nome: "Maria",
          pass: "Manel",
        },

      ],
    }
  },
  methods: {
    addregistos: function(){
      if(this.emailin==''){
        this.alerta=1;
      }
      if(this.nomein==''){
        this.alerta=1;
      }
      if(this.passin != "" && (this.passin==this.passtempin)){
         this.alerta=2,
         this.signup();
        this.registos.push({
        email: this.emailin,
        nome: this.nomein,
        pass: this.passin,
      });
      }

    },
    signup(){
      firebase.auth().createUserWithEmailAndPassword(this.emailin, this.passin)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log('deu' + user);
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("nao deu " +errorCode + errorMessage);
          // ..
        });
    }

  },
};
</script>

<style>
.a{
  display:flex;
  width: 100%;
  justify-content:center
}
.head{
  height:fit;
  width:fit;
}
#registo{
  align-items:column;
  justify-self: center;
  padding:10px;
  height:auto;
  width:fit-content;    
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding:15px;
}
.inputs{
 display: flex;
 flex-direction: column;
}
.in{
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.registo_bu{
  margin:5px;
  padding:10px;
  border-radius:10px;
  background-color:#4CAF50;
  border-color:#4CAF50;
  color: white;
}
.test{
  background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   -webkit-background-clip: text;
  color: transparent;
}
</style>
