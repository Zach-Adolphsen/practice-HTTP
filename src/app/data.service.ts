import { inject, Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);
  url = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<Post[]> {
    // const params = new HttpParams().set('_limit', 20);
    return this.http.get<Post[]>(this.url);
  }

  getPostById(id: number): Observable<Post> {
    // const params = new HttpParams().set('id', id);
    // return this.http.get<Post[]>(this.url, { params });

    return this.http.get<Post>(`&{this.url}/${id}`);
  }

  addPost() {
    const post = {
      id: 101,
      userId: 1000,
      title: 'dolerum dolerum',
      body: 'adadsofijeoi',
    };

    return this.http.post(this.url, post);
  }
}
