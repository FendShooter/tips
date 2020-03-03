(function() {
  window.addEventListener("DOMContentLoaded", function() {
    const display = new Display();
    display.checkField();
  });
  let form = document.querySelector(".form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    getValues();
  });
  function getValues() {
    let names = document.querySelector("#names");
    let amount = document.querySelector(".amount").value;
    let nameLength = names.value.trim().split(",").length;
    let name = names.value.trim().split(",");
    let ui = new UI(name, nameLength);
    ui.show();
  }

  function UI(name, count) {
    this.name = name;
    this.count = count;
    this.amount = document.querySelector(".amount").value;
  }
  UI.prototype.show = function() {
    let cards = document.querySelector(".cards");
    let result = this.amount / this.count;
    // while loup
    let i = 0;
    const self = this;
    this.name.forEach(element => {
      while (i < self.count) {
        cards.innerHTML += `<div class="card">
      <div class="profile">
      <div class="user__pic"><img class="user__pic" src='https://picsum.photos/150/150'/></div> 
      <div class="user__name--info mx">
        <h2 class="user__name heading_h2 ">${element}</h2>
        <p>Food Runner</p>
      </div>
      </div>
      <div class="amount__details">
      <p class="amount__info">Current tip: <span class="current__amount">$ ${Math.round(self.amount / self.count)}</span></h3>
      <p class="amount__info">Last tip: <span class="current__amount">32728 </span></p>
      <p class="amount__info">Days: ${new Date().getDate()}</p>
      <p class="amount__info">Total: <span class="current__amount">32728 </span></p>
      </div>
      </div>` ;
        i++;
        return element;
      }
    });
  };

  function Display() {
    this.currency = document.querySelector("#currency");
  }
  //create a prototype
  Display.prototype.checkField = function() {
    const self = this;
    this.currency.addEventListener("change", this.valid);
  };

  Display.prototype.valid = function() {
    let amount = document.querySelector(".amount");
    let self = this;
    let currSymbol = document.querySelector(".curr-symbol");
    if (this.options[this.selectedIndex].value === "Dollars") {
      currSymbol.innerHTML = "$";
    } else if (this.options[this.selectedIndex].value === "Euro") {
      currSymbol.innerHTML = "€";
    } else if (this.options[this.selectedIndex].value === "Yen") {
      currSymbol.innerHTML = "¥";
    } else if (this.options[this.selectedIndex].value === "Pound") {
      currSymbol.innerHTML = "£";
    }
    //  console.log(this.options[this.selectedIndex].value);
    else {
      currSymbol.innerHTML = "?";
    }
    amount.focus();
  };
})();
