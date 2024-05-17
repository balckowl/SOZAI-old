"use client"
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const Pagination = ({ totalCount, currentPage, limit }: { totalCount: number, currentPage: number, limit: number }) => {

    const totalPages = Math.ceil(totalCount / limit)

    const generatePageNumbers = () => {
        const pageNumbers = []
        const maxPageNumbers = 5 

        if (totalPages <= maxPageNumbers) {
            // ページ数が少ない場合はすべて表示
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // 現在のページが最初の方の場合
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, 4, '...', totalPages);
            }
            // 現在のページが最後の方の場合
            else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            }
            // 現在のページが中央にある場合
            else {
                pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pageNumbers;
    }

    const pageNumbers = generatePageNumbers()

    return (
        <div className="flex justify-center items-center pb-[50px] md:pb-[100px] gap-3 bg-[#eee]">
            {currentPage > 1 && (
                <Link href={`?page=${currentPage - 1}`}>
                    <button className="bg-black text-white w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-md flex justify-center items-center gap-2">
                        <ArrowLeft />
                    </button>
                </Link>
            )}
            {pageNumbers.map((page, index) =>
                page === '...' ? (
                    <span key={index} className="text-black">
                        ...
                    </span>
                ) : (
                    <Link href={`?page=${page}`} key={index}>
                        <button
                            className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-md flex justify-center items-center ${page === currentPage ? 'bg-gray-700 text-white' : 'bg-black text-white'
                                }`}
                        >
                            {page}
                        </button>
                    </Link>
                )
            )}
            {currentPage < totalPages && (
                <Link href={`?page=${currentPage + 1}`}>
                    <button className="bg-black text-white w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-md flex justify-center items-center gap-2">
                        <ArrowRight />
                    </button>
                </Link>
            )}
        </div>
    )
}

export default Pagination