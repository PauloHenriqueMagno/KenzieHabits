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
  ) : null;
};

export default Modal;
