import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { MessageService } from './message/services/message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    title = 'angular-http';
    loading = true;

    get isMessageDisplayed(): boolean {
        return this.messageService.isDisplayed;
    }

    constructor(private router: Router,
                private messageService: MessageService) {
        router.events.subscribe((routerEvent: Event) => {
            this.checkRouterEvent(routerEvent)
        })
    }

    checkRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
          this.loading = true;
        }
    
        if (routerEvent instanceof NavigationEnd ||
            routerEvent instanceof NavigationCancel ||
            routerEvent instanceof NavigationError) {
          this.loading = false;
        }
    }

    displayMessages(): void {
        this.router.navigate([{ outlets: { popup: ['messages'] }}]);
        this.messageService.isDisplayed = true
    }

    hideMessage(): void {
        this.router.navigate([{ outlets: { popup: null }}]);
        this.messageService.isDisplayed = false
    }
}


