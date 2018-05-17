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
import {MenuComponent} from './components/menu/menu.component';
import {SearchLaunchComponent} from './components/search-launch/search-launch.component';
import {CompanyInfoComponent} from './pages/company-info/company-info.component';
import {RocketsComponent} from './pages/equipments/rockets/rockets.component';
import {RocketsSingleComponent} from './pages/equipments/rockets/rockets-single/rockets-single.component';
import {CapsulesComponent} from './pages/equipments/capsules/capsules.component';
import {CapsulesSingleComponent} from './pages/equipments/capsules/capsules-single/capsules-single.component';
import {FooterComponent} from './components/footer/footer.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LaunchpadsComponent} from './pages/equipments/launchpads/launchpads.component';
import {LaunchpadsSingleComponent} from './pages/equipments/launchpads/launchpads-single/launchpads-single.component';
import {CapsulesDetailsComponent} from './pages/capsules-details/capsules-details.component';
import {CapsulesDetailsSingleComponent} from './pages/capsules-details/capsules-details-single/capsules-details-single.component';
import {CapsulesDetailsSearchComponent} from './components/capsules-details-search/capsules-details-search.component';
import {CoreDetailsComponent} from './pages/core-details/core-details.component';
import {CoreDetailsSingleComponent} from './pages/core-details/core-details-single/core-details-single.component';
import {CoreDetailsSearchComponent} from './components/core-details-search/core-details-search.component';
import {MaterialComponent} from './pages/equipments/material.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {RoutingState} from './shared/provider/route-history.provider';
import { LauncheSingleComponent } from './pages/launches/launche-single/launche-single.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    LastestLauncheComponent,
    UpcomingLauncheComponent,
    MenuComponent,
    SearchLaunchComponent,
    CompanyInfoComponent,
    RocketsComponent,
    CapsulesComponent,
    LaunchpadsComponent,
    LaunchpadsSingleComponent,
    RocketsSingleComponent,
    CapsulesSingleComponent,
    CapsulesDetailsComponent,
    CapsulesDetailsSingleComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    CapsulesDetailsSearchComponent,
    CoreDetailsComponent,
    CoreDetailsSingleComponent,
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
    MatButtonToggleModule
  ],
  providers: [RoutingState],
  bootstrap: [AppComponent]
})
export class AppModule { }
