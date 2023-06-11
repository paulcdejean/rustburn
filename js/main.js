import { greet } from '../pkg/hello.js'

/** @param {NS} ns */
export async function main(ns) {
  ns.tprint('Hello world')
  greet()
}
