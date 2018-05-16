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

  getAllLaunche(): Observable<Launches> {
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
    return this.httpClient.get<Launches>(requestEndPoint, {
      id: launcheFilter.id,
      flight_id: launcheFilter.flight_id,
      order: launcheFilter.order,
      flight_number: launcheFilter.flight_number,
      launch_year: launcheFilter.launch_year,
      launch_date_utc: launcheFilter.launch_date_utc,
      launch_date_local: launcheFilter.launch_date_local,
      rocket_id: launcheFilter.rocket_id,
      rocket_name: launcheFilter.rocket_name,
      rocket_type: launcheFilter.rocket_type,
      core_serial: launcheFilter.core_serial,
      cap_serial: launcheFilter.cap_serial,
      core_flight: launcheFilter.core_flight,
      block: launcheFilter.block,
      core_reuse: launcheFilter.core_reuse,
      side_core1_reuse: launcheFilter.side_core1_reuse,
      side_core2_reuse: launcheFilter.side_core2_reuse,
      fairings_reuse: launcheFilter.fairings_reuse,
      capsule_reuse: launcheFilter.capsule_reuse,
      site_id: launcheFilter.site_id,
      site_name: launcheFilter.site_name,
      site_name_long: launcheFilter.site_name_long,
      payload_id: launcheFilter.payload_id,
      customer: launcheFilter.customer,
      payload_type: launcheFilter.payload_type,
      orbit: launcheFilter.orbit,
      launch_success: launcheFilter.launch_success,
      reused: launcheFilter.reused,
      land_success: launcheFilter.land_success,
      landing_type: launcheFilter.landing_type,
      landing_vehicle: launcheFilter.landing_vehicle,
    });
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
