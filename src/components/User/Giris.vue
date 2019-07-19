<template>
	<div class="container">
		<h1>Giris</h1>
		<div class="row">
			<div class="col-md-6">
				<input type="text" placeholder="Kullanıcı Adı" v-model="kullaniciAdı">
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-md-6">
				<input type="password" placeholder="Şifre" v-model="sifre">
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-md-6">
				<button class="btn btn-success" @click="giris()"> Giriş </button>
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-md-6">
				<button class="btn btn-info" @click="navigateToHome"> <-Home Component </button>
			</div>
		</div>
		<!--
		<ul class="list-group">
			<li class="list-group-item" v-for="user in userList">{{user.isim}}</li>
		</ul>
	-->

			
	</div>
	

</template>

<script>
	export default {
   	
   	data (){
   		return {
   			userList : [],
   			kullaniciAdı : null,
   			sifre : null,
   			durum : false
   		
   		
   		}
   	},
  
    methods : {
    	giris (){
    		this.$http.get("https://user-kayit.firebaseio.com/users.json")
    		.then ((response)=>{

    			//console.log(response.data);
    			let data = response.data;
    			for (let key in data){
    				//console.log(data[key]);
    				this.userList.push(data[key]);

    				
    			}
    			for (var i = 0; i < this.userList.length; i++) { 
 					 if(this.userList[i].kullaniciAdı == this.kullaniciAdı && this.userList[i].sifre == this.sifre){

 					 	this.durum=true;
 					 	break;
 					 }
 					 else{
 					 	this.durum=false;
 					 	//console.log(this.durum);
 					 }
				}
    			if(this.durum == true){
    				alert("Başarılı");
    			}
    			else{
    				alert("Başarısız");
    			}
    			
    		})
    	},
      	navigateToHome(){
        	this.$router.push("/"); 
      	}
    }
   

   
  }
</script>