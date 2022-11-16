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
        '                                            <tbody id="urls-list">\n' +
        '                                            </tbody>\n' +
        '                                        </table>\n' +
        '                                    </div>\n' +
        '                                    <div class="row">\n' +
        '                                        <div class="d-grid gap-2 d-md-block">\n' +
        '                                            <button type="button" class="btn btn-success" id="add-new-url"\n' +
        '                                                    data-bs-toggle="modal"\n' +
        '                                                    data-bs-target="#addNewUrl">Add URL\n' +
        '                                            </button>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>'
}

function urlHtmlInsert(name, url, description) {
    document.getElementById('urls-list').innerHTML += '' +
        '                                            <tr>\n' +
        '                                                <th scope="row"></th>\n' +
        '                                                <td>' + name + '</td>\n' +
        '                                                <td>' + url + '</td>\n' +
        '                                                <td>' + description + '</td>\n' +
        '                                                <td>\n' +
        '                                                    <button type="button" class="btn btn-warning btn-sm"\n' +
        '                                                            data-bs-toggle="modal"\n' +
        '                                                            data-bs-target="#editUrl">Edit\n' +
        '                                                    </button>\n' +
        '                                                    <button type="button" class="btn btn-danger btn-sm">Delete</button>\n' +
        '                                                </td>\n' +
        '                                            </tr>';
}

function createProjectFromJSON() {

}

function createUrlFromJSON() {

}

function addProjectToJSON() {

}

function addUrlToJSON() {

}