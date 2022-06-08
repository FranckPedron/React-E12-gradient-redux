import PropTypes from "prop-types";

function ButtonsGroup({ children }) {
  return (
    <div className="buttons group">
      {children}
    </div>
  );
}

ButtonsGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonsGroup;
