import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudioComponent } from './studio/studio.component';
import { ContactComponent } from './contact/contact.component';
import { MikematthewsComponent } from './demo/mikematthews/mikematthews.component';
import { BernieconwayComponent } from './demo/bernieconway/bernieconway.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "studio",
    component: StudioComponent
  },  
  {
    path: "demo/mikematthews",
    component: MikematthewsComponent
  },
  {
    path: "demo/mikematthews/samples/JazzCookersBostonShuffle.mp3",
    component: MikematthewsComponent
  },
  {
    path: "demo/bernieconway",
    component: BernieconwayComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
