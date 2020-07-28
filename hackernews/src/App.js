import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import Table from './components/Table'
import ButtonWithLoading from './components/ButtonWithLoading'
import updateSearchTopStoriesState from './components/updateSearchTopStoriesState'

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '5';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null,
      isLoading: false
    };
    // bind function :: bind(this) can be remove if change to => function 
    // this.onDismiss = this.onDismiss.bind(this);
    // this.onSearchChange = this.onSearchChange.bind(this);
    // this.setSearchTopStories = this.setSearchTopStories.bind(this);
    // this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    // this.onSearchSubmit = this.onSearchSubmit.bind(this);
    // this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
  }
  
  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }

  fetchSearchTopStories = (searchTerm, page=0) => {
    this.setState({ isLoading: true });
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(e => this.setState({error:e}));
  }

  setSearchTopStories = (result) => {
    console.log("result:",result)
    // this.setState({ result });
    const {hits, page} = result

    this.setState(updateSearchTopStoriesState(hits, page));
  }

  onSearchSubmit = (event) => {
    const {searchTerm} = this.state
    this.setState({ searchKey: searchTerm });
    // this.fetchSearchTopStories(searchTerm)

    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }

    event.preventDefault()
  }

  needsToSearchTopStories = (searchTerm) => {
    return !this.state.results[searchTerm];
  }
  
  onDismiss = (id) => {
    const { searchKey, results } = this.state;
    const { hits, page } = results[searchKey];

    const isNotId = item => item.objectID !== id;
    // set state
    const updatedHits = hits.filter(isNotId);
    this.setState({ 
      // result: Object.assign({}, this.state.result, { hits: updatedHits })
      results: {
        ...results,
        [searchKey]: {hits:updatedHits, page:page}
      }
    });
  }

  onSearchChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render(){
    const helloWorld = 'Welcome to the Road to learn React!';
    
    const developer = new Developer('Robin', 'Wieruch');
    developer.setName("WenJing","Zhang")
    
    // ES6
    const {searchTerm, results, searchKey, error, isLoading} = this.state;
    const page = (results && results[searchKey] && results[searchKey].page) || 0;
    const list = (results && results[searchKey] && results[searchKey].hits) || [];
    // if (error) return <p>Something went wrong.</p>;
    // if (!results) return null; 
    
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hi {developer.getName()}, {helloWorld}</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="interactions">
            <Search 
              value={searchTerm} 
              onChange={this.onSearchChange} 
              onSubmit={this.onSearchSubmit}
            >
              Search
            </Search>
            <p>{searchTerm}</p>
          </div>
          {error ?
          <div className="interactions">
            <p>Something went wrong.</p>
        </div>
          :<Table 
            list={list} 
            onDismiss={this.onDismiss}
          />}
          <div className="interactions">
            <ButtonWithLoading
              isLoading={isLoading}
              onClick={() => this.fetchSearchTopStories(searchKey, page+1)}>
              More
            </ButtonWithLoading>
          </div>
        </header>
      </div>
    );
  }
}

class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  getName() {
    return this.firstname + ' ' + this.lastname;
  }
  setName(firstname,lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

export default App;

// Functional Stateless Components:
// are functions that take input and return an output. The inputs are the props, 
// and the output is a component instance in plain JSX. So far, it is quite similar to an ES6 class component. 
// However, functional stateless components are functions (functional) and they have no local state (stateless). 
// You cannot access or update the state with this.state or this.setState() because there is no this object. 
// Additionally, they have no lifecycle methods except for the render() method which will be applied implicitly in functional stateless components. 
// You didn't learn about lifecycle methods yet, but you already used two: constructor() and render(). 
// The constructor runs only once in the lifetime of a component, whereas the render() class method runs once in the beginning and every time the component updates. 
// Keep in mind that functional stateless components have no lifecycle methods, when we arrive at lifecycle methods chapter later.

// ES6 Class Components:
// extend from the React component. The extend hooks all the lifecycle methods, available in the React component API, to the component. 
// This is how we were able to use the render() class method. You can also store and manipulate state in ES6 class components using this.state and this.setState().