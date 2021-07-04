import styles from "./Paginator.Module.css";
import React from "react";

const Paginator = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div className={styles.paginator}>

    <span onClick={() => {
      props.onPageChanged(1)
    }}>First </span>

    <span onClick={() => {
      if (props.currentPage > 1) {
        props.onPageChanged(props.currentPage - 1);
      }
    }}>Prev. </span>

    {pages.map((p, index) => {
      if ((props.currentPage - p) < 2 && (p - props.currentPage) < 2) {
        return <span key={index} className={props.currentPage === p ? styles.selectedPage : undefined}
                     onClick={(e) => {
                       props.onPageChanged(p)
                     }}>{p + " "}
          </span>
      }
    })}
    <span onClick={() => {
      if (props.currentPage < pagesCount) {
        props.onPageChanged(props.currentPage + 1);
      }

    }}>Next </span>
    <span onClick={() => {
      props.onPageChanged(pagesCount);
    }}>Last</span>
  </div>
}

export default Paginator;