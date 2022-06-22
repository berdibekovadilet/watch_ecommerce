import React from "react";
import ReactPaginate from "react-paginate";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../styles/modules/pagination.module.scss";

const Pagination = ({ onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className={styles.wrapper}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={9}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
