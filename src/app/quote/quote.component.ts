import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'Kiptoo','Time is cruel. It punishes. I mean, we sentence people to time.','John Locke',new Date(2022,1,8),0,0),
    new Quote(2,'Kiptoo','By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.','Confucius',new Date(2022,1,14),0,0),
    new Quote(2,'Kiptoo','Who we are and who we need to be to survive are two different things.','Vladimir Ivanov',new Date(2022,1,25),0,0),
    new Quote(2,'Kiptoo','Never interrupt your enemy when he is making a mistake.','Napoleon Bonaparte',new Date(2022,1,25),0,0),
    new Quote(2,'Kiptoo','When you have eliminated the impossible, whatever remains, however improbable, must be the truth.','Sherlock Holmes',new Date(2022,2,1),0,0),];

    toggleDetails(index: number){
      this.quotes[index].showDescription=!this.quotes[index].showDescription;
    }

    deleteThisQuote(deleteQuote: any,index: number){
      if(deleteQuote){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].author}'s quote?`)
        if(toDelete){
        this.quotes.splice(index,1)
        }
      }
    }

    addNewQuote(quote:Quote){
      let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.creationDate = new Date(quote.creationDate)
    this.quotes.push(quote)
    }

    initialUpVotes!: number;
    currentUpVotes!: number;
    counter!: number;
    mostUpVotes(){
      this.initialUpVotes = 0
      this.currentUpVotes = 0
  
      for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
        this.currentUpVotes = this.quotes[this.counter].upvotes;
        if(this.currentUpVotes > this.initialUpVotes){this.initialUpVotes = this.currentUpVotes}
      }
      return  this.initialUpVotes
    }

  constructor() { }

  ngOnInit(): void {

  }
}
