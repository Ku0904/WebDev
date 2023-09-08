// Document Object Model
// document.getElementById('bodyid').differentfunctions like
// document.getElementById('bodyid').getAttribute('class')
// document.getElementById('div1').setAttribute('class','test value')
// document.getElementById("div1").getAttribute("id");

// const title = document.getElementById('div1')
// title.style.backgroundColor = 'green' or title.style.borderRadius = "15px"

// title.innerContent vs title.innerText vs title.innerHTML
// in innerContent holds everything inside
// in innerText only holds what needs to be shown and leaves what needs to be hidden
// in innerHTML holds everything inside + all tags used inside it

// document.querySelector('h1')
// document.querySelector('#id')
// document.querySelector('.class')
// document.querySelector('input[type="password"]')
// document.querySelector('p:first-child');

// document.querySelector('ul')
// const myul = document.querySelector('ul')
// myul.querySelector('li')
// const myli = myul.querySelector('li')
// myli.style.backgroundColor = "green"
// myli.style.padding = "10px"

// document.querySelectorAll('li')
// const templist = document.querySelectorAll('li') node list is not array
// templist[0].style.backgroundColor = "blue"
// templist.forEach(function(l){ l.style.backgroundColor = "green" })

// document.getElementsByClassName("list-item") any type of loop will not work in ByClassName
// const tempclasslist = document.getElementsByClassName("list-item")
// Array.from(tempclasslist)
// const myconvertarr = Array.from(tempclasslist)
// myconvertarr.forEach(function (li) { li.style.color = 'orange' })

// we can use all these inside DOM to manupilate page
