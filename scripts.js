
function redirect() {
    location.href = `/projects/${this.id}`
}

function listener() {

    const project = document.getElementsByClassName('project-div')

    for (proj of project) {
        proj.addEventListener("click", redirect)
    }

    setTimeout(() => {
        location.href = "#main"
        setTimeout(() => { location.href = "#footer" }, 8000)
    }, 7000)



}