# FAQ Accordion Component ❓

A fully accessible FAQ accordion built with **React**. This project focuses on component-based architecture, lifted state management and conditional rendering without relying on external libraries.

## 🚀 Overview

The goal was to build a clean FAQ section where users can expand and collapse answers. The application features smooth show/hide transitions driven by React state, along with a structured component hierarchy that cleanly separates data, list logic and individual item behavior.

## 🔗 Links

- **Live Site:** [View Live Demo](https://altindaselif.github.io/1-react-faq-accordion-component/)
- **Code:** [View GitHub Repository](https://github.com/altindaselif/1-react-faq-accordion-component)

## 💡 Key Features

- **🪗 Accordion Toggle:** Only one answer is visible at a time; clicking an open item's sibling closes it automatically.
- **⚛️ Component Architecture:** UI is split into `App`, `QuestionList` and `QuestionItem` components with clear, single responsibilities.
- **🎨 CSS Modules:** Each component owns its styles via scoped CSS Modules, preventing class-name collisions.
- **♿ Accessibility:** Toggle buttons use `aria-expanded` to communicate open/closed state to assistive technologies, and icons carry empty `alt` attributes to be correctly treated as decorative.

## 🛠️ Technical Implementation

### 1. Lifted State & Single-Active Pattern

Ensuring only one answer is open at a time requires a single source of truth shared across sibling items.

- **Solution:** A single `activeId` state is held in the `QuestionList` parent and passed down to each `QuestionItem` as a boolean `isActive` prop. The `onToggle` callback sets `activeId` to the clicked item's `id`, which automatically closes the previously open item without any extra bookkeeping.

### 2. Conditional Rendering via CSS Classes

Toggling visibility and swapping the plus/minus icons without JavaScript-driven style manipulation keeps the logic lean.

- **Solution:** An `active` CSS Module class is conditionally applied to `QuestionItem` using a template literal. All visual changes — hiding the plus icon, revealing the minus icon and showing the answer paragraph — are handled entirely in CSS by targeting `.questionContainer.active` child selectors, keeping the JSX clean.

### 3. Component-Scoped Styling with CSS Modules

Scaling a project with multiple components risks global class-name clashes.

- **Solution:** Each component (`App`, `QuestionItem`, `QuestionList`) imports its own `*.module.css` file. Vite transforms class names into unique hashed identifiers at build time, guaranteeing full style isolation without any naming conventions or methodologies like BEM.

## 📸 Screenshots

- [View Desktop Version](./desktop-screenshot.png)
- [View Tablet Version](./tablet-screenshot.png)
- [View Mobile Version](./mobile-screenshot.png)

## 🧰 Built With

- **React 18**
- **Vite**
- **CSS Modules**
- **Semantic HTML5**

## ✍️ Author

- **LinkedIn:** [Elif Altındaş](https://www.linkedin.com/in/elifaltindas/)
- **Frontend Mentor:** [@altindaselif](https://www.frontendmentor.io/profile/altindaselif)
- **GitHub:** [@altindaselif](https://github.com/altindaselif)
