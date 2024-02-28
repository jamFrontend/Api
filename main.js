// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res => res.json())
// .then(data => {
//    data.forEach(item => {
//     const newTitle = document.createElement("h1");
//     newTitle.textContent = item.title;

//     document.body.appendChild(newTitle)
//    });
// })

// const newList = document.querySelector(".list");


// fetch("https://restcountries.com/v3.1/all")
// .then(res => res.json())
// .then(data => {
//     data.forEach(item => {
//         const newimg = document.createElement("img");
//         const newTitle = document.createElement("h1");
//         const newItem = document.createElement("li");
//         const newBox = document.createElement("div")
//         const newReg = document.createElement("p");
//         const newPeople = document.createElement("p");
//         const newCap = document.createElement("p")
        
        
//         newReg.style.marginTop = "20px"
//         newReg.style.marginBottom = "20px"
//         newTitle.style.marginBottom = "20px"
        
        
//         newCap.textContent = "Capital: " + item.capital;
//         newReg.textContent = "Region: " + item.region;
//         newPeople.textContent =  "Population: " + item.population;
//         newTitle.textContent = item.name.common;
//         newimg.src = item.flags.png; 
//         newItem.className = "item"
//         newimg.className = "rasm"
//         newBox.className = "box"
        
//         newBox.append(newTitle,newPeople,newReg,newCap) 
//         newItem.append(newimg,newBox)
//         newList.append(newItem)
//     });
// })

// const elForm = document.querySelector(".form");
// const btnSend = document.querySelector('.btn');

// const searchInput = document.querySelector(".search");

// // Assuming the HTML looks something like this:
// // <form class="form">
// //   <input type="text" id="searchInput" placeholder="Enter country name">
// //   <button type="submit" class="btn">Search</button>
// // </form>
// // <ul class="list"></ul>



// elForm.addEventListener("submit", (evt) => {
//     evt.preventDefault();
    
//     // Clear previous search results
//     newList.innerHTML = '';

//     const countryName = searchInput.value.trim(); // Get the input value and trim it
//     if (countryName) { // Check if the input is not empty
//         fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//         .then(res => res.json())
//         .then(data => {
//             // It's possible the search returns multiple countries, so we loop through all
//             data.forEach(item => {
//                 const newImg = document.createElement("img");
//                 const newTitle = document.createElement("h1");
//                 const newItem = document.createElement("li");
//                 const newBox = document.createElement("div");
//                 const newReg = document.createElement("p");
//                 const newPeople = document.createElement("p");
//                 const newCap = document.createElement("p");
                
//                 newReg.style.marginTop = "20px";
//                 newReg.style.marginBottom = "20px";
//                 newTitle.style.marginBottom = "20px";
                
//                 newCap.textContent = "Capital: " + (item.capital ? item.capital[0] : 'N/A');
//                 newReg.textContent = "Region: " + item.region;
//                 newPeople.textContent = "Population: " + item.population.toLocaleString();
//                 newTitle.textContent = item.name.common;
//                 newImg.src = item.flags.png;
//                 newItem.className = "item";
//                 newImg.className = "rasm";
//                 newBox.className = "box";
                
//                 newBox.append(newTitle, newPeople, newReg, newCap);
//                 newItem.append(newImg, newBox);
//                 newList.append(newItem);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching country data:', error);
//             // Optionally, handle errors or display a message if the country is not found
//         });
//     } if(countryName === ""  ) {
//         // Optionally, handle the case where the input is empty
//         alert("Please enter a country name");
//     }
    
// });
const btn = document.querySelector(".btn");
const userList = document.querySelector(".list");
btn.addEventListener("click" , () => {
    fetch
    ("https://reqres.in/api/users")
    .then(res => res.json())
    .then(user => {
        user.data.forEach(item => {
            const newItem = document.createElement("li");
            const newImg = document.createElement("img");
            const newTitle = document.createElement("h1");
            const newSpan = document.createElement("h2");
            const newSpan2 = document.createElement("h2");
            const newA = document.createElement("a");
            newA.href = "https://www.youtube.com/watch?v=HD13eq_Pmp8"
            newA.className = "A"
            newTitle.className = "h_tow";
            newImg.className = "rasm";
            newItem.className = "item";
            newA.textContent = item.email;
            newSpan2.textContent = "sorr neme: " +item.last_name;
            newSpan.textContent = "usere name: " + item.first_name;
            newTitle.textContent = "id: " + item.id;
            newImg.src = item.avatar;
            newItem.append( newImg , newTitle , newSpan , newSpan2 , newA);
            userList.appendChild(newItem);
            
            
        });
    })
})
