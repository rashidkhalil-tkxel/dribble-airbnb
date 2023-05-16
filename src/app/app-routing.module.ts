import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { OnlineExperiencesComponent } from './online-experiences/online-experiences.component';

const routes: Routes = [
  {path:"",redirectTo:"main",pathMatch:'full'},
  { path: 'main', component: MainComponent , data: { animation: 'Home'}}, 
  { path: 'experiences', component: ExperiencesComponent, data: { animation: 'About'} }, 
  { path: 'online-experiences', component: OnlineExperiencesComponent, data: { animation: 'Contact'} }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
