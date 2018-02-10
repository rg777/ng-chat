export class Message
{
    public fromId: any;
    public toId: any;
    public message?: string;
    public card?: {
        date?: string;
        timing?: string;
        locations?: any;
        confidence?: string;
        color?: string;
        raw_data?: any;
        selected?: boolean
        subject?: string;
        message?: string;
        booked?: boolean;
        participants?: any;
    };
    public seenOn?: Date;
}
