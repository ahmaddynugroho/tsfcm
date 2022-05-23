export function objective(
    w: number,
    U: number[][],
    X: number[][],
    V: number[][]
): number {
    let P = 0

    for (let i = 0; i < U.length; i++) {
        const cK = U[i]
        for (let k = 0; k < cK.length; k++) {
            const membershipIK = cK[k]
            let euclidean_distance = 0
            for (let j = 0; j < X[i].length; j++) {
                const xIJ = X[i][j]
                const vIK = V[k][j]
                euclidean_distance += Math.pow(xIJ - vIK, 2)
            }
            P += euclidean_distance * Math.pow(membershipIK, w)
        }
    }

    return P
}
