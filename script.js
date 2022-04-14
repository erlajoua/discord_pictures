(function main() {
    const images = document.querySelectorAll("img");

    if (images.length === 0) {
        chrome.storage.local.set({"images": null},() => {})
    } else {
        let array = [];
        for (let i = 0; i < document.querySelectorAll("img").length; i++) {
            array.push(document.querySelectorAll("img")[i].currentSrc);
        }
        chrome.storage.local.set({"images": array}, () => {})
    }
})();