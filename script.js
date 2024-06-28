


const budgetARRAY = [];
const table = [];
// let car = (display.textcontent)
// let ade = (display2.textcontent)
// let ramm = eval(car-rat)
let expense = 0
let ratt = 0
let budget = 0;
let balance = 0;
let budgetArray = []
let operation = 0
let newIndex;
let operationEdit = 0

      function budgetBtn() {
          console.log("Button clicked!");
           const ourBudget = document.getElementById("inp1").value;
    if (ourBudget != '') {
      display.innerHTML = "";
      budget = Number(ourBudget) 
      balance = Number(ourBudget)
      inp1.value = "";
    } else {
      alert('Field can\'t be empty')
    }
    display.innerHTML = `<p class="items-p"><span class="naira-sign">&#8358;</span>  ${budget}</p>
    <h3 class="budget-txt">Budget</h3>`;
    display3.innerHTML = `<p class="items-p"><span class="naira-sign">&#8358;</span>  ${balance }</p>
    <h3 class="budget-txt">Balance</h3>`;
      }

      function secondBUTTON(){
  let spend = Number(document.getElementById("inp3").value)
  let quantity = Number(document.getElementById("inp5").value)
  

  if (inp3.value == "" || inp2.value == "" || inp5.value== "") {
    alert("Check the input field");
  } else {
    let bud = {
      name: inp2.value,
      amount: inp3.value,
      quantity: inp5.value,
    }
    if(budget > 0 && balance >0){
      if((bud.amount * bud.quantity)<= balance){
        budgetARRAY.push(bud)
        expense += spend * quantity;
        display2.innerHTML = expense
        console.log(budgetARRAY)
        inp3.value = ""
        inp2.value = ""
        inp5.value = ""
        balance = balance - (bud.amount * bud.quantity)
        display2.innerHTML = `<p class="items-p"><span class="naira-sign">&#8358;</span>  ${expense}</p>
        <h3 class="budget-txt">Expense</h3>
    `
    
        display3.innerHTML = `<p class="items-p"><span class="naira-sign">&#8358;</span>  ${balance}</p>
        <h3 class="budget-txt">Balance</h3>`;
        displayValues()
        operation = bud.amount * bud.quantity
      }else{
        alert("insufficient funds")
      }
    }else{
      alert('Put a budget first')
    }
    
    
    
 
  }
}

function displayValues() {
  showINFO.innerHTML=''
  inp2.value = ""
  inp3.value = ""
  inp5.value = ""
  budgetARRAY.map((item,index)=>{
    showINFO.innerHTML+=`
    <div className="row">
    <div class='col mx-2'>
        <div class="card p-3 mx-auto my-2">
        <div class='card-title fs-2 fw-bold'>${index+1}. ${item.name}</div>
        <div class='card-body fs-1 fw-bolder'>
            <span class="me-5">&#8358;${item.amount}</span>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning" onclick="editItem(${index})">Edit</button>
            <button class="btn btn-danger" onclick="deleteItem(${index})">Delete</button>
        </div>
        <div class='card-footer'>Quantity: ${item.quantity}</div>
        <div class='card-footer'>Total: &#8358;${Number(item.quantity) * Number(item.amount)}</div>
        </div>
    </div>
</div>
    `
  })
}

function deleteItem(index){
  let confirmation = confirm("Are you sure you want to delete item")
  if(confirmation== true){
    budgetARRAY.splice(index,1)
    let totalIncart = 0
    budgetARRAY.map((item, index)=>{
      totalIncart += item.quantity * item.amount
    })
    console.log("Total in cart " + totalIncart)
    balance = budget - totalIncart
    ratt = totalIncart
    display2.innerHTML = `<p class="items-p"><span class="naira-sign">&#8358;</span>  ${ratt}</p>
       <h3 class="budget-txt">Expense</h3>
       `
       display3.innerHTML = `<p class="items-p"><span class="naira-sign">&#8358;</span>  ${balance }</p>
    <h3 class="budget-txt">Balance</h3>`;
    displayValues()

  
  }
}


  

