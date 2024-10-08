import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <main className='bg-black h-screen flex items-center justify-center'>
            <div className="w-[550px] flex flex-col gap-[20px]">
                <div>
                    <div className="font-semibold text-[80px] leading-[125%] text-secondary text-center">Lỗi 404</div>
                    <div className="font-semibold text-white leading-[125%] text-[40px] text-center">Không tìm thấy
                    </div>
                    <div
                        className="font-extralight leading-[125%] mt-[10px] text-center text-[#D9D9D9] text-[18px]">Tìm
                        kiếm của bạn đã vượt ra ngoài tầm hiểu biết của vũ trụ.
                    </div>
                </div>
                <Link href={'/'} className="w-max cursor-pointer mx-auto bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9]
                 p-[2px] rounded-[8px] hover:from-[#7F60F9] hover:to-[#6DDCFF] transition-colors ease-in-out duration-700">
                    <div
                        className="bg-black hover:text-stroke-white font-semibold transition-colors ease-in-out duration-700 text-secondary text-[20px] text-center py-[15px] px-[10px] rounded-[8px]">
                        Trở về trang chủ
                    </div>
                </Link>
            </div>
            <div className="relative w-[600px] h-[560px]">
                <Image alt={'not fund'} className={'object-contain'} src={'/images/notfund.png'} fill/>
            </div>
        </main>
    )
}
