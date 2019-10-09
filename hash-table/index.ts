import * as Impl from './system-map';
import * as Type from '../types';
import { ColorExtendedProps } from '../color';

/**
 * @name create
 * @param { number } s
 * @description Create a Hash Table intance.
 * It uses system map as the default implementation.
*/
export const create = (s: number, props: Type.CreateHashFactory = {mapImpl: Impl.create}): Type.HashTbl<ColorExtendedProps> => props.mapImpl(s);

