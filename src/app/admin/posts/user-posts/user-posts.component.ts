import { Component, OnInit } from '@angular/core';
import { UserPostsService} from "./user-posts.service";
import {IPost} from "../create-post/ipost";
import {Meta, Title} from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  private post: IPost
  public posts = [];
  public pageOfPosts: Array<any>;

  constructor(private srvc: UserPostsService, private title: Title , private meta: Meta, private router: Router) { }

  ngOnInit(): void {
    this.title.setTitle('Your Posts');
    this.meta.updateTag({ name: 'description', content: 'Users list of posts' });
    this.srvc.getPosts().subscribe( data => {
      this.posts = data;
    });
  }

  deletePost(id){
    this.srvc.deletePost(id).subscribe(data => {
      this.router.navigate(['/admin/posts']);
      console.log("success");
    })
  }

  onChangePage(pageOfPosts: Array<any>) {
    // update current page of items
    this.pageOfPosts = pageOfPosts;
  }

}
