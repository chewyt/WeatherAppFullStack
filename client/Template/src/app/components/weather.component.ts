import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration, Weather } from '../models';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  form!: FormGroup
  search!: Registration
  now = new Date()
  timeString: string =''
  dateString: string =''

  constructor(private fb: FormBuilder, private weatherSvc: WeatherService , private router: Router) { }

  ngOnInit(): void {
    this.form=this.createForm()
    this.timeString =this.now.toTimeString().substring(0,5)
    this.dateString =this.now.toDateString().substring(0,15)
  }

  createForm():FormGroup{
    return this.fb.group({
      city: this.fb.control('',[Validators.required])
    })
  }

  getServer(){
      this.search =this.form.value as Registration
      this.form.reset()
      console.info("Record>>>>>>",this.search.city)
      this.router.navigate(['/detail',this.search.city])
      // this.weatherSvc.getRegistrationJSON(this.search.city)
      //   .then(result=>{
      //     const info = result as Weather
      //     console.info("Yahoo! POST Created with 201 code via JSON object. Message >>>>>",info)
      //     this.router.navigate(['/detail'])

      //   })
      //   .catch(error=>{
      //     const errorMsg  = error.error
      //     console.warn("GG bro u sucks. Error 400 Bad request despite via JSON object : ",errorMsg)
      //   })
      
    
  }
}
