import { getSingleUserRes } from './user'

interface getOneFollowingUserRes extends getSingleUserRes {
  followedAt: string,
  followId: string
}
