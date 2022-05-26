import { Dec } from './utils/decimal'
import { uIK, vKJ, xIJ } from './utils/types'

export function membership(w: number, X: xIJ, V: vKJ): uIK {
    let U = [...Array(X.length)].map(() =>
        [...Array(V.length)].map(() => new Dec(0))
    ) as uIK

    for (let i = 0; i < U.length; i++) {
        const cI = U[i]
        for (let k = 0; k < cI.length; k++) {
            let num = new Dec(0)
            for (let j = 0; j < X[i].length; j++) {
                const xIJ = X[i][j]
                const vIK = V[k][j]
                num = num.plus(xIJ.minus(vIK).pow(2))
            }
            // prettier-ignore
            num = num.pow(new Dec('-1').div(w - 1))

            let den = new Dec(0)
            for (let denomK = 0; denomK < V.length; denomK++) {
                let sigmaJ = new Dec(0)
                for (let denomJ = 0; denomJ < V[denomK].length; denomJ++) {
                    const centroidKJ = V[denomK][denomJ]
                    const dataIJ = X[i][denomJ]
                    sigmaJ = sigmaJ.plus(dataIJ.minus(centroidKJ).pow(2))
                }
                den = den.plus(sigmaJ.pow(new Dec('-1').div(w - 1)))
            }

            cI[k] = num.div(den)
        }
    }

    return U
}
