import { GenderEnum } from '@/enum/gender'

interface getSingleUserRes {
  _id: string,
  name: string,
  avatar: string
}

interface FollowData {
  user: string,
  _id: string,
  followedAt: string
}

interface getUserProfileRes {
  _id: string,
  name: string,
  gender: GenderEnum,
  avatar: string,
  following: FollowData[],
  followers: FollowData[],
  createdAt: string,
  updatedAt: string
}

interface updateUserProfileReq {
  avatar: string,
  name: string,
  gender: GenderEnum
}

interface updatePasswordReq {
  password: string,
  confirmPassword: string
}
