import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private _http: HttpClient){}

    callRestFull(type: string, url: string) {
        const body = {}, params = {}, headers = {};
        const start_time = new Date().getTime();

        switch (type) {
            case 'GET':
                let getOptions = {};
                return this._http.get(url, getOptions).pipe(map(res => {
                    const request_time = new Date().getTime() - start_time;
                    return res;
                }));
            case 'POST':
                return this._http.post(url, body, { headers, withCredentials: true }).pipe(map(res => {
                    const request_time = new Date().getTime() - start_time;
                    return res;
                }));
            case 'PUT':
                return this._http.put(url, body, { headers, withCredentials: true }).pipe(map(res => res));
            case 'DELETE':
                return this._http.delete(url, { headers, withCredentials: true }).pipe(map(res => res));
            default:
                return null;
        }
    }
}