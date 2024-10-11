import React from 'react'
import Alert from "./components/Alert"
import AlertList from './components/AlertList'
function App() {
  return (
    <div className='wrapper'>
      {AlertList.map((AlertList, id)=>(
        <Alert 
        type={AlertList.type}
        title={AlertList.title}
        id={AlertList.id}
        >
          {AlertList.message}
        </Alert>
      ))}

    </div>
  )
}

export default App