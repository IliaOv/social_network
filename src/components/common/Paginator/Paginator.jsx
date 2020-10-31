import React, {useState} from 'react';
import cn from 'classnames';
import styles from "./Paginator.module.css";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize),
        pages = [],
        portionCount = Math.ceil(pagesCount / portionSize),
        [portionNumber, setPortionNumber] = useState(1),
        leftPortionPageNumber = (portionNumber - 1) * portionSize + 1,
        rightPortionPageNumber = portionNumber * portionSize;
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={styles.pages}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span key={p}
                             className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                             onClick={() => onPageChanged(p)}>
            {p}
          </span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>
};


export default Paginator;
