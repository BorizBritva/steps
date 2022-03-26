import PropTypes from 'prop-types'

function WayLength({way, wayChange}) {

  const handleLength = ({target}) => {
    const {name, value} = target
    wayChange(name, value)
  }

  return (
    <div className="editor-block way-block">
      <label className="block-name" htmlFor="way">Пройдено (км): </label>
      <input type="number" name="way" value={way} onChange={handleLength}/>
    </div>
  )
}

WayLength.propTypes = {
  way: PropTypes.string.isRequired,
  wayChange: PropTypes.func.isRequired,
}

export default WayLength
