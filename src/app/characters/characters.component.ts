import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'swg-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  items: Observable<any[]>;

  constructor(private readonly firestore: AngularFirestore) { }

  ngOnInit() {
    this.items = this.firestore.collection('items').valueChanges();
  }

}
