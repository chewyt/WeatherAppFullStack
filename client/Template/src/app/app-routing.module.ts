import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail.component';
import { WeatherComponent } from './components/weather.component';
import { ErrorComponent } from './error.component';


const routes: Routes = [
  {path:'', component: WeatherComponent},
  {path:'detail/:city', component: DetailComponent},
  {path:'error', component: ErrorComponent},
  // {path:'number/:num', component: NumberComponent,
  //   canActivate: [NumberGuardService],
  //   canDeactivate: [NumberGuardService]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
