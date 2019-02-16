import * as Type from '../types';


export function createNode(value: Type.EnhancedColor): Type.Node {
  return {
    next: null,
    value: value
  }
}
