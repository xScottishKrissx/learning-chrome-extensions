chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Sample Context Menu",
      "contexts": ["selection"]
    });
  });

  chrome.runtime.onInstalled.addListener(function() {
    // ERROR! Events must be registered synchronously from the start of
    // the page.
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
      });
  });