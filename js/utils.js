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
                    console.log(projectData['urls'][url]['url']);
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
    }
});

function setProject(project) {
    localStorage.setItem("CurrentProject", project);
    location.reload();
}

document.getElementById('dashboard-link').addEventListener('click', historyBack);

function historyBack() {
    window.history.back(-1);
}

const search = document.getElementById('search');

search.addEventListener('input', inputHandler);

function inputHandler() {
    let searchValue = search.value.toLowerCase();
    let projects = document.getElementsByClassName('project-link');
    Array.from(projects).forEach(function (element) {
        console.log(element);
        let projectName = element.getElementsByTagName('h4')[0].innerText.toLowerCase();
        if (projectName.includes(searchValue)) {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    })
}