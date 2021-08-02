const form = document.querySelector("#searchForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  console.log(searchTerm);

  axios.defaults.headers.post["apikey"] = "nwkamkkbmfg7dhmuraehv0zbdjdeglnt";
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

  // MARK USER OPT IN
  let params1 = new URLSearchParams();
  params1.append("user", `91${searchTerm}`);
  let res1 = await axios.post(
    "https://api.gupshup.io/sm/api/v1/app/opt/in/AppAccessAPI",
    params1
  );
  console.log(res1);

  // TEMPLATE MESSAGING
  let params2 = new URLSearchParams();
  // params2.append("channel", "whatsapp");
  params2.append("source", "917834811114");
  params2.append("destination", `91${searchTerm}`);
  // params2.append("src.name", "AppAccessAPI");
  params2.append("template", {
    id: "32ed47bd-ee1f-4202-a16a-42b10570e3f2",
    params: ["word1", "word2"]
  });
  let res2 = await axios.post(
    "http://api.gupshup.io/sm/api/v1/template/msg",
    params2
  );
  console.log(res2);

  // MARK USER OPT IN

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
