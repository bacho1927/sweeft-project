
import { FaThumbsUp } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";



function ImageModal({ data, imageUrl,  onClose}) {
  

  const find = data?.find(item => item.urls.full === imageUrl)
  


  const downloadImage = () => {
    const url = find.links.download_location;
    const link = document.createElement('a');
    link.href=url;
    link.setAttribute('download', find.links.download_location)
    link.click();
    document.body.removeChild(link);
  }



    return (   
              <div className="fixed inset-0 z-50 flex items-center justify-center  " onClick={onClose}>
              <div className="relative  max-w-[800px] mx-auto my-6">
               
                <div className="bg-white w-[800px]  rounded-lg shadow-lg">
                  
                  <img   src={imageUrl} alt="Modal" className=" w-full rounded-lg  object-contain"    />
                  <div className=" absolute left-2 top-1/2 flex flex-col gap-2">
                    <div className="flex  items-center gap-2 text-white  hover:text-blue-300 hover:cursor-pointer">
                      <FaThumbsUp className="text-2xl  "/>
                      <p className=" text-2xl">{find.likes}  </p>
                     </div>
                     <button className="flex gap-2 text-white  hover:text-blue-300 hover:cursor-pointer " >

                        <FaCloudDownloadAlt className=" text-2xl"/>
                        <p onClick={downloadImage}>Download</p>
                     </button>

                  </div>
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
