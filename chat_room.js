function addRoom()
{
   document.getElementById("Room_name", Room_name);
   localStorage.setItem("Room_name", "");
   firebase.setItem("Room_name", "");
}

function redirectToRoomName()
{
   localStorage.setItem("Room_name", "");
   window.location.href = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = 
"";snapshot.forEach (function(childSnapshot) {childKey = 
    childSnapshot.key;
    Room_names = childKey;
    //Start code
    <div class="name" id="Room_names" onclick="redirectToRoomName(this.id)"></div>
    //End code
    });});}
   getData();