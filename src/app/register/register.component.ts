import { Component, OnInit } from '@angular/core';
import { RegisterService } from './../Shared/register.service';

import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    //constructor(public services: RegisterService) { }
    constructor(public service: RegisterService) { }
    
  ngOnInit(): void {
  }

  onSubmit() {

      this.service.register();
          //.subscribe(
          ////res => {  },
          ////err => console.error
          //);
  }
}
