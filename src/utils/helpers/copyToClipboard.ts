import { toast } from 'react-toastify'

export const copyToClipboard = async (text: string, message?: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    toast(message ? message : 'Текст скопирован в буфер обмена', {
      type: 'success'
    })
  } catch (err) {

  }
}