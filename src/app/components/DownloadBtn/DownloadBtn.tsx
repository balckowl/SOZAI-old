"use client"

import { saveAs } from 'file-saver';

const DownloadBtn = ({ url, name }: { url: string, name: string }) => {

    const downloadImage = (format: string) => {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const filename = `${name}.${format}`;
                const isIOS = /iP(hone|(o|a)d)/.test(navigator.userAgent);

                if (isIOS) {
                    // iOSデバイスの場合、新しいタブでBlob URLを開く
                    const blobUrl = URL.createObjectURL(blob);
                    window.open(blobUrl, '_blank', 'noopener,noreferrer');
                } else {
                    // その他のデバイスではfile-saverを使用してダウンロード
                    saveAs(blob, filename);
                }
            })
            .catch(e => console.error("Error downloading the image:", e));
    }

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

export default DownloadBtn;
