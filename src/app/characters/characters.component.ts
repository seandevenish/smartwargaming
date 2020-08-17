import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'swg-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  items: Observable<any[]>;
  response: any;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly firestore: AngularFirestore) { }

  ngOnInit() {
    //this.items = this.firestore.collection('characters').valueChanges();
  }

  generateName() {
    //this.response = this.httpClient.get('http://api.namefake.com/english-united-states/female/');
    this.response = this.httpClient.get('https://randomuser.me/api/?nat=us&gender=male&inc=name');

  }

}


export enum CharacterType {
  Officer,
  NCO
}
