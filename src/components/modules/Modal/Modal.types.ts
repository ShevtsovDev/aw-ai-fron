import ReactModal from 'react-modal'
import { ReactNode } from 'react'

export type ModalProps = {
  open: boolean,
  closeModal: () => void,
  children: ReactNode
}