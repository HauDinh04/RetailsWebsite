import React, {FormEvent} from 'react';

function Notice({isShow, setIsShow}: {
    isShow: boolean;
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('handleSubmit');
    }

    if (isShow) {
        return (
            <div className={'fixed inset-0 z-[10] w-full h-screen bg-[rgba(0,0,0,0.65)] flex justify-center items-center'}>
                <div className="w-[850px] relative h-[376px] rounded bg-white" style={{
                    background: "url('/images/newletter-bg.jpg') no-repeat white"
                }}>
                    <div className="pl-[55%] py-[60px] text-center mr-[20px]">
                        <p className={'text-[#0083c1] py-[10px] text-[18px] font-bold '}>Daily Promotion</p>
                        <div className="text-[#333333] text-[22px] font-bold uppercase tracking-normal">SIGN UP FOR
                            NEWSLETTER
                        </div>
                        <form onSubmit={handleSubmit} className={'flex flex-col mt-[30px] h-[129px] w-[302px] mx-auto'}>
                            <input placeholder={'Your email address'}
                                   className={'w-[280px] shadow transition-all ease-in focus:shadow-[0_0_3px_1px_#66afe9] text-[12px] px-[6px] outline-0 py-[12px] h-[41px] mb-[30px] border border-solid border-[#ddd]'}
                                   type="text"/>
                            <button type={'submit'}
                                    className={`bg-[#0083c1] w-[160px] h-[38px] text-white mb-[20px] uppercase border border-solid border-[#0083c1]
                                     text-[14px] mx-auto hover:bg-[#555555] hover:border-[#555555] rounded-[3px] px-[10px] py-[8px]`}>
                                Subscribe
                            </button>
                        </form>
                        <div className="flex w-max mx-auto gap-[5px] items-center">
                            <input type="checkbox" className={'w-[13px] h-[13px]'}/>
                            <div className="text-[12px]">Don&#39;t show this popup again</div>
                        </div>
                    </div>
                    <div onClick={() => setIsShow(false)}
                         className="absolute top-0 right-0 opacity-[0.65] hover:opacity-[1] text-black text-center w-[44px] h-[44px] leading-[44px] cursor-pointer text-[28px]">x
                    </div>
                </div>
            </div>
        );
    }
}

export default Notice;