import Calendar from '../components/Calendar'
import QRScanner from '../components/QRscanner'
import Tree from '../components/Tree'
import Animal from './../components/Animal';
import Name from './../components/Name';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className='home'>
        <Name />
        <Animal />
        <Tree />
        <Calendar />
        <QRScanner />
      </div>
    </div>
  )
}
