// sessionStorage.getItem("name", "kishor")
// sessionStorage.getItem("nam", "kshor")
// sessionStorage.getItem("me", "isshor")
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")
// sessionStorage.clear()

window.onstorage = (e) => {
  alert("changed")
  console.log(e)
}