import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {LaunchesComponent} from './pages/launches/launches.component';
import {LastestLauncheComponent} from './pages/launches/lastest-launche/lastest-launche.component';
import {UpcomingLauncheComponent} from './pages/launches/upcoming-launche/upcoming-launche.component';
import {SearchLaunchComponent} from './components/search-launch/search-launch.component';
import {CompanyInfoComponent} from './pages/company-info/company-info.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CapsulesDetailsComponent} from './pages/capsules-details/capsules-details.component';
import {CapsulesDetailsSingleComponent} from './pages/capsules-details/capsules-details-single/capsules-details-single.component';
import {CapsulesDetailsSearchComponent} from './components/capsules-details-search/capsules-details-search.component';
import {CoreDetailsComponent} from './pages/core-details/core-details.component';
import {CoreDetailsSingleComponent} from './pages/core-details/core-details-single/core-details-single.component';
import {CoreDetailsSearchComponent} from './components/core-details-search/core-details-search.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {RoutingState} from './shared/provider/route-history.provider';

import {EquipementsModule} from "./pages/equipements/equipements.module";
import {NgHttpLoaderModule} from "ng-http-loader/ng-http-loader.module";

import { LauncheSingleComponent } from './pages/launches/launche-single/launche-single.component';


@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    LastestLauncheComponent,
    UpcomingLauncheComponent,
    SearchLaunchComponent,
    CompanyInfoComponent,
    CapsulesDetailsComponent,
    CapsulesDetailsSingleComponent,
    SidebarComponent,
    NavbarComponent,
    CapsulesDetailsSearchComponent,
    CoreDetailsComponent,
    CoreDetailsSingleComponent,
    CoreDetailsSearchComponent
    CoreDetailsSearchComponent,
    MaterialComponent,
    LauncheSingleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonToggleModule,
    EquipementsModule,
    NgHttpLoaderModule
  ],
  providers: [RoutingState],
  bootstrap: [AppComponent]
})
export class AppModule { }
