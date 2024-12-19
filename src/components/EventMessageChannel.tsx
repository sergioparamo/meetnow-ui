import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send } from "lucide-react";

interface Message {
  id: string;
  userId: string;
  content: string;
  timestamp: Date;
  userName: string;
  userAvatar?: string;
}

interface EventMessageChannelProps {
  eventId: string;
}

export function EventMessageChannel({ eventId }: EventMessageChannelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      userId: "user1", // In a real app, this would come from auth
      content: newMessage,
      timestamp: new Date(),
      userName: "John Doe", // In a real app, this would come from auth
    };

    setMessages([...messages, message]);
    setNewMessage("");
    console.log("Message sent:", message);
  };

  return (
    <div className="border rounded-lg p-4 space-y-4">
      <h3 className="font-semibold text-lg">Event Chat</h3>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={message.userAvatar} />
                <AvatarFallback>{message.userName[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{message.userName}</span>
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex gap-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <Button onClick={handleSendMessage} size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
