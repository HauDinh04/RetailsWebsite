'use client';
import React, {useState} from 'react';
import {FaCog} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import Image from "next/image";
import {FiFileText} from "react-icons/fi";
import {setSkin} from "@/redux/features/skin/skin.slice";
import {useAppDispatch} from "@/redux/hooks";
import {motion} from 'framer-motion';

const patterns = [
    {
        id: 28,
        image: '28.png'
    },
    {
        id: 29,
        image: '29.png'
    },
    {
        id: 30,
        image: '30.png'
    },
    {
        id: 31,
        image: '31.png'
    },
    {
        id: 32,
        image: '32.png'
    },
    {
        id: 33,
        image: '33.png'
    },
    {
        id: 34,
        image: '34.png'
    },
    {
        id: 35,
        image: '35.png'
    },
    {
        id: 36,
        image: '36.png'
    },
    {
        id: 37,
        image: '37.png'
    },
    {
        id: 38,
        image: '38.png'
    },
    {
        id: 39,
        image: '39.png'
    },
    {
        id: 40,
        image: '40.png'
    },
    {
        id: 41,
        image: '41.png'
    },
    {
        id: 42,
        image: '42.png'
    },
    {
        id: 43,
        image: '43.png'
    },
    {
        id: 44,
        image: '44.png'
    },
    {
        id: 45,
        image: '45.png'
    }
]

function SettingButton() {
    const dispatch = useAppDispatch();
    const [color, setColor] = useState<string>('#0083c1');
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    const handleShowSkinCss = () => {
        dispatch(setSkin(true));
    }

    if (isOpen) return (
        <motion.div
            initial={{x: -240}}
            animate={{x: 0}}
            exit={{x: -100}}
            transition={{duration: 0.7, ease: "easeOut"}}
            className="fixed w-[240px] z-50 shadow-2xl h-max left-0 top-[120px] rounded-[3px] bg-white">
            <div className="bg-[#444] flex items-center justify-between w-full text-white h-[36px]">
                <div className="uppercase text-[14px] text-center font-semibold flex-1">Demo option</div>
                <div onClick={() => setIsOpen(false)}
                     className="w-[36px] h-[36px] flex items-center justify-center cursor-pointer hover:bg-[#777]">
                    <FaTimes className={'text-[16px] font-medium'}/>
                </div>
            </div>
            <div className="p-[20px] flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[5px]">
                    <div className="text-[12px] font-semibold text-[#333]">Color Scheme</div>
                    <div className="relative border border-solid border-[#ddd] pr-[44px] pl-[12px] h-[34px]">
                        <input type="text" className={'w-full h-[34px] text-[12px] outline-0 bg-transparent'}
                               value={color}
                               onChange={handleChange}/>
                        <input type="color" onChange={handleChange}
                               className={'absolute right-0 top-[2px] w-[28px] h-[28px]'}/>
                    </div>
                </div>
                <div className="flex flex-col gap-[5px]">
                    <div className="text-[12px] font-semibold text-[#333]">Layout Box</div>
                    <select className="w-full bg-[#eee] outline-0 h-[30px] text-[12px] text-[#555555] rounded-[3px]">
                        <option value="1">Wide</option>
                        <option value="1">Boxed</option>
                        <option value="1">Iframed</option>
                        <option value="1">Rounded</option>
                    </select>
                </div>
                <div className="flex flex-col gap-[5px]">
                    <div className="text-[12px] font-semibold text-[#333]">Body Image</div>
                    <div className="grid grid-cols-6 gap-[5px]">
                        {patterns.map((item, index) => (
                            <div key={index} className={'relative aspect-square w-[25px] h-[25px]'}>
                                <Image alt={item.id.toString()} src={`/images/${item.image}`} fill sizes={'25'}/>
                            </div>
                        ))}
                    </div>
                    <div className="text-[10px] text-[#999999] my-[2.5px] leading-[16px]">
                        Background only applies for Boxed,Framed, Rounded Layout
                    </div>
                    <div onClick={handleShowSkinCss}
                         className="bg-[#337ab7] text-white flex justify-center items-center gap-[3px]
                     h-[34px] cursor-pointer border border-solid border-[#2e6da4] hover:bg-[#286090] hover:border-[#204d74]">
                        <FiFileText/>
                        <div className="text-[14px]">Get SKin CSS</div>
                    </div>
                </div>
            </div>
            <div
                className="flex justify-between text-white bg-[#eee] py-[10px] px-[20px] border border-solid border-[#DCDCDC]">
                <div
                    className="text-[13px] cursor-pointer bg-[#666] hover:bg-[#333] w-[43%] py-[7px] px-[12px] rounded-[3px] text-center">Reset
                </div>
                <div
                    className="text-[13px] cursor-pointer bg-[#F47252] hover:bg-[#333]  w-[43%] py-[7px] px-[12px] rounded-[3px] text-center">Apply
                </div>
            </div>
        </motion.div>
    ); else return (
        <motion.div onClick={() => setIsOpen(true)}
                    initial={{x: -42}}
                    animate={{x: 0}}
                    exit={{x: -42}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    className="fixed w-[42px] h-[40px] left-0 top-[220px] rounded-r-[3px] rounded-b-[3px] p-[10px] cursor-pointer bg-black">
            <FaCog className={'text-white text-[20px] w-max h-max'}/>
        </motion.div>
    )


}

export default SettingButton;