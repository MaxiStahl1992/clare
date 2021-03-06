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
        path: 'call',
        loadChildren: () => import('./call/call.module').then( m => m.CallPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        loadChildren: () => import('./home/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'doctorprofile',
        loadChildren: () => import('./feedback/doctorprofile/doctorprofile.module').then(m => m.DoctorprofilePageModule)
      },
      {
        path: 'bookingconfirmation',
        loadChildren: () => import('./calendar/bookingconfirmation/bookingconfirmation.module').then(m => m.BookingconfirmationPageModule)
      },
      {
        path: 'games',
        loadChildren: () => import('./games/games.module').then(m => m.GamesPageModule)
      },
      {
        path: 'game1start',
        loadChildren: () => import('./games/game1start/game1start.module').then(m => m.Game1startPageModule)
      },
      {
        path: 'game1plane',
        loadChildren: () => import('./games/game1plane/game1plane.module').then(m => m.Game1planePageModule)
      },
      {
        path: 'game1flower',
        loadChildren: () => import('./games/game1flower/game1flower.module').then(m => m.Game1flowerPageModule)
      },
      {
        path: 'game1star',
        loadChildren: () => import('./games/game1star/game1star.module').then(m => m.Game1starPageModule)
      },
      {
        path: 'game1cat',
        loadChildren: () => import('./games/game1cat/game1cat.module').then(m => m.Game1catPageModule)
      },
      {
        path: 'game1result',
        loadChildren: () => import('./games/game1result/game1result.module').then(m => m.Game1resultPageModule)
      },
      {
        path: 'game2overview',
        loadChildren: () => import('./games/game2overview/game2overview.module').then(m => m.Game2overviewPageModule)
      }
    ]
  },
  {
    path: 'chat',
    loadChildren: () => import('./call/chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'videocall',
    loadChildren: () => import('./call/videocall/videocall.module').then(m => m.VideocallPageModule)
  },
  {
    path: 'phonecall',
    loadChildren: () => import('./call/phonecall/phonecall.module').then(m => m.PhonecallPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./feedback/notes/appointment/appointment.module').then(m => m.AppointmentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
