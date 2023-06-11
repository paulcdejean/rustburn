mod ns;

use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
extern {
    pub type Ns;

    #[wasm_bindgen(method)]
    fn tprint(this: &Ns, print: &str);
}

#[wasm_bindgen]
pub fn greet(ns: &Ns) {
    ns.tprint("Hello rust!");
}
