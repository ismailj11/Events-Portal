import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { ToolbarComponent } from './shared/component/toolbar/toolbar.component';
import { SidenavComponent } from './shared/component/sidenav/sidenav.component';
import { EventsComponent } from './shared/component/events/events.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EventDialogComponent } from './shared/component/events/event-dialog/event-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { UserEventListComponent } from './shared/component/events/event-list/user-event-list/user-event-list.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    SidenavComponent,
    EventsComponent,
    EventDialogComponent,
    UserEventListComponent,
    
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormField,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
