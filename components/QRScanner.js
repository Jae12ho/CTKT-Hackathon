import QRCode from 'qrcode.react';
import { useState } from 'react';

export default function QRScanner() {
    const [result, setResult] = useState('');

    const handleScan = (data) => {
        if (data) {
            setResult(data);
            console.log(result);
        }
    };

    return (
        <div className="m-10">
            <QRCode className="w-[200px] h-[200px]" value="QRcode-value" onScan={handleScan} />
        </div>
    )
}