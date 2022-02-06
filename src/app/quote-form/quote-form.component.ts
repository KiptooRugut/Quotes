import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote=new Quote(0,"","","",new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    if (this.newQuote.name.length==0 || this.newQuote.author.length==0|| this.newQuote.theQuote.length==0){
      alert("All fields Required!")
    }
    else {
      this.addQuote.emit(this.newQuote);
      this.newQuote = new Quote(0,"","","",new Date(),0,0);
    }   
  }
  constructor() { }

  ngOnInit(): void {
  }

}