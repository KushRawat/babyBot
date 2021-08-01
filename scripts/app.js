const form = document.querySelector("#searchForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  console.log(searchTerm);

  axios.defaults.headers.post["apikey"] = "nwkamkkbmfg7dhmuraehv0zbdjdeglnt";
  const params = new URLSearchParams();
  params.append("user", searchTerm);
  axios.post("https://api.gupshup.io/sm/api/v1/app/opt/in/ProjectAppp", params);
  // async function () {
  //     axios({
  //         method: 'post',
  //         url:'https://api.gupshup.io/sm/api/v1/app/opt/in/projectApp'
  //     })
  // }
  //   markOptIn();
  // MARK USER OPT-IN - https://www.gupshup.io/developer/docs/bot-platform/guide/whatsapp-api-documentation#optinAPI
  //   await axios
  //     .post("https://api.gupshup.io/sm/api/v1/app/opt/in/{{projectApp}}")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
});

// const markOptIn = async () => {
//   axios.defaults.headers.post["Content-Type"] =
//     "application/x-www-form-urlencoded";
//   const config = {
//     headers: {
//       apikey: "nwkamkkbmfg7dhmuraehv0zbdjdeglnt",
//     },
//   };
//   const res = await axios.post(
//     "https://api.gupshup.io/sm/api/v1/app/opt/in/projectApp",
//     config
//   );
// };
