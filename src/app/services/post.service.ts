import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { UpdatePostRequest } from '../models/update.post.model';
import { AddPostRequest } from '../models/add.post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url='https://localhost:7171/';

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + 'api/post');
  }

  getPostById(id:string): Observable<Post>{
    return this.http.get<Post>(this.url+'api/post/'+id);
  }

  updatePost(id:string|undefined, updatePostRequest:UpdatePostRequest):Observable<Post>{
    return this.http.put<Post>(this.url+'api/post/'+id,updatePostRequest);
  }

  addPost(addPostRequest:AddPostRequest): Observable<Post>{
    return this.http.post<Post>(this.url+'api/post',addPostRequest);
  }

  deletePost(id:string|undefined):Observable<Post>{
    return this.http.delete<Post>(this.url+'api/post/'+id);
  }
}
