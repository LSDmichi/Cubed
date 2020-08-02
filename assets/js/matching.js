import "phoenix_html"
import {Socket} from "phoenix"

let socket = new Socket("/matching", {params: {token: window.userToken}})
console.log("test");
socket.connect()

let lobby_channel = socket.channel("room:matching", {});
let chatInput = document.querySelector("#chat-input"); 
let messagesContainer = document.querySelector("#messages"); 

chatInput.addEventListener("keypress", event => {
  if(event.keyCode === 13){ 
    lobby_channel.push("new_msg", {body: chatInput.value}); 
    chatInput.value = ""; 
  }
});

lobby_channel.on("rival_found", payload => {
  let messageItem = document.createElement("li")
  messageItem.innerText = `[${Date()}] ${payload.body}`
  messagesContainer.appendChild(messageItem) 
})

lobby_channel.join()
  .receive("ok", resp => { console.log("Joined successfully", resp) })
  .receive("error", resp => { console.log("Unable to join", resp) })


export default socket
