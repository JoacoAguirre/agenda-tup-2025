import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactListPage } from './pages/contact-list-page/contact-list-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';
import { RegisterPage } from './pages/register/register';

export const routes: Routes = [
    {
        path:"login",
        component: LoginPage
    },
    {
        path:"register",
        component: RegisterPage
    },
    {
        // Path vacío se abre cuando la página no tiene url más que localhost
        path:"",
        component: LoggedLayout,
        children: [
            {
                path:"",
                component: ContactListPage
            },
            {
                path:"contacts/:id",
                component: ContactDetailsPage
            },
        ]
    },
];
