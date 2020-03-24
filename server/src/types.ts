export interface ChatMessage {
  author: string;
  message: string;
}

export interface LoginMessage {
  password: string;
  username: string;
}

export interface CardMessage {
  cards: string;
  position: number;
}