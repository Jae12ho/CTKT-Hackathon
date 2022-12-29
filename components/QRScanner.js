import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';
import zxing from '@zxing/library';

export default function QRScanner() {
    const [result, setResult] = useState('');
    const [selectedDeviceId, setSelectedDeviceId] = useState('');
    const codeReader = new zxing.BrowserQRCodeReader();

    const handleScan = (data) => {
        if (data) {
            setResult(data);
            console.log(result);
        }
    }

    const decodeOnce = (codeReader, selectedDeviceId) => {
        codeReader.decodeFromInputVideoDevice(selectedDeviceId, 'video').then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        })
    }
    
    useEffect(() => {
        window.addEventListener('load', function () {
            console.log('ZXing code reader initialized')

            codeReader.getVideoInputDevices()
                .then((videoInputDevices) => {
                setSelectedDeviceId(videoInputDevices[0].deviceId); 
            })
        })

    }, [setSelectedDeviceId, codeReader]);


    return (
        <div className="m-10">
            <QRCode className="w-[200px] h-[200px]" value="QRcode-value" onScan={handleScan} />

            <div>
                <a className="button" id="startButton" onClick={() => { decodeOnce(codeReader, selectedDeviceId) }}>Start</a>
                <a className="button" id="resetButton">Reset</a>
            </div>

            <div>
                <video id="video" width="300" height="200"></video>
            </div>

            <label>Result:</label>
            <pre><code id="result"></code></pre>
        </div>
    )
}