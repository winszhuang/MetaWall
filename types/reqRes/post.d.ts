interface PostData {
  content: string,
  image?: string
}

interface GetSinglePostRes {
  _id: string,
  content: string,
  image?: string,
  likes: string[],
  user: getUserRes,
  createdAt: string
}

interface AddSinglePostReq extends PostData {}

type AddSinglePostRes = any

interface EditPostReq extends PostData {}

