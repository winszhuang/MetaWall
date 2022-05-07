export const postCategory = [
  { 
    name: '最新貼文', 
    queryString: 'dateSort=-1',
    queryKey: 'dateSort',
    id: 'last' 
  },
  { 
    name: '最舊貼文', 
    queryString: 'dateSort=1',
    queryKey: 'dateSort',
    id: 'old' 
  },
  { 
    name: '最多讚數', 
    queryString: 'likesSort=-1', 
    queryKey: 'likesSort',
    id: 'mostlike' 
  },
  { 
    name: '最少讚數', 
    queryString: 'likesSort=1', 
    queryKey: 'likesSort',
    id: 'lesslike' 
  }
];