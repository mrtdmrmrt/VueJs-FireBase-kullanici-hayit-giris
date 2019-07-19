<template>
	<div class="container">
		<h1>Kayıt</h1>
		
		<div class="row">
			<div class="col-md-6">
				<input type="text" placeholder="İsim" v-model="isim">
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-md-6">
				<input type="text" placeholder="Soyisim" v-model="soyisim">
			</div>
		</div>
		<br>
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
				<button class="btn btn-success" @click="kayit()"> Kayıt Ol </button>
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-md-6">
				<button class="btn btn-info" @click="navigateToHome"> <-Home Component </button>
			</div>
		</div>

			
	</div>
	

</template>

<script>
	export default {
		data (){
			return {
				isim : null,
				soyisim : null,
				kullaniciAdı : null,
				sifre : null
			}
		},
    
    methods : {
    	kayit (){
    		this.$http.post("https://user-kayit.firebaseio.com/users.json",
    			{isim : this.isim, soyisim: this.soyisim ,kullaniciAdı : this.kullaniciAdı ,sifre : this.sifre})
    		.then((response)=>{
    			console.log(response);
    		})
    	},
      	navigateToHome(){
        	this.$router.push("/");  
      	}
    }
   
  }
</script>