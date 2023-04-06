import { ListSubBreedImg } from "../interfaces/homeInterfaces";

export type PropsBreedList = {
  breeds: Array<string>;
  openCloseModal: Function;
  closeModal?: Function;
  type: string;
  timeLoading?: Function;
};
export type PropsSmallList = {
  breeds: Array<string>;
  openCloseModal: Function;
};
export type PropsBreedsModal = {
  reedsModal: boolean;
};
export type PropsSelectBreed = {
  breedsName: Array<string>;
  onDropDowChange: Function;
};
export type PropsSubBreedList = {
  subBreedList: ListSubBreedImg[];
};
