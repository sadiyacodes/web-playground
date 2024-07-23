import React , {useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { xml } from '@codemirror/lang-xml';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

const Editor = (props) => {
  const { language,
     displayName, 
     value, 
     onChange } = props;
  const [open, setOpen]= useState(true);

  const extensions = {
    javascript: [javascript()],
    html: [xml()],
    css: [css()],
  };
  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className='editor-title'>
        {displayName}
        <button type="button"
        className='expand-collapse-btn'
        onClick={()=>setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open? faCompressAlt : faExpandAlt}/>
        </button>
      </div>

      <CodeMirror
        value={value}
        height="100%"
        
        theme={vscodeDark}
        extensions={extensions[language]}
        onChange={(value) => onChange(value)}
        className='code-mirror-wrapper'
        basicSetup={{
          lineNumbers: true,
          lineWrapping: true,
                highlightActiveLineGutter: true,
                highlightSpecialChars: true,
                history: true,
                foldGutter: true,
                drawSelection: true,
                dropCursor: true,
                allowMultipleSelections: true,
                indentOnInput: true,
                syntaxHighlighting: true,
                bracketMatching: true,
                closeBrackets: true,
                autocompletion: true,
                rectangularSelection: true,
                crosshairCursor: true,
                highlightActiveLine: true,
                highlightSelectionMatches: true,
                closeBracketsKeymap: true,
                defaultKeymap: true,
                searchKeymap: true,
                historyKeymap: true,
                foldKeymap: true,
                completionKeymap: true,
                lintKeymap: true,

        }}
      />
    </div>
  );
};

export default Editor;