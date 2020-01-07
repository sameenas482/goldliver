import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirm-pin',
  templateUrl: './confirm-pin.page.html',
  styleUrls: ['./confirm-pin.page.scss'],
})
export class ConfirmPinPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  confirmpin(){
    this.router.navigateByUrl('/home');
  }

}
