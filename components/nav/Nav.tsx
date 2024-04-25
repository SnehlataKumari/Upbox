import Logo from '@/components/logo/Logo';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import TopbarImage from './TopbarImage';
import Hamburger from '../icons/Hamburger';
import hamburgerCloseSvg from '@/assets/hamburgerClose.svg';
import { mobileMenuItems } from '@/utils/dummyData';
import Image from 'next/image';
import { dmSansText, roboto } from '@/utils/fonts';
import Button from '../button/Button';

const Nav = () => {
  return (
    <div className='sticky top-0 bg-[white]'>
      <TopbarImage />
      <div className='flex p-2 items-center justify-between'>
        <Logo />
        <div className='md:hidden'>
          <Dialog>
            <DialogTrigger asChild>
              <Hamburger />
            </DialogTrigger>
            <DialogContent className="h-screen w-screen m-0 p-0 bg-hero">
              <TopbarImage />
              <ul className={`text-center`}>
                {
                  mobileMenuItems.map((item, index) => {
                    return <li className={`font-normal p-5 ${roboto.className}`} key={index}>{item}</li>
                  })
                }
              </ul>
            </DialogContent>
          </Dialog>
        </div>
        <div className="hidden md:flex ">
          <ul className='flex items-center space-x-5'>
            {
              mobileMenuItems.map((item, index) => {
                return <li className={`font-medium text-xs/[13.2px] ${dmSansText.className}`} key={index}>
                  {item === "LOG IN" ? <Button text={item} className='font-medium text-[10px]/[13.2px] border-black border-2 px-5' /> : item}
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Nav;