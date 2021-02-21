// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

function Start(song) {
  song.play();
  }
  
  function Pause(song) {
  song.pause();
  }
  
  function Restart(song) {
  song.currentTime = 0;
  }
  
  document.addEventListener('DOMContentLoaded', function(){
  var Start_Music = document.getElementById('StartMusic');
  var Pause_Music = document.getElementById('PauseMusic');
  var Restart_Music = document.getElementById('RestartMusic');
  
  Start_Music.addEventListener('click', function() {
      Start(softMusic);
  });
  Pause_Music.addEventListener('click', function() {
      Pause(softMusic);
  });
  Restart_Music.addEventListener('click', function() {
      Restart(softMusic);
  });
  });