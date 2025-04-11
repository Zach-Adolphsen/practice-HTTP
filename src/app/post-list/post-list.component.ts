import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-post-list',
  imports: [RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  postService = inject(DataService);
  posts: Post[] = [];

  ngOnInit() {
    // this.postService.getPosts().subscribe((data) => (this.posts = data));
    this.postService
      .getPosts()
      .pipe(
        map((posts: Post[]) =>
          posts.filter((post) => post.title.toLowerCase().includes('dolorem'))
        )
      )
      .subscribe((data) => (this.posts = data));
  }

  addPost() {
    this.postService.addPost().subscribe((data) => console.log(data));
  }
}
