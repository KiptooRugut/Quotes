import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() 
  quote!:Quote;
  @Output() isComplete=new EventEmitter<boolean>();

  // removeQuote(removeProject:boolean){
  //   this.deleteQuote.emit(removeProject)
  // }

  numberOfLikes : number = 0;
numberOfDislikes: number = 0;
likeButtonClick() {
  this.numberOfLikes++;
}
dislikeButtonClick(){
  this.numberOfDislikes++;
}
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
