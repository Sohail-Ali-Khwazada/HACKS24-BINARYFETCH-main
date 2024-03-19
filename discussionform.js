// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-NBDHW8VGG3AMeHyaSEr6iSTyOArtjnA",
  authDomain: "tsec-hacks-24.firebaseapp.com",
  projectId: "tsec-hacks-24",
  storageBucket: "tsec-hacks-24.appspot.com",
  messagingSenderId: "392929194485",
  appId: "1:392929194485:web:e686c8d6fb0567e1b5f0bc",
  databaseURL: "https://tsec-hacks-24-default-rtdb.asia-southeast1.firebasedatabase.app/"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const QListInDB = ref(database, `Comm/QNAlist`);

let submitQ = document.getElementById("customappendQ")
let inputcontainer = document.getElementById("customtextQ")
let getQ = document.getElementById("custominputcontainer")
let QNAlist = document.getElementById("accordioncontainer");
const cusbtn = document.getElementById("customaddQ")

cusbtn.addEventListener("click", () => {
  inputcontainer.style.display = "block"
})
onValue(QListInDB, (snapshot) => {
  if (snapshot.exists()) {
    let itemsArray = Object.entries(snapshot.val());
    clearQlist();

    for (let i = 0; i < itemsArray.length; i++) {
      appendItemtoQlist(itemsArray[i]);
    }
  } else {
    QNAlist.innerHTML = "<h3>No items here yet..</h3>"
  }
})

function clearQlist() {
  QNAlist.innerHTML = "";
}

function appendItemtoQlist(item) {
  let div = document.createElement("div");
  div.className = "accordion-item"
  let currentItemID = item[0];
  let currentItemValue = item[1];
  let splitQNA = currentItemValue.split("--")

  let uniqueInputId = "ans-" + currentItemID;
  let uniqueButtonId = "submitans-" + currentItemID;

  let uniqueControlHideId = "controlHide-" + currentItemID;
  div.innerHTML = `<h2 class="accordion-header">
    <button class="accordion-button" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ${splitQNA[0]}
    </button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
<div class="accordion-body">
${splitQNA[1]}
</div>
<div id="${uniqueControlHideId}" class="input-group input-group-lg">
  <input type="text" class="form-control" aria-label="Sizing example input" 
  id="${uniqueInputId}" aria-describedby="inputGroup-sizing-lg">
  <button type="button" class="btn btn-outline-info" id="${uniqueButtonId}">Add</button>
</div>
</div>`

setTimeout(() => {
  if (splitQNA[1] !== undefined) {
    document.getElementById(uniqueControlHideId).className = " d-none"
  }
}, 1000);

  const submitButton = div.querySelector(`#${uniqueButtonId}`);
  submitButton.addEventListener("click", () => {
    handleAnswerSubmit(currentItemValue, currentItemID, uniqueInputId);
  });
  QNAlist.appendChild(div)
}

function handleAnswerSubmit(currentItemValue, currentItemID, inputId) {
  let ans = document.getElementById(inputId).value;
  currentItemValue += "--" + ans;
  let exactLocationOfItemInDB = ref(database, `Comm/QNAlist/${currentItemID}`)
  remove(exactLocationOfItemInDB)
  push(QListInDB, currentItemValue);
}

submitQ.addEventListener("click", () => {
  let question = getQ.value
  if (question !== "") {
    push(QListInDB, question);
    inputcontainer.style.display = "none"
  }
})
