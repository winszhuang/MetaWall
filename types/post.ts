export interface LocalPost {
  userName: string,
  userAvatar: string,
  userId: string,
  createdAt: string,
  updatedAt: string,
  content: string,
  image: string,
  likes: Set<string>,
  id: string
};

export interface Message extends Post {};
