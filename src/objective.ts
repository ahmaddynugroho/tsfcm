import Decimal from 'decimal.js'
import { Dec } from './utils/decimal'
import { uIK, vKJ, xIJ } from './utils/types'

export function objective(w: number, U: uIK, X: xIJ, V: vKJ): Decimal {
    let P = new Dec(0)

    for (let i = 0; i < U.length; i++) {
        const cK = U[i]
        for (let k = 0; k < cK.length; k++) {
            const membershipIK = cK[k]
            let d = new Dec(0) // Euclidean distance
            for (let j = 0; j < X[i].length; j++) {
                const xIJ = X[i][j]
                const vIK = V[k][j]
                d = d.plus(xIJ.minus(vIK).pow(2))
            }
            P = P.plus(membershipIK.pow(w))
        }
    }

    return P
}
