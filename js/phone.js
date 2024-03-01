const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );

  const data = await res.json();
  const phones = data.data;

  displayPhones(phones);
};

const displayPhones = (phones) => {
  // Step 1 --- Get the element(card) or div where you want to set the phones
  const phoneContainer = document.getElementById("card-container");

  //   Clear phone container card before adding new cards
  phoneContainer.textContent = "";

  // Display show all button if there are more than 10 phones

  const showAllContainer = document.getElementById("show-all-container");

  if (phones.length > 10) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }

  //   Display only first 10 phone while search the phone name
  phones = phones.slice(0, 10);

  phones.forEach((phone) => {
    console.log(phone);

    // Step-2 --- create a div where you want to set the phones

    const phoneCard = document.createElement("div");
    phoneCard.classList = `card p-10 bg-gray-100 shadow-xl`;

    // Step-3 --- set the inner html of the div(phoneCard)
    phoneCard.innerHTML = `
        
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        
        `;

    // Step-4---Append child

    phoneContainer.appendChild(phoneCard);
  });

  //   Hide the spinner again calling the function but this parameter is false
  toggleLoadingSpinner(false);
};

// Handle search button

const handleSearch = () => {
  // Getting the message in search field
  const searchField = document.getElementById("search-field");

  const searchText = searchField.value;
  toggleLoadingSpinner(true);

  // Calling the loadPhone function along with parameter
  loadPhone(searchText);
};

// loading spinner function
const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");

  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  }

  else{

    loadingSpinner.classList.add('hidden')
  }
};
// loadPhone();
