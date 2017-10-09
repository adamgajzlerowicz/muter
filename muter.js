let mutedBecauseOfCommercial = false;
let muteButton = undefined;
let commercialElement = undefined;

setInterval(() => {
    try {
        muteButton = document.getElementsByClassName('ytp-mute-button')[0];
        commercialElement = document.getElementsByClassName('ad-interrupting')[0]
    } catch (e) {
        console.log('no mute button found');
        return;
    }

    if (commercialElement) {
        mutedBecauseOfCommercial = true;
        if (muteButton.getAttribute('title') === 'Mute') {
            muteButton.click();
        }
        return;
    }
    if (mutedBecauseOfCommercial && muteButton.getAttribute('title') === 'Unmute') {
        muteButton.click();
    }
}, 1000);