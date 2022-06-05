interface PostData {
  content: string,
  image?: string
}

interface GetSinglePostRes {
  content: string,
  updatedAt: string,
  createdAt: string
  image?: string,
  likes: string[],
  user: getSingleUserRes,
  _id: string,
}

interface AddSinglePostReq extends PostData {}

type AddSinglePostRes = any

interface EditPostReq extends Partial<PostData> {}
