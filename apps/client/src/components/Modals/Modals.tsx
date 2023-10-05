import { useActions, useAppSelector } from '@/hooks/useActions';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { Registration } from './Registration/Registration';
import styles from './Modals.module.scss';

export enum ModalType {
  REGISTRATION = 'registration',
}

export interface IModal {
  id: string;
  type: ModalType;
}

const MODAL_ROOT_ID = 'modals';

export const Modals = () => {
  const { closeModal } = useActions();

  const modalsData = useAppSelector((state) => state.modal);
  const modalsRoot = useRef(document.getElementById(MODAL_ROOT_ID));
  if (!modalsData.length) return;

  const closeModalHandler = () => {
    closeModal(modalsData[0].id);
  };

  const currentModal = (
    <div className={styles.modal} id="modal" onClick={closeModalHandler}>
      <div onClick={(e) => e.stopPropagation()}>
        {modalsData[0].type === ModalType.REGISTRATION && (
          <Registration {...modalsData[0]} />
        )}
      </div>
    </div>
  );

  return (
    <>{modalsRoot.current && createPortal(currentModal, modalsRoot.current)}</>
  );
};
