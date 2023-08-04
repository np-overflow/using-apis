const API_KEY = "APIKEYHERE";

fetch("http://datamall2.mytransport.sg/ltaodataservice/TrafficIncidents", {
  headers: new Headers({
    AccountKey: API_KEY,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    document.getElementById("quote").innerHTML = data.content;
    document.getElementById("author").innerHTML =
      "- " + data.originator.name + " -";
  })
  .catch((err) => {
    console.log(err);
  });
