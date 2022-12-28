//ADD YOUR FIREBASE LINKS

const firebaseConfig = {
  apiKey: "AIzaSyAeXP1WhCF1yY6VgwdA9N2Dxoe-ekprWLI",
  authDomain: "chatlogican.firebaseapp.com",
  databaseURL: "https://chatlogican-default-rtdb.firebaseio.com",
  projectId: "chatlogican",
  storageBucket: "chatlogican.appspot.com",
  messagingSenderId: "218831093303",
  appId: "1:218831093303:web:534f04868095adf12d89b2"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("chat");
document.getElementById("Welcoming").innerHTML = "Welcome " + user_name + "!";

function addchatnation() {
  room_name = document.getElementById("RoomCname").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });
  

  localStorage.setItem("room_name", room_name);

  window.location = "Chatty.html";
}

function Datagetter() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("roomdisplayC").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)' >#" +
          Room_names +
          "</div><hr>";

        document.getElementById("roomdisplayC").innerHTML += row;
      });
    });
}

Datagetter();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Chatty.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "chatnation.html";
}
