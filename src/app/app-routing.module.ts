import { NgModule, Component } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AssureComponent } from 'src/components/assure/assure.component';
import { MutualisteComponent } from 'src/components/mutualiste/mutualiste.component';
import { PersonneAchargeComponent } from 'src/components/personne-acharge/personne-acharge.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { LoginComponent } from './demo/components/auth/login/login.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [

    {
        path: 'dashbord', component: AppLayoutComponent,



        children: [
           // { path: '', loadChildren: () => import('./demo/components/dashboards/dashboards.module').then(m => m.DashboardsModule) },
            { path: 'assures', component:AssureComponent},
            {path : 'mutualistes',component:MutualisteComponent},
            {path: 'personneAcharge',component:PersonneAchargeComponent},
            { path: 'uikit', data: { breadcrumb: 'UI Kit' }, loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
            { path: 'utilities', data: { breadcrumb: 'Utilities' }, loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
            { path: 'pages', data: { breadcrumb: 'Pages' }, loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
            { path: 'profile', data: { breadcrumb: 'User Management' }, loadChildren: () => import('./demo/components/profile/profile.module').then(m => m.ProfileModule) },
            { path: 'documentation', data: { breadcrumb: 'Documentation' }, loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
            { path: 'blocks', data: { breadcrumb: 'Prime Blocks' }, loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
            { path: 'ecommerce', data: { breadcrumb: 'E-Commerce' }, loadChildren: () => import('./demo/components/ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
            { path: 'apps', data: { breadcrumb: 'Apps' }, loadChildren: () => import('./demo/components/apps/apps.module').then(m => m.AppsModule) },
        ]

    },

    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
   // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

    { path: 'auth', data: { breadcrumb: 'Auth' }, loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
    { path: 'wizard', data: { breadcrumb: 'Wizard' }, loadChildren: () => import('./demo/components/pages/wizard/wizard.module').then(m => m.WizardModule) },
    { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
    { path: 'notfound', loadChildren: () => import('./demo/components/notfound/notfound.module').then(m => m.NotfoundModule) },
    { path: 'notfound2', loadChildren: () => import('./demo/components/notfound2/notfound2.module').then(m => m.Notfound2Module) },
   // { path: '**', redirectTo: '/notfound' },
   { path: '', redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
