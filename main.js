console.log('Duckies and Bunnies');


var people = [{name: 'John Doe', title: '- Professor of English', building: 'Main', officeNumber: "203", phone: "404-555-5555", email: "John@Emory.com", departments: "Humanities | English", photo: "userOne.jpeg"},
             {name: 'Bob Smith', title: '- Dean of Students', building: 'Administration', officeNumber: '441', phone: "404-555-5343", email: "Bob@Emory.com", departments: "Administration", photo: "userTwo.jpeg"},
             {name: 'Sally Jones', title: '- Professor of Physics', building: 'Math and Physics', officeNumber: "567", phone: "404-555-1212", email: "Sally@Emory.com", departments: "Physics | Math", photo: "userThree.jpeg"},
             {name: 'Rachel Ray', title: '- Professor of History', building: 'Main', officeNumber: "101", phone: "404-555-1266", email: "Rachel@Emory.com", departments: "History", photo: "userSix.jpeg"},
             {name: 'Tommy Holmes', title: '- Student', building: 'Main', officeNumber: "none", phone: "404-555-7899", email: "Tommy@Emory.com", departments: "English", photo: "userFive.jpeg"}];




  

  for (i=0;i<people.length;i++){
  	
  	$('.dirPage').append('<div class="dirPerson"><div class="dirPhoto"><img src="images/'+people[i].photo+'"></div><div class="dirNameTitle">'+people[i].name + ' ' +people[i].title+'</div><div class="dirOtherInfo">'+people[i].building +' ' + people[i].officeNumber + '</br>' + people[i].phone + '</br>' +people[i].email + '</br>' + people[i].departments + '</div></div>');
    
  }

 