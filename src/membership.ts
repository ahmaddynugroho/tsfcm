export function membership(
    w: number,
    X: number[][],
    V: number[][]
): number[][] {
    let U: number[][] = [...Array(X.length)].map(() =>
        [...Array(V.length)].map(() => 0)
    )

    for (let i = 0; i < U.length; i++) {
        const cI = U[i]
        for (let k = 0; k < cI.length; k++) {
            let numerator = 0
            for (let j = 0; j < X[i].length; j++) {
                const xIJ = X[i][j]
                const vIK = V[k][j]
                numerator += Math.pow(xIJ - vIK, 2)
            }
            numerator = Math.pow(numerator, -1 / (w - 1))

            let denominator = 0
            for (let denomK = 0; denomK < V.length; denomK++) {
                let sigmaJ = 0
                for (let denomJ = 0; denomJ < V[denomK].length; denomJ++) {
                    const centroidKJ = V[denomK][denomJ]
                    const dataIJ = X[i][denomJ]
                    sigmaJ += Math.pow(dataIJ - centroidKJ, 2)
                }
                denominator += Math.pow(sigmaJ, -1 / (w - 1))
            }

            cI[k] = numerator / denominator
        }
    }

    return U
}
