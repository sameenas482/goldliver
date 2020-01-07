import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {

  constructor(private modalctrl: ModalController) { }

  ngOnInit() {}

//onPickLocation(){
//this.modalctrl.create({component: MapModalComponent})
//}
}
