"use client"

import { saveAs } from 'file-saver';

const DownloadBtn = ({ url, name }: { url: string, name: string }) => {

    const downloadImage = (format: string) => {
        fetch('/path/to/your/image.' + format)
            .then(response => response.blob())
            .then(blob => {
                saveAs(blob, 'downloaded-image.' + format);
            })
            .catch(e => console.error("Error downloading the image:", e));
    };

    return (
        <div className="col-span-1 row-span-1 flex items-center justify-center gap-3 flex-wrap">
            {['png', 'jpg', 'webp', 'svg'].map((ext) => (
                <div key={ext} className="text-black border-[2px] border-black rounded-lg hover:bg-black hover:text-white transition duration-150 ease-in-out flex-1">
                    <button className="py-[14px] px-[30px] rounded-lg flex gap-2 items-center justify-center w-full" onClick={() => downloadImage(ext)}>
                        <p className="text-[15px]">{ext.toUpperCase()}</p>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default DownloadBtn
