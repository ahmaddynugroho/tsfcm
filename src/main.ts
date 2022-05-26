import { centroid } from './centroid'
import { objective } from './objective'
import { membership } from './membership'
import { membershipRandom } from './membershipRandom'
import { uIK, xIJ } from './utils/types'
import { createX, Dec } from './utils/decimal'

function fcm(w: number, c: number, maxIter: number, err: number, X: xIJ): uIK {
    let U = membershipRandom(c, X)
    let P = new Dec(0)
    let i = 0

    while (i < maxIter) {
        let V = centroid(w, U, X)
        let P1 = objective(w, U, X, V)
        U = membership(w, X, V)

        if (P1.minus(P).abs().lessThan(err)) break
        P = P1
        i++
    }
    console.log({ P: P.toString(), i })

    return U as uIK
}

export { fcm, createX }
