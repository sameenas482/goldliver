import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  otp(){
    //if (this.t1.length !== 0 || this.t2.length !== 0 || this.t3.length !== 0 || this.t4.length !== 0 || this.t5.length !== 0 || this.t6.length !== 0 || this.t7.length !== 0 || this.t8.length !== 0 || this.t9.length !== 0 || this.t10.length !== 0 ) {
      this.router.navigateByUrl('/pin');
      //}
  }

}
