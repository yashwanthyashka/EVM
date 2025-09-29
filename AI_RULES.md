# AI Development Rules

This document outlines the tech stack and development guidelines for this Evidence Management dApp.

## Tech Stack

*   **Frontend:** The application is built with vanilla JavaScript (ES6+), HTML5, and CSS. It does not use a frontend framework like React or Vue.
*   **Blockchain Interaction:** `ethers.js` (v5) is the sole library for all communication with the Ethereum blockchain, including wallet connections and smart contract interactions.
*   **Styling:** All styling is handled by Tailwind CSS, loaded directly via a CDN. A separate `style.css` file is used for custom styles and component classes that build upon Tailwind's utilities.
*   **Decentralized Storage:** The app uses the Pinata API to pin files to the InterPlanetary File System (IPFS), ensuring decentralized and persistent storage of evidence.
*   **Smart Contract:** The frontend interacts with a pre-deployed Solidity smart contract. The contract's address and ABI are hardcoded in `app.js`.
*   **Dependencies:** All necessary libraries (like `ethers.js` and Tailwind CSS) are loaded via CDN in `index.html`. There is no package manager (like npm or yarn) or build step involved.

## Library Usage Rules

*   **Blockchain:** ONLY use the global `ethers` object provided by the `ethers.js` CDN script for all blockchain-related functionality.
*   **Styling:** ALWAYS prefer using Tailwind CSS utility classes directly in the `index.html` file for styling. The `style.css` file should only be used for custom animations, base styles, or complex component styles that are not easily achievable with utilities alone. Do not introduce any other CSS frameworks.
*   **HTTP Requests:** Use the browser's native `fetch()` API for all network requests, specifically for uploading files to the Pinata IPFS service. Do not add external HTTP client libraries like `axios`.
*   **DOM Manipulation:** Use standard Web APIs (`document.getElementById`, `element.addEventListener`, `element.classList`, etc.) for all interactions with the DOM. Do not add jQuery or other DOM manipulation libraries.
*   **Code Structure:** Keep all application logic within the `app.js` file. Maintain the existing structure of separating UI element selection, event listeners, and functions for clarity.