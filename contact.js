// Select form and input fields by their 'name' attribute
const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");


// Checks if the name field is not empty
nameInput.isValid = () => !!nameInput.value;
// Checks if the email field matches the regex pattern for valid emails
emailInput.isValid = () => isValidEmail(emailInput.value);
// Checks if the phone field matches the regex pattern for valid phone numbers
phoneInput.isValid = () => isValidPhone(phoneInput.value);
// Checks if the message field is not empty
messageInput.isValid = () => !!messageInput.value;

// Array of all input fields for easy iteration
const inputFields = [nameInput, emailInput, phoneInput, messageInput];

// Regex to validate email address format
const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Regex to validate phone number format
const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

// to control the validation flow
let shouldValidate = false; 
let isFormValid = false; 

// Function to validate all input fields
const validateInputs = () => {
  if (!shouldValidate) return; 

  isFormValid = true; 
  inputFields.forEach((input) => {
    input.classList.remove("invalid"); // Remove 'invalid' class from input
    input.nextElementSibling.classList.add("hide"); // Hide error message

    // If input is not valid
    if (!input.isValid()) {
      input.classList.add("invalid"); // Add 'invalid' class to input
      isFormValid = false; // Set form as invalid
      input.nextElementSibling.classList.remove("hide"); // Show error message
    }
  });
};

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  shouldValidate = true; 
  validateInputs(); 
  if (isFormValid) {
    // If form is valid, you can proceed 
  }
});

// Event listener for  validation 
inputFields.forEach((input) => input.addEventListener("input", validateInputs));
