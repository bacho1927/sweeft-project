
import { useAppContext } from './ContextProvider';
import ImageModal from './ImageModal';
import FetchData from './FetchData';
import { useEffect, useRef, useState } from 'react';




function Main() {
    const { selectedImage, openModal, closeModal, searchQuery, setSearchQuery } = useAppContext();
    
    const [page,setPage] = useState(1)
   
    const [newData, setNewData] = useState([])

    const {data} = FetchData(searchQuery,page)

    //autosearch logic
    let timeoutId
    const handleInputChange = (e) => {
        const  value  = e.target.value;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setSearchQuery(value);
        }, 1500);
      };

    useEffect(()=>{
        const scrollEvent = window.addEventListener('scroll', ()=>{
            if((window.innerHeight + window.scrollY) >= document.body.scrollHeight){
                setPage(pageCount => pageCount+1)
            
            }
        })
        return () => window.removeEventListener('scroll', scrollEvent)
    },[])

    useEffect(() => {
        if (data ) {
            setNewData(prevData => [...prevData, ...data]);
            
        }
    }, [data, page]);



    return (
        <>
        <div className="flex justify-center ">
           <input placeholder="Search image"  className="p-2 border-2 rounded-md border-black w-1/3" onChange={ (e)=>handleInputChange(e)}/>
           
        </div>
        
        {data?.length >=1  ?
        <div className='flex flex-wrap gap-8 w-3/4 mx-auto mt-16'>
        
            {data?.map((data) =>(
                <div key={data.id} className='flex-1 basis-56  h-[350px] bg-[#474a51] rounded-md'>
            <img onClick={() => openModal(data.urls.full)} className='w-full h-3/4 object-cover rounded-md transition-transform duration-300 transform hover:scale-105 hover:cursor-zoom-in'   src={data.urls.small} key={data.id} alt='img'/>
            
            <p className='p-2 font-semibold text-white'>{data.alt_description}</p>
            </div>
            ))}
        </div>
         : <h1 className='mt-24 text-center text-5xl font-semibold text-blue-400'>Loading...</h1>}
        {selectedImage && (
            <>
        <ImageModal  imageUrl={selectedImage} data={data}altText="Selected Image"  onClose={closeModal}/>
        
        <div  className="fixed inset-0 z-100 bg-black opacity-50 " onClick={closeModal}></div>
</>
      )}
      
        </>
    )
}

export default Main
