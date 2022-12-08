import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-component/header-component.component';
import { TechListComponent } from './tech-list/tech-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TechListComponent,
   

  ],
  imports: [
    CommonModule,
   
  ],
  exports: [
    HeaderComponent,
    TechListComponent,
   
  ]
})
export class ComponentsModule { }
