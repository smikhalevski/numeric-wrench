export interface Interpolator {
  (x: number): number;

  update(xs: ArrayLike<number>, ys: ArrayLike<number>): void;
}

export interface MutableArrayLike<T> {
  length: number;

  [n: number]: T;
}
