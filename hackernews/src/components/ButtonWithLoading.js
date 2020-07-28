import React from 'react'
import Button from './Button'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loading = () => <FontAwesomeIcon className="spinner" icon={faSpinner} />

// ES5
// function withLoading(Component) {
//   return function(props) {
//     return <Component { ...props } />;
//   }
// }

// ES6
const withLoading = (Component) => ({isLoading, ...rest}) =>
isLoading
? <Loading />
: <Component { ...rest } />

const ButtonWithLoading = withLoading(Button);

export default ButtonWithLoading

