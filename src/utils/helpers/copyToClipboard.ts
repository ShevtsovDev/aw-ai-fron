import { toast } from 'react-toastify'

export const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    toast('Текст скопирован в буфер обмена', {
      type: 'success'
    })
  } catch (err) {

  }
}