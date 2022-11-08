document.addEventListener("DOMContentLoaded", function () {
    console.log("Loaded");
    document.getElementById("rawConfig").value = localStorage.getItem("HomeLabSettings");
});

document.getElementById('save-settings').addEventListener('click', saveSettings);


function saveSettings() {
    let settings = document.getElementById("rawConfig").value;
    localStorage.setItem("HomeLabSettings", settings);
}