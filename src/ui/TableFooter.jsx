import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

function TableFooter({ totalPage, totalData, pageNumber, pageSize }) {
  console.log(totalPage, totalData, pageNumber);
  const [searchParams, setSearchParams] = useSearchParams();
  function nextPage() {
    const next = pageNumber === totalPage ? pageNumber : pageNumber + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = pageNumber === 1 ? pageNumber : pageNumber - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (totalPage <= 1) return null;
  return (
    <footer className="flex justify-center p-5 bg-gray-50">
      <div className="w-full flex items-center justify-between">
        <p className="flex gap-1.5">
          Showing <span>{(pageNumber - 1) * pageSize + 1}</span> to{" "}
          <span>
            {pageNumber === totalPage ? totalData : pageNumber * pageSize}
          </span>
          of <span>{totalData}</span> results
        </p>
        <div className="flex gap-2">
          <button
            onClick={prevPage}
            className={`flex items-center ${
              pageNumber === 1 ? "cursor-not-allowed" : "bg-gray-50"
            }`}
          >
            <HiChevronLeft /> <span>Previous</span>
          </button>

          <button
            onClick={nextPage}
            className={`flex items-center ${
              pageNumber === totalPage ? "cursor-not-allowed" : "bg-gray-50"
            }`}
          >
            <span>Next</span>
            <HiChevronRight />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default TableFooter;
