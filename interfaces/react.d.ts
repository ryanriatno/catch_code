// react.d.ts
interface RefObject<T> {
  // immutable
  readonly current: T | null
}