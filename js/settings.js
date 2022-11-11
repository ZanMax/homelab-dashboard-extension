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

function newProject() {
    let projectName = document.getElementById("project-name").value;
    console.log(projectName);
    document.getElementById('projectsMenu').innerHTML += '<li><a class="dropdown-item" href="#">' + projectData["name"] + '</a></li>';
}

document.getElementById('create-project').addEventListener('click', newProject);