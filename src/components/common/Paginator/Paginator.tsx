import styles from './Paginator.module.css';
import React from 'react';
import cn from 'classnames'

type PropsType = {
  totalUsersCount: number
  pageSize: number
  onPageChanged: (pageNumber: number) => void
  currentPage: number
}
const Paginator: React.FC<PropsType> = ({
                                          totalUsersCount,
                                          pageSize,
                                          onPageChanged,
                                          currentPage
                                        }) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages: Array<number> = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div className={styles.paginator}>

    <span onClick={() => {
      onPageChanged(1)
    }}>First </span>

    <span onClick={() => {
      if (currentPage > 1) {
        onPageChanged(currentPage - 1);
      }
    }}>Prev. </span>

    {pages.map((p, index) => {
      if ((currentPage - p) < 2 && (p - currentPage) < 2) {
        // return <span key={index} className={props.currentPage === p ? styles.selectedPage : undefined}
        return <span key={index} className={cn({
          [styles.selectedPage]: currentPage === p
        }, styles.pageNumber)}
                     onClick={(e) => {
                       onPageChanged(p)
                     }}>{p + ' '}
          </span>
      }
    })}
    <span onClick={() => {
      if (currentPage < pagesCount) {
        onPageChanged(currentPage + 1);
      }

    }}>Next </span>
    <span onClick={() => {
      onPageChanged(pagesCount);
    }}>Last</span>
  </div>
}

export default Paginator;