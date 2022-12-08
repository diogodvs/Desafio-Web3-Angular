import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss']
})
export class TechListComponent {

  stacks = 
  [
    {id:1, name: 'Java'},
    {id:2, name: 'SpringBoot'},
    {id:3, name: 'React'},
    {id:4, name: 'VueJs'},
    {id:5, name: 'Javascript'},
    {id:6, name: 'TypeScript'},
    {id:7, name: 'Tailwind Css'},
    {id:8, name: 'Styled Components'},
    {id:9, name: 'Angular'},
    {id:9, name: 'SQL'},
    {id:9, name: 'Node'},
  ]
}

