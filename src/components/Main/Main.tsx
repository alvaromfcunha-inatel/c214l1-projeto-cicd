import React, { ReactNode, useState } from 'react'
import './Main.css'

function Main() {
  const initialSlideList: ReactNode[] = []

  const [slideList, setSlideList] = useState(initialSlideList)

  const [title, setTitle] = useState('')
  const [ending, setEnding] = useState('')
  const [slides, setSlides] = useState([])

  function SlideField(props: { id: string }) {
    return (
      <div className="card-item" id={"slide-" + props.id}>
        <label>Título do Slide:</label>
        <input name="slide-title"></input>
        <label>Conteúdo:</label>
        <textarea name="slide-content"></textarea>
      </div>
    )
  }

  const addSlide = () => {
    const id = String(slideList.length + 1)
    const slide = <SlideField id={id} />
    setSlideList([...slideList, slide])
  }

  const handleChange = (setter: any) => (event: any) => {
    setter(event.target.value)
  }

  return (
    <div className="App">
      <h1>Criar Aprensentação</h1>

      <div className="card">
        <label>Título da Apresentação:</label>
        <input name="presentation-title" onChange={handleChange(setTitle)}></input>
      </div>

      <div className="card">
        <div className="card-header">
          <span>Slides:</span>
          <button onClick={addSlide}>Add</button>
        </div>

        {slideList}

      </div>

      <div className="card">
        <label>Final da Apresentação:</label>
        <input name="presentation-ending"></input>
      </div>
      
      <div className="card card-borderless">
        <button>Criar</button>
      </div>

      <p className="footer">
        Inatel 2022
      </p>
    </div>
  )
}

export default Main
