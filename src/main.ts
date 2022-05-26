import { centroid } from './centroid'
import { objective } from './objective'
import { membership } from './membership'
import { membershipRandom } from './membershipRandom'
import { uIK, xIJ } from './utils/types'
import { createX } from './utils/decimal'

function fcm(w: number, c: number, maxIter: number, err: number, X: xIJ): uIK {
    let U = membershipRandom(c, X)
    let P = 0
    let i = 0

    while (i < maxIter) {
        let V = centroid(w, U, X)
        let P1 = objective(w, U, X, V)
        U = membership(w, X, V)

        if (Math.abs(P1 - P) < err) break
        P = P1
        i++
    }
    // console.log({ P, i })

    return U.map((xI) =>
        xI.map((uK) => Math.round((uK + Number.EPSILON) * 1000) / 1000)
    ) as uIK
}

export { fcm, createX }
export type { xIJ }
