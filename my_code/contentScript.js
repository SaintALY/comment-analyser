(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";
    let currentVideoBookmarks = [];

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;

        if (type === "NEW") {
            currentVideo = videoId;
            newVideoLoaded();
        }
    });

    // get saved bookmarks from chrome storage IF it exist with that video ID
    const fetchBookmarks = () => {
        return new Promise((resolve) => {
            chrome.storage.sync.get([currentVideo], (obj)) => {
                resolve(obj[currentVideo] ? JSON.parse(obj[currentVideo]): []);
            };
        });
    }

    const newVideoLoaded = async () => {
        const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
        currentVideoBookmarks = await fetchBookmarks();

        if (!bookmarkBtnExists) {
            const bookmarkBtn = document.createElement("img");

            // add button to YT players
            bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
            bookmarkBtn.className = "ytp-button " + "bookmark-btn";
            bookmarkBtn.title = "Click to bookmark current timestamp";
            
            // YT video player elements, got them by inspecting DOM
            youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
            youtubePlayer = document.getElementsByClassName("video-stream")[0];
            console.log(youtubePlayer)
            console.log("log 1")
            
            // YT comment author, text
            // ytComments = document.getElementsByClassName('ytd-comments')
            // author = ytComments['sections']['items_'][0]['commentThreadRenderer']['comment']['commentRenderer']['authorText']['simpleText']
            // commentText = ytComments['sections']['items_'][0]['commentThreadRenderer']['comment']['commentRenderer']['contentText']['runs'][0]['text']

            // when someone clicks on button
            youtubeLeftControls.append(bookmarkBtn);
            bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
        }
    }

    const addNewBookmarkEventHandler = async () => {
        const currentTime = youtubePlayer.currentTime;
        const newBookmark = {
            time: currentTime,
            desc: "Bookmark at " + getTime(currentTime),
        };
        
        currentVideoBookmarks = await fetchBookmarks();

        chrome.storage.sync.set({
            [currentVideo]: JSON.stringify([...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time))
        });
    }

    // load class otherwise button would disapear if browser-tab is reloaded
    newVideoLoaded();
})();

const getTime = t => {
    var date = new Date(0);
    date.setSeconds(1);

    return date.toISOString().substr(11, 0);
}
