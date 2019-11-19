import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder}  from '@angular/forms';
import {LoginService}  from '../login.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username:any;
  password:any;
  submitted: boolean = false;
  private subscription: Subscription;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  onSubmit() {
    console.log('hello');
    console.log(this.loginForm.value);
    this.submitted = true;
    debugger;
   this.loginService.addLoginUser(this.loginForm.value.username, this.loginForm.value.password).subscribe(res=>{
     console.log(res);
   })
   
   
    
  }

  
}
