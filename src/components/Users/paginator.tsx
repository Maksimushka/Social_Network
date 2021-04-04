import s from './Users.module.css';
import React from 'react';

type PaginatorPropsType = {
    pages: any[]
    onChangePage: (currentPage: number) => void
    currentPage: number
}

export const Paginator = ({pages, onChangePage, currentPage}: PaginatorPropsType) => {
    return (
        <div>
            {pages.map(p => {
                return <span
                    key={p}
                    onClick={() => onChangePage(p)}
                    className={currentPage === p ? s.selectedPage : ''}>{p}</span>
            })}
        </div>
    )
}