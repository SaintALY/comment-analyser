(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = ""

    // recieves message from background.js
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;

        if (type === "NEW") {
            currentVideo = videoId;
            newVideoLoaded();
        }
    });

    const newVideoLoaded = () => {
        var commentSection = document.getElementsByClassName("ytd-comments")
        var commentExplorer = commentSection['sections']
        var commentSectionLength = document.querySelector("#contents").childElementCount
        var commentAuthor = commentSection['sections']
        
        document.querySelector("#contents")
        // var commentAuthor = commentSection['sections']['items_'][0]['commentThreadRenderer']['comment']['commentRenderer']['authorText']['simpleText']
        // var commentText = commentSection['sections']['items_'][0]['commentThreadRenderer']['comment']['commentRenderer']['contentText']['runs'][0]['text']
        
        console.log("LOOK AT ME //////// LOOK AT ME ///////// LOOK AT ME");
        console.log("LOOK AT ME //////// LOOK AT ME ///////// LOOK AT ME");
        console.log("LOOK AT ME //////// LOOK AT ME ///////// LOOK AT ME");
        console.log("LOOK AT ME comsec ", commentSection);
        console.log("LOOK AT ME comexp ", commentExplorer);
        console.log("LOOK AT ME comlen ", commentSectionLength);
        console.log("LOOK AT ME comaut ", commentAuthor);
        // console.log(commentText);
        console.log("LOOK AT ME //////// LOOK AT ME ///////// LOOK AT ME");
        console.log("LOOK AT ME //////// LOOK AT ME ///////// LOOK AT ME");
        console.log("LOOK AT ME //////// LOOK AT ME ///////// LOOK AT ME");
        // YT comment author, text
            // ytComments = document.getElementsByClassName('ytd-comments')
            // author = ytComments['sections']['items_'][0]['commentThreadRenderer']['comment']['commentRenderer']['authorText']['simpleText']
            // commentText = ytComments['sections']['items_'][0]['commentThreadRenderer']['comment']['commentRenderer']['contentText']['runs'][0]['text']
    }
})();
