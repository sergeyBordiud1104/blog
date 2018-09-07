export class Post {
  _id: string;
  title: string;
  author: string;
  content: string;
  image: string;
  description: string;

  constructor(post: Post) {
    this._id = post._id;
    this.title = post.title;
    this.author = post.author;
    this.content = post.content;
    this.image = post.image;
    this.description = post.description;
  }
}
