import { IAttributes } from './attributes.interface';

export type IBggName = IAttributes<{
  type: BggNameType;
  sortindex: string;
  value: string;
}>

export type BggNameType = 'primary' | 'alternate';

export class BggName {
  public value: string;
  public type: BggNameType;
  public sortindex: string;

  constructor(data: IBggName) {
    this.value = data._attributes.value;
    this.type = data._attributes.type;
    this.sortindex = data._attributes.sortindex;
  }
}