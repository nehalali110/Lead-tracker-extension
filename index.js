let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})


//practicing innerhtml add a button inside the container
// const container = document.getElementById("container")
// container.innerHTML = '<button onclick="buy()">BUY!</button>'
// console.log(container.innerHTML)
// // some more innerHTML practice
// function buy(){
//     container.innerHTML+="<p>Thanks for buying</p>"
// }




//EXTRA PRACTICES
// difference between let and const
// if possible use const else use let
// specifying variables
// const baseprice = 20
// const discount = 10
// let shippingcost = 100
// let shippingtime = "4-5 days"
// // reassigning
// shippingcost = 150
// shippingtime="10 days"
// // calculating full price
// const fullprice = baseprice-discount+shippingcost
// console.log("Total cost "+fullprice+" "+" Will be arrived in "+shippingtime+" ")



// Practicing template strings / backtick strings
// they are strings but allow to pass an expression within it
// const recipent = "Nehal"
// const sender = "Ali"
// const email = `Hey ${recipent}! 
// How it's going? 
// Cheers ${sender}`
// console.log(email)


// // setting local storage
// localStorage.setItem("myleads","https://www.facebook.com")
// // gettingcalStorage)
// // clearing local storage
// localStorage.clear();
// console.log(localStorage)

// // first turn this leads string into array,next after customizing it turn it back to a string
// myleads = JSON.parse(myleads)
// // pushing a new value
// myleads.push("www.example2.com")
// console.log(myleads)
// console.log(typeof myleads)
// // turning back to json strings
// myleads = JSON.stringify(myleads)
// console.log(myleads)
// console.log(typeof myleads)


//Checking boolean values
// console.log(Boolean ("")) //false
// console.log(Boolean ("0")) // true
// console.log(Boolean (100)) //true
// console.log(Boolean (null)) //false
// console.log(Boolean ([0]))// true // array is always true
// console.log(Boolean (-0)) //false

// Parameters and args in functions
// function greetUser(greeting,name,emoji){
//     console.log(`${greeting} ${name} How are you? ${emoji}`)
// }
// greetUser("Wohoo!","Zain","😀")

// NUMBERS AS PARAMETERS
// function add(a,b){
//     return a+b;
// }

// console.log(add(4,3))
// console.log(add(107,4))


// Arguments VS Parameters
// What is greeting,name, emoji? Parameters!
// What is "Wohoo","Zain"? Arguments!
// What is a,b? Parameters!
// What is (4,3)? Arguments!

//Arrays as parrameters
// function firstitem(arr){
//     return arr[0]
// }
// console.log(firstitem([1,2,3,4,5,6]))