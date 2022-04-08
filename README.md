# Dialogs
Brings Promise Based FireFox Styled Alert, Confirm &amp; Prompt Dialogs To NeutralinoJs

---

## Installation
Download The [dialogs.js](https://raw.githubusercontent.com/DEVLOPRR/dialogs/master/dialogs.js) & [dialogs.css](https://raw.githubusercontent.com/DEVLOPRR/dialogs/master/dialogs.css) File, and Include It In Your HTML File.

Example:

```xml
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>NeutralinoJs Example App</title>
    <link rel="stylesheet" href="dialogs.css">
    <script src="dialogs.js"></script>
  </head>
  <body></body>
</html>
```

## Usage

Dialogs work like normal and you can call it directly by calling the `alert`, `confirm` & `prompt` functions, but these functions are asynchronous functions and return a promise you can use `.then` to catch the Responses.

Examples:

Alert:
```javascript
alert("NeutralinoJs is awesome!")
    .then(() => {
        // Executed When Clicked "OK"
    };
```

Confirm:
```javascript
confirm("Are you sure?")
    .then(yes => {
        if (yes) {
            // Executed When Clicked "OK"
        } else {
            // Executed When Clicked "Cancel"
        }
    });
```

Prompt:
```javascript
prompt("What is your name?")
    .then(val => {
        console.log("Your name is", val)
    })
```

---

# THANKS
