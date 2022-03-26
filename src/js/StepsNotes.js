import {useState} from 'react'
import '../css/form.css'
import StepModel from './StepModel'
import DateStep from './DateStep'
import WayLength from './WayLength'
import StepsList from './StepsList'

function StepsNotes(props) {
  const {date, way} = props
  const [steps, setSteps] = useState([])
  const [form, setForm] = useState({date: date, way: way})

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (name, fromDate) => {
    setForm((prevForm) => ({...prevForm, [name]: fromDate}))
  }

  const handleClick = () => {
    const {date, way} = form
    const step = new StepModel(date, way)
    setSteps(prevSteps => [...prevSteps, step])
  }

  const handleRemove = (id) => {
    setSteps(steps.filter(s => s.id !== id))
  }

  const handleSelect = (id) => {
    const step = steps.find(s => s.id === id)
    setSteps(steps.filter(s => s.id !== id))
    setForm({date: step.date, way: step.way})
  }

  return (
    <>
      <form className="steps-editor" onSubmit={handleSubmit}>
        <DateStep date={form.date} dateChange={handleChange}/>
        <WayLength way={form.way} wayChange={handleChange}/>
        <div className="editor-block button-block">
          <button onClick={handleClick}>Добавить</button>
        </div>
      </form>
      <StepsList steps={steps} onRemove={handleRemove} onSelect={handleSelect}/>
    </>
  )
}

StepsNotes.defaultProps = {
  date: '2022-03-26',
  way: "0"
}

export default StepsNotes
