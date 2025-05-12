const VERSION = "0006";

function loadVersion() {
    const versionSpan = document.getElementById("version");
    if (versionSpan) {
        versionSpan.textContent = VERSION;
    }
}

window.addEventListener("DOMContentLoaded", loadVersion);