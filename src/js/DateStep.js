import PropTypes from 'prop-types'

function DateStep({date, dateChange}) {

  const handleDate = ({target}) => {
    const {name, value} = target
    dateChange(name, value)
  }

  return (
    <div className="editor-block date-block">
      <label className="block-name" htmlFor="date">Дата (ДД.ММ.ГГ): </label>
      <input type="date" name="date" value={date} onChange={handleDate}/>
    </div>
  )
}

DateStep.propTypes = {
  date: PropTypes.string.isRequired,
  dateChange: PropTypes.func.isRequired,
}

export default DateStep
