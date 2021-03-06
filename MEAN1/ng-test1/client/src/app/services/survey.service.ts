import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { Survey } from './../survey';

@Injectable()
export class SurveyService {

  private baseURL = '/api/survey';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }
  getSurveys() {
    return this.http.get('/');
}
}
