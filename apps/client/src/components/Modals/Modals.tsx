import { useAppSelector } from '@/hooks/useActions';
import { useRef } from 'react';
import { createPortal } from 'react-dom';

export enum ModalType {
  REGISTRATION = 'registration',
}

export interface IModal {
  id: string;
  type: ModalType;
}

const MODAL_ROOT_ID = 'modals';

export const Modals = () => {
  console.log('render');
  const modalsData = useAppSelector((state) => state.modal);
  const modalsRoot = useRef(document.getElementById(MODAL_ROOT_ID));

  if (!modalsData.length) return;

  const currentModal = (
    <h1>
      {modalsData[0].id} {modalsData[0].type}
    </h1>
  );

  return (
    <>{modalsRoot.current && createPortal(currentModal, modalsRoot.current)}</>
  );
};
