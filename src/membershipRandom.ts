export function membershipRandom(c: number, X: number[][]): number[][] {
    let U: number[][] = [...Array(X.length)].map(() => [])

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
