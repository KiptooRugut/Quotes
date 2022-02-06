import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  @Input() quote!:Quote;
  @Output() deleteQuote=new EventEmitter<boolean>();

  removeQuote(removeProject:boolean){
    this.deleteQuote.emit(removeProject)
  }

  upvote(){
    this.quote.upvotes+=1
  }

  downvote(){
    this.quote.downvotes+=1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
