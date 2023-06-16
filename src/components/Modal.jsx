import React from 'react'

const Modal = () => {
    const [showModal, setShowModal] = React.useState(false);
    const handleModalClose = () => {
      setShowModal(false);
      document.body.classList.remove("modal-open");
    };
    const handleModalOpen = () => {
      setShowModal(true);
      document.body.classList.add("modal-open");
    };
  return (
   
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg bg-[#1C1C1E] relative flex flex-col w-full outline-none focus:outline-none">
                <div className="flex justify-center  bg-white">
                <div className="">
                  <h2>Location</h2>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
     
  )
}

export default Modal