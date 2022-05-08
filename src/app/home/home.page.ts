import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private sms: SMS) {}

  numero = "";
  message ="";

  envoyerSMS()
  {
   alert(this.sms.send(this.numero,this.message));
  }


}
