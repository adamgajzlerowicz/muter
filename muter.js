let mutedBecauseOfCommercial = false;
let muteButton = undefined;
let commercialElement = undefined;
let visualElement = undefined;

setInterval(() => {
    try {
        muteButton = document.getElementsByClassName('ytp-mute-button')[0];
        commercialElement = document.getElementsByClassName('ad-interrupting')[0];
        visualElement = document.getElementsByClassName('video-stream html5-main-video')[0];
        
    } catch (e) {
        console.log('no mute button found');
        return;
    }

    if (commercialElement) {
        mutedBecauseOfCommercial = true;
        visualElement.style.opacity = "0";

        if (muteButton.getAttribute('title') === 'Mute') {
            muteButton.click();
        }
        return;
    }
    if (mutedBecauseOfCommercial && muteButton.getAttribute('title') === 'Unmute') {
        muteButton.click();
        visualElement.style.opacity = "1";
    }
}, 750); // Catches the ad a bit sooner, nice for quieter videos or loud beginnings.