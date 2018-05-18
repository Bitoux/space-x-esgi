import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EquipementsComponent} from './equipements.component';
import {RocketsComponent} from './rockets/rockets.component';
import {CapsulesComponent} from './capsules/capsules.component';
import {LaunchpadsComponent} from './launchpads/launchpads.component';
import {MatButtonToggleModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {RocketsSingleComponent} from "./rockets/rockets-single/rockets-single.component";
import {CapsulesSingleComponent} from "./capsules/capsules-single/capsules-single.component";
import {LaunchpadsSingleComponent} from "./launchpads/launchpads-single/launchpads-single.component";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "../../shared/provider/pipe/search.pipe";
import {CardEquipementsComponent} from "../../components/card-equipements/card-equipements.component";

@NgModule({
  imports: [
    CommonModule,
    MatButtonToggleModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    EquipementsComponent,
    RocketsComponent,
    CapsulesComponent,
    LaunchpadsComponent,
    RocketsSingleComponent,
    CapsulesSingleComponent,
    LaunchpadsSingleComponent,
    FilterPipe,
    CardEquipementsComponent
  ]
})
export class EquipementsModule { }
