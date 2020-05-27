import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from '../document.service';
import { Observable, Subscription, interval } from 'rxjs';
import { VideoService, Video } from '../video.service';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-eventPage',
  templateUrl: './eventPage.component.html',
  styleUrls: ['./eventPage.component.scss']
})
export class EventPageComponent implements OnInit {

  public player: any;
  public playing: boolean = false;
  public startManager: Video = { id: 1, url: '7EdpBH81XIY' }
  public managerSelect;

  constructor(private videoService: VideoService) { }

  ngOnInit() {

    this.videoService.currentVideo.pipe(
      startWith(this.startManager)
    ).subscribe(
      (data) => {
        this.managerSelect = data.url;
        if (this.playing === true) {
          this.player.destroy();
        }
        this.playVideos(this.managerSelect);
      }
    )
    // this.playVideos('Vfg_kSWQIxY');
  }

  playVideos(video: any) {
    const YTPlayer = require('yt-player');
    this.player = new YTPlayer('#youtube', {
      height: '100%',
      width: '100%'
    });

    this.player.load(video, true);

    interval(1000).subscribe(
      (val) => {
        if (this.playing === false) {
          this.player.play();
        }
      });

    this.player.on('playing', () => {
      this.playing = true;
      const segs = this.player.getDuration();
    })

  }

}
