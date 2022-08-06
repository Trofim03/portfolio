export type cssType = {
  readonly [key: string]: string;
}
export interface HorLineProps {
  date: Date;
  title: string;
  link: string;
}
export interface VertLineProps {
  height: number;
}
export interface IInputs {
  type: string,
  name: string,
  required: boolean,
  elem: 'input',
  className: (id: string) => string
}
export interface IInputsMask {
  type: string,
  name: string,
  required: boolean,
  elem: 'InputMask',
  mask: string,
  className: (id: string) => string
}
export interface IInputsTextArea {
  type: string,
  name: string,
  required: boolean,
  elem: 'textarea',
  className: (id: string) => string
}
export interface ICard {
  name: string;
  icon: JSX.Element,
  link: string
}

export type ContactsInputsType = (IInputs | IInputsMask | IInputsTextArea)[];