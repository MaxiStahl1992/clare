import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'feedback',
        loadChildren: () => import('./feedback/feedback.module').then(m => m.FeedbackPageModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarPageModule)
      },
      {
        path: 'games',
        loadChildren: () => import('./games/games.module').then(m => m.GamesPageModule)
      },
      {
        path: 'call',
        loadChildren: () => import('./call/call.module').then( m => m.CallPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/feedback',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
