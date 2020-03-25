export interface ChatMessage {
  author: string;
  message: string;
}

export interface LoginMessage {
  password: string;
  username: string;
}


export interface ChatState {
  input: string;
  messages: ChatMessage[];
}

export interface LoginState {
  password: string;
  username: string;
}

export interface CardMessage {
  cards: string;
  positionId: number;
  count: number;
}
export interface UserJoinRoomMessage {
  count: number;
}
