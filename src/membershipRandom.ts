import { uIK, xIJ } from './utils/types'
import { Dec } from './utils/decimal'
import Decimal from 'decimal.js'

export function membershipRandom(c: number, X: xIJ): uIK {
    let U = [...Array(X.length)].map((): Decimal[] => []) as uIK

    for (let i = 0; i < U.length; i++) {
        let data = U[i]

        for (let k = 0; k < c; k++) {
            data.push(Dec.random().mul(100).floor())
        }

        let den = new Dec(0)
        for (let denomI = 0; denomI < data.length; denomI++) {
            const el = data[denomI]
            den = Dec.add(den, el)
        }
        data = data.map((el) => {
            // console.log({
            //     el: el.toString(),
            //     denominator: denominator.toString(),
            //     u: Dec.div(el, denominator).toString(),
            // })
            return Dec.div(el, den)
        })
    }

    return U
}
