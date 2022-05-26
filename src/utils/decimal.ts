import { Decimal } from 'decimal.js'
import { xIJ } from './types'

export const Dec = Decimal

// convert number to Decimal type
export function createX(X: string[][]): xIJ {
    return X.map((i) => i.map((j) => new Dec(j))) as xIJ
}
