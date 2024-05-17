"use client"

import { Star } from "lucide-react"

const SkeletonSozaiCard = () => {
  
  return (
    <div className="col-span-1">
      <div className="border-2 p-[30px] rounded-[10px] mb-[10px] bg-gray-50 w-full"></div>
      <div className="flex items-center justify-between">
        <p className="text-[14px] md:text-[16px]">読み込み中</p>
        <Star />
      </div>
    </div>
  )
}

export default SkeletonSozaiCard