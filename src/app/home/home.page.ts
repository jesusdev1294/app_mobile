
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ocultar = '';

  slides: { img: string, titulo: string, desc: string , url1: string}[] = [
    {
      img: '/assets/slides/7.JPG',
      titulo: 'Miru Sushi Portugal',
      desc: 'Cartas y Pedidos en linea ...',
      url1: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=28937f9f-5ccd-402a-a265-cdbc7bf259ed&glfa_cid=725192339.1567867256&glfa_t=1568077333077'
    },
    {
      img: '/assets/slides/8.jpg',
      titulo: 'Miru Sushi Portugal',
      desc: 'Cartas y Pedidos en linea ...',
      url1: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=28937f9f-5ccd-402a-a265-cdbc7bf259ed&glfa_cid=725192339.1567867256&glfa_t=1568077333077'
    },
    {
      img: '/assets/slides/9.jpg',
      titulo: 'Miru Sushi Codavonga',
      desc: 'Cartas y Pedidos  en linea ...',
      url1: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=c605f43e-630c-4c44-922b-e124b3911841&glfa_cid=725192339.1567867256&glfa_t=1568078295229'
    },
    {
      img: '/assets/slides/6.JPG',
      titulo: 'Miru Sushi Codavonga',
      desc: 'Siempre sabremos donde estás!', 
      url1: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=c605f43e-630c-4c44-922b-e124b3911841&glfa_cid=725192339.1567867256&glfa_t=1568078295229'
    },
    {
      img: '/assets/slides/A.jpg',
      titulo: 'Miru Sushi La Florida',
      desc: 'Siempre sabremos donde estás!',
      url1: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=47410797-eae2-4307-a2c3-47b199039ca8&glfa_cid=725192339.1567867256&glfa_t=1568078790144'
    },
    {
      img: '/assets/slides/B.JPG',
      titulo: 'Miru Sushi La Florida',
      desc: 'Siempre sabremos donde estás!',
      url1: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=47410797-eae2-4307-a2c3-47b199039ca8&glfa_cid=725192339.1567867256&glfa_t=1568078790144'
    },
    {
      img: '/assets/slides/C.JPG',
      titulo: 'Miru Sushi Sierra Bella',
      desc: 'Siempre sabremos donde estás!',
      url1: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=9156c0bb-358c-4329-b4b6-ed82bb05f1ab&glfa_cid=725192339.1567867256&glfa_t=1568078886057'
    },
    {
      img: '/assets/slides/D.jpg',
      titulo: 'Miru Sushi Sierra Bella',
      desc: 'Siempre sabremos donde estás!',
      url1: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=9156c0bb-358c-4329-b4b6-ed82bb05f1ab&glfa_cid=725192339.1567867256&glfa_t=1568078886057'
    },
  ];
  constructor(private navCtrl: NavController) { } //importo para navergar entre pantallas



  onClick(){ 
    this.ocultar=' animated fadeOut fast'; //agrego en animate.css fadeOut
    this.navCtrl.navigateBack('/');
  }


  

}
