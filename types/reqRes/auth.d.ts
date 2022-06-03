interface PostData {
  content: string,
  image?: string
}

interface SignInReq {
  email: string,
  password: string
}

interface SignInRes {
  name: string,
  token: string
}

interface SignUpReq {
  password: string,
  email: string,
  name: string
}
