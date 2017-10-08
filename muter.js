let mutedBecauseOfCommercial = false;

const watcher = setInterval(() => {
    if ($('.ad-interrupting').length) {
        mutedBecauseOfCommercial = true;
        if ($('.ytp-mute-button[title="Mute"')) {
            $('.ytp-mute-button[title="Mute"').click();
        }
        return;
    }
    if (mutedBecauseOfCommercial && $('.ytp-mute-button[title="Unmute"').length){
        $('.ytp-mute-button[title="Unmute"').click()
    }
}, 200);