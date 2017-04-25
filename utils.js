'use strict';

function checkLoading() {
    if (response == null) {
        $("#isLoading").show();
        $("#isFinished").hide();
    } else {
        $("#isLoading").hide();
        $("#isFinished").show();
    }
}
