
import useSearchHistory from "./useSearchHistory"
import { useAppContext } from "./ContextProvider";
import ImageModal from "./ImageModal";
import { useEffect, useState } from "react";



function History() {
    const { selectedImage,openModal, closeModal, searchQuery , setSearchQuery, searchHistory} = useAppContext();
    

    const {data} = useSearchHistory(searchQuery)
   
  
    return (
        <>
        <div className="flex justify-center gap-8 ">
            {searchHistory.map((word,index) => 
            <button onClick={(e)=>setSearchQuery(e.target.textContent)} className="bg-blue-500 rounded-md text-xl px-4 p-2 font-semibold text-white" key={index}>{word}</button>
            )}
            
        </div>
        <div className='flex flex-wrap gap-8 w-3/4 mx-auto mt-16'>
        
            {data?.map((item) =>(
                <div key={item.id} className='flex-1 basis-56  h-[350px] bg-[#474a51] rounded-md'>
            <img onClick={() => openModal(item.urls.full)} className='w-full h-3/4 object-cover rounded-md transition-transform duration-300 transform hover:scale-105 hover:cursor-zoom-in'   src={item.urls.small}  alt='img'/>
           
            <p className='p-2 font-semibold text-white'>{item.alt_description}</p>
            </div>
            ))}
        </div>
        {selectedImage && (
            <>
        <ImageModal  imageUrl={selectedImage} data={data} altText="Selected Image"  onClose={closeModal}/>
        
        <div  className="fixed inset-0 z-100 bg-black opacity-50 " onClick={closeModal}></div>
</>
      )}
            </>
    )
}

export default History
