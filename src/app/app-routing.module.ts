import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  loadChildren: () =>
    import('./main-home/main-home.module').then(
      m => m.MainHomeModule
    )
},
{
  path: 'dashboard',
  loadChildren: () =>
    import('./user-home/user-home.module').then(
      m => m.UserHomeModule
    ),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
