class Message{
    constructor(sender){
        this.sender = sender
    }
    sendMessage(reciever, message){
        console.log(`${message}, dikirim oleh ${reciever}`)
    } 
}

//pewarisan
class MyMessage extends Message{
    sendDelayMessage(message, reciever){
        this.sendMessage(message, reciever)
    }
}


const message = new MyMessage("Made")

message.sendDelayMessage("made", "halooo")