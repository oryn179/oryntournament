
export interface Editor {
  id: string;
  name: string;
  avatar: string;
  votes: number;
}

export interface User {
  username: string;
  githubId: string;
  votedFor?: string;
  role: 'user' | 'admin';
}

export interface GiftVote {
  id: string;
  username: string;
  stars: number;
  votesAdded: number;
  timestamp: string;
}

export interface Rating {
  id: string;
  username: string;
  score: number;
  comment: string;
  timestamp: string;
}
