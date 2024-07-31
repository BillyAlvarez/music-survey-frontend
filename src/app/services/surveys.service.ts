import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Result} from "../model/result.interface";

@Injectable({
  providedIn: 'root'
})
export class SurveysService {

  private http = inject(HttpClient);

  list(){
    return this.http.get<Result[]>('http://localhost:8088/api/survey')
  }

  create(body: any){
    return this.http.post<Result>('http://localhost:8088/api/survey', body )
  }

}
