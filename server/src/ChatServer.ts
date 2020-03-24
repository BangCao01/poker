import * as express from 'express';
import * as socketIo from 'socket.io';
import { ChatEvent } from './constants';
import { ChatMessage,LoginMessage, CardMessage } from './types';
import { createServer, Server } from 'http';
import RoomManager from './commons/RoomManager';
import Room from './commons/Room';

var cors = require('cors');

export class ChatServer {
  public static readonly PORT: number = 8080;
  private _app: express.Application;
  private server: Server;
  private io: SocketIO.Server;
  private port: string | number;
  private roomManager: RoomManager;

  constructor () {
    this._app = express();
    this.port = process.env.PORT || ChatServer.PORT;
    this._app.use(cors());
    this._app.options('*', cors());
    this.server = createServer(this._app);
    this.roomManager = new RoomManager();
    this.roomManager.generateRoom();
    this.initSocket();
    this.listen();
  }

  private initSocket (): void {
    this.io = socketIo(this.server);
  }

  private listen (): void {
    this.server.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });

    this.io.on(ChatEvent.CONNECT, (socket: any) => {
      console.log('Connected client on port %s.', this.port);

      const room: Room = this.roomManager.getARoom();
      socket.join(room.getRoomName());
      // var tempBuffer = Buffer.from('hello world', 'ascii');
      this.io.to(room.getRoomName()).emit('start_game', {message:'an user connected'});

      socket.on(ChatEvent.LOGIN, (m: LoginMessage) => {
        console.log('[server](message): %s', JSON.stringify(m));
        const username = m.username;
        const password = m.password;
        const player = room.addWith(username, password);
        let cardMessage: any = {};
        cardMessage.cards = player.getCards();
        cardMessage.positionId = player.GetPositionId();
        this.io.emit('loginMessage', cardMessage);
      });

      socket.on(ChatEvent.MESSAGE, (m: ChatMessage) => {
        console.log('[server](message): %s', JSON.stringify(m));
        this.io.emit('message', m);
      });



      socket.on(ChatEvent.DISCONNECT, () => {
        console.log('Client disconnected');
      });
    });
  }

  get app (): express.Application {
    return this._app;
  }
}
