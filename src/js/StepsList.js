import PropTypes from 'prop-types'
import StepModel from './StepModel'
import Step from './Step'
import '../css/list.css'

function StepsList(props) {

  const {steps, onRemove: handleRemove, onSelect: handleSelect} = props
  let stepsList = <li className="step-item item-cleare">Список пуст. Добавьте записи тренировки</li>

  if (steps.length) {
      stepsList = steps.sort((a, b) => new Date(b.date) - new Date(a.date)).map(s => <Step key={s.id} step={s} onRemove={handleRemove} onSelect={handleSelect}/>)
  }

  return (
    <ul className="steps-list">
      <li className="header-step-list step-item">
        <div className="header-date step-date">Дата (ДД.ММ.ГГ)</div>
        <div className="header-way step-way">Пройдено (км)</div>
        <div className="header-action step-action">Действие</div>
      </li>
      {stepsList}
    </ul>
  )
}

StepsList.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.instanceOf(StepModel)).isRequired,
  onRemove: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default StepsList
