const { createApp, ref, reactive, onMounted } = Vue;

createApp({
  setup() {
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
      if (formData.email.trim().length === 0) {
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
          if (formData.consent.trim().length === 0) {
        formErrors.consent = "To submit this form, please consent to being contacted";
      } else {
        formErrors.consent = "";
      }
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
    };
  },
}).mount("#app");
