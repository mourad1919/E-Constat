import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstatdetailPage } from './constatdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ConstatdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstatdetailPageRoutingModule {}
