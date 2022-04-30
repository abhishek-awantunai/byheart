import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    private subject = new Subject<number>();
    subscriber: any;
    observable = new Observable((subscriber) => {
        this.subscriber = subscriber;
    });
    constructor(private _dataService: DataService, private _http: HttpClient) {}

    getListOfPosts() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        return this._http.get(url, {});
    }
    
    getListOfComments() {
        const url = 'https://jsonplaceholder.typicode.com/comments';
        return this._http.get(url, {});
    }
    
    getListOfAlbums() {
        const url = 'https://jsonplaceholder.typicode.com/albums';
        return this._http.get(url, {});
    }
    getListOfPhotos() {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        return this._http.get(url, {});
    }
    getListOfUsers() {
        const url = 'https://jsonplaceholder.typicode.com/users';
        return this._http.get(url, {});
    }
    getListOfToDos() {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        return this._http.get(url, {});
    }

    sendObservableValueViaSubscriber(val: number) {
        this.subscriber.next(val);
    }

    emitNewValueViaSubject(val:number) {
        this.subject.next(val);
    }

    subscribeSubject(){
        return this.subject;
    }
}
