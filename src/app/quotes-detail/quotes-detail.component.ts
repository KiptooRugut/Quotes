import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
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
