import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import { CommentPage } from '../../commentPage';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../comment';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../../services/token-storage.service';
import {C} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {
  constructor(private commentService: CommentService, private tokenStorageService: TokenStorageService) { }

  @Input() PAGE_ID: number;
  comments: Comment[];
  showCommentForm = false;
  message: string;

  ngOnInit(): void {
    this.commentService.getComments(this.PAGE_ID).subscribe(res => this.comments = res);
    console.log(this.tokenStorageService.getToken());
  }

  showForm(): void {
    if (this.tokenStorageService.getToken() === null) {
      alert('You need to login to write comments');
    } else {
      this.showCommentForm = true;
    }
  }

  changeVote(comment: Comment, delta: number) {
  }

  writeComment(): void {
    this.commentService.writeComment(this.message, this.PAGE_ID);
    window.location.reload();
  }

  deleteComment(comment: Comment): void {
  }
}
