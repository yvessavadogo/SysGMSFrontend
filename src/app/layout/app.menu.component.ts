import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                items: [
/*                    {
                        label: 'Tableau de bord',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/']
                    },*/
                    {
                        label: 'Les assurés',
                        icon: 'pi pi-sitemap',
                        routerLink: ['assures']
                    },
                    {
                        label: 'Les mutualistes',
                        icon: 'pi pi-star',
                        routerLink: ['mutualistes']
                    },
                    {
                        label: 'Les personnes en charge',
                        icon: 'pi pi-money-bill',
                        routerLink: ['personneAcharge']
                    },
                   
                ]
            },

        ];
    }
}
