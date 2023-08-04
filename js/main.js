const API_KEY = "1cd1434466a5160cf16decf3fc7d7d60"; // Replace this with your API key!

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents the page from reloading

  // Declares the elements where data will be displayed
  const place = document.getElementById("place");
  const condition = document.getElementById("condition");
  const temperature = document.getElementById("temperature");
  const precipitation = document.getElementById("precipitation");

  // Resets the displayed data
  place.textContent = "";
  condition.textContent = "";
  temperature.textContent = "";
  precipitation.textContent = "";

  // Get the values from the form inputs
  const latitude = document.getElementById("latitude").value;
  const longitude = document.getElementById("longitude").value;

  // Calls the fetch() function, often used to load data from a remote URL using REST APIs.
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod !== 200) {
        throw new Error(data.message);
      }

      // Update the page with the weather data
      // ...?

      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      alert(`Something went wrong: ${err.message}`);
    });
});
