//YOUR FIREBASE LINKS

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

var  user_name= localStorage.getItem("chat");

var Croom = localStorage.getItem("room_name");


function Csend(){
      var Cmesg = document.getElementById("Cmessage").value;
      firebase.database().ref(Croom).push({
          Cname:user_name,
          Cmsg:Cmesg,
          Clike:0  
      });
      document.getElementById("Cmessage").innerHTML="";
}




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

Cname:message_data['Cname'];
Cmsg:message_data['Cmsg'];
Clike:message_data['Clike'];

var display_name= "<h3>"+ICame+ "<img class='user_tick' src='tick.png'> </h3>";

var display_msg=  "<h4 class='message_h4'>"+Cmsg+"</h4>";

var display_like_button=  "<button class= 'btn btn-warning' id="+firebase_message_id+" value="+Clike+" onclick='update_like(this.id)'>";
      var span_span=  "<span class= 'glyphicon glyphicon-thumbs-up'>Like: "+Clike+"</span> </button> <hr>";

var I_all=  display_name+display_msg+display_like_button+span_span;

document.getElementById("Chatalot").innerHTML=I_all;//Changes being made



//End code
      } });  }); }
getData();


function update_like(messg_ID){
      console.log(messg_ID);
      var BUTN_ID=  messg_ID;
       var LIKES=  document.getElementById(BUTN_ID).value;
       var Number_LIKE=  Number(LIKES)+ 1;
      
       firebase.database().ref(Croom).child(messg_ID).update({
            Ilike: Number_LIKE
        });
      }
      
      function logout(){
            localStorage.removeItem("Iname");
            localStorage.removeItem("RoomIname");
            window.location = "Idex.html";
            }// Now code end