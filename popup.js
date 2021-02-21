// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

// Open link in new tab
// const openLinkInNewTab = (event) => {
//   event.preventDefault()
//   chrome.tabs.create({url: event.target.href, active: false});
//   return false
// }

// Open all links with target=_blank in new tab
// document.querySelector('a[target="_blank"]').addEventListener('click', (event) => {
//   openLinkInNewTab(event)
// })