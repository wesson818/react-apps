import React, {Component} from 'react'

// ES6 class components
class Search extends Component {
    componentDidMount() {
      if(this.input) {
        this.input.focus();
      }
    }
    render() {
      const { value, onChange, children, onSubmit  } = this.props;
      return (
        <form onSubmit={onSubmit}>
          {children} <input
          type="text"
          value={value}
          onChange={onChange}
          ref={(node) => { this.input = node; }}
          />
          <button type="submit">{children}</button>
        </form>
      );
    }
  }
  
  // functional stateless components
  // const Search = ({ value, onChange, children, onSubmit }) =>{
  //   let input;
  //   return(
  //     <form onSubmit={onSubmit}>
  //       {children} <input
  //         type="text"
  //         value={value}
  //         onChange={onChange}
  //         ref={(node) => input = node}
  //       />
  //       <button type="submit">{children}</button>
  //     </form>
  //   )}
  // Search.propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
  //   onChange: PropTypes.func.isRequired,
  //   value: PropTypes.string,
  //   children: PropTypes.node.isRequired,
  // };

  export default Search
