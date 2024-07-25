import PropTypes from "prop-types";

const HistorialItem = ({ cliente, fecha, motor, observacion }) => {
  return (
       <tr className="text-base sm:text-2xl hover:bg-slate-300/85 transition-all cursor-pointer hover:text-black">
					<td class="py-3 text-center">{cliente}</td>
					<td class="py-3 text-center">{fecha}</td>
					<td class="py-3 text-center">{motor}</td>
					<td class="py-3 text-center">{observacion}</td>
				</tr>
  );
};

HistorialItem.propTypes = {
  nombre: PropTypes.string.isRequired,
  cliente: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  motor: PropTypes.string.isRequired,
  observacion: PropTypes.isRequired
};

export default HistorialItem;
