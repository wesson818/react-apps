import React from 'react'
import PropTypes from 'prop-types';

// functional stateless components
const Button = ({onClick, className='', children}) =>
  <button 
    type="button"
    onClick={onClick}
    className={className}
  >{children}</button>

  Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
  Button.defaultProps = {
    className: '',
  };

// ES6 class components
// class Button extends Component {
//   render(){
//     const {onClick, className='', children} = this.props;
//     return(
//       <button 
//         type="button"
//         onClick={onClick}
//         className={className}
//       >{children}</button>
//     )
//   }
// }

export default Button