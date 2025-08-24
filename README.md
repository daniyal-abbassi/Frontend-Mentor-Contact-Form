## Vue 3 Contact Form (CDN Version)

> PLEASE VISIT **html/css/js BRANCH** FOR SCREENSHOTS AND MORE DETAILS.

A simple contact form built with HTML/CSS and progressively enhanced with **Vue 3**. This project demonstrates using Vue's **Composition API** directly in an HTML file without a build step.



### ✨ Features & Tech

-    **Features:** Reactive form state, real-time validation, and conditional error/success messages.
-    **Tech Stack:** HTML5, CSS3, JavaScript, and **Vue 3** (via CDN).

### 💡 Vue Implementation

This project uses Vue's Composition API to manage all form state and logic.
**Core Concepts Used:**
1.  **State Management (`reactive`)**: A single `reactive` object holds the entire form's state, and a second one holds validation errors.
  ```js
    const formData = reactive({ firstname: "", ... });
    const formErrors = reactive({ firstname: "", ... });
  ```

2.  **Two-Way Data Binding (`v-model`)**: Creates a direct, two-way link between HTML inputs and the `formData` object, eliminating manual DOM updates.
  ```js
    <input type="text" v-model="formData.firstname">
  ```

3.  **Event Handling (`@blur`, `@submit`, `@change`)**: Triggers validation logic on user interaction. `@submit.prevent` handles form submission without a page reload.
  ```js
    <input @blur="validateFirstName">
    <form @submit.prevent="submitForm">
  ```
4.  **Conditional Rendering (`v-if`)**: Shows or hides error and success messages based on the application's current state.
  ```js
    <span v-if="formErrors.firstname">{{ formErrors.firstname }}</span>
  ```
  
### 🚀 Setup

1.  **Download/Clone:** Get the project files.

2. **Open in Browser:** Open `index.html` directly in your web browser.

3.  **(Optional) Offline Use:** Download `vue.global.js` and update the `<script>` path in `index.html` to use the local file.

### 📂 File Structure
  ```
  .
  ├── index.html      # Main HTML file with form structure
  ├── script.js       # All Vue application logic
  ├── styles.css      # All custom CSS
  └── assets/         # Images and other static assets
```
