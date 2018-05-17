import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './Modules/app-routing/app-routing.module';
import { LaunchesComponent } from './Components/launches/launches.component';
import { LastestLauncheComponent } from './Components/lastest-launche/lastest-launche.component';
import { PastLauncheComponent } from './Components/past-launche/past-launche.component';
import { UpcomingLauncheComponent } from './Components/upcoming-launche/upcoming-launche.component';
import { MenuComponent } from './Components/menu/menu.component';
import { SearchLaunchComponent } from './Components/search-launch/search-launch.component';
import { CompanyInfoComponent } from './Components/company-info/company-info.component';
import { RocketsComponent } from './Components/material/rockets/rockets.component';
import { RocketsSingleComponent } from './Components/rockets-single/rockets-single.component';
import { CapsulesComponent } from './Components/material/capsules/capsules.component';
import { CapsulesSingleComponent } from './Components/capsules-single/capsules-single.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LaunchpadsComponent } from './Components/material/launchpads/launchpads.component';
import { LaunchpadsSingleComponent } from './Components/launchpads-single/launchpads-single.component';
import { CapsulesDetailsComponent } from './Components/capsules-details/capsules-details.component';
import { CapsulesDetailsSingleComponent } from './Components/capsules-details-single/capsules-details-single.component';
import { CapsulesDetailsSearchComponent } from './Components/capsules-details-search/capsules-details-search.component';
import { CoreDetailsComponent } from './Components/core-details/core-details.component';
import { CoreDetailsSingleComponent } from './Components/core-details-single/core-details-single.component';
import { CoreDetailsSearchComponent } from './Components/core-details-search/core-details-search.component';
import { MaterialComponent } from './Components/material/material.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    LastestLauncheComponent,
    PastLauncheComponent,
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
    MaterialComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
