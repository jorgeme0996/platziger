import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  friends: User[];
  constructor (private router: Router){
    let myUser: User = {
      nick: 'Jorge Martínez',
      subnick: 'jorgeme0996',
      email: 'jorgeme0996@gmail.com',
      age: 18,
      friend: false,
      uid: 1
    }

    let ususario1: User = {
      nick: 'Alejandro Soto',
      subnick: 'alex88',
      email: 'alex@gmail.com',
      age: 24,
      friend: false,
      uid: 2
    }

    let ususario2: User = {
      nick: 'Liss Alquicira',
      subnick: 'liss_alq',
      email: 'liss@gmail.com',
      age: 22,
      friend: true,
      uid: 3
    }

    let ususario3: User = {
      nick: 'Carmen Espino',
      subnick: 'carmen1',
      email: 'carmen@gmail.com',
      age: 54,
      friend: false,
      uid: 4
    }

    let ususario4: User = {
      nick: 'Emmanuel Turin',
      subnick: 'ema_tu',
      email: 'emma@gmail.com',
      age: 23,
      friend: true,
      uid: 2
    }

    this.friends = [ususario1, ususario2, ususario3, ususario4]
  }

  
  ngOnInit(){

  }

  goToConversation(id) {
    this.router.navigate(['/conversation', id])
  }

}
