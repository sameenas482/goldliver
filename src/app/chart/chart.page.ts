import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {
  
  t1:string;
  t2:string;
  t3:string;
  t4:string;
  t5:string;
  t6:string;
  t7:string;
  t8:string;
  t9:string;
  t10:string;
  constructor(private router: Router) { }
chartOptions: any;
  ngOnInit() {
  }
  
    // tslint:disable-next-line: max-line-length
    reg() {
      
    if (this.t1.length !== 0 || this.t2.length !== 0 || this.t3.length !== 0 || this.t4.length !== 0 || this.t5.length !== 0 || this.t6.length !== 0 || this.t7.length !== 0 || this.t8.length !== 0 || this.t9.length !== 0 || this.t10.length !== 0 ) {
    this.router.navigateByUrl('/kyc-page');
    }

 

 

  }
  
}