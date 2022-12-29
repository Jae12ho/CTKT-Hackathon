import Calendar from '../components/Calendar'
import Animal from './../components/Animal';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full flex justify-between text-[12px] text-gray-500 p-3">
        <div></div>
        <div className="flex">
          <Link href="/login">로그인</Link>
          <div className="w-2"></div>
          <Link href="/register">회원가입 </Link>
        </div>
      </div>
      <Link href="/main">
        <button>
          <Animal />
        </button>
      </Link>
      <div className="h-6"></div>
      <Calendar />
    </div>
  )
}
