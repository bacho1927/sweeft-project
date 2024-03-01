
import { useAppContext } from './ContextProvider';
import ImageModal from './ImageModal';
import useSearchHistory from './useSearchHistory';
import { useState } from 'react';



function Main() {
    const { selectedImage, openModal, closeModal, searchQuery, setSearchQuery } = useAppContext();

   
    const {data} = useSearchHistory(searchQuery)

    return (
        <>
        <div className="flex justify-center ">
           <input placeholder="Search image"  className="p-2 border-2 rounded-md border-black w-1/3" onBlur={(e)=> setSearchQuery(e.target.value)}/>
           
        </div>
        
        <div className='flex flex-wrap gap-8 w-3/4 mx-auto mt-16'>
        
            {data?.map((data) =>(
                <div key={data.id} className='flex-1 basis-56  h-[350px] bg-[#474a51] rounded-md'>
            <img onClick={() => openModal(data.urls.full)} className='w-full h-3/4 object-cover rounded-md transition-transform duration-300 transform hover:scale-105 hover:cursor-zoom-in'   src={data.urls.small} key={data.id} alt='img'/>
            
            <p className='p-2 font-semibold text-white'>{data.alt_description}</p>
            </div>
            ))}
        </div>
        {selectedImage && (
            <>
        <ImageModal  imageUrl={selectedImage} altText="Selected Image"  onClose={closeModal}/>
        
        <div  className="fixed inset-0 z-100 bg-black opacity-50 " onClick={closeModal}></div>
</>
      )}
      
        </>
    )
}

export default Main
