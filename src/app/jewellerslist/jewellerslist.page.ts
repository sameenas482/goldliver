import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jewellerslist',
  templateUrl: './jewellerslist.page.html',
  styleUrls: ['./jewellerslist.page.scss'],
})
export class JewellerslistPage implements OnInit {
  list1:any[];
  constructor(private router: Router) { 
    this.inicializer();
  }

  ngOnInit() {
  }
  sample(ev: any) {
    // Reset items back to all of the items
    this.inicializer();
  
    // set val to the value of the searchbar
    const val = ev.target.value;
  
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list1 = this.list1.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }  
  selectval(val){
    this.router.navigateByUrl('/jw');
  }
inicializer(){
this.list1=[
  {
    "name":"Tanishiq",
    "code":"TQ",
    "city":"mumbai",
    "img":"goldcoin.png"
  },
  {
    "name":"Malbar Gold",
    "code":"MJ",
    "city":"banglore",
    "img":"goldcoin.png"
  },
  {
    "name":"Kalyan Jewellers",
    "code":"KL",
    "city":"pune",
    "img":"goldcoin.png"  },
    {
      "name":"Kothari",
      "code":"KT",
      "city":"mumbai",
      "img":"goldcoin.png"
    },
    {
      "name":"Titan",
      "code":"TQ",
      "city":"mumbai",
      "img":"goldcoin.png"
    },
    {
      "name":"Asian Star",
      "code":"TQ",
      "city":"surat",
      "img":"goldcoin.png"
    },
    
    {
      "name":"Senco",
      "code":"TQ",
      "city":"mumbai",
      "img":"goldcoin.png"
    },
    
    

];
}



}
