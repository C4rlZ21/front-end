<template>
<div class="admin_all">
    <div class="admin_in">
        <h1>administrador</h1>
        <input v-model="imgname" class="spac" type="text" placeholder="Nome da Imagem"/>
        <input v-model="data" class="spac" type="text" placeholder="Url da Imagem"/>
        <input v-model="imgprice" class="spac" type="text" placeholder="Preço da Imagem"/>
        <input v-model="img_comment" class="spac_com" type="text" placeholder="comentário"/>
        <button  class="spac" @click="guardar()">submeter</button>
    </div>
</div>
<div>

</div>
</template>

<script>
import axios from "axios";

export default ({
    data() {
        return {
            img_name: '',
            img_url: '',
            price: 0,
            img_comment: '',
            data: '',
            qtt: 1,
        };
    },
    methods: {
        guardar() {
            axios
            .post("https://projt1-8a5e4-default-rtdb.europe-west1.firebasedatabase.app/.json",{
                price: this.price,
                url: this.data,
                imgname: this.imgname,
                img_comment: this.img_comment,
                qtt: this.qtt,
            })
            .then(
                (response) =>(
                    (this.img_id=response.data.id),
                    this.$router.push("/cart")
                )
            )
        }
    }
})

</script>

<style>
.admin_all{
    display:flex;
    justify-content:center;
}
.admin_in{
    border-radius: 5px;
    color: white;
    padding: 10px;
    background-color: #076b2c;
    display:flex;
    flex-direction:column;
    justify-content:center;
    width: fit-content;
}
.spac{
    margin: 5px;
    text-align: center;
    font-size: 15px;
    border-radius: 5px;
}
.spac_com{
    text-align: center;
    margin: 5px;
    height:70px;
    font-size: 15px;
    border-radius: 5px;
}
</style>