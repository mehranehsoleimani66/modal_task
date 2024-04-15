"useclient";

import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { ModalContainer } from "./style";
import { modalType } from "./type";
interface Iprop extends PropsWithChildren {
  open: boolean;
  onclose?: () => void;
  width?: number;
  type:modalType 
}
const Modal: FC<Iprop> = ({ open, onclose, children, width,type }) => {
  const [showModal, setShowModal] = useState<boolean>(open);

  useEffect(() => setShowModal(open), [open]);
  if (!showModal) {
    return <></>;
  }
  return (
    <ModalContainer $width={width} >
      <div
        className="wrapper-modal"
        onClick={() => {
          if (onclose) {
            onclose();
          } else {
            setShowModal(false);
          }
        }}
      ></div>
      <div className={`content ${type}`}>{children}</div>
    </ModalContainer>
  );
};

export default Modal;
