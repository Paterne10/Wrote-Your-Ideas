let addButon = document.getElementById("add-button")
let registerButton = document.getElementById("register-button")



let dateSection = document.querySelector(".note-section-footer > p")
let container = document.getElementById("container")
let leftContainer = document.querySelector(".left")
let rightContainer = document.querySelector(".right")

let leftRightContainer = document.querySelector(".left-right-container")


let altiIdeas = []
let ideas = []

let generateIdea = () => {
    return( leftContainer.innerHTML = 
         ` 
            <div class="title-section">
                <h2>My Ideas</h2>
                <div class="title-section-icone">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-search"></i>
                    <i class="bi bi-emoji-laughing"></i>
                </div>
            </div>
            <div class="idea"></div>

         ` 
    )
} 

let generateIdeasEditor = () =>{
    return( rightContainer.innerHTML = 
         ` 
            <div class="title-section">
                <h2>Ideas Editor</h2>
                <div class="title-section-icone">
                    <button type="button" id="add-button"><i class="bi bi-plus-lg" style="color: #2563eb;"></i></button>
                    <button onclick = "saveWord()" id="register-button"><i class="bi bi-check-circle-fill"></i></button>
                </div>
            </div>
            <div class="input-section">
                <input id="idea-title" type="text" placeholder="Idea Title" autocomplete="off" aria-label="Idea Note" maxlength="100">
                <div>
                    <input  type="text" placeholder="Start typing your idea here...">
                </div>
            </div>
        `
        
    )
}

generateIdea()
generateIdeasEditor()

let ideaTitle = document.getElementById("idea-title")
let noteSectionTitle = document.querySelector(".note-section-title > h3")
let noteSection = document.getElementById("note-section")

console.log(ideaTitle)


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




let containerIdea = document.querySelector(".idea")

let genereateIdeaCard = ()  => {
    return(
        containerIdea.innerHTML = ideas.map((x) => {
            let date = new Date()
            let {title, content} = x
            console.log(ideas.length)
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

let saveWord = ()  =>{
    // noteSection.classList.add("focus")
    // noteSection.classList.add("note-section")
    let title = ideaTitle.value
    console.log(title)
    let content = "I have to work on that project"
    ideas.push({
        'title':title,
        'content':content
    })
    console.log(ideas)
    genereateIdeaCard()

    generateIdeasEditor()
}