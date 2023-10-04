export class ChatInfo
{
    messages: Message[];

    constructor() {
        this.messages = [];
    }
}

export class Message
{
    context: string;
    isMine: boolean;
    username?: string

    constructor(context: string, isMine: boolean, username?: string) {
        this.context = context;
        this.isMine = isMine;
        this.username = username;
    }
}
