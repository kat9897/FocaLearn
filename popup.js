const handleNotes = (event) => {
  var notes = event.target.value
  chrome.storage.local.set({"notes": notes})
}

document.addEventListener("DOMContentLoaded", async (event) => { 
  var notes = document.getElementById("notes")
  await chrome.storage.local.get("notes", (value) => {
    var stored_notes = value.notes
    if (typeof stored_notes == "string") {
      notes.value = stored_notes
    } else {
      notes.value = ""
    }
  })
  document.getElementById("notes").addEventListener("input", (event) => {
    handleNotes(event)
  })
});