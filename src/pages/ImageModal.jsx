function ImageModal({ imageUrl,  onClose }) {
    return (   
              <div className="fixed inset-0 z-50 flex items-center justify-center  " onClick={onClose}>
              <div className="relative  max-w-[800px] mx-auto my-6">
               
                <div className="bg-white w-[800px]  rounded-lg shadow-lg">
                 
                  <img src={imageUrl} alt="Modal" className=" w-full rounded-lg  object-contain" />
        
                  
                  <button
                    className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={onClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
    )
          };


export default ImageModal
