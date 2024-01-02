const genBtn = document.getElementById('generate');
const user = document.getElementById('user');

function fetchUser() {
    showSpinner();
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
        .then((data) => {
            hideSpinner();
            let details = data.results[0];
            let name = details.name.first;
            let email = details.email;
            let phone = details.phone;
            let location = details.location.city; 
            let photo = details.picture.large;
            displayUser(details);
            user.innerHTML = `
            <div class="flex justify-between">
          <div class="flex">
            <img id="photo"
              class="w-48 h-48 rounded-full mr-8"
              src="${photo}"
            />
            <div class="space-y-3">
              <p id="name" class="text-xl">
                <span class="font-bold">Name: </span>${name}
              </p>
              <p id="email" class="text-xl">
                <span class="font-bold">Email: </span> ${email}
              </p>
              <p id="phone" class="text-xl">
                <span class="font-bold">Phone: </span> ${phone}
              </p>
              <p id="location" class="text-xl">
                <span class="font-bold">Location: </span> ${location}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> 30</p>
            </div>
          </div>
        </div>
      </div>`
        })
}
function displayUser(user) {
    if (user.gender === 'female') {
        document.body.style.backgroundColor = 'rebeccapurple';
    }
    else {
        document.body.style.backgroundColor = 'steelblue';
    }
} 

function showSpinner(){
    document.querySelector('.spinner').style.display = 'block';
}
function hideSpinner(){
    document.querySelector('.spinner').style.display = 'none';
}
function bg() {
    document.body.style.backgroundColor = '#777';
}
document.addEventListener('DOMContentLoaded', bg);
genBtn.addEventListener('click', fetchUser);
