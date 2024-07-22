import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        ButtonModule,
        DialogModule,
        FormsModule,
        InputTextModule,
        InputTextareaModule,
        RippleModule,
        SharedModule,
        TableModule,
        ToastModule,
        ToolbarModule
    ],
    declarations: []
})
export class PagesModule { }
