interface GetSinglePostRes {
  _id: string,
  content: string,
  image?: string,
  likes: string[],
  author: getUserRes,
  createdAt: string
}