import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuardService],
        component: AppComponent,
    },
    {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
        canActivate: [AuthGuardService]
    },
    {
        path: 'login',
        loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
