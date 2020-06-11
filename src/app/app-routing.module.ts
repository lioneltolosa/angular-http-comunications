import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersComponent } from './views/users/users.component';
import { EditComponent } from './views/edit/edit.component';
import { UserResolverService } from './services/user-resolver.service';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, resolve: {resolveUsers: UserResolverService} },
    { path: 'users', component: UsersComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
