import React, { forwardRef, useEffect, useRef, useState } from 'react'

import HtmlEditor, { Item, Toolbar } from 'devextreme-react/html-editor'
import { EditorType } from 'src/components/modules/Editor/Editor.type'
import styles from './Editor.module.scss'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import { getDocsSaved, getDocsSaving, startTyping } from 'src/store/slices/docsSlice/docsSlice'
import cn from 'classnames'
import { Saved } from 'src/components/common/Icon'
import loading from 'src/assets/lottie/loading.json'
import { Player } from '@lottiefiles/react-lottie-player'

const headerValues = [false, 1, 2, 3, 4, 5]



const Editor = forwardRef<HtmlEditor, EditorType>((props) => {
  const { value, setValue, uuid, disabled } = props
  const [hasChanged, setHasChanged] = useState(false)

  const dispatch = useAppDispatch()

  const saving = useAppSelector(getDocsSaving)
  const saved = useAppSelector(getDocsSaved)

  const editorRef = useRef<HtmlEditor>(null)

  const valueChanged = (e: any) => {
    if (e.value !== value) {
      setHasChanged(true)
      setValue(e.value)
      if (saved) {
        dispatch(startTyping())
      }
    }
  }

  const getSelected = () => {
    if (editorRef.current) {
      //console.log(editorRef.current.instance.getSelection())
    }
  }

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.instance.on('selection', () => {

      })
      }
  }, [])


  return (
    <div className={styles.container} onMouseUp={getSelected}>
      <div className={cn(styles.status, {
        [styles.status_saved]: saved && !saving,
        [styles.status_notSaved]: !saved,
      })}>
        {saving ? <Player
          src={loading}
          autoplay
          loop
          className={styles.player}
        /> : <Saved /> }
      </div>
      <HtmlEditor
        ref={editorRef}
        key={uuid}
        name={uuid}
        className={styles.editor}
        disabled={disabled}
        value={value}
        onValueChanged={valueChanged}
      >
        <Toolbar>
          <Item
            name="header"
            acceptedValues={headerValues}
          />
          <Item name="separator" />
          <Item name="bold" />
          <Item name="italic" />
          <Item name="strike" />
          <Item name="underline" />
          <Item name="separator" />
          <Item name="alignLeft" />
          <Item name="alignCenter" />
          <Item name="alignRight" />
          <Item name="alignJustify" />
          <Item name="separator" />
        </Toolbar>
      </HtmlEditor>
    </div>
  )
})

export default Editor








const markup = `
    <h2>
        <img src="images/widgets/HtmlEditor.svg" alt="HtmlEditor">
        Formatted Text Editor (HTML Editor)
    </h2>
    <br>
    <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
    <p>Supported features:</p>
    <ul>
        <li>Inline formats:
            <ul>
                <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                <li>Font, size, color changes (HTML only)</li>
            </ul>
        </li>
        <li>Block formats:
            <ul>
                <li>Headers</li>
                <li>Text alignment</li>
                <li>Lists (ordered and unordered)</li>
                <li>Code blocks</li>
                <li>Quotes</li>
            </ul>
        </li>
        <li>Custom formats</li>
        <li>HTML and Markdown support</li>
        <li>Mail-merge placeholders (for example, %username%)</li>
        <li>Adaptive toolbar for working images, links, and color formats</li>
        <li>Image upload: drag-and-drop images onto the form, select files from the file system, or specify a URL.</li>
        <li>Copy-paste rich content (unsupported formats are removed)</li>
        <li>Tables support</li>
    </ul>
`;
