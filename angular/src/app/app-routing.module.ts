import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BfxCreateComponent } from './bfx-create/bfx-create.component';
import { BfxDetailComponent } from './bfx-detail/bfx-detail.component';

const routes: Routes = [
  {path: 'Bfx', component: BfxCreateComponent},
  {path: 'Bfx-Detail', component: BfxDetailComponent},
  {path: 'Bfx-edit/:id', component: BfxCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
