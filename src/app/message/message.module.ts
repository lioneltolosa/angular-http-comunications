import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';

import { MessageComponent } from './components/message/message.component';

@NgModule({
    declarations: [
        MessageComponent
    ],
    imports: [
        CommonModule,
        MessageRoutingModule
    ]
})
export class MessageModule { }
