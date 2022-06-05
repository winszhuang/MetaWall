interface User {
  _id: string,
  name: string,
  avatar: string,

}

interface Post {
  user: User,
  avatar: string,
  createdAt: string,
  updatedAt?: string,
  content: string,
  image?: string,
  likes: number,
  _id: string
};
