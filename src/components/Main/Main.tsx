import { ReactNode, useState, forwardRef, useImperativeHandle, createRef, RefObject } from 'react'
import './Main.css'

import { jsPDF } from 'jspdf'

function Main() {
  const [title, setTitle] = useState('')
  const [ending, setEnding] = useState('')

  const initialSlides: { ref: RefObject<any>, node: ReactNode }[] = []
  const [slides, setSlides] = useState(initialSlides)

  const SlideField = forwardRef((props: { id: string }, ref) => {
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')

    useImperativeHandle(ref, () => ({
      getSlideInfo: () => {
        return { description, content }
      }
    }))

    return (
      <div className="card-item" data-testid={props.id}>
        <label>Título do Slide:</label>
        <input name="slide-title" onChange={handleChange(setDescription)}></input>
        <label>Conteúdo:</label>
        <textarea name="slide-content" onChange={handleChange(setContent)}></textarea>
      </div>
    )
  })

  const addSlide = () => {
    const index = slides.length
    const ref = createRef()
    const node = <SlideField ref={ref} key={index} id={`slide-${index}`} />

    setSlides([...slides, { ref, node }])
  }

  const createSlideshow = () => {
    const slideInfos = slides.map(({ ref }) => ref.current.getSlideInfo())

    const pdf = new jsPDF()
    pdf.text(title, 10, 10)
    pdf.addPage()
    slideInfos.map(({ description, content }) => {
      pdf.text(description, 10, 10)
      pdf.text(content, 10, 30)
      pdf.addPage()
    })
    pdf.text(ending, 10, 10)
    pdf.save('slideshow.pdf')
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
