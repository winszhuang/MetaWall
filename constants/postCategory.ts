export interface CategoryInfo {
  name: string, 
  queryKey: string,
  queryValue: string,
  id: string 
}

export const postCategory: CategoryInfo[] = [
  { 
    name: '最新貼文', 
    queryKey: 'dateSort',
    queryValue: '-1',
    id: 'last' 
  },
  { 
    name: '最舊貼文', 
    queryKey: 'dateSort',
    queryValue: '1',
    id: 'old' 
  },
  { 
    name: '最多讚數', 
    queryKey: 'likesSort',
    queryValue: '-1',
    id: 'mostlike' 
  },
  { 
    name: '最少讚數', 
    queryKey: 'likesSort',
    queryValue: '1',
    id: 'lesslike' 
  }
];