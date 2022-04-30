import { AppService } from './../../app.service';
import { forkJoin, tap, concatMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor(private _appService: AppService){}

  ngOnInit() {
    // this.getPosts();
    // this.getUsers();
    // this.getComments();
    // this.getToDos();
    // this.getPhotos();
    // this.getAlbums();

    // this.concatMapImplementation();
  }

  concatMapImplementation() {
    this._appService.getListOfPosts().pipe(
      tap(res => {
        console.log('getListOfPosts res => ', res);
      }),
      concatMap(res => {
        return this._appService.getListOfComments();
      }),
      tap(res => {
        console.log('getListOfComments res => ', res);
      }),
      concatMap(res => {
        return this._appService.getListOfUsers();
      }),
      tap(res => {
        console.log('getListOfUsers res => ', res);
      }),
      concatMap(res => {
        return this._appService.getListOfToDos();
      }),
      tap(res => {
        console.log('getListOfToDos res => ', res);
      }),
      concatMap(res => {
        return this._appService.getListOfPhotos();
      }),
      tap(res => {
        console.log('getListOfPhotos res => ', res);
      }),
      concatMap(res => {
        return this._appService.getListOfAlbums();
      }),
      tap(res => {
        console.log('getListOfAlbums res => ', res);
      }),
    ).subscribe(res => {
      console.log('final res => ', res);
    })
  }

  forkJoinApiCalls() {
    forkJoin([
      this._appService.getListOfPosts(),
      this._appService.getListOfComments(),
      this._appService.getListOfUsers(),
      this._appService.getListOfToDos(),
      this._appService.getListOfPhotos(),
      this._appService.getListOfAlbums(),
    ]).subscribe(res =>{
      console.log(res);
    })
  }

  getPosts() {
    console.log('getPosts called');
    this._appService.getListOfPosts().subscribe(res => {
      console.log('getPosts data received');
      console.log(res);
    })
  }
  getComments() {
    console.log('getComments called');
    this._appService.getListOfComments().subscribe(res => {
      console.log('getComments data received');
      console.log(res);
    })
  }
  getUsers() {
    console.log('getUsers called');
    this._appService.getListOfUsers().subscribe(res => {
      console.log('getUsers data received');
      console.log(res);
    })
  }
  getToDos() {
    console.log('getToDos called');
    this._appService.getListOfToDos().subscribe(res => {
      console.log('getToDos data received');
      console.log(res);
    })
  }
  getAlbums() {
    console.log('getAlbums called');
    this._appService.getListOfAlbums().subscribe(res => {
      console.log('getAlbums data received');
      console.log(res);
    })
  }
  getPhotos() {
    console.log('getPhotos called');
    this._appService.getListOfPhotos().subscribe(res => {
      console.log('getPhotos data received');
      console.log(res);
    })
  }


  setSubject() {
    let i = 0;
    setInterval(() => {
      i++;
      this._appService.sendObservableValueViaSubscriber(i);
    }, 1000);
  
    this._appService.observable.subscribe(res=> {
      console.log(res);
      this._appService.emitNewValueViaSubject(0);
    })
    
    this._appService.subscribeSubject().subscribe(res => {
      console.log('subject');
    })
  }

}
