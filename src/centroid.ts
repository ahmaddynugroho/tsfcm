export function centroid(w: number, U: number[][], X: number[][]): number[][] {
    // create empty Vjk
    let V: number[][] = [...Array(U[0].length)].map(() =>
        [...Array(X[0].length)].map(() => 0)
    )

    for (let k = 0; k < V.length; k++) {
        const cK: number[] = V[k]
        for (let j = 0; j < cK.length; j++) {
            let numerator: number = 0
            for (let i = 0; i < X.length; i++) {
                const dataI: number = X[i][j]
                const membershipI: number = Math.pow(U[i][k], w)
                numerator += dataI * membershipI
            }

            let denominator: number = 0
            for (let i = 0; i < U.length; i++) {
                const membershipI = Math.pow(U[i][k], w)
                denominator += membershipI
            }

            cK[j] = numerator / denominator
        }
    }

    return V
}
