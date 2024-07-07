import PropTypes from "prop-types";

const Item = ({ id, motor, hp, calibre, cliente, llegada, reparacion }) => {
  return (
    <tr>
      <td className="text-center">{id}</td>
      <td className="text-center">{motor}</td>
      <td className="text-center">{hp}</td>
      <td className="text-center">{calibre}</td>
      <td className="text-center">{cliente}</td>
      <td className="text-center">{llegada}</td>
      <td className="text-center">{reparacion}</td>
    </tr>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  motor: PropTypes.string.isRequired,
  hp: PropTypes.number.isRequired,
  calibre: PropTypes.number.isRequired,
  cliente: PropTypes.string.isRequired,
  llegada: PropTypes.string.isRequired,
  reparacion: PropTypes.string.isRequired,
};

export default Item;
