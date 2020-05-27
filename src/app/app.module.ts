import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventPageComponent } from './eventPage/eventPage.component';
import { EventChatComponent } from './eventChat/eventChat.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';
import { ManagerComponent } from './manager/manager.component';
import { EventListComponent } from './event-list/event-list.component';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'event/:id', component: EventPageComponent },
  { path: 'manager', component: ManagerComponent },
  { path: '**', redirectTo: ''}

];

@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    EventChatComponent,
    ManagerComponent,
    EventListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(config)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
