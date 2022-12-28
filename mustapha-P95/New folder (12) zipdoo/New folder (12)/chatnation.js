function ChatA(){
    var chat=document.getElementById("Chat").value;
    localStorage.setItem("chat",chat);
    window.location="chatroom.html";
}