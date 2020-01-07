import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public isSearchbarOpened=false;
  chartOptions: any;
  router: any;
  constructor(public navCtrl: NavController) {
    this.chartOptions = {
      chart: {
        type: 'spline',
        style:{
          display:'block'
        },
        
        backgroundColor: "#0D0D21",
        spacingTop: 90,
        spacingLeft: 30,
spacingright:150,
        alignTicks: false,
        
    },
    title: {
        text: ''
    },
    
     xAxis: {
        categories: ['j','f','m','a','my','j','jl','a','s','o','n','d'],
        align: 'left',
        spacingLeft:10,
        pointinterval:1
      },


    // tslint:disable-next-line: no-unused-expression
    series: [{
        name: '1',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        
        color: '#94FFE9',
        
        
    },
    {
      name: '2',
      data: [29.9, 71.5, 106.4, 129.2],
      
      color: '#94FFE9',
      
      
  },
   
  ]
    


    };
  }

  ngOnInit() {
  }
onSearch(){
  this.router.navigateByUrl('/login');

}
}
