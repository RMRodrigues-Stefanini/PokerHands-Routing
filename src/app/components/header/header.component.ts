import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Card, Deck } from 'src/app/services/api.models';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onNewDeck: EventEmitter<Deck> = new EventEmitter<Deck>();



  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

  }

  newDeck() {
    this.apiService
      .postDeck()
      .subscribe((deck) => this.onNewDeck.emit(deck));
  }

}
