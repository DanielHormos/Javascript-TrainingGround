myFunctions = {
    getCompanyName: function (){
        return "Salt"
    }
    ,
    addListInMain: function (numberOfListItems) {
        const ulElement = document.createElement('ul')

        for(let i = 0; i < numberOfListItems; i++){
            const liItem = document.createElement("li")
            liItem.textContent = `Item #${i + 1}`

            ulElement.appendChild(liItem)
        }
    
        const main = document.querySelector("main")
        main.appentChild(ulElement)
    }
    ,
    removeElementById: function (id) {
        const divToRemove = document.querySelector("div#" + id)
        if(divToRemove != undefined) {
            divToRemove.remove()
        }
        
    }
}
console.log("salt> Functions loaded")