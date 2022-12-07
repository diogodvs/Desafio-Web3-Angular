import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-component/header-component.component';
import { BodyToTranslateComponent } from './body-to-translate/body-to-translate.component';
import { TechListComponent } from './tech-list/tech-list.component';
import { SwitcherLanguagesComponent } from './switcher-languages/switcher-languages.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyToTranslateComponent,
    TechListComponent,
    SwitcherLanguagesComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BodyToTranslateComponent,
    TechListComponent,
    SwitcherLanguagesComponent
  ]
})
export class ComponentsModule { }
