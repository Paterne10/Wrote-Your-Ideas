let addButon = document.getElementById("add-button")
let dateSection = document.querySelector(".note-section-footer > p")
let container = document.getElementById("container")
let leftContainer = document.querySelector(".left")
let rightContainer = document.querySelector(".right")
let leftRightContainer = document.querySelector(".left-right-container")
let ideas = JSON.parse(localStorage.getItem("data")) || []

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
                    <button id="register-button"><i class="bi bi-check-circle-fill"></i></button>
                </div>
            </div>
            <div class="input-section">
                <input id="idea-title" type="text" placeholder="Idea Title" autocomplete="off" maxlength="100">
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
let containerIdea = document.querySelector(".idea")

let genereateIdeaCard = ()  => {
    return(
        containerIdea.innerHTML = ideas.map((x) => {
            let date = new Date()
            let {title, content} = x
            console.log(ideas.length)
            return(`   
                    <div class = "note-section">
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
    )}


let registerButton = document.getElementById("register-button")
let noteSection = document.querySelector("note-section")

registerButton.addEventListener("click", () =>{
    let title = ideaTitle.value
    let content = "I have to work on that project."
    if(title !== ""){
        ideas.push({
            "title":title,
            "content": content
        });
        genereateIdeaCard()
        noteSection.classList.add("focus")
        noteSection.classList.add("note-section")
        
    }else{
        console.log("valeur vide")
       
    }
} )

