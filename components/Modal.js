import React, { Fragment, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/outline'

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef=useRef();
  const [selectedFile,setSelectedFile]=useState(null);
  const addImageToPost = (e) =>{
    const reader=new FileReader();
    if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload=(readerEvent)=>{
        setSelectedFile(readerEvent.target.result)
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex min-h-[800px] items-end justify-center pt-4 pb-20 text-center sm:block sm:min-h-screen sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 "
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:m-8 sm:w-full sm:max-w-sm sm:align-middle">
              <div>

                {selectedFile ?(
                    <img className='w-full object-contain cursor-pointer' src={selectedFile} alt="Image" onClick={()=>{
                        setSelectedFile(null)
                    }} />
                ) :(
                <div 
                     onClick={()=> filePickerRef.current.click()}
                    className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
                >

                    <CameraIcon
                        className='h-6 w-6 text-red-600'
                        aria-hidden="true"
                    />
                </div>
                )}
                <div>
                    <div className='mt-3 text-center'>
                        <Dialog.Title
                            as='h3'
                            className="text-lg leading-6 font-medium text-gray-900"
                        >
                            Upload a photo
                        </Dialog.Title>
                    </div>
                    <div >
                        <input
                         ref={filePickerRef}
                         type="file"
                         hidden
                         onChange={addImageToPost}
                          />
                    </div>
                    <div className='mt-2'>
                        <input type="text"
                        className='border-none focus:ring-0 w-full text-center'
                        placeholder='Please enter a caption ...'
                        // ref={captionRef}
                         />
                    </div>

                </div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    // disabled={!selectedFile}
                    type="button"
                    className=" focus:rign-offset-2 inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-500 disabled:cursor-not-allowed disabled:bg-gray-300 hover:disabled:bg-gray-300 sm:text-sm"
                  >
                    {/* {loading ? "Uploading":"Upload Post"} */}
                    Upload Post
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
