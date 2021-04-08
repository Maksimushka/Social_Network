import s from '../../Users/Users.module.css';
import React, {useState} from 'react';

type PaginatorPropsType = {
    onChangePage: (currentPage: number) => void
    currentPage: number
    pageSize: number
    totalItemsCount: number
    portionSize?: number
}

export const Paginator = React.memo(({pageSize, totalItemsCount, onChangePage, currentPage, portionSize = 10}: PaginatorPropsType) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            { portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button> }

            {pages
                .filter(el => {
                    return el >= leftPortionPageNumber && el <= rightPortionPageNumber
                })
                .map(p => {
                return <span
                    key={p}
                    onClick={() => onChangePage(p)}
                    className={currentPage === p ? s.selectedPage : ''}>{p}</span>
            })}

            { portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button> }
        </div>
    )
})