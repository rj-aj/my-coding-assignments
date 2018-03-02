import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from './quote';
import { QuoteListComponent } from './quote-list/quote-list.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent  {
  quote: Quote = new Quote();
  // quotes: Array<Quote> = [];
  quotes: Array<Quote>  = [
  {'quote': 'Each life is made up of mistakes and learning, waiting and growing, practicing patience and being persistent',
  'author': 'Billy Graham', 'vote': 5},
  {'quote': 'Success is the result of perfection, hard work, learning from failure, loyalty, and persistence.',
  'author': 'Colin Powell', 'vote': 6},
  {'quote': 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
   'author': ' Benjamin Franklin', 'vote': 8}];

   onSubmit(event: Event, quoteForm: NgForm) {
    event.preventDefault();
    console.log('submitting form', quoteForm);
    this.quotes.push(this.quote);
    console.log(this.quotes);
    this.quote = new Quote();
    quoteForm.reset();

  }
  deleteQuote(event) {
    console.log('delete quote', event);
    for (let index = 0; index < this.quotes.length; index++) {
      if (event === this.quotes[index]) {
        this.quotes.splice(index, 1);
        console.log('spliced / removed', this.quotes);
      }
    }
  }
  // sort by value


}
