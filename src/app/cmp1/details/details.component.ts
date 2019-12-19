import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detail: any;
  user:any
  constructor(private detailService: DetailsService) { }

  ngOnInit() {
    this.detailService.getDetails()
      .subscribe(
        data => {
          this.detail = data['data']
          this.user = data;
          console.log(data);
          console.log(this.user);
        }
      )
  }
}
