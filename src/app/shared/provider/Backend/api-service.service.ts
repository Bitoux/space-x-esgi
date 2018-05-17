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
    let params = this.launchFilterOptionToGetParam(launcheFilter);
    let requestEndPoint = this.baseURL + 'launches?' + params;
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

  getAllDetailsCore(): Observable<CoreDetails[]> {
    let requestEndPoint = this.baseURL + 'parts/cores';
    return this.httpClient.get<CoreDetails[]>(requestEndPoint);
  }

  getSingleDetailsCore(id: string): Observable<CoreDetails> {
    let requestEndPoint = this.baseURL + 'parts/cores/' + id;
    return this.httpClient.get<CoreDetails>(requestEndPoint);
  }

  searchCoreDetailsByFilter(filterOption: CoreDetailsFilter): Observable<CoreDetails[]> {
    let getParams = this.coreDetailsFilterToGetParam(filterOption);
    let requestEndPoint = this.baseURL + 'parts/cores?' + getParams;
    return this.httpClient.get<CoreDetails[]>(requestEndPoint);
  }

  searchCapsuleDetailsByFilter(filterOption: CapsuleDetailsFilter): Observable<CapsuleDetailsFilter[]> {
    let getParams = this.capsulesDetailsToGetParam(filterOption);
    let requestEndPoint = this.baseURL + 'parts/caps?' + getParams;
    return this.httpClient.get<CapsuleDetailsFilter[]>(requestEndPoint);
  }

  private capsulesDetailsToGetParam(filterOption: CapsuleDetailsFilter): string{
    let getParams = '';
    if(filterOption.capsule_serial !== null){
      getParams = getParams + 'capsule_serial='+filterOption.capsule_serial;
    }
    if(filterOption.capsule_id !== null ){
      getParams = getParams + '&capsule_id='+filterOption.capsule_id;
    }
    if(filterOption.status !== null ){
      getParams = getParams + '&status='+filterOption.status;
    }
    if(filterOption.original_launch !== null ){
      getParams = getParams + '&original_launch='+filterOption.original_launch;
    }
    if(filterOption.missions !== null ){
      getParams = getParams + '&missions='+filterOption.missions;
    }
    if(filterOption.landings !== null ){
      getParams = getParams + '&landings='+filterOption.landings;
    }
    if(filterOption.type !== null ){
      getParams = getParams + '&type='+filterOption.type;
    }
    return getParams;
  }

  private coreDetailsFilterToGetParam(filterOption: CoreDetailsFilter): string {
    let getParams = '';
    if(filterOption.core_serial !== null){
      getParams = getParams + 'core_serial='+filterOption.core_serial;
    }
    if(filterOption.block !== null ){
      getParams = getParams + '&block='+filterOption.block;
    }
    if(filterOption.status !== null ){
      getParams = getParams + '&status='+filterOption.status;
    }
    if(filterOption.original_launch !== null ){
      getParams = getParams + '&original_launch='+filterOption.original_launch;
    }
    if(filterOption.missions !== null ){
      getParams = getParams + '&missions='+filterOption.missions;
    }
    if(filterOption.rtls_attempt !== null ){
      getParams = getParams + '&rtls_attempt='+filterOption.rtls_attempt;
    }
    if(filterOption.rtls_landings !== null ){
      getParams = getParams + '&rtls_landings='+filterOption.rtls_landings;
    }
    if(filterOption.asds_attempt !== null ){
      getParams = getParams + '&asds_attempt='+filterOption.asds_attempt;
    }
    if(filterOption.asds_landings !== null ){
      getParams = getParams + '&asds_landings='+filterOption.asds_landings;
    }
    if(filterOption.water_landing !== null ){
      getParams = getParams + '&water_landing='+filterOption.water_landing;
    }
    return getParams;
  }

  private launchFilterOptionToGetParam(filterOption: LaunchFilter): string {
    let getParams = '';
    if(filterOption.flight_id !== null){
      getParams = getParams + 'flight_id='+filterOption.flight_id;
    }
    if(filterOption.order !== null ){
      getParams = getParams + '&order='+filterOption.order;
    }
    if(filterOption.flight_number !== null){
      getParams = getParams + '&flight_number='+filterOption.flight_number;
    }
    if(filterOption.launch_year !== null) {
      getParams = getParams + '&launch_year='+filterOption.launch_year;
    }
    if(filterOption.launch_date_utc !== null) {
      getParams = getParams + '&launch_date_utc='+filterOption.launch_date_utc;
    }
    if(filterOption.launch_date_local !== null) {
      getParams = getParams + '&launch_date_local='+filterOption.launch_date_local;
    }
    if(filterOption.rocket_id !== null) {
      getParams = getParams + '&rocket_id='+filterOption.rocket_id;
    }
    if(filterOption.rocket_name !== null) {
      getParams = getParams + '&rocket_name='+filterOption.rocket_name;
    }
    if(filterOption.rocket_type !== null) {
      getParams = getParams + '&rocket_type='+filterOption.rocket_type;
    }
    if(filterOption.core_serial !== null) {
      getParams = getParams + '&core_serial='+filterOption.core_serial;
    }
    if(filterOption.cap_serial !== null) {
      getParams = getParams + '&cap_serial='+filterOption.cap_serial;
    }
    if(filterOption.core_flight !== null) {
      getParams = getParams + '&core_flight='+filterOption.core_flight;
    }
    if(filterOption.block !== null) {
      getParams = getParams + '&block='+filterOption.block;
    }
    if(filterOption.core_reuse !== null) {
      getParams = getParams + '&core_reuse='+filterOption.core_reuse;
    }
    if(filterOption.side_core1_reuse !== null) {
      getParams = getParams + '&side_core1_reuse='+filterOption.side_core1_reuse;
    }
    if(filterOption.side_core2_reuse !== null) {
      getParams = getParams + '&side_core2_reuse='+filterOption.side_core2_reuse;
    }
    if(filterOption.fairings_reuse !== null) {
      getParams = getParams + '&fairings_reuse='+filterOption.fairings_reuse;
    }
    if(filterOption.capsule_reuse !== null) {
      getParams = getParams + '&capsule_reuse='+filterOption.capsule_reuse;
    }
    if(filterOption.site_id !== null) {
      getParams = getParams + '&site_id='+filterOption.site_id;
    }
    if(filterOption.site_name !== null) {
      getParams = getParams + '&site_name='+filterOption.site_name;
    }
    if(filterOption.site_name_long !== null) {
      getParams = getParams + '&site_name_long='+filterOption.site_name_long;
    }
    if(filterOption.payload_id !== null) {
      getParams = getParams + '&payload_id='+filterOption.payload_id;
    }
    if(filterOption.customer !== null) {
      getParams = getParams + '&customer='+filterOption.customer;
    }
    if(filterOption.payload_type !== null) {
      getParams = getParams + '&payload_type='+filterOption.payload_type;
    }
    if(filterOption.orbit !== null) {
      getParams = getParams + '&orbit='+filterOption.orbit;
    }
    if(filterOption.launch_success !== null) {
      getParams = getParams + '&launch_success='+filterOption.launch_success;
    }
    if(filterOption.reused !== null) {
      getParams = getParams + '&reused='+filterOption.reused;
    }
    if(filterOption.land_success !== null) {
      getParams = getParams + '&land_success='+filterOption.land_success;
    }
    if(filterOption.landing_type !== null) {
      getParams = getParams + '&landing_type='+filterOption.landing_type;
    }
    if(filterOption.landing_vehicle !== null) {
      getParams = getParams + '&landing_vehicle='+filterOption.landing_vehicle;
    }
    return getParams;
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
