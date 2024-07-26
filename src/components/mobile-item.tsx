import Link from "next/link";
import { ReactNode } from "react";

interface MobileItemProps {
    iconUrl: string;
    linkTo: string;
    children?: ReactNode;
  }

function MobileItem({ iconUrl, linkTo, children }: MobileItemProps){

    return(
        <Link href={linkTo} className='flex flex-row items-center gap-[15px] p-[8px] rounded-[15px] hover:bg-[#161717] transition-colors duration-300'>
            <div className='w-[30px] h-[30px] border border-menuIcon bg-menuIcon rounded-[7px] flex items-center justify-center'>
                <img className='w-[20px]' src={iconUrl} alt="menu ikonka" />
            </div>
            {children}
        </Link>
    )
}

export default MobileItem;