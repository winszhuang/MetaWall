import { GenderEnum } from '@/enum/gender'

interface Id {
  _id: string
}

interface CreatedAndUpdatedAt {
  createdAt: string,
  updatedAt: string,
}

interface UserSchema extends Id, CreatedAndUpdatedAt{
  name: string,
  gender: GenderEnum,
  avatar: string,
  following: UserSchema[],
  followers: UserSchema[]
}

interface PostSchema extends Id, CreatedAndUpdatedAt{
  content: string,
  image: string,
  likes: UserSchema[],
  user: UserSchema,
  // eslint-disable-next-line no-use-before-define
  comments: CommentSchema
}

interface CommentSchema extends Id, CreatedAndUpdatedAt{
  post: PostSchema,
  content: string,
  image: string,
  user: UserSchema,
  likes: UserSchema[],
}
