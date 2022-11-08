document.addEventListener("DOMContentLoaded", function () {
    let localSettings = localStorage.getItem("HomeLabSettings");
    if (localSettings) {
        document.getElementById("rawConfig").value = localSettings;
    }
});

document.getElementById('save-settings').addEventListener('click', saveSettings);

function saveSettings() {
    let settings = document.getElementById("rawConfig").value;
    localStorage.setItem("HomeLabSettings", settings);
}

