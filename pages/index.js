import Calendar from '../components/Calendar'
import QRScanner from '../components/QRscanner'
import Tree from '../components/Tree'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Tree />
      <Calendar />
      <QRScanner />
    </div>
  )
}
