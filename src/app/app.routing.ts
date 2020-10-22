import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
        ...canActivate(redirectUnauthorizedToLogin),
    },
    {
        path: 'login',
        loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
        ...canActivate(redirectLoggedInToHome),
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full', 
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
