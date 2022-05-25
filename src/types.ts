type matrix2D = number[][]

// simulating nominal typing
export type xIJ = matrix2D & { _xIJBrand: matrix2D }
export type uIK = matrix2D & { _uIKBrand: matrix2D }
export type vKJ = matrix2D & { _vKJBrand: matrix2D }
