import './button.css';
import PropTypes from 'prop-types';

function Button({content}) {

    return (
        <button className="">{content}</button>
    );
}

Button.propTypes = {
    content : PropTypes.string.isRequired
}
export default Button;