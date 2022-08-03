chrome.tabs.onUpdated.addListener((tabId, tab) => {
    // console.log("Tab: ", tab);
    // not sure what the tab does

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        const url = tabs[0].url;

        if (url.includes("youtube.com/watch")) {
            const queryParameters = url.split("?")[1];
            const urlParameters = new URLSearchParams(queryParameters);
            console.log("Tab ID: ", tabId);
            // console.log("Query Para: ", queryParameters);
            console.log("Video ID: ", urlParameters.get("v"));

            // send message to content script with the video ID
            chrome.tabs.sendMessage(tabId, {
              type: "NEW",
              videoId: urlParameters.get("v"),
            });
        }
    });
});
