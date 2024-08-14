import { FC, useMemo, useState } from "react";
import { IData } from "../data/data";

interface PropsModal{
    item:IData;
    onCancel: () => void;
}
const ModalContext:FC<PropsModal> = ({onCancel, item}) => {

    const [id,setId] = useState<number>(0)

    const newPrice = useMemo(() => {
        return  Math.floor(
          Number(item.type[id].price) -
          (Number(item.type[id].price) * item.type[id].aksiya) / 100
          );
    },[item])

    return <div className='w-full h-screen fixed top-0 left-0 bg-[#0009]' onClick={() => onCancel()}>
        <div className="absolute w-1/2 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-3 " onClick={e => e.stopPropagation()}>
            <div className='flex gap-2'>
                <div className="w-72 h-96 ">
                    <img src={item.type[id].img} alt={item.type[id].color} className='w-full h-full rounded-xl object-contain'/>
                </div>
                <div className="">
                    <div className="flex justify-between items-center">
                        <p className='border-b-2 border-gray-300  border-solid pb-3'>{item.text}</p>
                        <button onClick={() => onCancel()} className='bg-gray-300 w-[40px] h-[34px] rounded-full'>x</button>
                        </div>
                    <p className='pt-3'>Rang: {item.type[id].color}</p>
                    <div className="flex gap-3 mt-3">
                        {
                            item.type.map(item => (
                                <button className='w-12 h-14 border-2 border-solid border-gray-300 rounded-lg p-1' onClick={() => setId(item.id)}>
                                    <img src={item.img} alt={item.color} className='w-full h-full object-contain' />
                                </button>
                            ))
                        }
                    </div>
                    <div className='flex gap-4'>
                        <p>{newPrice}</p>
                        <p>
                            <del>{item.type[id].price}</del>
                        </p>
                    </div>
                    <p className='text-[greenyellow]'>sotuvda {item.type[id].count} ta qoldi</p>
                    <button className='w-full text-white bg-[#166199] rounded-lg border-none cursor-pointer p-4 mt-3' onClick={() => alert("Yaxshi")}>Sotuvga qo'shish</button>
                </div>
            </div>
        </div>
    </div>
}

export default ModalContext;