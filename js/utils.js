document.addEventListener("DOMContentLoaded", function () {
    console.log("Loaded");
    let localSettings = localStorage.getItem("HomeLabSettings");
    if (localSettings) {
        console.log("000");
        let projectSettings = JSON.parse(localSettings);
        for (let i = 0; i < projectSettings.length; i++) {
            console.log("111");
            console.log(projectSettings[i]);
        }
    } else {
        console.log("No settings found");
    }
});

