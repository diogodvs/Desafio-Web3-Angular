import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DesafioAngularWeb3';

  language = [
    {
      en: "Hello, my name is Diogo Silva and I am a Front-End Developer, Technologies that I have experience:",
      pt: "Olá, meu nome é Diogo Silva e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência:",
      es: "Hola, mi nombre es Diogo Silva y soy Desarrollador Front-End, Tecnologías en las que tengo experiencia:",
    },
  ];

  flags = [
    {
      name: "Português",
      flag: "./../../assets/images/bra.icon.svg",
      metodo: () => (this.selected = this.language[0].pt),
    },
    {
      name: "Espanhol",
      flag: "../../../assets/images/spa.icon.svg",
      metodo: () => (this.selected = this.language[1].es),
    },
    {
      name: "Inglês",
      flag: "../../../assets/images/eua.icon.svg",
      metodo: () => (this.selected = this.language[2].en),
    },
  ];

  selected = this.language[0].pt;

  onChangeLanguage($event: string) {
    if ($event == "Brasil") {
      this.flags[0].metodo();
    } else if ($event == "Espanhol") {
      this.flags[1].metodo();
    } else {
      this.flags[2].metodo();
    }
  }
  
}
