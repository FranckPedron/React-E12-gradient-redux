import PropTypes from 'prop-types';

function Button({ children, action }) {
  return (
    <button
      className="button"
      type="button"
      onClick={action}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
