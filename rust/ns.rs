use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    pub type Ns;

    #[wasm_bindgen(method)]
    pub fn tprint(this: &Ns, print: &str);
}

