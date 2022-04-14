const createImg = (src) => {
    let img = document.createElement('img');
    img.src = src;
    img.addEventListener("click", e => navigator.clipboard.writeText(e.target.currentSrc));
    return img;
}

chrome.tabs.query({ active: true, currentWindow: true }).then(tab => {
    chrome.scripting.executeScript({
        target: { tabId: tab[0].id },
        files: ['script.js']
    }).then(() => {
        chrome.storage.local.get('images', ({images}) => {
            if (images !== null) {
                document.getElementById("main").innerHTML = '';
                for (let i = 0; i < images.length; i++) {
                    document.getElementById("main").appendChild(createImg(images[i]));
                }
            }
        });
    })
})