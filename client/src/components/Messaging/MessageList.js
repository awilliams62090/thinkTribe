import React, { Component } from 'react'

const DUMMY_DATA = [
    {
        senderId: "Alyssa", 
        text: "Test 1"
    }, 
    {
        senderId: "Greg", 
        text: "Test 2"
    }, 
    {
        senderId: "Alyssa", 
        text: "Test 3"
    }
]

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        {DUMMY_DATA.map((message, index) =>{
            return(
                <div>
                    <div>{message.senderId}</div>
                    <div>{message.text}</div>
                </div>
            )
        })}
      </div>
    );
  }
}

export default MessageList;