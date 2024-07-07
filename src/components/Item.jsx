import PropTypes from 'prop-types'

const Item = ({ motor, hp, calibre, cliente, llegada, reparacion }) => {
  return (
    <tr>
      <td>{motor}</td>
      <td>{hp}</td>
      <td>{calibre}</td>
      <td>{cliente}</td>
      <td>{llegada}</td>
      <td>{reparacion}</td>
    </tr>
  );
};

Item.propTypes = {
    motor: PropTypes.string.isRequired,
    hp: PropTypes.number.isRequired,
    calibre: PropTypes.number.isRequired,
    cliente: PropTypes.string.isRequired,
    llegada: PropTypes.string.isRequired,
    reparacion: PropTypes.string.isRequired
}

export default Item;