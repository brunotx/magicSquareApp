import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

public currentManager = this.socket.fromEvent<Manager>('manager');

  constructor(private socket: Socket) { }


  getManager(id: string) {
    this.socket.emit('getManager', id);
  }
}

export class Manager {
  id: number;
  title: string;
}