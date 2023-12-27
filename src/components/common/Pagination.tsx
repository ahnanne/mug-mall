import { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getQueryFromLocation } from '@/lib/qsHelper';

type PaginationProps = {
  totalPage: number;
};

const Pagination = (props: PaginationProps) => {
  const { totalPage } = props;

  const location = useLocation();

  const [currPage, setCurrPage] = useState(1);
  const pageNumbers = useMemo(
    () => Array.from({ length: totalPage }, (_, idx) => idx + 1),
    [totalPage]
  );
  const pagePath = useMemo(() => location.pathname, [location]);

  useEffect(() => {
    const page = getQueryFromLocation(location, 'page');

    if (page) {
      setCurrPage(Number(page));
    }
  }, [location]);

  return (
    <ul className="pagination">
      {pageNumbers.map((page) => (
        <li key={page} className={currPage === page ? 'curr' : ''}>
          <Link to={`${pagePath}?page=${page}`}>{page}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
