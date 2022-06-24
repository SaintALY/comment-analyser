chrome.tabs.onUpdated.addListener((tabId, tab) => {
    // work around to get URL
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!

        // get YT parameters through URL
        if (url.includes("youtube.com/watch")) {
            const queryParameters = url.split("?")[1];
            const urlParameters = new URLSearchParams(queryParameters);
            console.log(urlParameters);
  
            chrome.tabs.sendMessage(tabId, {
                type: "NEW",
                videoId: urlParameters.get("v"),
            });
        }
    });

    // if (tab.url && tab.url.includes("youtube.com/watch")) {
    //   const queryParameters = tab.url.split("?")[1];
    //   const urlParameters = new URLSearchParams(queryParameters);
    //   console.log(urlParameters);
  
    //   chrome.tabs.sendMessage(tabId, {
    //     type: "NEW",
    //     videoId: urlParameters.get("v"),
    //   });
    // }
  });
