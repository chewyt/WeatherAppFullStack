import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather } from '../models';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  city: string =''
  weather!: Weather
  toggleSpinner: boolean = true

  constructor(private activatedRoute: ActivatedRoute, private weatherSvc: WeatherService , private router: Router) { }

  ngOnInit(): void {
    this.city=this.activatedRoute.snapshot.params['city'];
    this.weatherSvc.getRegistrationJSON(this.city)
        .then(result=>{
          this.weather = result
          console.info("Yahoo! POST Created with 201 code via JSON object. Message >>>>>",this.weather)
          

        })
        .catch(error=>{
          const errorMsg  = error.error
          console.warn("GG bro u sucks. Error 400 Bad request despite via JSON object : ",errorMsg)
          this.router.navigate(['/error'])
          
        })

        setTimeout(()=>{
          this.toggleSpinner=false
        },2000)
  }

  

}
