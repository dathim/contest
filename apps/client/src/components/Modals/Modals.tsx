import { useActions, useAppSelector } from '@/hooks/useActions';
import { useCallback, useRef } from 'react';
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
  let scrollPosition = useRef<number>(0);
  const modalsData = useAppSelector((state) => state.modal);
  const modalsRoot = useRef(document.getElementById(MODAL_ROOT_ID));

  const blockScroll = useCallback(() => {
    document.documentElement.scrollTop = scrollPosition.current;
  }, []);

  if (modalsData.length) {
    scrollPosition.current = document.documentElement.scrollTop;
    document.addEventListener('scroll', blockScroll);
  } else {
    return;
  }

  const closeModalHandler = () => {
    closeModal(modalsData[0].id);
    document.removeEventListener('scroll', blockScroll);
  };

  const currentModal = (
    <div className={styles.modal} id="modal" onClick={closeModalHandler}>
      <div
        className={styles['center-block']}
        onClick={(e) => e.stopPropagation()}
      >
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
