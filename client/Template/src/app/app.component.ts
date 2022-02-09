import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Template';
  now = new Date()
  timeString: string =''
  time: number =0
  isMorning: boolean =false
  
  ngOnInit(): void {
    console.info("Hiiii")
    this.timeString =this.now.toTimeString().substring(0,5)
    console.info(this.timeString)
    this.time=parseInt(this.now.toTimeString().substring(0,2))
    console.info(this.time)
    if (this.time >= 7 && this.time <=18) {
      //is morning time
      this.isMorning =true
    }
  }
}
