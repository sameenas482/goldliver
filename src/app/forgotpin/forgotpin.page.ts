import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpin',
  templateUrl: './forgotpin.page.html',
  styleUrls: ['./forgotpin.page.scss'],
})
export class ForgotpinPage implements OnInit {
username:string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  pin(){
    
    
    this.router.navigateByUrl('/login');

  }

}
