import { Routes } from '@angular/router';
import { GenogramComponent } from '../../genogram/genogram.component';
import { ProfileContainerComponent } from './portal/containers/profile-container/profile-container.component';

export const routes: Routes = [
    {
        path:'',
        component:ProfileContainerComponent
    }
];
