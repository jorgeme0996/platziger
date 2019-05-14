import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {
  friendId: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.friendId = this.activatedRoute.snapshot.params['id']
   }

  ngOnInit() {
  }

}
