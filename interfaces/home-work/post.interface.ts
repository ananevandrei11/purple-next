export interface PostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string
}
