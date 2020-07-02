import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/data';

// Feature Modules
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersComponent } from './views/users/users.component';
import { EditComponent } from './views/edit/edit.component';
import { AddHeadersInterceptor } from './services/add-headers.interceptor';
import { CacheInterceptor } from './services/cache.interceptor';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { MessageModule } from './message/message.module';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UsersComponent,
        EditComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
        UsersModule,
        MessageModule,
        AppRoutingModule, // El AppRoutingModule va de ultimo, no se porque pero peta si va arriba. Si esta arriba me sale el PageNotFoundComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AddHeadersInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
