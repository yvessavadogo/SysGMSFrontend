import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { EventService } from 'src/app/demo/service/event.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        DashboardsRoutingModule,
        FormsModule,
    ],
    providers: [EventService]
})
export class DashboardsModule { }
