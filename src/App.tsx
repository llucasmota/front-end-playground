import { useCallback } from 'react'
import './App.css'

function App() {
  // const showButton = document.querySelector('#show')
  // const closeButton = document.querySelector('#close')

  const dialog = document.querySelector('dialog')

  const showDialog = useCallback(() => dialog?.showModal(), [])
  const closeModal = useCallback(() => dialog?.close(), [])

  return (
    <>
      <button id="show" onClick={showDialog}>
        Abrir Modal
      </button>
      <dialog>
        <h2>Dialog</h2>
        <main>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </main>
        <button id="close" onClick={closeModal}>
          Fechar Modal
        </button>
      </dialog>
    </>
  )
}

export default App
