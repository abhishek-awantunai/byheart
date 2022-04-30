import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  userPromise$: Promise<any>; 
  constructor(private _httpClient: HttpClient) {
    this.userPromise$ = new Promise<any>((resolve, reject) => {
      try {
        setTimeout(() => {
          const data = {
            data: 'Hey baby'
          };
          resolve(data);
        }, 3000);
      } catch (error) {
        reject(error);
      }
    });
  }

  ngOnInit(): void {
    this.userPromise$.then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    })
  }

}
