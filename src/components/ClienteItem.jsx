import PropTypes from "prop-types";

const ClienteItem = ({ nombre }) => {
  return (
    <li className="px-8 py-2 hover:bg-slate-300 transition-all cursor-pointer hover:text-slate-800">
      <p>{nombre}</p>
    </li>
  );
};

ClienteItem.propTypes = {
  nombre: PropTypes.string.isRequired
};

export default ClienteItem;
