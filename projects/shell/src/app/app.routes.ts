import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'mfe1',
        loadComponent: async () =>
          { console.log('Loading MFE1 Component');
            return loadRemoteModule({
            remoteName: 'mfe1',
            exposedModule: './Component',
          }).then((m) => m.AppComponent)},
    }
];
