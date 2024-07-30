import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SurveysService {

  private http = inject(HttpClient);

  list(){
    return this.http.get('http://localhost:8088/api/survey')
  }

  create(body: any){
    return this.http.post('http://localhost:8088/api/survey', body )
  }

}
