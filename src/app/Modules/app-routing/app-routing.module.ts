import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from '../../Components/launches/launches.component';
import { LastestLauncheComponent } from '../../Components/lastest-launche/lastest-launche.component';
import { PastLauncheComponent } from '../../Components/past-launche/past-launche.component';
import { UpcomingLauncheComponent } from '../../Components/upcoming-launche/upcoming-launche.component';
import { SearchLaunchComponent } from '../../Components/search-launch/search-launch.component';
import { CompanyInfoComponent } from '../../Components/company-info/company-info.component';
import { RocketsComponent } from '../../Components/rockets/rockets.component';
import { RocketsSingleComponent } from '../../Components/rockets-single/rockets-single.component';
import { CapsulesComponent } from '../../Components/capsules/capsules.component';
import { CapsulesSingleComponent } from '../../Components/capsules-single/capsules-single.component';
import { LaunchpadsComponent } from '../../Components/launchpads/launchpads.component';
import { LaunchpadsSingleComponent } from '../../Components/launchpads-single/launchpads-single.component';
import { CapsulesDetailsComponent } from '../../Components/capsules-details/capsules-details.component';
import { CapsulesDetailsSingleComponent } from '../../Components/capsules-details-single/capsules-details-single.component';
import { CapsulesDetailsSearchComponent } from '../../Components/capsules-details-search/capsules-details-search.component';


const routes: Routes = [
  { path: '', component: CompanyInfoComponent },
  { path: 'launches', component: LaunchesComponent },
  { path: 'launches/lastest', component: LastestLauncheComponent },
  { path: 'launches/past', component: PastLauncheComponent },
  { path: 'launches/upcoming', component: UpcomingLauncheComponent },
  { path: 'launches/search', component: SearchLaunchComponent },
  { path: 'rockets', component: RocketsComponent },
  { path: 'rockets/:id', component: RocketsSingleComponent },  
  { path: 'capsules', component: CapsulesComponent },
  { path: 'capsules/:id', component: CapsulesSingleComponent },
  { path: 'launchpads', component: LaunchpadsComponent },
  { path: 'launchpads/:id', component: LaunchpadsSingleComponent },
  { path: 'capsules-details', component: CapsulesDetailsComponent },
  { path: 'capsules-details/search', component: CapsulesDetailsSearchComponent},
  { path: 'capsules-details/:id', component: CapsulesDetailsSingleComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}

