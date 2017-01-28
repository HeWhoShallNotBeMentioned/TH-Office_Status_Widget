

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    //console.log(typeof employees);
    //console.log(employees);
    var statusHTML = '<ul class="bulleted">';
    for (var i = 0; i < employees.length; i += 1) {
      if(employees[i].inoffice === true){
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
      //console.log(statusHTML);
      document.getElementById('employeeList').innerHTML = statusHTML;
  }

};
xhr.open('GET', 'data/employees.json');
xhr.send();


var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
  if (xhr2.readyState === 4) {
    var rooms = JSON.parse(xhr2.responseText);
    console.log(typeof rooms);
    console.log(rooms);
    var statusHTML2 = '<ul class="rooms">';
    for (var j = 0; j < rooms.length; j += 1) {
      if(rooms[j].available === true){
        console.log("inside room available");
        statusHTML2 += '<li class="empty">';
      } else {
        statusHTML2 += '<li class="full">';
      }
      statusHTML2 += rooms[j].room;
      statusHTML2 += '</li>';
    }
    statusHTML2 += '</ul>';
      console.log(statusHTML2);
      document.getElementById('roomList').innerHTML = statusHTML2;
  }

};
xhr2.open('GET', 'data/rooms.json');
xhr2.send();
