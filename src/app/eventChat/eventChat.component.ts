import { Component, OnInit } from '@angular/core';
import { DocumentService, Manager } from '../document.service';
import { startWith } from 'rxjs/operators';


@Component({
  selector: 'app-eventChat',
  templateUrl: './eventChat.component.html',
  styleUrls: ['./eventChat.component.scss']
})
export class EventChatComponent implements OnInit {


  public startManager: Manager = {id:1, title:'chat'}
  public managerSelect;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.currentManager.pipe(
      startWith(this.startManager)
    ).subscribe(
      (data) => { this.managerSelect = data.title });
  }

}
