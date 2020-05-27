import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor(private documentService: DocumentService,
    private videoService: VideoService) { }

  ngOnInit(): void {
  }

  newBox(id) {
    this.documentService.getManager(id);
  }

  newVideo(id) {
    this.videoService.getVideo(id);
  }


}
