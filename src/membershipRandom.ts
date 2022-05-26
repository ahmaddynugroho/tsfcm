import { uIK, xIJ } from './utils/types'
import { dec } from './utils/decimal'
import Decimal from 'decimal.js'

export function membershipRandom(c: number, X: xIJ): uIK {
    let U = [...Array(X.length)].map((): Decimal[] => []) as uIK

    for (let i = 0; i < U.length; i++) {
        let data = U[i]

        for (let k = 0; k < c; k++) {
            data.push(dec.random().mul(100).floor())
        }

        const denominator = data.reduce((p, c) => dec.add(p, c))
        data = data.map((el) => {
            // console.log({
            //     el: el.toString(),
            //     denominator: denominator.toString(),
            //     u: dec.div(el, denominator).toString(),
            // })
            return dec.div(el, denominator)
        })
    }

    return U
}
