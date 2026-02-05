let addButon = document.getElementById("add-button")
let ideaTitle = document.getElementById("idea-title")
let noteSection = document.getElementById("note-section")

let noteSectionTitle = document.querySelector(".note-section-title > h3")
let dateSection = document.querySelector(".note-section-footer > p")

let altiIdeas = []
let ideas = []


addButon.addEventListener("click", () => {
    ideaTitle.focus()
})

ideaTitle.addEventListener("input", (event) => {
    noteSection.classList.add("note-section")
    noteSection.classList.add("focus")
    noteSection.focus()
    let title = event.target.value
    let date = new Date()
    noteSectionTitle.textContent = title
    dateSection.textContent = date

})


