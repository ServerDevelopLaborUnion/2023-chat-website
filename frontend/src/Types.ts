export class ChatInfo
{
    msg: string;
    username?: string;
    other: boolean;

    constructor(msg: string, other: boolean, username?: string)
    {
        this.msg = msg;
        this.username = username;
        this.other = other;
    }
}