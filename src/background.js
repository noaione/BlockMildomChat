chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.info("WebSocket Detected", details["url"]);
        const isMatching = details["url"].match(/ws{2}\:\/{2}.*room.*\.mildom\.com\/.*/);
        if (Array.isArray(isMatching) && isMatching.length > 0) {
            console.info("--> Blocking ChatRoom WS:", details["url"])
            return {cancel: true};
        }
        return {cancel: false}
    },
    {
        urls: ["wss://*.mildom.com/*"]
    },
    ["blocking"]
)