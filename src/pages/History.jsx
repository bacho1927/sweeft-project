
import FetchData from "./FetchData"
import { useAppContext } from "./ContextProvider";
import ImageModal from "./ImageModal";
import { useEffect, useState } from "react";




function History() {
    const { selectedImage,openModal, closeModal, searchQuery , setSearchQuery, searchHistory} = useAppContext();
    const [page,setPage] = useState(1)
    const [newData, setNewData] = useState([])


    const {data} = FetchData(searchQuery,page)
   
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
   
        {searchHistory.length >=1 ? 
        <>
         <h1 className="mx-auto text-center text-blue-400 text-xl font-semibold mb-4">Searched Words</h1>
        <div className="flex justify-center gap-8 ">
       
            {searchHistory.map((word,index) => 
            <button onClick={(e)=>setSearchQuery(e.target.textContent)} className="bg-blue-500 rounded-md text-xl px-4 p-2 font-semibold text-white" key={index}>{word}</button>
            )}
            
        </div>
        </> : 
        <h1 className="mx-auto text-center text-blue-400 text-xl font-semibold ">You have no searched history</h1>
        }
        {data?.length >=1 ?
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
        <ImageModal  imageUrl={selectedImage} data={data} altText="Selected Image"  onClose={closeModal}/>
        
        <div  className="fixed inset-0 z-100 bg-black opacity-50 " onClick={closeModal}></div>
        </>
      )}
    </>
    )
}

export default History
