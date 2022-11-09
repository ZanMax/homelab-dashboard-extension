document.addEventListener("DOMContentLoaded", function () {
    localStorage.setItem("CurrentProject", "HomeLab");
    let CurrentProject = localStorage.getItem("CurrentProject");
    let localSettings = localStorage.getItem("HomeLabSettings");
    if (localSettings) {
        let projectSettings = JSON.parse(localSettings);
        for (let project in projectSettings["projects"]) {
            let projectData = projectSettings["projects"][project];
            if (projectData["name"] === CurrentProject) {
                for (let url in projectData['urls']) {
                    console.log(projectData['urls'][url]['url']);
                    document.getElementById('main-container').innerHTML += '        <div class="col d-flex align-items-start">\n' +
                        '            <svg class="bi text-muted flex-shrink-0 me-3" width="2.75em" height="2.75em">\n' +
                        '                <use xlink:href="img/bootstrap-icons.svg#'+ projectData['urls'][url]['icon'] +'"></use>\n' +
                        '            </svg>\n' +
                        '            <div>\n' +
                        '                <h4 class="fw-bold mb-0"><a href="' + projectData['urls'][url]['url'] + '" target="_blank">'+ projectData['urls'][url]['name'] +'</a></h4>\n' +
                        '                <p>Ad Blocker</p>\n' +
                        '            </div>\n' +
                        '        </div>';
                }
            }
        }
        /*
        console.log(projectData['urls'][0]['name']);
        console.log(projectData['urls'][0]['icon']);

         */
    } else {
        console.log("No settings found");
    }
});

document.getElementById('dashboard-link').addEventListener('click', historyBack);

function historyBack() {
    window.history.back(-1);
}