export function membershipRandom(c: number, X: number[][]): number[][] {
    let U: number[][] = [...Array(X.length)].map(() => [])

    for (let i = 0; i < U.length; i++) {
        const data = U[i]

        let pivot: number[] = []
        for (let pivotI = 0; pivotI < c - 1; pivotI++) {
            pivot.push(Math.floor(Math.random() * 100))
        }
        pivot.sort((a, b) => a - b)
        pivot.push(100)

        for (let pivotI = 0; pivotI < pivot.length; pivotI++) {
            const p = pivot[pivotI]
            const p0 = pivotI === 0 ? 0 : pivot[pivotI - 1]
            data.push((p - p0) / 100)
        }
    }

    return U
}
