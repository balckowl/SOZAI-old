"use client"

import { Download } from "lucide-react"
import { saveAs } from 'file-saver';

const DownloadBtn = ({ url, name }: { url: string, name: string }) => {

    const downloadImage = (format: any) => {

        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const filename = `${name}.${format}`;
                saveAs(blob, filename);
            })
            .catch(e => console.error("Error downloading the image:", e));
    }

    return (
        <div className="col-span-1 row-span-1 flex items-center justify-center gap-3 flex-wrap">
            <div className="text-black border-[2px] border-black rounded-lg hover:bg-black hover:text-white transiton duration-150 ease-in-out">
                <button className="py-[14px] px-[30px] rounded-lg flex gap-2 items-center" onClick={() => downloadImage('png')}>
                    <Download width={18} height={18} />
                    <p className="text-[15px]">PNG</p>
                </button>
            </div>
            <div className="text-black border-[2px] border-black rounded-lg hover:bg-black hover:text-white transiton duration-150 ease-in-out">
                <button className="py-[14px] px-[30px] rounded-lg flex gap-2 items-center" onClick={() => downloadImage('jpg')}>
                    <Download width={18} height={18} />
                    <p className="text-[15px]">JPG</p>
                </button>
            </div>
            <div className="text-black border-[2px] border-black rounded-lg hover:bg-black hover:text-white transiton duration-150 ease-in-out">
                <button className="py-[14px] px-[30px] rounded-lg flex gap-2 items-center" onClick={() => downloadImage('webp')}>
                    <Download width={18} height={18} />
                    <p className="text-[15px]">WEBP</p>
                </button>
            </div>
            <div className="text-black border-[2px] border-black rounded-lg hover:bg-black hover:text-white transiton duration-150 ease-in-out">
                <button className="py-[14px] px-[30px] rounded-lg flex gap-2 items-center" onClick={() => downloadImage('svg')}>
                    <Download width={18} height={18} />
                    <p className="text-[15px]">SVG</p>
                </button>
            </div>
        </div>
    )
}

export default DownloadBtn