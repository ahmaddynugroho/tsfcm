// IMPLEMENTASI FUZZY C-MEANS CLUSTERING DALAM PENENTUAN BEASISWA
// D. I. Rahakbaw
// import { fcm, xIJ } from '..' // run "pnpm build" first
import { Decimal } from 'decimal.js'
import { createX, fcm, xIJ } from '../src/main' // run "pnpm build" first
import { membershipRandom } from '../src/membershipRandom'

const w = 2
const c = 2
const maxIter = 100
const err = 10e-7
const X = createX([
    [1, 0.5, 0.5, 1, 0.5],
    [1, 0.5, 0.5, 1, 0],
    [1, 0.5, 0, 1, 0.5],
    [1, 1, 0, 0.5, 0.5],
    [1, 0, 1, 0.5, 0.5],
    [1, 0.5, 0, 1, 0.5],
    [1, 0, 0.5, 1, 0.5],
    [1, 0, 0, 0, 0.5],
    [1, 1, 0, 0, 0.5],
    [0, 0.5, 1, 1, 0.5],
    [1, 0.5, 0.5, 1, 0.5],
    [1, 0.5, 1, 1, 0.5],
    [1, 0.5, 1, 1, 0.5],
    [0, 0, 0.5, 0.5, 0.5],
])
/* let U = [
    [0.82, 0.18],
    [0.677, 0.323],
    [0.327, 0.673],
    [0.166, 0.834],
    [0.727, 0.273],
    [0.327, 0.673],
    [0.774, 0.226],
    [0.304, 0.696],
    [0.222, 0.778],
    [0.674, 0.326],
    [0.82, 0.18],
    [0.875, 0.125],
    [0.875, 0.125],
    [0.542, 0.458],
] */

console.log(membershipRandom(c, X))
