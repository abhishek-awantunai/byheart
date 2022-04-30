import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-cold-observable',
  templateUrl: './hot-cold-observable.component.html',
  styleUrls: ['./hot-cold-observable.component.scss']
})
export class HotColdObservableComponent implements OnInit {
  user$: Observable<any>;
  timerColdObservable$: Observable<number>;
  timerHotObservable$: Observable<number>;

  constructor(private _httpClient: HttpClient) {
    // This is a cold observable as the values are being uni-casted i.e data source is created each time this observable is subscribed
    this.timerColdObservable$ = new Observable<number>(
      subscriber => {
        const timeStamp = new Date().getTime();
        subscriber.next(timeStamp);
      }
    );

    // This is a Hot observable as the values are being multi-casted i.e same data source is being shared each time this observable is subscribed
    const timeStamp = new Date().getTime();
    this.timerHotObservable$ = new Observable<number>(
      subscriber => {
        subscriber.next(timeStamp);
      }
    );
    
    // This is a cold Observable as data source that is API call is made each time we subscribe using async in HTML template
    // this.user$ = this._httpClient.get('https://jsonplaceholder.typicode.com/users', {});

    // Not this Cold Observable is converted into a Hot Observable as data source that is API call is made only once and we share subscribed data source in HTML template
    this.user$ = this._httpClient.get('https://jsonplaceholder.typicode.com/users', {}).pipe(shareReplay());
  }

  ngOnInit(): void {
    
    this.subscribeColdObservableExample();
  }

  subscribeColdObservableExample() {
    this.timerColdObservable$.subscribe(data => {
      console.log('Hot Observable value : ' + data);
    });

    setTimeout(() => this.timerColdObservable$.subscribe(data => {
      console.log('Hot Observable value : ' + data);
    }), 2000);
  }
  
  subscribeHotObservableExample() {
    this.timerHotObservable$.subscribe(data => {
      console.log('Hot Observable value : ' + data);
    });

    setTimeout(() => this.timerHotObservable$.subscribe(data => {
      console.log('Hot Observable value : ' + data);
    }), 2000);
  }

}
