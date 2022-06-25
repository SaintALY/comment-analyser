(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;

        if (type ==="NEW") {
            currentVideo = videoId;
            newVideoLoaded();
        }
    });
})

// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//     // work around to get URL
//     console.log(tab.url)
//     chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//         const url = tabs[0].url;
//         console.log("URL is coming: ")
//         console.log(url)
//     });
//         // use `url` here inside the callback because it's asynchronous!

//         // get YT parameters through URL
//     if (url.includes("youtube.com/watch")) {
//         const queryParameters = url.split("?")[1];
//         const urlParameters = new URLSearchParams(queryParameters);
//         console.log(urlParameters);

//         chrome.tabs.sendMessage(tabId, {
//             type: "NEW",
//             videoId: urlParameters.get("v"),
//         });
//     }
    
//     // if (tab.url && tab.url.includes("youtube.com/watch")) {
//     //   const queryParameters = tab.url.split("?")[1];
//     //   const urlParameters = new URLSearchParams(queryParameters);
//     //   console.log(urlParameters);
  
//     //   chrome.tabs.sendMessage(tabId, {
//     //     type: "NEW",
//     //     videoId: urlParameters.get("v"),
//     //   });
//     // }
//   });
