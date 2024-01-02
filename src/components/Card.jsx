import React from 'react'
import { IoIosCopy } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"


function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
      <IoIosCopy/>
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p> 
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
         {data.close ? <IoIosCloseCircleOutline /> : <BsDownload size=".7em" color='#fff' />}
          </span>
        </div>
        {
          data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
           </div>
          )}
      </div>
    </motion.div>
  )
}

export default Card