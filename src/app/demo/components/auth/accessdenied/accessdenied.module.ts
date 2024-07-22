import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessdeniedRoutingModule } from './accessdenied-routing.module';
import { AccessdeniedComponent } from './accessdenied.component'
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
    imports: [
        CommonModule,
        AccessdeniedRoutingModule,
        ButtonModule,
        RippleModule
    ],
    declarations: [AccessdeniedComponent]
})
export class AccessdeniedModule {}
