import React, { createContext, ReactNode, useContext, useState } from 'react'
import './Main.css'

function Main() {
  const [title, setTitle] = useState('')
  const [ending, setEnding] = useState('')

  const initialSlides: { ref: React.RefObject<any>, node: ReactNode }[] = []
  const [slides, setSlides] = useState(initialSlides)

  const SlideField = React.forwardRef((_, ref) => {
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')

    React.useImperativeHandle(ref, () => ({
      getSlideInfo: () => {
        return { description, content }
      }
    }))

    return (
      <div className="card-item">
        <label>Título do Slide:</label>
        <input name="slide-title" onChange={handleChange(setDescription)}></input>
        <label>Conteúdo:</label>
        <textarea name="slide-content" onChange={handleChange(setContent)}></textarea>
      </div>
    )
  })

  const addSlide = () => {
    const index = slides.length
    const ref = React.createRef()
    const node = <SlideField ref={ref} key={index} />

    setSlides([...slides, { ref, node }])
  }

  const createSlideshow = () => {
    console.log('title:', title)
    console.log('ending:', ending)
    slides.map(({ ref }, index) => console.log(`slide ${index}:`, ref.current.getSlideInfo()))
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

        {slides.map(slide => slide.node)}

      </div>

      <div className="card">
        <label>Final da Apresentação:</label>
        <input name="presentation-ending" onChange={handleChange(setEnding)}></input>
      </div>

      <div className="card card-borderless">
        <button onClick={createSlideshow}>Criar</button>
      </div>

      <p className="footer">
        Inatel 2022
      </p>
    </div>
  )
}

export default Main
