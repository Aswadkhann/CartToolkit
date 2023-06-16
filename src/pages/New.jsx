import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/counterslice";
import Navbar from "../redux/Navbar";
import { fetchProducts } from "../redux/productSlice";
import ReactPaginate from "react-paginate";
import ReactShowMoreText from "react-show-more-text";


const New = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);
  const cartItems = useSelector((state) => state.cart);
  const itemsPerPage = 4;
  console.log(data);
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(remove(productId));
  };

  const isItemInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleShowMore = (e) => {
    console.log('Show more clicked');
  };

  const handleShowLess = (e) => {
    console.log('Show less clicked');
  };

  const isAuthenticated = true; // Replace with your authentication logic

  return (
    <>
      <Navbar />
      <div className="">
        {isAuthenticated && (
          <div className="grid grid-cols-4 gap-4 h-[50vh]">
            {currentItems.map((product) => (
              <div
                className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4"
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 mb-2"
                />
                <ReactShowMoreText
                  lines={2}
                  more={<button onClick={handleShowMore}>Show more</button>}
                  less={<button onClick={handleShowLess}>Show less</button>}
                  anchorClass="show-more-link"
                >
                  <h4 className="text-lg font-semibold">{product.title}</h4>
                </ReactShowMoreText>
                <h5 className="text-gray-500">${product.price}</h5>
                {isItemInCart(product.id) ? (
                  <button
                    onClick={() => handleRemoveFromCart(product.id)}
                    className="bg-red-500 text-white py-2 px-4 mt-2 rounded-md"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-purple-500 text-white py-2 px-4 mt-2 rounded-md"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="pt-40 ">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination flex justify-center mt-4"}
            pageClassName={"inline-block mx-1"}
            pageLinkClassName={
              "bg-white border border-gray-300 px-3 py-1 rounded"
            }
            previousClassName={"inline-block mx-1"}
            nextClassName={"inline-block mx-1"}
            previousLinkClassName={
              "bg-white border border-gray-300 px-3 py-1 rounded"
            }
            nextLinkClassName={
              "bg-white border border-gray-300 px-3 py-1 rounded"
            }
            activeClassName={"font-bold"}
          />
        </div>
      </div>
      
    </>
  );
};

export default New;
