import styles from './Modal.module.scss'
import { FC } from 'react'
import { ModalProps } from 'src/components/modules/Modal/Modal.types'
import ReactModal from 'react-modal';

const Modal: FC<ModalProps> = (props) => {
  const { open, closeModal, children } = props

  return (
    <ReactModal
      isOpen={open}
      contentLabel="Example Modal"
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      {children}
    </ReactModal>
  )
}

export default Modal