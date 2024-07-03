console.log("Hello js");

function headerMenuButtonOnClick() {
  alert("oops! not designed yet");
}


function search() {
  alert("oops! search button not designed yet");
}

function signupbutton() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

    let userRecords= new Array();
    userRecords=JSON.parse(localStorage.getItem("userids"))?JSON.parse(localStorage.getItem("userids")):[]
    
    userRecords.push({
        "username is":username,
        "password is ":password,
    })
    
    localStorage.setItem("userids",JSON.stringify(userRecords));
    console.log(userRecords);
  alert("details saved in local storage");
}

const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener ("click", () => {
        hamburger.classList.remove("active");
       navMenu. classList.remove("active");}))


let jDate = document.getElementById("jDate");
let rDate = document.getElementById("rDate");

function change1(e) {
    jDate = e.target.value;
    // alert(e.target.value);
}

function change2(e) {
    rDate = e.target.value;
    //   console.log(rDate);
    // alert(e.target.value);
}

function savedata() {

    //   localStorage.clear();

    let pickup = document.getElementById("pickup").value;
    let destination = document.getElementById("destination").value;

    // console.log(`Pickup address is: ${pickup}`);
    // console.log(`Destination address is: ${destination}`);
    // console.log(`Travel date is: ${jDate}`);
    // console.log(`Return date is: ${rDate}`);

    //   localStorage.setItem("Pickup Addess", pickup);
    // localStorage.setItem("Destination Address", destination);
    // localStorage.setItem("Journey Date", jDate);
    // localStorage.setItem("Return Date", rDate);

    let search_records = new Array();
      search_records=JSON.parse(localStorage.getItem("userids"))?JSON.parse(localStorage.getItem("userids")):[];

    search_records.push({
        "pickup Address is" : pickup,
        "destination Address is" : destination,
        "Journey date is" : jDate,
        "Return date is" : rDate,
    })

    localStorage.setItem("userids", JSON.stringify(search_records));
    console.log(search_records);
    alert("search details saved in local storage");

}

function saveemail() {
    //   localStorage.clear();
    let email = document.getElementById("email").value;

    let emailRecords= new Array();
    emailRecords=JSON.parse(localStorage.getItem("emails"))?JSON.parse(localStorage.getItem("emails")):[]
    
    emailRecords.push({
        "emails are ":email,
    })
    
    localStorage.setItem("emails",JSON.stringify(emailRecords));
    console.log(emailRecords);
    alert("you're now added to newsletter list and details saved in local storage");
}



