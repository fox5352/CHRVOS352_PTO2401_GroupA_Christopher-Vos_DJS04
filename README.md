# DJS03 Project Brief: Book Connect - Abstractions & Web Components

Dive into the delightful world of "Book Connect," where literary adventures await at your fingertips! Browse, explore, and uncover your next great read from a vast, vibrant collection. Whether you're a fan of thrilling mysteries, epic fantasies, or heartwarming romances, "Book Connect" brings the magic of books directly to you. Happy reading! 

The "Book Connect" project provides an opportunity for students to refine a fully functional version of an application. The focus of this project is to enhance the code's maintainability, extendibility, and readability by applying concepts of objects and functions for abstraction. This will not only streamline future modifications but also consolidate students' understanding of higher-level programming concepts, including documentation, Styleguides, and abstraction principles.

![alt text](image.png)

#### Goals

- **Refactor Existing Code**: Analyse and refactor the given JavaScript and HTML code to improve its structure using objects and functions.
- **Implement web components**: Used web components as an abstraction to hide the complex reality while exposing only the necessary parts. This involves creating more generic functions that can perform tasks in a more flexible way.
- **Documentation**: Write clear comments and documentation for the new code structure to explain the purpose and functionality of code blocks, functions, and objects.
- **Follow Style guides**: Adhere to established coding conventions and Style guides to ensure code readability and maintainability.

#### Tasks

1. **Code Analysis**: Start by understanding the current implementation of the "Book Connect" application, including its HTML structure and JavaScript functionality.
2. **Plan Refactoring**: Identify sections of the code that can be made more abstract and modular. Look for patterns and repetitive code that can be simplified.
3. **Implement Abstraction**:
   - **Objects**: Define objects to represent key elements of the application, such as books, authors, and genres. Utilise the provided data (e.g., `authors`, `genres`, `books`) to populate these objects.
   - **Functions**: Create functions that handle repetitive tasks, such as rendering the book list, handling user interactions, and applying filters.
4. **Enhance Functionality**: Ensure that the application remains fully functional after refactoring. Test all features to confirm that users can still search, filter, and view books as intended.
5. **Documentation and Comments**: Throughout the refactoring process, document your code. Provide comments that explain the purpose and functionality of objects and functions.
6. **Adherence to Styleguides**: Ensure your code follows JavaScript and HTML coding standards and best practices for readability and maintainability.

#### Discussion and Reflection

After completing the tasks, prepare a brief presentation for your coaching group on the following:
- The rationale behind the refactoring decisions made, including the choice of objects and functions.
- How abstraction has made the code more maintainable and extendable.
- Any challenges faced during the refactoring process and how they were overcome.
- Reflections on how this exercise has deepened your understanding of JavaScript programming concepts.

#### Submission Guidelines

Submit the refactored version of the "Book Connect" application, including all HTML, CSS, and JavaScript files. Ensure that your code is well-documented and adheres to the specified Styleguides. Include a written report covering the discussion and reflection points outlined above.

Make sure to submit your project to the LMS on the DJS03 Project Tab.


This custom web component allows you to create a `book-preview` element, displaying a book's image, title, and author.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Attributes](#attributes)
- [Slots](#slots)
- [Example](#example)

## Installation

1. Include the script for the custom element in your project. You can either download the script or load it through a `<script>` tag:

### book-preview component
```html
<script src="path/to/book-preview.js" type="module"></script>
```
### header-button component
```html
<script src="path/to/header-button.js" type="module"></script>
```

## overlay-model
```html
<script src="path/to/overlay-model.js" type="module"></script>
```

## Usage

### book-preview componenet
To create and use the book-preview component, follow these steps in your JavaScript code:
```javascript
   const element = document.createElement('book-preview');
   element.setAttribute('data-preview', id);
   element.innerHTML = `
      <span slot="image"><img class="preview__image" src="${image}"></span>
      <span slot="title">${title}</span>
      <span slot="author">${authors[author]}</span>
   `;

   document.body.appendChild(element);
```

### header-button component
to create and use the header-button component.
```html
<header-button>
   <svg></svg>/*add a svg as an icon*/
</header-button>
```

### overlay-model component
to create and use  the overlay-model component
```html
<overlay-model>
   <span slot="body"></span>
   <span slot="button-row"></span>/* optional*/
</overlay-model>
```

## Attributes

### book-preview component

data-preview (required): A unique identifier for the book. This attribute can be used to track or identify books.
```html
   <book-preview data-preview="12345"></book-preview>
```

### overlay-model component
open="true" displays the overlay model and remove `open` to hide it
```html
<overlay-mode open="true"></overlay-mode>
```

## Slots

### book-preview component
The `book-preview` component uses named slots to allow flexible content injection. Below are the available slots:
- **image**: Displays the book's cover image.
- **title**: Displays the book's title.
- **author**: Displays the author's name.

When using book-preview, you will assign values to these slots in your HTML or JavaScript.*

### header-button component
The `header-button` component takes one unnamed slot that will a svg as the icon

## overlay-model component
The `overlay-model` component uses named slots to allow flexible content injection. Below are the available slots:
- `body`: the main slot for holding content
- `button-row`: **optional** can hold a row ob buttons for the model window controls

## Example

### book-preview component
Here is an example of how to use the book-preview component:

```javascript
const bookId = '12345';
const bookImage = 'path/to/book-image.jpg';
const bookTitle = 'The Great Book';
const bookAuthor = 'John Doe';

const element = document.createElement('book-preview');
element.setAttribute('data-preview', bookId);

element.innerHTML = `
    <span slot="image"><img class="preview__image" src="${bookImage}" alt="Book Cover"></span>
    <span slot="title">${bookTitle}</span>
    <span slot="author">${bookAuthor}</span>
`;

document.body.appendChild(element);
```
This will render the following HTML:

```html
<book-preview data-preview="12345">
    <span slot="image"><img class="preview__image" src="path/to/book-image.jpg" alt="Book Cover"></span>
    <span slot="title">The Great Book</span>
    <span slot="author">John Doe</span>
</book-preview>
```

### header-button component
```html
<header-button>
   <svg viewBox="0 96 960 960" xmlns="http://www.w3.org/2000/svg">
      <path
         d="M795 963 526 695q-29 22.923-68.459 35.962Q418.082 744 372 744q-115.162 0-195.081-80Q97 584 97 471t80-193q80-80 193.5-80t193 80Q643 358 643 471.15q0 44.85-12.5 83.35Q618 593 593 627l270 268-68 68ZM371.353 650q74.897 0 126.272-52.25T549 471q0-74.5-51.522-126.75T371.353 292q-75.436 0-127.895 52.25Q191 396.5 191 471t52.311 126.75Q295.623 650 371.353 650Z"
      ></path>
   </svg>
</header-button>
```

### overlay-model component

```html
<overlay-model open="true">/* true to display model*/
   <div slot="body">
      /*can hold content here*/
   </div>
   <div slot="button-row">
      /* OPTIONAL: can hold buttons next */
   </div>
<overlay-model>
```

# Styling

The `book-preview` component relies on a set of CSS custom properties for its colors. To ensure the component displays correctly, you must define these properties in your global `:root` scope. For example:

### book-preview component
```css
:root {
  --color-blue: <color>;
  --color-force-dark: <color>;
  --color-force-light: <color>;
  --color-dark: <color>;
  --color-light: <color>;
}
```

### header-button component
```css
   :root {
      --color-force-light: <color>;
   }
```

### overlay-model 
```css
   :root {
      --color-light: <color>;
   }
```