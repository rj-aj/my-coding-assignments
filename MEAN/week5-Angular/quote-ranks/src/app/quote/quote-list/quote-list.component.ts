import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent {
@Input() myQuotes;

@Output()
myEvent = new EventEmitter();

callParent(quote) {
  this.myEvent.emit(quote);
}
voteUp(quote) {
  quote.vote++ ;
  console.log ('"vote up"', quote.vote);
}
voteDown (quote) {
  quote.vote--;
  console.log ('"vote up"', quote.vote);
 }
/*
 deleteQuote(quote, idx) {
   console.log('index', idx);
   this.myQuotes.splice(idx, 1);
   console.log(this.myQuotes);
 }
*/
}
