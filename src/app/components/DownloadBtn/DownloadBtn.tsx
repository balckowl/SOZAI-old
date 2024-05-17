"use client"
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
            <div className="text-black border-[2px] border-black rounded-lg hover:bg-black hover:text-white transiton duration-150 ease-in-out flex-1">
                <button className="py-[14px] px-[30px] rounded-lg flex gap-2 items-center justify-center w-full" onClick={() => downloadImage('png')}>
                    <p className="text-[15px]">PNG</p>
                </button>
            </div>
            <div className="text-black border-[2px] border-black rounded-lg hover:bg-black hover:text-white transiton duration-150 ease-in-out flex-1">
                <button className="py-[14px] px-[30px] rounded-lg flex gap-2 items-center justify-center w-full" onClick={() => downloadImage('jpg')}>
                    <p className="text-[15px]">JPG</p>
                </button>
            </div>
            <div className="text-black border-[2px] border-black rounded-lg hover:bg-black hover:text-white transiton duration-150 ease-in-out flex-1">
                <button className="py-[14px] px-[30px] rounded-lg flex gap-2 items-center justify-center w-full" onClick={() => downloadImage('webp')}>
                    <p className="text-[15px]">WEBP</p>
                </button>
            </div>
            <div className="text-black border-[2px] border-black rounded-lg hover:bg-black hover:text-white transiton duration-150 ease-in-out flex-1">
                <button className="py-[14px] px-[30px] rounded-lg flex gap-2 items-center justify-center w-full" onClick={() => downloadImage('svg')}>
                    <p className="text-[15px]">SVG</p>
                </button>
            </div>
        </div>
    )
}

export default DownloadBtn