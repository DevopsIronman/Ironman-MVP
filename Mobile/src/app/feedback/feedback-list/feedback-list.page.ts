import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../service/lead.service'

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.page.html',
  styleUrls: ['./feedback-list.page.scss'],
})
export class FeedbackListPage implements OnInit {
  feedbacks;
  constructor(public leadService: LeadService) { }

  ngOnInit() {
    this.getFeedbacks();
  }

  getFeedbacks() {
    this.leadService.getFeedbacks().subscribe((res: any) => {
      if (res.success) {
        this.feedbacks = res.data;
      }
    });
  }

}
