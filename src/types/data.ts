import { ElementStates } from "./element-states";

export type TStringElem = {
  item: string;
  state: ElementStates;
};

export type TStackElem = {
  letter: string;
  state: ElementStates;
};

export type TQueueElem = string;

export type TQueueRenderElem = {
  letter: TQueueElem;
  state: ElementStates;
};

export type TArrayElem = {
  value: number;
  state: ElementStates;
};

export type TExtraElem = {
  type: "insert" | "delete";
  letter: string;
  state: ElementStates;
}

export type TListElem = string;

export type TListRenderElem = {
  letter: string;
  state: ElementStates;
  extraElem?: TExtraElem
};
