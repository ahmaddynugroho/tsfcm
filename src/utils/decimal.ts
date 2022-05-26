import { Decimal } from 'decimal.js'
import { xIJ } from './types'

export const dec = Decimal.set({ precision: 3 })

// convert number to Decimal type
export function createX(X: number[][]): xIJ {
    return X.map((i) => i.map((j) => new dec(j))) as xIJ
}
