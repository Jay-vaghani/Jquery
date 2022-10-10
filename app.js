"use strict"

// **************************** GET ELEMENT BY ID ****************************

let HeaderTitle = document.getElementById("header-title")
// let mainHeader = document.getElementById("main-header")

// let itemsId = document.getElementById("list-group-items") // Dose Not Create Array Of All Existing Elements

// HeaderTitle.innerHTML = "Hello"
// HeaderTitle.innerHTML = "<h3>Hello</h3>" // Will Create h3 Element Inside H1

// HeaderTitle.innerText = "<h3>Hello</h3>"
// console.log(HeaderTitle.innerText); style doesn't matter

// HeaderTitle.textContent = "<h3>Hello</h3>"
// console.log(HeaderTitle.textContent); style does matter

// mainHeader.style.borderBottom = "3px solid #000"

// console.log(HeaderTitle);

// console.log(itemsId);


// **************************** GET ELEMENT BY CLASS NAME ****************************

// let itemsClass = document.getElementsByClassName("list-group-item") // Dose Create Array Of All Existing Elements

// console.log(items);
// console.log(items[1]);
// items[1].style.color = "green"
// items[1].style.backgroundColor = "blue"
// items.style.backgroundColor = "blue" //Will Give Error

// for (let i = 0; i < items.length; i++) {


    // if(i % 2 === 0){
    //     items[i].style.backgroundColor = "blue"
    //     console.log(i);
    // }

    // i % 2 === 0 ? items[i].style.backgroundColor = "blue" : "" 

    // items[i].style.backgroundColor = "blue"

// }


// **************************** GET ELEMENT BY TAG NAME ****************************

// let itemsTag = document.getElementsByTagName("li") // Dose Create Array Of All Existing Elements

// console.log(itemsTag);
// console.log(itemsTag[1]);
// itemsTag[1].style.color = "green"
// itemsTag[1].style.backgroundColor = "blue"
// itemsTag.style.backgroundColor = "blue" //Will Give Error

// for (let i = 0; i < itemsTag.length; i++) {


//     if(i % 2 === 0){
//         itemsTag[i].style.backgroundColor = "blue"
//         console.log(i);
//     }

//     i % 2 === 0 ? itemsTag[i].style.backgroundColor = "blue" : "" 

//     itemsTag[i].style.backgroundColor = "blue"

// }


// **************************** GET ELEMENT BY Query Selector NAME **************************** 


// var header = document.querySelector("#main-header") 
// header.style.borderBottom = "4px solid blue"

// var header = document.querySelector(".list-group-item") // Dose Not Create Array Of All Existing Elements
// console.log(header);


// **************************** GET ELEMENT BY Query Selector All NAME ****************************


// let titles = document.querySelectorAll(".title") // Dose Create Array Of All Existing Elements

// let oddListItems = document.querySelectorAll(".list-group-item:nth-child(odd)")

// oddListItems.forEach(function(elements){
//     elements.style.backgroundColor = "#ccc"
// })

// console.log(titles);



// **************************** TRAVERSING DOM **************************** 

// let itemList = document.querySelector("#items")
// console.log(itemList);

// Parent Node 

// ************** PARENT NODE **************

// let itemListParentNode = itemList.parentNode
// // let itemListParentNode = itemList.parentNode.parentNode
// itemListParentNode.style.backgroundColor = "#ccc"
// console.log(itemListParentNode);


// ************** PARENT ELEMENT **************  //Same As Parent Node


// let itemListParentElement = itemList.parentElement
// // let itemListParentElement = itemList.parentElement.parentElement
// itemListParentElement.style.backgroundColor = "#ccc"
// console.log(itemListParentElement);


// ************** CHILD NODE ************** // Also Includes Line Brakes So Do Not Use It

// let itemListChildNode = itemList.childNodes
// console.log(itemListChildNode);

// ************** CHILDREN NODE ************** 

// let itemListChildren = itemList.children
// console.log(itemListChildren);


// ************** FIRST CHILD ************** // Also Includes Line Brakes So Do Not Use It

// let item_List_First_ChildNode = itemList.firstChild
// console.log(item_List_First_ChildNode);

// ************** FIRST ELEMENT CHILDREN ************** 

// let item_List_First_Element_Children = itemList.firstElementChild
// console.log(item_List_First_Element_Children);


// ************** LAST CHILD ************** // Also Includes Line Brakes So Do Not Use It

// let item_List_Last_ChildNode = itemList.lastChild
// console.log(item_List_Last_ChildNode);

// ************** LAST ELEMENT CHILDREN ************** 

// let item_List_Last_Element_Children = itemList.lastElementChild
// console.log(item_List_Last_Element_Children);


// ************** NEXT SIBLING ************** 

// let item_List_Next_Sibling = itemList.nextSibling
// console.log(item_List_Next_Sibling);


// ************** NEXT ELEMENT SIBLING ************** 

// let item_List_Next_Element_Sibling = itemList.nextElementSibling
// console.log(item_List_Next_Element_Sibling);


// ************** PREVIOUS SIBLING ************** 

// let item_List_Previous_Sibling = itemList.previousSibling
// console.log(item_List_Previous_Sibling);


// ************** PREVIOUS ELEMENT SIBLING ************** 

// let item_List_Previous_Element_Sibling = itemList.previousElementSibling
// console.log(item_List_Previous_Element_Sibling);


// **************************** CREATE ELEMENT IN DOM **************************** 

// ************** CREATE DIV ************** 

// let newDiv = document.createElement("h5")

// ************** ADD CLASS TO DIV ************** 

// newDiv.className = "heading"

// ************** ADD ID TO DIV ************** 

// newDiv.id = "heading1"

// ************** ADD ATTRIBUTE TO DIV ************** 

// newDiv.setAttribute("title", "heading")
// console.log(newDiv.getAttribute("title"));
// console.log(newDiv.getAttributeNames());



// ************** ADD TEXT TO DIV ************** 

// let newDivText = document.createTextNode("Hello Heading")
// newDiv.appendChild(newDivText)

// newDiv.innerText = "Hello Heading"
// newDiv.innerHTML = "Hello Heading"
// newDiv.textContent = "Hello Heading"

// console.log(newDiv);

// **************************** INSERT DIV TO DOM **************************** 

// let container = document.querySelector(".container")
// let h1 = document.querySelector("#header-title")


// ************** INSERT BEFORE ************** 


// container.insertBefore(newDiv, h1)







