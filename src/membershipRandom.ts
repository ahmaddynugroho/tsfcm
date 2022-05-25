import { uIK, xIJ } from './types'

export function membershipRandom(c: number, X: xIJ): uIK {
    let U = [...Array(X.length)].map((): number[] => []) as uIK

    for (let i = 0; i < U.length; i++) {
        let data = U[i]

        for (let k = 0; k < c; k++) {
            data.push(Math.floor(Math.random() * 100))
        }

        const denominator = data.reduce((p, c) => p + c)
        data = data.map((el) => el / denominator)
    }

    return U
}
