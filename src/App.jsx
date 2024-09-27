import './App.css'

function App() {
  return (
    <>
    Hello
    { new Date().toISOString() }
      {JSON.stringify(window.initData)}
    </>
  )
}

export default App
