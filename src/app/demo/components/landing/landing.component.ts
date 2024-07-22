import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './landing.component.html',
    styles: [`
        ::placeholder {
            color: #fff;
        }
    `]
})
export class LandingComponent implements OnInit {

    constructor(private layoutService: LayoutService){}

    ngOnInit() {
        this.layoutService.onColorSchemeChange('dark');
    }

    scrollBehavior(el: HTMLElement) {
        el.scrollIntoView({behavior:'smooth'});
    }
    
    scrollToElement($element: any): void {
        console.log($element);
        setTimeout(() => {
            $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }, 200);
       
    }
}
