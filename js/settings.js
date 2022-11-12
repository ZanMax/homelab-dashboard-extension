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
    console.log(projectName);
    document.getElementById('project-list').innerHTML += '<li>' + projectName + '</li>';
}

document.getElementById('create-project').addEventListener('click', createProject);

function addNewUrl() {
    let name = document.getElementById("site-name").value;
    let url = document.getElementById("site-url").value;
    let description = document.getElementById("site-description").value;

    document.getElementById('urls-list').innerHTML += '' +
        '                                            <tr>\n' +
        '                                                <th scope="row">1</th>\n' +
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

    let addUrlModal = document.getElementById('addNewUrl');
    let modal = bootstrap.Modal.getInstance(addUrlModal)
    modal.hide();
    document.getElementById("site-name").value = "";
    document.getElementById("site-url").value = "";
    document.getElementById("site-description").value = "";
}

document.getElementById('add-url').addEventListener('click', addNewUrl);