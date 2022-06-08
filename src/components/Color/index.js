import PropTypes from "prop-types";

function Color ({color}) {
  return (
    <span style={{color: color}}>{color}</span>
  );
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
}
export default Color;
