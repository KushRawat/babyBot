const form = document.querySelector("#searchForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  console.log(form.elements.query.value);
  // MARK USER OPT-IN - https://www.gupshup.io/developer/docs/bot-platform/guide/whatsapp-api-documentation#optinAPI
  await axios
    .post("https://api.gupshup.io/sm/api/v1/app/opt/in/{{projectApp}}")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
        console.log(err)
    });
});
