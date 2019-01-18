import React, { Component } from 'react'; 
import MessageList from "../components/Messaging/MessageList";
import SendMessage from "../components/Messaging/SendMessage";
import RoomList from "../components/Messaging/RoomList";
import NewRoomForm from "../components/Messaging/NewRoomForm";

class Mailbox extends Component {
  render() {
    return (
      <div>
        <RoomList />
        <MessageList />
        <SendMessage />
        <NewRoomForm />
      </div>
    );
  }
}

export default Mailbox;