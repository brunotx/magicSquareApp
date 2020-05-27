import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
    providedIn: 'root'
})
export class VideoService {

    public currentVideo = this.socket.fromEvent<Video>('video');

    constructor(private socket: Socket) { }


    getVideo(id: string) {
        this.socket.emit('getVideo', id);
    }
}

export class Video {
    id: number;
    url: string;
}