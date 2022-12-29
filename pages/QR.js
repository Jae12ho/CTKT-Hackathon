import QRCode from 'qrcode.react';
import Image from 'next/image';
import Link from 'next/link';

export default function QR() {
    const handleScan = (data) => {
        if (data) {
            console.log(data);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-[#FAFAFA]">
            <div className="w-[350px] h-[360px] p-4 bg-white rounded-[18px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex flex-col justify-between items-center">
                <div className="flex justify-between w-full">
                    <Link href="/">
                        <Image width="30px" height="30px" alt="back" src="/backArrow.svg" />
                    </Link>
                    <div></div>
                </div>
                <QRCode value="https://naver.com" onScan={handleScan} />
                <div></div>
            </div>
        </div>
    )
}