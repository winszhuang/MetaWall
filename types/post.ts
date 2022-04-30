export interface Post {
  author: string,
  avator: string,
  createdAt: string,
  updatedAt: string,
  content: string,
  image: string,
  like: number,
  id: string
};

export interface Message extends Post {};