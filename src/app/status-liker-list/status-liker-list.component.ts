import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../model/IUser';
import {LikePostService} from '../service/like-post.service';

@Component({
  selector: 'app-status-liker-list',
  templateUrl: './status-liker-list.component.html',
  styleUrls: ['./status-liker-list.component.scss']
})
export class StatusLikerListComponent implements OnInit {

  constructor(private likePostService: LikePostService) { }

  ngOnInit(): void {
    this.getLikerList();

  }
  @Input() postId;
  likerList: IUser[];

  getLikerList() {
    this.likePostService.findLikerByPostId(this.postId).subscribe(
      res => {
        this.likerList = <IUser[]> res;
      }
    )
  }
}
