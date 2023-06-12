import { rustadd } from '../target/wasm32-unknown-unknown/debug/rustburn.wasm'

/** @param {NS} ns */
export async function main(ns) {
  ns.tprint(rustadd(2, 3))
}
