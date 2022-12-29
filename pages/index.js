import Calendar from '../components/Calendar'
import Animal from './../components/Animal';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
        <Animal />
        <Calendar />
    </div>
  )
}
