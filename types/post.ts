export interface Post {
  author: string,
  avator: string,
  createdAt: string,
  content: string,
  image?: string,
  likes: number,
  id: string
};

export interface Message extends Post {};