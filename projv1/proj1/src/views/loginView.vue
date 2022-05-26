
<template>
  <div class="login-page">
  <div class="container">
      <h1>Login</h1>
       <input class="in" v-model="email" type="text" placeholder="Email"/>

      <input class="in" v-model="password" type="password" placeholder="password"/>
      
      <button class="login_bu" @click="login()">login</button>

      <router-link to="/about">Create account</router-link> 

  </div>
</div>
<br>
<div v-if="alerta==1">
    <div class="test">
      O campo email não pode ser nulo
    </div>
</div>
<div v-if="alerta==2">
    <div class="test">
      O campo password não pode ser nulo
    </div>
</div>
<div v-if="alerta==3">
    <div class="test">
      todos os campos têm de ser preenchidos
    </div>
</div>
</template>

<style>
.login-page{
    display: flex;
    justify-content:center;
}
.container {
    width: fit-content;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding:15px;
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
.login_bu{
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
<script>
import firebase from 'firebase';

export default ({
    data() {
        return {
            email: '',
            password: '',
            alerta: 0,
            login_is:0,
        }
    },
    methods:{

        login(){
          if(this.email == ''){
                this.alerta = 1;
            } 
            if(this.password == ''){
                this.alerta = 2;
            }
            if(this.password == '' && this.email == ''){
                this.alerta = 3;
            }
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log('deu' + user);
          this.login_is=1;
          this.$router.push('/home');
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("nao deu " +errorCode + errorMessage);
          
          // ..
        });
        }
    }
})
</script>

