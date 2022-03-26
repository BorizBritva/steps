import PropTypes from 'prop-types'
import StepModel from './StepModel'

function Step(props) {

  const {step, onRemove: handleRemove, onSelect: handleSelect} = props

  return(
    <li key={step.id} className="step-item">
      <div className="step-date">{step.date}</div>
      <div className="step-way">{step.way}</div>
      <div className="step-action">
        <button className="action-btn action-remove" onClick={()=>{handleRemove(step.id)}}>✘</button>
        <button className="action-btn action-edit" onClick={()=>{handleSelect(step.id)}}>✎</button>
      </div>
    </li>
  )
}

Step.propTypes = {
  step: PropTypes.instanceOf(StepModel).isRequired,
  onRemove: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default Step
