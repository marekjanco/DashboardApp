import { Routes } from '@angular/router';
import { ContentComponent } from './components/content.component';
import { CisoComponent } from './components/ciso.component';

const appRoutes: Routes = [
  { path: 'ciso-board', 
    component: CisoComponent 
  },
  {
    path: 'incidents-board',
    component: ContentComponent
  }
];
export default appRoutes;