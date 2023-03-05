import styles from './Editor.module.scss'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import { useRef, useState } from 'react'
import sanitizeHtml, { IOptions } from 'sanitize-html'
import ReactQuill, { Quill } from 'react-quill'



const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-size">
      <option value="extra-small">Size 1</option>
      <option value="small">Size 2</option>
      <option value="medium" selected>
        Size 3
      </option>
      <option value="large">Size 4</option>
    </select>
    <select className="ql-align" />
    <select className="ql-color" />
    <select className="ql-background" />
    <button className="ql-clean" />
    <button className="ql-insertHeart">

    </button>
  </div>
);

const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);



const Editor = () => {

  const modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {

      }
    }
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color"
  ];

  const [value, setValue] = useState('');
  return (
    <div className={styles.wrapper}>
      <CustomToolbar />

      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className={styles.editor}
        modules={modules}
        formats={formats}
      />
    </div>
  )
}

export default Editor
