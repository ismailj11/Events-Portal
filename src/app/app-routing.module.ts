import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { ToolbarComponent } from './shared/component/toolbar/toolbar.component';
import { EventsComponent } from './shared/component/events/events.component';
import { UserEventListComponent } from './shared/component/events/event-list/user-event-list/user-event-list.component';
const routes: Routes = [
  {
    path: '',
    component: ToolbarComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'CreateEvents', component: EventsComponent }, // Ensure this route exists
      { path: 'events', component: UserEventListComponent },
    
    ]
  },
  { path: '**', redirectTo: 'dashboard' } // Redirect unknown routes to Dashboard
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
