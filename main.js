let addButon = document.getElementById("add-button")
let ideaTitle = document.getElementById("idea-title")
let noteSection = document.getElementById("note-section")

let noteSectionTitle = document.querySelector(".note-section-title > h3")
let dateSection = document.querySelector(".note-section-footer > p")

let altiIdeas = []
let ideas = [{
    "title": "To do list web app",
    "content": "I have to built a to do list web app for my school project.",
    "date":"12/12/2026"
}]


addButon.addEventListener("click", () => {
    ideaTitle.focus()
})

// ideaTitle.addEventListener("input", (event) => {
//     noteSection.classList.add("note-section")
//     noteSection.classList.add("focus")
//     noteSection.focus()
//     let title = event.target.value
//     let date = new Date()
//     noteSectionTitle.textContent = title
//     dateSection.textContent = date

// })


// each time that we select the input title we create a card idea
    // That card ida is compose by :
        // title   
        // content
        // date

ideaTitle.addEventListener("focus", ()  =>{
    ideaTitle.addEventListener("input", (event) => {
        let title = event.target.value
        console.log(title)

    })
    genereateIdeaCard()
} )


let genereateIdeaCard = ()  => {
    return(
        noteSection.innerHTML = ideas.map((x) => {
            let {title, content, date } = x
            return(`   
                    <div>
                        <div class="note-section-title">
                            <h3>${title}</h3>
                        </div>
                        <p class="note-section-content">${content}</p>
                        <div class="note-section-footer">
                            <p>${date}</p>
                        </div>
                    </div>
                `
            )
        })
    )
    
    
}

// Now we need data to built our card
    // We should get that data from when the focus event is active
    // Add that data inside the idea array so we can use it to built the generate card function.