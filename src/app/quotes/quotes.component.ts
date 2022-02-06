import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'Kiptoo','Time is cruel. It punishes. I mean, we sentence people to time.','John Locke',new Date(2022,1,8),0,0),
    new Quote(2,'Kiptoo','By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.','Confucius',new Date(2022,1,14),0,0),
    new Quote(2,'Kiptoo','Who we are and who we need to be to survive are two different things.','Vladimir Ivanov',new Date(2022,1,25),0,0),
    new Quote(2,'Kiptoo','Never interrupt your enemy when he is making a mistake.','Napoleon Bonaparte',new Date(2022,1,25),0,0),
    new Quote(2,'Kiptoo','When you have eliminated the impossible, whatever remains, however improbable, must be the truth.','Sherlock Holmes',new Date(2022,2,1),0,0),];

  constructor() { }

  ngOnInit(): void {

  }
}
