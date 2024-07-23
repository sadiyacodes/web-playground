import React, {useState, useEffect} from 'react'
import Editor from './components/Editor'
import useLocalStorage from './hooks/useLocalStorage';


function App() {
  
  const [html, setHtml]=useLocalStorage('html','');
  const[css, setCss]=useLocalStorage('css','');
  const [js, setJs]=useLocalStorage('js','');
  const[srcDoc, setSrcDoc]=useState('');

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setSrcDoc(`<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>`)
    },250);

    return ()=> clearTimeout(timeout); //to avoid requeing each time incase user types between the settimeout executes 1st request making it only  execute when the user takes a slight pause
  },[html,css,js])
  return (
    <>
         <div className='top-pane'>
          <Editor
            language="xml"
            displayName="HTML" 
          value={html} 
          onChange={setHtml} 
          /> 
          {/* setHtml is being set onChange , means that whenever content is changed sethtml will be called as seen in editor component logic */}
           <Editor
           language="css"
            displayName="CSS" 
          value={css} 
          onChange={setCss} />
           <Editor
           language="javascript"
            displayName="JS" 
          value={js} 
          onChange={setJs} />
         </div>
          
         <div className='bottom-pane'>
           <iframe
           srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            style={{border:"none"}}
            width="100%"
            height="100%"
           />  
         </div>
    </>
  )
}

export default App
