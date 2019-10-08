
export interface HashTbl<T> {
  set(item: T): void;
  get(name: string): T | undefined;
  delete(name: T): void;
}
