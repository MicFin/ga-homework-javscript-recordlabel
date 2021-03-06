// // namespace for our application
// var EventLab = EventLab || {};
var RCApp = {

	recordCompany: function(name) {
   this.name = name;
   this.artists = [];
   this.albums = [];   
  },

  album: function(title, description, genre) {
    this.title = title;
    this.description = description;
    this.genre = genre;
    this.artists = [];
  },

  artist: function(name, description) {
    this.name = name;
    this.description = description;
  },

  artistButton: document.getElementById('add-artist'),
  albumButton: document.getElementById('add-album'),

  setButtonEvent: function() {
    RCApp.artistButton.addEventListener('click', RCApp.promptNewArtist);
    RCApp.albumButton.addEventListener('click', RCApp.promptNewAlbum);
  },

  promptNewAlbum: function() {
  	var title = prompt("Enter album title:"),
    	description = prompt("Enter album description:"),
    	genre = prompt("Enter album genre"),
    albums = document.getElementById("albums"),
    albumsDesc = document.getElementById("album-desc");
    albums.innerHTML += "<li id='title-"+title + "'>" + "<h3>" + title + "</h3>" + "</li>"
    albumsDesc.innerHTML += "<div id='desc-" + title + "'>" + "<h4>"+ "Genre:" + "</h4>" + "<h5>"+genre +"</h5>" + "<h4>"+ "Description:" + "</h4>" + "<h5>"+description +"</h5>" + "</div>"
  },

  promptNewArtist: function() {
    var name = prompt("Enter artist name:"),
      description = prompt("Enter artist description:");
    artists = document.getElementById("artists"),
    artistDesc = document.getElementById("artist-desc");
    artists.innerHTML += "<li id='name-"+name + "'>" + "<h3>" + name + "</h3>" + "</li>"
    artistDesc.innerHTML += "<div id='desc-" + name + "'>" + "<h4>"+ "Description:" + "</h4>" + "<h5>"+description +"</h5>" + "</div>"
  },

// EventLab.button1 = document.getElementById('button1');
// // All the different types of events
// // https://developer.mozilla.org/en-US/docs/Web/Reference/Events#Standard_events
// // http://www.w3.org/TR/DOM-Level-3-Events/#event-interfaces

// // 0) Show the inline event handler in the index.html

// // 1) Simple event handler
// //EventLab.button1.addEventListener('click', function(){
// // 	alert('You clicked the button');
// // });

// // 2) Abstract out the 2 ways to catch/handle an event
// // register button1 click handler.
// // registerEventHandler(button1, "click", showEvent);

// // 3) Capture other events sent when clicking on the button.	
// // Note the order of the events sent/generated.
// // registerEventHandler(button1, "dblclick", showEvent);
// // registerEventHandler(button1, "mousedown", showEvent);
// // registerEventHandler(button1, "mouseup", showEvent);

// // 4) Show how events are 'bubbled up' to parent document elements.
// // register a handler on the whole document.
// // http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
// // Every click event on any element in the document will be 
// // "bubbled up" to the document
//  EventLab.body = document.getElementsByTagName('body')[0];
// // registerEventHandler(EventLab.body, "click", reportClick);

// // 4.1) Stop the event from bubbling up to parent elements in the 
// // DOM
//  // registerEventHandler(EventLab.button1, "click", showEvent);
//  // registerEventHandler(EventLab.button1, "click", stopEvent);
//  // registerEventHandler(EventLab.body, "click", reportClick);

// // 5) Generate an event in the chrome inspector/debugger.
// // document.getElementById('button1').click();

// // 6) Unregister event.
// // unregisterEventHandler(document, "click", reportClick);

// // 7) Register a handler for the text box keydown/up and keypress events.

// EventLab.text1 = document.getElementById('text1');
// //registerEventHandler(EventLab.text1, "keydown", printKeyCode);
// // unregisterEventHandler(EventLab.text1, "keydown", printKeyCode);

// // registerEventHandler(EventLab.text1, "keypress", printCharacter);

};

RCApp.setButtonEvent();
