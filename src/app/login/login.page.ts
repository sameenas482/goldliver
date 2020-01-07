import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
t1:string;
t2:string;
t3:string;
t4:string;
t5:string;
t6:string;

  constructor(private router: Router) { }

  ngOnInit() {}
    logForm(){
if(this.t1.length!=0 || this.t2.length!=0 ||this.t3.length!=0 ||this.t4.length!=0 ||this.t5.length!=0 ||this.t6.length!=0 ){
  this.router.navigateByUrl('/menu');




}
    }
    movefocus(nextElement) {
      nextElement.focus();
    }
    reg(){
      this.router.navigateByUrl('/chart');
 
    }

}
