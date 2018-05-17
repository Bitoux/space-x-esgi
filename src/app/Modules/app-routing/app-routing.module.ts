import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from '../../Components/launches/launches.component';
import { LastestLauncheComponent } from '../../Components/lastest-launche/lastest-launche.component';
import { PastLauncheComponent } from '../../Components/past-launche/past-launche.component';
import { UpcomingLauncheComponent } from '../../Components/upcoming-launche/upcoming-launche.component';
import { SearchLaunchComponent } from '../../Components/search-launch/search-launch.component';
import { CompanyInfoComponent } from '../../Components/company-info/company-info.component';
import { RocketsComponent } from '../../Components/material/rockets/rockets.component';
import { RocketsSingleComponent } from '../../Components/rockets-single/rockets-single.component';
import { CapsulesComponent } from '../../Components/material/capsules/capsules.component';
import { CapsulesSingleComponent } from '../../Components/capsules-single/capsules-single.component';
import { LaunchpadsComponent } from '../../Components/material/launchpads/launchpads.component';
import { LaunchpadsSingleComponent } from '../../Components/launchpads-single/launchpads-single.component';
import { CapsulesDetailsComponent } from '../../Components/capsules-details/capsules-details.component';
import { CapsulesDetailsSingleComponent } from '../../Components/capsules-details-single/capsules-details-single.component';
import { CapsulesDetailsSearchComponent } from '../../Components/capsules-details-search/capsules-details-search.component';
import { CoreDetailsComponent } from '../../Components/core-details/core-details.component';
import { CoreDetailsSingleComponent } from '../../Components/core-details-single/core-details-single.component';
import { CoreDetailsSearchComponent } from '../../Components/core-details-search/core-details-search.component';
import {MaterialComponent} from "../../Components/material/material.component";


const routes: Routes = [
  { path: '', component: CompanyInfoComponent },
  { path: 'launches', component: LaunchesComponent },
  { path: 'launches/lastest', component: LastestLauncheComponent },
  { path: 'launches/past', component: PastLauncheComponent },
  { path: 'launches/upcoming', component: UpcomingLauncheComponent },
  { path: 'launches/search', component: SearchLaunchComponent },
  { path: 'equipments', component: MaterialComponent },
  { path: 'rockets/:id', component: RocketsSingleComponent },
  { path: 'capsules/:id', component: CapsulesSingleComponent },
  { path: 'launchpads/:id', component: LaunchpadsSingleComponent },
  { path: 'capsules-details', component: CapsulesDetailsComponent },
  { path: 'capsules-details/search', component: CapsulesDetailsSearchComponent},
  { path: 'capsules-details/:id', component: CapsulesDetailsSingleComponent },
  { path: 'core-details', component: CoreDetailsComponent },
  { path: 'core-details/single/:id', component: CoreDetailsSingleComponent },
  { path: 'core-details/search', component: CoreDetailsSearchComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}

