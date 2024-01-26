let resourcesButtons = ""

let resourceContent = ""

resources.map(resource => {
    resourcesButtons += `<button class="tab" onclick="openTab('${resource.category}', this)">${resource.category}</button>`

    resourceContent += `<article id="${resource.category}" class="tabContent">
        <h2>${resource.category}</h2>
        <p>${resource.text}</p>
        <ul>`
    
    resource.sources.forEach(source => {
        resourceContent += `<li><a href="${source.url}">${source.title}</a></li>`
    })

    resourceContent += `</ul>
        </article>`
})

document.getElementById("tab_buttons").innerHTML = resourcesButtons
document.getElementById("tabs").innerHTML = resourceContent

function openTab(category, clickedButton) {
    let articles = document.querySelectorAll(".tabContent")
    articles.forEach(article => {
        article.style.display = "none"
    })

    document.getElementById(category).style.display = "block"

    let buttons = document.querySelectorAll(".tab")
    buttons.forEach(button => {
        button.classList.remove("active")
    })

    clickedButton.classList.add("active")
}