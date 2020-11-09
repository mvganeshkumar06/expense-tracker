const btn = document.querySelector("#btn");
const expenseType = document.querySelector("#expenseType");
const expenseAmount = document.querySelector("#amount");
const container = document.querySelector("#container");
const totalExpense = document.querySelector("#totalExpense");

const deleteIcon = `<img
   id="deleteIcon"
   src="https://img.icons8.com/flat_round/64/000000/delete-sign.png"
 />`;

function createExpenseCard(expenseType, amount) {
  const div = document.createElement("div");
  const type = document.createElement("h3");
  const amt = document.createElement("h3");

  type.textContent = expenseType;
  amt.textContent = amount + "$";

  type.id = "expenseItem";
  amt.id = "expenseItem";

  div.appendChild(type);
  div.appendChild(amt);

  div.id = "expenseCard";
  div.innerHTML += deleteIcon;
  container.appendChild(div);
}

let currExpense = 0;

function updateTotalExpense(amount) {
  currExpense += parseInt(amount);
  totalExpense.textContent = `Total Expense : ${currExpense}$`;
}

let localContainer = [];

btn.addEventListener("click", () => {
  const type = expenseType.value;
  const amt = expenseAmount.value;

  localContainer.push({ type, amt });

  localStorage.setItem("localArr", JSON.stringify(localContainer));

  expenseType.value = "";
  expenseAmount.value = "";
  createExpenseCard(type, amt);
  updateTotalExpense(amt);
});

container.addEventListener("click", (event) => {
  const currBtn = event.target;
  if (currBtn.id === "deleteIcon") {
    currExpense -= parseInt(
      currBtn.previousElementSibling.textContent.replace("$", "")
    );
    totalExpense.textContent = `Total Expense : ${currExpense}$`;
    const currDiv = currBtn.parentElement;
    container.removeChild(currDiv);
  }
});

window.addEventListener("load", () => {
  let localArr = JSON.parse(localStorage.getItem("localArr"));

  console.log("wait the data is coming...");

  if (localArr) {
    localArr.map((item) => {
      createExpenseCard(item.type, item.amt);
      updateTotalExpense(item.amt);
    });
  }
});
