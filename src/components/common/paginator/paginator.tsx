import React, {useState} from 'react';
import s from './paginator.module.scss'
import {Button} from 'antd';

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
        <div className={s.paginatorBlock}>
            { portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button> }
            <div className={s.portionBlock}>
                {
                    pages
                    .filter(el => {
                        return el >= leftPortionPageNumber && el <= rightPortionPageNumber
                    })
                    .map(p => {
                        const styleForPage = `${s.pageNumber} ${currentPage === p ? s.pageNumberActive : ''}`
                        return <span
                            key={p}
                            onClick={() => onChangePage(p)}
                            className={styleForPage}>{p}</span>
                    })
                }
            </div>
            { portionCount > portionNumber && <Button onClick={() => setPortionNumber(portionNumber + 1)}>Next</Button> }
        </div>
    )
})