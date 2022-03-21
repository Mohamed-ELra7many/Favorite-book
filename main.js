//  This is a call to all let
let bookTitle = document.getElementById("book-title"),
    bookAuthor = document.getElementById("book-author"),
    bookISBN = document.getElementById("book-Isbn"),
    SUBMIT = document.querySelector(".submit"),
    added = document.querySelector(".added"),
    yourFavoriteBook = document.querySelector(".your-Favorite-book"),
    removeAll = document.querySelector(".remove-All")


    //    This is a function for creating items and is executed when called upon
    let setBooks = ()=>{
    added.classList.add("bo")
    let FavoriteBook = document.createElement("div"),   //for creating items
        yourBookTitle = document.createElement("div"),   //for creating items
        yourBookAuthor = document.createElement("div"),   //for creating items
        yourBookNumber = document.createElement("div"),    //for creating items
        IconRemove = document.createElement("i");          //for creating items

    IconRemove.setAttribute("class", "fa-solid fa-xmark")
    FavoriteBook.classList.add("Favorite-book")
    yourBookTitle.textContent = bookTitle.value;
    bookTitle.value = " ";
    yourBookNumber.textContent = bookISBN.value;
    bookISBN.value = " ";

    if (bookAuthor.value <= 0) {
        yourBookAuthor.textContent = "Author not found";
    } else {
        yourBookAuthor.textContent = bookAuthor.value;
        bookAuthor.value = " ";
    }
    
    IconRemove.addEventListener("click", (e)=>{
        e.target.parentElement.remove()
        if (yourFavoriteBook.childElementCount <=1  ) {
            added.classList.remove("bo")
        }
    })
    FavoriteBook.append(yourBookTitle, yourBookAuthor, yourBookNumber, IconRemove)
    yourFavoriteBook.prepend(FavoriteBook)
}




{    //  This is when you press the submit button, the getbooks function is implemented or not implemented
    SUBMIT.addEventListener("click", ()=>{
        if (bookTitle.value <= 0) {
            added.classList.remove("bo")
        } else {
            setBooks()
        }
        
    })
}



{   //    This when pressing the removeAll button deletes all the elements added by javascript
removeAll.addEventListener("click", (e)=>{
    added.classList.remove("bo")
    yourFavoriteBook.querySelectorAll(".Favorite-book").forEach((item)=>{
        item.remove()
    })
    
})
}

