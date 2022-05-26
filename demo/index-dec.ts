// IMPLEMENTASI FUZZY C-MEANS CLUSTERING DALAM PENENTUAN BEASISWA
// D. I. Rahakbaw
// import { fcm, xIJ } from '..' // run "pnpm build" first
import { createX, fcm } from '../src/main' // run "pnpm build" first

const w = 2
const c = 2
const maxIter = 100
const err = 10e-7
const X = createX([
    ['1', '0.5', '0.5', '1', '0.5'],
    ['1', '0.5', '0.5', '1', '0'],
    ['1', '0.5', '0', '1', '0.5'],
    ['1', '1', '0', '0.5', '0.5'],
    ['1', '0', '1', '0.5', '0.5'],
    ['1', '0.5', '0', '1', '0.5'],
    ['1', '0', '0.5', '1', '0.5'],
    ['1', '0', '0', '0', '0.5'],
    ['1', '1', '0', '0', '0.5'],
    ['0', '0.5', '1', '1', '0.5'],
    ['1', '0.5', '0.5', '1', '0.5'],
    ['1', '0.5', '1', '1', '0.5'],
    ['1', '0.5', '1', '1', '0.5'],
    ['0', '0', '0.5', '0.5', '0.5'],
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

// console.log(membershipRandom(c, X))
console.log(
    fcm(w, c, maxIter, err, X).map((i) => {
        return {
            c: i[0].lessThan(i[1]) ? 2 : 1,
            k: i.map((k) => {
                return k.toDecimalPlaces(8).toString()
                // return k.toString()
            }),
        }
    })
)
