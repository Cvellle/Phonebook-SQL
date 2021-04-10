function validation() {
  const formElements = document.querySelectorAll(".validationCheck");
  const selectField = document.querySelector("#selectField");
  const submitBtn = document.querySelector(".submitBtn");

  const makeSelectOptions = () => {
    let selectOptions = "";
    const date = new Date();
    const currentYear = date.getFullYear();

    for (var i = 1900; i <= currentYear; i++) {
      selectOptions += `<option value="${i}">${i}</option>`;
    }
    selectField.innerHTML += selectOptions;
  };

  const checkCondition = (e) => {
    const reg = e.target.dataset.condition;
    let currentValue = e.target.value;

    const addValid = () => {
      e.target.classList.add("is-valid");
      e.target.classList.remove("is-invalid");
    };

    const addInvalid = () => {
      e.target.classList.add("is-invalid");
      e.target.classList.remove("is-valid");
    };

    if (
      e.target.matches("#validationCustom01") ||
      e.target.matches("#validationCustom02") ||
      e.target.matches("#validationTextarea") ||
      e.target.matches("#validationCustom04")
    ) {
      if (currentValue.match(reg)) {
        addValid();
      } else {
        addInvalid();
      }
    } else if (e.target.matches("#selectField")) {
      if (e.target.value !== "") {
        addValid();
      } else {
        addInvalid();
      }
    } else if (e.target.matches(".form-check-input")) {
      if (e.target.checked == true) {
        addValid();
      } else {
        addInvalid();
      }
    } else if (e.target.matches(".radio-input")) {
      if (e.target.checked == true) {
        addValid();
      } else {
        addInvalid();
      }
      const radiosDiv = e.target.parentNode.parentNode;
      radiosDiv.lastChild.previousElementSibling.previousElementSibling.classList.replace(
        "is-invalid",
        "is-valid"
      );
    } else {
      return;
    }

    let checkAllInputs = [...formElements].every((el) =>
      el.classList.contains("is-valid")
    );
    if (checkAllInputs) {
      submitBtn.disabled = false;
    }

    checkAllInputs();
  };

  makeSelectOptions();
  window.addEventListener("blur", checkCondition);
  window.addEventListener("change", checkCondition);
  window.addEventListener("keyup", checkCondition);
}

window.addEventListener("load", validation);
