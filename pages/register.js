import Image from "next/image";

export default function Register() {

    return (
        <div className="flex flex-col justify-center items-center bg-[#FAFAFA] h-screen">
            <h1 className="font-extrabold text-[20px] border-b-2 border-black mt-0 m-16">회원가입</h1>
            <div className="w-[390px] flex flex-col justify-center items-center">
                <div className="w-[62%] text-center">
                    <div className="w-full flex justify-between">
                        <h3 className="font-medium text-[12px] pl-2">Email</h3>
                    </div>
                    <input className="font-medium text-[12px] pl-3 rounded-[17px] w-full h-[34px] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] mt-1 mb-2 outline-none" placeholder="이메일"/>
                    <div className="w-full flex justify-between">
                        <h3 className="font-medium text-[12px] pl-2">Password</h3>
                    </div>
                    <input className="font-medium text-[12px] pl-3 rounded-[17px] w-full h-[34px] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] mt-1 mb-2 outline-none" placeholder="비밀번호" />
                    <div className="w-full flex justify-between">
                        <h3 className="font-medium text-[12px] pl-2">Confirm Password</h3>
                    </div>
                    <input className="font-medium text-[12px] pl-3 rounded-[17px] w-full h-[34px] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] mt-1 mb-2 outline-none" placeholder="비밀번호" />
                    <button className="w-full text-[12px] font-bold rounded-[17px] h-[34px] bg-[#FFC16C] shadow-[0_0_4px_rgba(0,0,0,0.25)] my-8">회원가입</button>
                    <p className="text-[14px] font-extrabold">Or</p>
                    <div className="flex justify-between py-6">
                        <button>
                            <Image src="/kakao.svg" width="40px" height="40px" />
                        </button>
                        <button>
                            <Image src="/google.svg" width="40px" height="40px" />
                        </button>
                        <button>
                            <Image src="/gitHub.svg" width="40px" height="40px" />
                        </button>
                    </div>
                    <div className="text-[12px] text-[#A6A6A6]">이미 회원이신가요? <a className="text-[#FFC16C] font-extrabold">로그인 하기</a></div>
                </div>
            </div>
        </div>
    )
}