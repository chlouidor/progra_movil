import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  apellido: string = "Rodriguez";
  edad: number = 29;
  usuario: string = "";

  Persona: any = {
    nombre: 'José',
    apellido: 'Suarez',
    edad: 34
  }

  listaP: any = [
    {
      id: 24,
      comuna: 'Lo Espejo',
      habitantes:'200.000'
    },
    {
      id: 2,
      comuna: 'Quilicura',
      habitantes:'250.000'
    },
    {
      id: 3,
      comuna: 'Valle Lo Campino',
      habitantes:'300.000'
    },
    {
      id: 4,
      comuna: 'Valle Grande',
      habitantes:'120.000'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irPagina(){
    //creamos nuestra variable de contexto
    // el nombre de nuestro contexto pude ser lo que deseamos en minuscula, aca le puse el nombe de navigacion
    let navigacion: NavigationExtras ={
      //la variable state siempre se tiene que llamar asi
      state:{
        ape:this.apellido,
        eda: this.edad,
        user:this.usuario
      }
    }
    //Puedo crear cualquier logica de programación
    this.router.navigate(['/agregar']);
  }

}
