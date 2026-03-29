let addButon = document.getElementById("add-button")
let dateSection = document.querySelector(".note-section-footer > p")
let container = document.getElementById("container")
let leftContainer = document.querySelector(".left")
let rightContainer = document.querySelector(".right")
let leftRightContainer = document.querySelector(".left-right-container")
let ideas = JSON.parse(localStorage.getItem("data")) || []
let currentId = null

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

let createNewIdea = ()  => {
    ideaTitle.value = ""
    ideaContent.value = ""
    currentId = null
    ideaTitle.focus()
}

let generateIdeasEditor = () =>{
    return( rightContainer.innerHTML = 
         ` 
            <div class="title-section">
                <h2>Ideas Editor</h2>
                <div class="title-section-icone">
                    <button type="button" id="add-button" onclick = "createNewIdea()" ><i class="bi bi-plus-lg" style="color: #2563eb;"></i></button>
                    <button id="register-button"><i class="bi bi-check-circle-fill"></i></button>
                </div>
            </div>
            <div class="input-section">
                <input id="idea-title" type="text" placeholder="Idea Title" autocomplete="off" maxlength="100">
                <div>
                    <input id="idea-content"  type="text" placeholder="Start typing your idea here...">
                    
                </div>
            </div>
        `
        
    )
}

generateIdea()
generateIdeasEditor()


let ideaTitle = document.getElementById("idea-title")
let containerIdea = document.querySelector(".idea")
let ideaContent = document.getElementById("idea-content")


let genereateIdeaCard = ()  => {
    return(
        containerIdea.innerHTML = ideas.map((x) => {
            let date = new Date()
            let {title, content, id} = x
            console.log(ideas.length)
            return(`   
                    <div class = "note-section" onclick="selectCard(${id})" >
                        <div class="note-section-title">
                            <h3 onclick="selectCard(${id})"  id="${id}" >${title}</h3>
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

genereateIdeaCard()

let selectCard = (id) => {
    let selectItem = id
    let search = ideas.find((x) => x.id === selectItem)
    ideaTitle.value = search.title
    ideaContent.value = search.content
    currentId = id
}



let registerButton = document.getElementById("register-button")
let noteSectionTitle = document.querySelector(".note-section-title > h3")
let noteSectionContent = document.querySelector(".note-section-content")
let noteSectionDate = document.querySelector(".note-section-footer > p")
let id = 0

registerButton.addEventListener("click", () =>{
    let title = ideaTitle.value
    let content = ideaContent.value
    if (title === "") return
    if(currentId === null){
        ideas.push({
            "id": id += 1,  
            "title":title,
            "content": content  
        });
        console.log("I just add a new card")
        alert("new idea created")
    }else {
        let search = ideas.find((x) => x.id === currentId)
        search.title = ideaTitle.value
        search.content = ideaContent.value
        currentId = null
        alert("idea updated")
    }

    genereateIdeaCard() 
    ideaTitle.value = ""
    ideaContent.value = ""
    localStorage.setItem("data", JSON.stringify(ideas))
});







