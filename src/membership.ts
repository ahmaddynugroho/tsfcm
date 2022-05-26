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
                num = Dec.add(num, Dec.pow(Dec.sub(xIJ, vIK), 2))
            }
            // prettier-ignore
            num = Dec.pow(
                num,
                Dec.div(new Dec('-1'), new Dec(w - 1))
            )

            let den = new Dec(0)
            for (let denomK = 0; denomK < V.length; denomK++) {
                let sigmaJ = new Dec(0)
                for (let denomJ = 0; denomJ < V[denomK].length; denomJ++) {
                    const centroidKJ = V[denomK][denomJ]
                    const dataIJ = X[i][denomJ]
                    sigmaJ = Dec.add(
                        sigmaJ,
                        Dec.pow(Dec.sub(dataIJ, centroidKJ), 2)
                    )
                }
                den = Dec.add(
                    den,
                    Dec.pow(sigmaJ, Dec.div(new Dec('-1'), new Dec(w - 1)))
                )
            }

            cI[k] = Dec.div(num, den)
        }
    }

    return U
}
