import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LaunchesComponent} from './pages/launches/launches.component';
import {LastestLauncheComponent} from './pages/launches/lastest-launche/lastest-launche.component';
import {UpcomingLauncheComponent} from './pages/launches/upcoming-launche/upcoming-launche.component';
import {SearchLaunchComponent} from './components/search-launch/search-launch.component';
import {CompanyInfoComponent} from './pages/company-info/company-info.component';
import {RocketsSingleComponent} from './pages/equipements/rockets/rockets-single/rockets-single.component';
import {CapsulesSingleComponent} from './pages/equipements/capsules/capsules-single/capsules-single.component';
import {LaunchpadsSingleComponent} from './pages/equipements/launchpads/launchpads-single/launchpads-single.component';
import {CapsulesDetailsComponent} from './pages/capsules-details/capsules-details.component';
import {CapsulesDetailsSingleComponent} from './pages/capsules-details/capsules-details-single/capsules-details-single.component';
import {CapsulesDetailsSearchComponent} from './components/capsules-details-search/capsules-details-search.component';
import {CoreDetailsComponent} from './pages/core-details/core-details.component';
import {CoreDetailsSingleComponent} from './pages/core-details/core-details-single/core-details-single.component';
import {CoreDetailsSearchComponent} from './components/core-details-search/core-details-search.component';

import {EquipementsComponent} from './pages/equipements/equipements.component';
import {RocketsComponent} from './pages/equipements/rockets/rockets.component';
import {LaunchpadsComponent} from './pages/equipements/launchpads/launchpads.component';
import {CapsulesComponent} from './pages/equipements/capsules/capsules.component';

import {MaterialComponent} from './pages/equipments/material.component';
import { LauncheSingleComponent } from './pages/launches/launche-single/launche-single.component';


const routes: Routes = [
  { path: 'home', component: CompanyInfoComponent },
  { path: 'launches', component: LaunchesComponent },
  { path: 'launches/:id', component: LauncheSingleComponent },
  { path: 'launches/lastest', component: LastestLauncheComponent },
  { path: 'launches/upcoming', component: UpcomingLauncheComponent },
  { path: 'launches/search', component: SearchLaunchComponent },
  { path: 'capsules-details', component: CapsulesDetailsComponent },
  { path: 'capsules-details/search', component: CapsulesDetailsSearchComponent},
  { path: 'capsules-details/:id', component: CapsulesDetailsSingleComponent },
  { path: 'core-details', component: CoreDetailsComponent },
  { path: 'core-details/search', component: CoreDetailsSearchComponent },
  { path: 'core-details/:id', component: CoreDetailsSingleComponent },
  { path: 'equipements', component: EquipementsComponent,
    children: [
      { path: '', redirectTo: 'rockets', pathMatch: 'full' },
      { path: 'rockets', component: RocketsComponent},
      { path: 'capsules', component: CapsulesComponent },
      { path: 'launchpads', component: LaunchpadsComponent }
    ]
  },
  { path: 'equipements/rockets/:id', component: RocketsSingleComponent },
  { path: 'equipements/capsules/:id', component: CapsulesSingleComponent },
  { path: 'equipements/launchpads/:id', component: LaunchpadsSingleComponent },
  { path: '**', component: CompanyInfoComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}

