import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pin',
  templateUrl: './pin.page.html',
  styleUrls: ['./pin.page.scss'],
})
export class PinPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pin(){
    this.router.navigateByUrl('/confirm-pin');
  }

}
