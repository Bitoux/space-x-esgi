import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseURL = "https://api.spacexdata.com/v2/";
  constructor(private httpClient: HttpClient) { }

  getCompanyInfos(): Observable<Company> {
    let requestEndPoint = this.baseURL + 'info';
    return this.httpClient.get<Company>(requestEndPoint);
  }

  getLastLaunche(): Observable<Launches> {
    let requestEndPoint = this.baseURL + 'launches/latest';
    return this.httpClient.get<Launches>(requestEndPoint);
  }

  getAllLaunches(): Observable<Launches> {
    let requestEndPoint = this.baseURL + 'launches/all';
    return this.httpClient.get<Launches>(requestEndPoint);
  }

  getLastLauches(): Observable<Launches> {
    let requestEndPoint = this.baseURL + 'launches';
    return this.httpClient.get<Launches>(requestEndPoint);
  }

  getUpcomingLauches(): Observable<Launches> {
    let requestEndPoint = this.baseURL + 'launches/upcoming';
    return this.httpClient.get<Launches>(requestEndPoint);
  }

  searchLaunches(launcheFilter: LaunchFilter): Observable<Launches> {
    let requestEndPoint = this.baseURL + 'launches';
    return this.httpClient.get<Launches>(requestEndPoint);
  }

  getAllRockets(): Observable<Rockets[]> {
    let requestEndPoint = this.baseURL + 'rockets';
    return this.httpClient.get<Rockets[]>(requestEndPoint);
  }

  getSingleRocket(id: string): Observable<Rockets> {
    let requestEndPoint = this.baseURL + 'rockets/' + id;
    return this.httpClient.get<Rockets>(requestEndPoint);
  }

  getAllCapsules(): Observable<Capsules[]> {
    let requestEndPoint = this.baseURL + 'capsules';
    return this.httpClient.get<Capsules[]>(requestEndPoint);
  }

  getSingleCapsules(id: string): Observable<Capsules> {
    let requestEndPoint = this.baseURL + 'capsules/' + id;
    return this.httpClient.get<Capsules>(requestEndPoint);
  }

  getAllLaunchpads(): Observable<Launchpads[]> {
    let requestEndPoint = this.baseURL + 'launchpads';
    return this.httpClient.get<Launchpads[]>(requestEndPoint);
  }

  getSingleLaunchpads(id: string): Observable<Launchpads> {
    let requestEndPoint = this.baseURL + 'launchpads/' + id;
    return this.httpClient.get<Launchpads>(requestEndPoint);
  }

  getAllCapsulesDetails(): Observable<CapsulesDetails[]> {
    let requestEndPoint = this.baseURL + 'parts/caps';
    return this.httpClient.get<CapsulesDetails[]>(requestEndPoint);
  }

  getSingleCapsuleDetail(id: string): Observable<CapsulesDetails> {
    let requestEndPoint = this.baseURL + 'parts/caps/' + id;
    return this.httpClient.get<CapsulesDetails>(requestEndPoint);
  }

  /*private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };*/


}
