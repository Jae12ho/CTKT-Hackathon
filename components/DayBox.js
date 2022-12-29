
export default function DayBox({ n, day, handleDetail, index }) {

    return (
        <div className="flex flex-col justify-center items-center bg-white cursor-pointer" onClick={() => { handleDetail(index, day) }}>
            <div className={`${n === 1 ? 'bg-[#FFDF8B]' : n === 2 ? 'bg-[#FFC16C]' : n === 3 ? 'bg-[#FF983F]' : 'bg-white'} w-[25px] h-[25px] rounded-[5px] shadow-[0_0_4px_rgba(0,0,0,0.25)] border-[0.5px_solid_#D7D7D7]`}></div>
            <p className="text-[12px] h-[12px] font-bold mt-1">{day}</p>
        </div>
    )
}