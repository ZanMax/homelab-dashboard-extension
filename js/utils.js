document.addEventListener("DOMContentLoaded", function () {
    let CurrentProject = localStorage.getItem("CurrentProject");
    document.getElementById('projectName').innerHTML = CurrentProject;
    let localSettings = localStorage.getItem("HomeLabSettings");
    if (localSettings) {
        let projectSettings = JSON.parse(localSettings);
        for (let project in projectSettings["projects"]) {
            let projectData = projectSettings["projects"][project];
            document.getElementById('projectsMenu').innerHTML += '<li><a class="dropdown-item" href="#">' + projectData["name"] + '</a></li>';
            if (projectData["name"] === CurrentProject) {
                for (let url in projectData['urls']) {
                    document.getElementById('main-container').innerHTML += '<div class="project-link"><div class="col d-flex align-items-start">\n' +
                        '            <svg class="bi text-muted flex-shrink-0 me-3" width="2.75em" height="2.75em">\n' +
                        '                <use xlink:href="img/bootstrap-icons.svg#' + projectData['urls'][url]['icon'] + '"></use>\n' +
                        '            </svg>\n' +
                        '            <div>\n' +
                        '                <h4 class="fw-bold mb-0"><a href="' + projectData['urls'][url]['url'] + '" target="_blank">' + projectData['urls'][url]['name'] + '</a></h4>\n' +
                        '                <p>' + projectData['urls'][url]['description'] + '</p>\n' +
                        '            </div>\n' +
                        '        </div></div>';
                }
            }
        }
        let projectsDropDown = document.getElementsByClassName('dropdown-item')

        for (let i = 0; i < projectsDropDown.length; i++) {
            projectsDropDown[i].addEventListener('click', function () {
                setProject(projectsDropDown[i].innerHTML);
            });
        }
    } else {
        console.log("No settings found");
        settingsPageLink();
        document.getElementById("profile-tab").click();
    }

    document.getElementById("rawConfig").value = checkConfigExist();
    createProjectFromJSON();
});

function setProject(project) {
    localStorage.setItem("CurrentProject", project);
    window.location.reload();
}


const search = document.getElementById('search');

search.addEventListener('input', inputHandler);

function inputHandler() {
    let searchValue = search.value.toLowerCase();
    let projects = document.getElementsByClassName('project-link');
    Array.from(projects).forEach(function (element) {
        let projectName = element.getElementsByTagName('h4')[0].innerText.toLowerCase();
        if (projectName.includes(searchValue)) {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    })
}

document.getElementById('dashboard-link').addEventListener('click', historyBack);

function historyBack() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('settingsPage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
}

document.getElementById('aboutPageLink').addEventListener('click', aboutPageLink);

function aboutPageLink() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('settingsPage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'block';
}

document.getElementById('settingsPageLink').addEventListener('click', settingsPageLink);

function settingsPageLink() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('settingsPage').style.display = 'block';
    document.getElementById('aboutPage').style.display = 'none';
}

// Settings page

document.getElementById('save-settings').addEventListener('click', saveSettings);

function saveSettings() {
    let settings = document.getElementById("rawConfig").value;
    localStorage.setItem("HomeLabSettings", settings);
}

function createProject() {
    let projectName = document.getElementById("project-name").value;
    projectHtmlInsert(projectName);
    let addUrlModal = document.getElementById('newProjectModal');
    let modal = bootstrap.Modal.getInstance(addUrlModal)
    modal.hide();
    document.getElementById("project-name").value = "";
}

document.getElementById('create-project').addEventListener('click', createProject);

function addNewUrl() {
    let name = document.getElementById("site-name").value;
    let url = document.getElementById("site-url").value;
    let description = document.getElementById("site-description").value;

    urlHtmlInsert(name, url, description);

    let addUrlModal = document.getElementById('addNewUrl');
    let modal = bootstrap.Modal.getInstance(addUrlModal)
    modal.hide();
    document.getElementById("site-name").value = "";
    document.getElementById("site-url").value = "";
    document.getElementById("site-description").value = "";
}

document.getElementById('add-url').addEventListener('click', addNewUrl);

function projectHtmlInsert(projectName) {
    document.getElementById('project-list').innerHTML += '<div class="accordion-item">\n' +
        '                            <h2 class="accordion-header" id="flush-headingOne">\n' +
        '                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"\n' +
        '                                        data-bs-target="#flush-collapse-' + projectName + '" aria-expanded="false"\n' +
        '                                        aria-controls="flush-collapse-' + projectName + '">\n' +
        '                                    ' + projectName + '\n' +
        '                                </button>\n' +
        '                            </h2>\n' +
        '                            <div id="flush-collapse-' + projectName + '" class="accordion-collapse collapse"\n' +
        '                                 aria-labelledby="flush-collapse-' + projectName + '"\n' +
        '                                 data-bs-parent="#accordionFlushExample">\n' +
        '                                <div class="accordion-body">\n' +
        '                                    <div class="row">\n' +
        '                                        <table class="table">\n' +
        '                                            <thead>\n' +
        '                                            <tr>\n' +
        '                                                <th scope="col">#</th>\n' +
        '                                                <th scope="col">Name</th>\n' +
        '                                                <th scope="col">URL</th>\n' +
        '                                                <th scope="col">Description</th>\n' +
        '                                                <th scope="col">Action</th>\n' +
        '                                            </tr>\n' +
        '                                            </thead>\n' +
        '                                            <tbody id="urls-list-' + projectName + '">\n' +
        '                                            </tbody>\n' +
        '                                        </table>\n' +
        '                                    </div>\n' +
        '                                    <div class="row">\n' +
        '                                        <div class="d-grid gap-2 d-md-block">\n' +
        '                                            <button type="button" class="btn btn-success" id="add-new-url"\n' +
        '                                                    data-bs-toggle="modal"\n' +
        '                                                    data-bs-target="#addNewUrl" disabled>Add URL\n' +
        '                                            </button>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>'
}

function urlHtmlInsert(project, name, url, description) {
    document.getElementById('urls-list-' + project).innerHTML += '' +
        '                                            <tr>\n' +
        '                                                <th scope="row"></th>\n' +
        '                                                <td>' + name + '</td>\n' +
        '                                                <td>' + url + '</td>\n' +
        '                                                <td>' + description + '</td>\n' +
        '                                                <td>\n' +
        '                                                    <button type="button" class="btn btn-warning btn-sm add-new-url"\n' +
        '                                                            data-bs-toggle="modal"\n' +
        '                                                            data-bs-target="#editUrl" disabled>Edit\n' +
        '                                                    </button>\n' +
        '                                                    <button type="button" class="btn btn-danger btn-sm" disabled>Delete</button>\n' +
        '                                                </td>\n' +
        '                                            </tr>';
}

function checkConfigExist() {
    let localSettings = localStorage.getItem("HomeLabSettings");
    if (localSettings) {
        return localSettings;
    } else {
        console.log("No settings found");
        return "";
    }
}

function deleteSpacesFromProjectName(projectName) {
    return projectName.replace(/\s/g, '');
}

function createProjectFromJSON() {
    let configJSON = checkConfigExist();
    if (configJSON === "") {
        console.log("No settings found");
    } else {
        let config = JSON.parse(configJSON);
        for (let project of config["projects"]) {
            projectHtmlInsert(project["name"]);
            for (let url of project["urls"]) {
                urlHtmlInsert(project["name"], url["name"], url["url"], url["description"]);
            }
        }
    }
}

function createUrlFromJSON() {

}

function addProjectToJSON() {

}

function addUrlToJSON() {

}