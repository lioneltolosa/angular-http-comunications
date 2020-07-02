import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersComponent } from './views/users/users.component';
import { EditComponent } from './views/edit/edit.component';
import { UserResolverService } from './services/user-resolver.service';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, resolve: {resolveUsers: UserResolverService} },
    { path: 'users', component: UsersComponent },
    { path: 'edit/:id', component: EditComponent },
    {
        path: 'products',
        loadChildren: () =>
          import('./products/product.module').then(m => m.ProductModule)
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
