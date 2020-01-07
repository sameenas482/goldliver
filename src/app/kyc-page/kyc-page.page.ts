import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kyc-page',
  templateUrl: './kyc-page.page.html',
  styleUrls: ['./kyc-page.page.scss'],
})
export class KycPagePage implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {
  }
  reg(){
    //if (this.t1.length !== 0 || this.t2.length !== 0 || this.t3.length !== 0 || this.t4.length !== 0 || this.t5.length !== 0 || this.t6.length !== 0 || this.t7.length !== 0 || this.t8.length !== 0 || this.t9.length !== 0 || this.t10.length !== 0 ) {
      this.router.navigateByUrl('/otp');
      //}
  }

}
