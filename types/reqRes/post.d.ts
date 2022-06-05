import { getSingleUserRes } from './user'

interface GetSinglePostRes {
  content: string,
  updatedAt: string,
  createdAt: string
  image?: string,
  likes: getSingleUserRes[],
  user: getSingleUserRes,
  _id: string,
  comments: GetSinglePostRes[]
}

interface AddSinglePostReq extends PostData {}

type AddSinglePostRes = any

interface EditPostReq extends Partial<PostData> {}
