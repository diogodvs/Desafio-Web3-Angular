import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  
  locales = [
      "Olá, meu nome é Diogo Silva e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência:",
      "Hello, my name is Diogo Silva and I am a Front-End Developer, Technologies that I have experience:",
      "Hola, mi nombre es Diogo Silva y soy Desarrollador Front-End, Tecnologías en las que tengo experiencia:",
  ];

  localesCountryPt =[
    
    "Português", "Portuguese", "Portugués"
    
  ]

  localesCountryEn =[
    
    "Inglês", "English", "Ingles"
  
  ]

  localesCountryEs =[
    
    "Espanhol", "Spanish", "Español"
  ]

  i = 0;

  setIndex(n: number) {
    return this.i = n
  }
    
}
