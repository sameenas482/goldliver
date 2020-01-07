import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
 

  constructor(public navCtrl: NavController,private router: Router) { }

  ngOnInit() {
  }
list1(){
  this.router.navigateByUrl('/jewellerslist');

}
}
