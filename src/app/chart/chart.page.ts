import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage{
  cardkey: string;

  constructor(private router: Router,
     private clipboard: Clipboard,
      private alertCtrl: AlertController,
      public toastController: ToastController) {}
  // keyform() {
  //   // tslint:disable-next-line: max-line-length
  //   if (this.t1.length !== 0 || this.t2.length !== 0 || this.t3.length !== 0 || this.t4.length !== 0 || this.t5.length !== 0 || this.t6.length !== 0 || this.t7.length !== 0 || this.t8.length !== 0 || this.t9.length !== 0 || this.t10.length !== 0 ) {
  //   this.router.navigateByUrl('/menu');
  //   }
  // }

  async presentToast(baseimages) {
    const toast = await this.toastController.create({
      message: baseimages,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
    
  movefocus(nextElement) {
  }

  async phoneAlert() {
    let alertOp = await this.alertCtrl.create({
      message: 'Phone Number: <br><br> +919934567686',
      cssClass: 'info',
      buttons: [{
        text: 'Copy',
        handler: () => {
          this.clipboard.clear();
          this.clipboard.copy('+919934567686');
          this.presentToast('Phone Number Copied');
        }
      }]
    });
    await alertOp.present();
  }
  
  async emailAlert() {
    let alertOp = await this.alertCtrl.create({
      message: 'Email: <br><br> xyz@digiklug.com',
      cssClass: 'info',
      buttons: [{
        text: 'Copy',
        handler: () => {
          this.clipboard.clear();
          this.clipboard.copy('xyz@digiklug.com');
          this.presentToast('Email Copied');
        }
      }]
    });
    await alertOp.present();
  }

  onsubmitauth(t1: string, t2: string, t3: string, t4: string, t5: string, t6: string, t7: string, t8: string, t9: string, t10: string) 
  {
    this.cardkey = t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9 + t10;
    console.log(this.cardkey);
    // if(t1 == "" && t2 == "" && t3 == "" && t4 == "" && t5 == "" && t6 == "" && t7 == "" && t8 == "" && t9 == "" && t10 == ""){
      
    // }
    if(this.cardkey.length != 10){
      this.presentToast("Please enter valid Card Key");
    }
    else if(this.cardkey.length == 10){
      this.router.navigateByUrl('/kyc-page');
    }

  }

  onSubmit(form: NgForm) {

    console.log(form);
    let Time_in_ms = 2000;
    let logoutFunctionCall = setTimeout( () => {
      form.reset();
  }, Time_in_ms)
    
  }

}
