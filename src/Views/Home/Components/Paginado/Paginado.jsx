import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import {useSelector} from "react-redux"

const walkersPerPage = 5;

const Paginado = () => {
  const walkers = useSelector((state) => state.walkers);

  const [walkersPaginated, setWalkersPaginated] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
    setWalkersPaginated(walkers.slice(0, walkersPerPage));
  }, [walkers]);

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;

    const firstIndex = prevPage * walkersPerPage;
    const lastIndex = firstIndex + walkersPerPage;

    setWalkersPaginated(walkers.slice(firstIndex, lastIndex));

    setCurrentPage(prevPage);
  };

  const nextHandler = () => {
    const totalWalkers = walkers.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * walkersPerPage;
    const lastIndex = firstIndex + walkersPerPage;

    if (firstIndex >= totalWalkers) return;

    setWalkersPaginated(walkers.slice(firstIndex, lastIndex));

    setCurrentPage(nextPage);
  };

  return (
    <div className="bg-sky-300 mx-9 mt-2 border-none rounded-lg">
      <Cards walkers={walkersPaginated} />
      <div className='pb-4 flex flex-row justify-center'>
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
            currentPage === 0
              ? "bg-gray-200 cursor-not-allowed rounded opacity-50"
              : ""
          }`}
          onClick={prevHandler}
          disabled={currentPage === 0}
        >
          Anterior
        </button>
        <button className='bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mx-4' disabled>
          {currentPage + 1}
        </button>
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${
            walkersPaginated.length < walkersPerPage ||
            walkers.length === (currentPage + 1) * walkersPerPage
              ? "bg-gray-200 cursor-not-allowed rounded opacity-50"
              : ""
          }`}
          onClick={nextHandler}
          disabled={
            walkersPaginated.length < walkersPerPage ||
            walkers.length === (currentPage + 1) * walkersPerPage
          }
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Paginado;
