import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillexSigninPage } from './skillex-signin';

@NgModule({
  declarations: [
    SkillexSigninPage,
  ],
  imports: [
    IonicPageModule.forChild(SkillexSigninPage),
  ],
})
export class SkillexSigninPageModule {}
