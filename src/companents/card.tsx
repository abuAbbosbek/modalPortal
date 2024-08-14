import { FC, useState } from "react";
import { createPortal } from "react-dom";
import { IData } from "../data/data";
import Savatcha from "./icons";
import ModalContext from "./modal";

interface PropsCard{
    item: IData;
}
const CardContext:FC <PropsCard> = ({item}) => {

    const [open,setOpen] = useState(false);

    const handlyOpenModal = () => {
        setOpen(true)
    };
    const handlyCancel = () => {
        setOpen(false)
    }

    return <>
    <div className='w-96 p-3'>
            <div className='w-96 h-96 rounded-xl '>
                <img src={item.img} alt={item.text.slice(0, 10)} className='w-full h-full object-cover' />
            </div>
            <div>
                <p>{item.text}</p>
                <p className="">
                    <del>{item.type[0].price}</del>
                </p>
            </div>
            <div className='flex justify-between'>
                <p> 160 000 </p>
            <button onClick={handlyOpenModal}>
                <Savatcha/>
            </button>
            </div>
    </div>

    {open && createPortal(<ModalContext item={item} onCancel={handlyCancel}/>,
    document.body )}
    </>
}

export default CardContext;