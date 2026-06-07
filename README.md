# Rust WebAssembly React Calculator

A simple calculator web application built with **Rust**, **WebAssembly**, **React**, and **Vite**.

The user enters two numbers in the browser and selects an operation:

* Addition
* Subtraction
* Multiplication
* Division

The calculation logic and error handling are implemented in **Rust** and compiled to **WebAssembly**.

## Features

* Rust business logic
* WebAssembly integration
* React user interface
* Error handling in Rust
* Division by zero protection
* Modern Vite development environment

## Project Structure

```text
wasm_rust_react_calc/
├── public/
│
├── src/
│   ├── assets/
│   ├── wasm_calc/           # Generated WebAssembly files
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── wasm/
│   ├── Cargo.toml
│   ├── Cargo.lock
│   ├── src/
│   │   └── lib.rs
│   └── target/
│
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
└── .gitignore
```

## Architecture

```text
Browser
   │
   ▼
React UI
   │
   ▼
WebAssembly
   │
   ▼
Rust Business Logic
```

### React Responsibilities

* Input fields
* Buttons
* Displaying results
* User interaction

### Rust Responsibilities

* Calculation logic
* Operator handling
* Error handling
* Business logic

## Supported Operations

```text
+
-
*
/
```

## Rust API

Main Rust function:

```rust
pub fn calculate(
    a: f64,
    b: f64,
    op: &str
) -> Result<f64, String>
```

Examples:

```rust
calculate(10.0, 5.0, "+")
```

Result:

```text
15
```

```rust
calculate(10.0, 0.0, "/")
```

Result:

```text
Division by zero
```

## Prerequisites

Install:

* Node.js
* npm
* Rust
* Cargo
* wasm-pack

Verify installation:

```bash
node --version
npm --version
rustc --version
cargo --version
wasm-pack --version
```

Install wasm-pack:

```bash
cargo install wasm-pack
```

## Installation

Install dependencies:

```bash
npm install
```

## Build WebAssembly

```bash
cd wasm

wasm-pack build --target web --out-dir ../src/wasm_calc

cd ..
```

Generated files:

```text
src/wasm_calc/
├── wasm_calc.js
├── wasm_calc_bg.wasm
├── wasm_calc.d.ts
└── package.json
```

## Run Development Server

```bash
npm run dev
```

Open browser:

```text
http://localhost:5173
```

## Build Production Version

```bash
npm run build
```

Generated output:

```text
dist/
```

## Rebuild From Scratch

```bash
npm install

cd wasm

wasm-pack build --target web --out-dir ../src/wasm_calc

cd ..

npm run dev
```

## Future Enhancements

* Calculation history
* Memory functions (M+, M-, MR)
* Percentage calculation
* Square root
* Keyboard support
* Unit tests
* GitHub Actions CI/CD
* GitHub Pages deployment
* Dark mode
* Responsive design

