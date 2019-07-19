import Home from"./Home"
import Giris from"./components/User/Giris"
import Kayit from"./components/User/Kayit"

export const routes = [
	{path: '' ,component : Home},
	{path : '/User/Giris' , component : Giris},
	{path : '/User/Kayit', component : Kayit	}
];