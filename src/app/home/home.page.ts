
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ocultar = '';
  
  slides: { img: string, titulo: string, desc: string , url1: string }[] = [
    {
      img: '/assets/slides/sushi101.jpg',
      titulo: 'Songoy Merced',
      desc: 'Cartas y Pedidos en linea ...',
      // tslint:disable-next-line:max-line-length
      url1: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=28937f9f-5ccd-402a-a265-cdbc7bf259ed&glfa_cid=725192339.1567867256&glfa_t=1568077333077'
    
    },
    {
      img: '/assets/slides/sushi2.jpg',
      titulo: 'Songoy Aconcagua',
      desc: 'Cartas y Pedidos en linea ...',
      url1: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=28937f9f-5ccd-402a-a265-cdbc7bf259ed&glfa_cid=725192339.1567867256&glfa_t=1568077333077'
    }
  ];
  
  constructor(private navCtrl: NavController, private iab: InAppBrowser) { } //importo para navergar entre pantallas

  onClick() {
    this.ocultar = ' animated fadeOut fast'; //agrego en animate.css fadeOut
    this.navCtrl.navigateBack('/');
  }

  abrir(i) {
    
    // tslint:disable-next-line:align
    const browser = this.iab.create(this.slides[i].url1, '_self');
    
  }


  

}
