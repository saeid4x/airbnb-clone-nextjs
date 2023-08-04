// 'use client';

// import { CldUploadWidget } from "next-cloudinary";
// import Image from "next/image";
// import { useCallback } from "react";
// import { TbPhotoPlus } from 'react-icons/tb'

// declare global {
//   var cloudinary: any
// }

// const uploadPreset = "airbnb-nextjs";

// interface ImageUploadProps {
//   onChange: (value: string) => void;
//   value: string;
// }

// const ImageUpload: React.FC<ImageUploadProps> = ({
//   onChange,
//   value
// }) => {
//   const handleUpload = useCallback((result: any) => {
//     onChange(result.info.secure_url);
//   }, [onChange]);

//   return (
//     <CldUploadWidget 
//       onUpload={handleUpload} 
//       uploadPreset={uploadPreset}
//       options={{
//         maxFiles: 1
//       }}
//     >
//       {({ open }) => {
//         return (
//           <div
//             onClick={() => open?.()}
//             className="
//               relative
//               cursor-pointer
//               hover:opacity-70
//               transition
//               border-dashed 
//               border-2 
//               p-20 
//               border-neutral-300
//               flex
//               flex-col
//               justify-center
//               items-center
//               gap-4
//               text-neutral-600
//             "
//           >
//             <TbPhotoPlus
//               size={50}
//             />
//             <div className="font-semibold text-lg">
//               Click to upload
//             </div>
//             {value && (
//               <div className="
//               absolute inset-0 w-full h-full">
//                 <Image
//                   fill 
//                   style={{ objectFit: 'cover' }} 
//                   src={value} 
//                   alt="House" 
//                 />
//               </div>
//             )}
//           </div>
//         ) 
//     }}
//     </CldUploadWidget>
//   );
// }

// export default ImageUpload;




'use client';


import {CldUploadWidget} from 'next-cloudinary';
import Image from 'next/image';
import { useCallback } from 'react';
import {TbPhotoPlus} from 'react-icons/tb';

/*
    The declare keyword in TypeScript is used for the Ambient declaration
    of variables or for methods. Ambient Declarations is like an import keyword.
    Which tells the compiler that the source exists in another file.
*/
declare global {
    var cloudinary:any;
}

interface ImageUploadProps {
    onChange: (value:string) => void;
    value:string
}


const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange , value
}) =>{
    const handleUpload = useCallback((result:any)=>{
        onChange(result.info.secure_url)
    } , [onChange])
    return(
       <CldUploadWidget 
            onUpload={handleUpload}
            uploadPreset="airbnb-nextjs"
            options={{maxFiles: 1 }}
        >
        {({open}) =>{
            function handleOnClick(e:any){
                e.preventDefault();
                open?.();
            }
            return (
                <div 
                    onClick= {handleOnClick}
                    className="
                        relative
                        cursor-pointer
                        hover:opacity-70
                        transition
                        border-dashed
                        border-2
                        p-20
                        border-neutral-300
                        flex
                        flex-col
                        justify-center
                        items-center
                        gap-4
                        text-neutral-600

                    "                   
                >
                    <TbPhotoPlus size={50}/>

                    <div className='font-semibold text-lg'>
                        Click to Upload
                    </div>

                    {value && (
                        <div
                          className='absolute inset-0 w-full h-full'
                        >
                            <Image
                              alt="house"
                           fill
                              style={{objectFit:'cover'}}
                              src={value}
                            />

                        </div>
                    )}

                </div>
            )
        }}
        </CldUploadWidget>
    )
}

export default ImageUpload; 