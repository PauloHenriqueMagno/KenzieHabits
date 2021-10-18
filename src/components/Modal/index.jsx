import BasicModal from "./import";
import { allData } from "./data";

const Modal = ({ modalType }) => {
  return modalType === allData[0].search ? (
    <BasicModal Data={allData[0]} />
  ) : modalType === allData[1].search ? (
    <BasicModal Data={allData[1]} />
  ) : modalType === allData[2].search ? (
    <BasicModal Data={allData[2]} />
  ) : modalType === allData[3].search ? (
    <BasicModal Data={allData[3]} />
  ) : modalType === allData[4].search ? (
    <BasicModal Data={allData[4]} />
  ) : modalType === allData[5].search ? (
    <BasicModal Data={allData[5]} />
  ) : modalType === allData[6].search ? (
    <BasicModal Data={allData[6]} />
  ) : modalType === allData[7].search ? (
    <BasicModal Data={allData[7]} />
  ) : modalType === allData[8].search ? (
    <BasicModal Data={allData[8]} />
  ) : null;
};

export default Modal;
