import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from '../../Components/launches/launches.component';
import { LastestLauncheComponent } from '../../Components/lastest-launche/lastest-launche.component';
import { PastLauncheComponent } from '../../Components/past-launche/past-launche.component';
import { UpcomingLauncheComponent } from '../../Components/upcoming-launche/upcoming-launche.component';
import { SearchLaunchComponent } from '../../Components/search-launch/search-launch.component';

const routes: Routes = [
  { path: 'launches', component: LaunchesComponent },
  { path: 'launches/lastest', component: LastestLauncheComponent },
  { path: 'launches/past', component: PastLauncheComponent },
  { path: 'launches/upcoming', component: UpcomingLauncheComponent },
  { path: 'launches/search', component: SearchLaunchComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}

