const form = document.querySelector("#searchForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  console.log(searchTerm);

  // SETTING HEADERS FOR API CALLS
  axios.defaults.headers.post["apikey"] = "nwkamkkbmfg7dhmuraehv0zbdjdeglnt";
  // axios.defaults.headers.post["Content-Type"] =
  //   "application/x-www-form-urlencoded";

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
  params2.append("source", "917834811114");
  params2.append("destination", `91${searchTerm}`);
  params2.append("template", {
    id: "01a41e2a-4836-45b6-acb2-dc39587734b2",
    params: ["Agent", "Local Address", "hello", "yolo"],
  });
  params2.append("src.name", "AppAccessAPI");
  let res2 = await axios.post(
    "http://api.gupshup.io/sm/api/v1/template/msg",
    params2
  );
  console.log(res2);
});
