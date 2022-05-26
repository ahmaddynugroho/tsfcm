import { Dec } from './utils/decimal'
import { uIK, vKJ, xIJ } from './utils/types'

export function centroid(w: number, U: uIK, X: xIJ): vKJ {
    // create empty Vjk
    let V = [...Array(U[0].length)].map(() =>
        [...Array(X[0].length)].map(() => new Dec(0))
    ) as vKJ

    for (let k = 0; k < V.length; k++) {
        const cK = V[k]
        for (let j = 0; j < cK.length; j++) {
            // numerator
            let num = new Dec(0)
            for (let i = 0; i < X.length; i++) {
                const dataI = X[i][j]
                const membershipI = U[i][k].pow(w)
                num = num.plus(dataI.mul(membershipI))
            }

            // denominator
            let den = new Dec(0)
            for (let i = 0; i < U.length; i++) {
                const membershipI = U[i][k].pow(w)
                den = den.plus(membershipI)
            }

            cK[j] = num.div(den)
        }
    }

    return V
}
