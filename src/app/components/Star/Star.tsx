"use client"

import { store } from "@/store/store"
import { motion } from "framer-motion"

const Star = ({ isLiked, id }: { isLiked: boolean, id: string }) => {

    const { likedIds, setLikedIds } = store()

    const updateIsLiked = () => {
        if (isLiked) {
            setLikedIds(likedIds.filter(likedId => likedId !== id));
        } 
        
        if(!isLiked && likedIds.length < 9){
            setLikedIds([...likedIds, id])
        }
    }

    return (
        <motion.div whileTap={{ scale: 1.1 }} onClick={updateIsLiked}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill={isLiked ? "yellow" : "none"} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
        </motion.div>
    )
}

export default Star