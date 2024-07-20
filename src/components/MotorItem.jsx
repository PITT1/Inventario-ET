import PropTypes from "prop-types";

const Item = ({ marca, modelo, hp }) => {
  return (
    <li className="px-8 py-2 hover:bg-slate-300 transition-all cursor-pointer hover:text-slate-800">
        {marca}, {modelo} de {hp}hp
    </li>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  marca: PropTypes.string.isRequired,
  modelo: PropTypes.string.isRequired,
  hp: PropTypes.number.isRequired
};

export default Item;
