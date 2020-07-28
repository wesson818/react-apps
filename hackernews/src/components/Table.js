import React, {Component} from 'react'
import Button from './Button'
import Sort from './Sort'
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';

const SORTS = {
    NONE: list => list,
    TITLE: list => sortBy(list, 'title'),
    AUTHOR: list => sortBy(list, 'author'),
    COMMENTS: list => sortBy(list, 'num_comments').reverse(),
    POINTS: list => sortBy(list, 'points').reverse(),
};

// ES6 class components
class Table extends Component {
    constructor(props){
      super(props)
      this.state = {
        sortKey: 'NONE',
        isSortReverse: false,
      }
      this.onSort = this.onSort.bind(this);
    }
  
    onSort(sortKey) {
      const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
      this.setState({ sortKey, isSortReverse });
    }
    
    render(){
      const {list, onDismiss} = this.props;
      const {sortKey,isSortReverse} = this.state;
      const sortedList = SORTS[sortKey](list);
      const reverseSortedList = isSortReverse
      ? sortedList.reverse()
      : sortedList;
  
      return(
        <div className="table">
          <div className="table-header">
            <span style={{ width: '40%' }}>
              <Sort
              sortKey={'TITLE'}
              onSort={this.onSort}
              activeSortKey={sortKey}
              >
              Title
              </Sort>
            </span>
            <span style={{ width: '25%' }}>
              <Sort
              sortKey={'AUTHOR'}
              onSort={this.onSort}
              activeSortKey={sortKey}
              >Author
              </Sort>
            </span>
            <span style={{ width: '10%' }}>
              <Sort
              sortKey={'COMMENTS'}
              onSort={this.onSort}
              activeSortKey={sortKey}
              >
              Comments
              </Sort>
            </span>
            <span style={{ width: '10%' }}>
              <Sort
              sortKey={'POINTS'}
              onSort={this.onSort}
              activeSortKey={sortKey}
              >
              Points
              </Sort>
            </span>
          </div>
        {
          reverseSortedList.map(item =>
            <div className="table-row" key={item.objectID}>
              <span style={{width:'15%'}}>
                <Button onClick={() => onDismiss(item.objectID)}>
                  Dismiss
                </Button>
              </span>
              <span style={{width:'40%'}}><a href="{item.url}">{item.title}</a></span>
              <span style={{width:'25%'}}>creat by {item.author}</span>
              <span style={{width:'10%'}}>{item.num_comments}</span>
              <span style={{width:'10%'}}>{item.points}</span>
            </div>
          )
        }
    </div>
    )}
  }
  
  // functional stateless components
  // const Table = ({list, pattern, onDismiss, isSearched = pattern => item => item.title.toLowerCase().includes(pattern.toLowerCase())}) => 
  // const Table = ({list, onDismiss, sortKey, onSort, isSortReverse}) => {
  //   const sortedList = SORTS[sortKey](list);
  //   const reverseSortedList = isSortReverse
  //   ? sortedList.reverse()
  //   : sortedList;
  // return(
  //   <div className="table">
  //     <div className="table-header">
  //       <span style={{ width: '40%' }}>
  //         <Sort
  //         sortKey={'TITLE'}
  //         onSort={onSort}
  //         activeSortKey={sortKey}
  //         >
  //         Title
  //         </Sort>
  //       </span>
  //       <span style={{ width: '25%' }}>
  //         <Sort
  //         sortKey={'AUTHOR'}
  //         onSort={onSort}
  //         activeSortKey={sortKey}
  //         >Author
  //         </Sort>
  //       </span>
  //       <span style={{ width: '10%' }}>
  //         <Sort
  //         sortKey={'COMMENTS'}
  //         onSort={onSort}
  //         activeSortKey={sortKey}
  //         >
  //         Comments
  //         </Sort>
  //       </span>
  //       <span style={{ width: '10%' }}>
  //         <Sort
  //         sortKey={'POINTS'}
  //         onSort={onSort}
  //         activeSortKey={sortKey}
  //         >
  //         Points
  //         </Sort>
  //       </span>
  //     </div>
  //     {
  //       // list.filter(isSearched(pattern)).map((item) => 
  //       // list.map((item) =>
  //       reverseSortedList.map(item =>
  //         <div className="table-row" key={item.objectID}>
  //           <span style={{width:'15%'}}>
  //             <Button onClick={() => onDismiss(item.objectID)}>
  //               Dismiss
  //             </Button>
  //           </span>
  //           <span style={{width:'40%'}}><a href="{item.url}">{item.title}</a></span>
  //           <span style={{width:'25%'}}>creat by {item.author}</span>
  //           <span style={{width:'10%'}}>{item.num_comments}</span>
  //           <span style={{width:'10%'}}>{item.points}</span>
  //         </div>
  //       )
  //     }
  //   </div>
  // )}
  
  Table.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        objectID: PropTypes.string.isRequired,
        author: PropTypes.string,
        url: PropTypes.string,
        num_comments: PropTypes.number,
        points: PropTypes.number,
      })
    ),
    onDismiss: PropTypes.func.isRequired,
  };

  export default Table