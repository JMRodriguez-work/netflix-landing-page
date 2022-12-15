const inputEmail = document.querySelector("#email-get-started");
const labelEmail = document.querySelector(".label-email");
/*Grabing tag elements*/
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

/*Label implementation */
inputEmail.addEventListener("focus", labelFunction);

function labelFunction() {
  labelEmail.classList.add("labelFunction");
  inputEmail.addEventListener("blur", (e) => {
    if (e.target.value === "") {
      /*If we have nothing in the input and we click out of it we return to the original label style*/
      labelEmail.classList.remove("labelFunction");
    }
  });
}

/*Tags implementations */

tabItems.forEach((item) => item.addEventListener("click", selectItem));

function selectItem(e) {
    removeBorder();
    this.classList.add('tab-border');
    removeShow();
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}


