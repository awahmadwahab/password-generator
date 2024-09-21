
**AW X DEV**

# Password Generator

![Password Generator](https://via.placeholder.com/600x200?text=Password+Generator)

## Overview

**Password Generator** is a simple yet effective tool designed to help you create secure passwords. With customizable length and a variety of character types, you can generate strong passwords that keep your accounts safe.

---

## Features

- **Customizable Password Length**: Use a slider to select the desired length (8 to 30 characters).
- **Two Password Outputs**: Generate two different passwords at once.
- **Copy to Clipboard**: Easily copy generated passwords with a click.
- **Responsive Design**: Looks great on any device!

---

## Getting Started

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/awahmadwahab/password-generator.git
   cd password-generator
   ```

2. **Open `index.html` in your web browser.**

---

## Usage

1. Adjust the slider to set your desired password length.
2. Click the **Generate** button to create your passwords.
3. Click the **Copy** button next to a password to copy it to your clipboard.

---

## Technologies Used

- **HTML**: Structure of the application
- **CSS**: Styling for a modern look
- **JavaScript**: Functionality for generating and copying passwords

---

## Example Code

Here’s a snippet of how the password generation works:

```javascript
function generate() {
    const all = lowercase + uppercase + number + symbols;
    const length = parseInt(range.value);
    password1.textContent = "";
    password2.textContent = "";

    for (let i = 0; i < length; i++) {
        password1.textContent += all[Math.floor(Math.random() * all.length)];
        password2.textContent += all[Math.floor(Math.random() * all.length)];
    }
}
```

---

## Contribution

Contributions are welcome! Please fork the repository and create a pull request for any improvements or features.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any inquiries or suggestions, please reach out to:

- **Ahmad Wahab**: [aw865388@gmail.com](mailto:aw865388@gmail.com)
- **GitHub**: [awahmadwahab](https://github.com/awahmadwahab)

---

**AW X DEV**

Happy password generating! 🛡️
