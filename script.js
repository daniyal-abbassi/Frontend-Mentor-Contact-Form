const { createApp, ref, reactive, onMounted, computed} = Vue;

createApp({
  setup() {
    //successMessage 
    const successMessage = ref(false);
    //form inputs
    const formData = reactive({
      firstname: "",
      lastname: "",
      email: "",
      query: "",
      message: "",
      consent: "",
    });
    const formErrors = reactive({
      firstname: "",
      lastname: "",
      email: "",
      query: "",
      message: "",
      consent: "",
    });
    //validation

    function validateFirstName() {
      if (formData.firstname.trim().length === 0) {
        // errorState.value = true;
        formErrors.firstname = "This field is required";
      } else {
        formErrors.firstname = "";
      }
    }
    function validateLastName() {
      if (formData.lastname.trim().length === 0) {
        formErrors.lastname = "This field is required";
      } else {
        formErrors.lastname = "";
      }
    }
    function validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formData.email.trim().length === 0) {
        formErrors.email = "This field is required";
      } else if(!emailRegex.test(formData.email)) {
        formErrors.email = "Please enter a valid email address";
      } else {
        formErrors.email = "";
      }
    }
    function validateQuery() {
      if (formData.query.trim().length === 0) {
        formErrors.query = "Please select a query type";
      } else {
        formErrors.query = "";
      }
    }
    function validateMessage() {
      if (formData.message.trim().length === 0) {
        formErrors.message = "This field is required";
      } else {
        formErrors.message = "";
      }
    }
    function validateConsent() {
      if (!formData.consent) {
        formErrors.consent =
          "To submit this form, please consent to being contacted";
      } else {
        formErrors.consent = "";
      }
    }
    const isFormValid = computed(()=>{
       return formData.firstname && 
         formData.lastname && 
         formData.email && 
         formData.query && 
         formData.message && 
         formData.consent &&
         !formErrors.firstname &&
         !formErrors.lastname &&
         !formErrors.email &&
         !formErrors.query &&
         !formErrors.message &&
         !formErrors.consent;
    })
    function submitForm() {
      validateFirstName();
      validateLastName();
      validateEmail();
      validateQuery();
      validateMessage();
      validateConsent();
      if(!isFormValid.value) {
        console.log('Form is invalid!')
        return
      }
      successMessage.value = true;
      setTimeout(()=>{
        successMessage.value = false
      },2000)
    }
    
    return {
      formData,
      validateFirstName,
      validateLastName,
      validateEmail,
      validateQuery,
      validateMessage,
      validateConsent,
      formErrors,
      successMessage,
      submitForm,
      isFormValid
    };
  },
}).mount("#app");
