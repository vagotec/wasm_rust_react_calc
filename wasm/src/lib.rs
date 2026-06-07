use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calculate(a: f64, b: f64, op: &str) -> Result<f64, String> {
    match op {
        "+" => Ok(a + b),
        "-" => Ok(a - b),
        "*" => Ok(a * b),
        "/" => {
            if b == 0.0 {
                Err("Division by zero".to_string())
            } else {
                Ok(a / b)
            }
        }
        _ => Err("Unknown operator".to_string()),
    }
}

/*

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: f64, b: f64) -> f64 {
    a + b
}

#[wasm_bindgen]
pub fn subtract(a: f64, b: f64) -> f64 {
    a - b
}

#[wasm_bindgen]
pub fn multiply(a: f64, b: f64) -> f64 {
    a * b
}

#[wasm_bindgen]
pub fn divide(a: f64, b: f64) -> String {
    if b == 0.0 {
        "Division by zero".to_string()
    } else {
        (a / b).to_string()
    }
}

*/

