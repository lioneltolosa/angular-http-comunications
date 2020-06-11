import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersComponent } from './views/users/users.component';
import { EditComponent } from './views/edit/edit.component';
import { AddHeadersInterceptor } from './services/add-headers.interceptor';
import { CacheInterceptor } from './services/cache.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UsersComponent,
        EditComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AddHeadersInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
