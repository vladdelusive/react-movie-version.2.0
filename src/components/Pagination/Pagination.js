import React from 'react';
import './Pagination.css'

export default function Pagination({currentPage, total_pages, setCurrentPage}) {
    const pages = []
    for (let i = 1; i <= total_pages; i++) {
        pages.push(
            <div
                onClick={() => setCurrentPage(i)}
                key={i}
                className={currentPage === i ? "active" : ""}>{i}
            </div>)
    }

    return (
        <div className="pagination">
            <div>&laquo;</div>
            {pages}
            <div>&raquo;</div>
        </div>
    );
};


// <nav>
//     <ul className='pagination'>
//         {pageNumbers.map(number => (
//             <li key={number} className='page-item'>
//                 <a onClick={() => paginate(number)} className='page-link'>
//                     {number}
//                 </a>
//             </li>
//         ))}
//     </ul>
// </nav>