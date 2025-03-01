import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {IPost} from "../create-post/ipost";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserPostsService {

  private url: string = environment.apiUrl + "/posts";

  constructor(private http: HttpClient) { }

  getPost(id) {
    return this.http.get<IPost>(this.url + '/' + id);
  }

  getPosts(){
    return this.http.get<IPost[]>(this.url + '/author');
  }

  getAllPosts() {
    return this.http.get<IPost[]>(this.url + '/');
  }

  deletePost(id){
    return this.http.delete(this.url + '/' + id);
  }

  handleLike(id) {
    return this.http.post(this.url + '/' + id + '/like', []);
  }
}
