import React from 'react'
import classNames from 'classnames'
import Button from './Button'

const Sort = ({ sortKey, onSort, children, activeSortKey }) => {
    // const sortClass = ['button-inline'];
    // if (sortKey === activeSortKey) {
    //   sortClass.push('button-active');
    // }
    const sortClass = classNames(
      'button-inline',
      {'button-active': sortKey === activeSortKey}
    )
    return(
      <Button onClick={() => onSort(sortKey)} className={sortClass}>
        {children}
      </Button>
  )}

export default Sort