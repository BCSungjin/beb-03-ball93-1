import Link from 'next/link'
import { HiExternalLink } from 'react-icons/hi'
import { BsTrophy } from 'react-icons/bs'

const lotteryPrize: string = '3,240.00'

const Banner = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-1'>
      <div className='flex flex-row space-x-2 pl-20'>
        <span className='text-[#576272] font-black text-xs md:text-sm'>
          YOU ARE THE NEXT ONE
        </span>
        <Link href='/docs'>
          <a className='flex flex-row text-[#3892EB] items-center tracking-wide italic underline whitespace-nowrap font-bold text-xs'>
            Learn more <HiExternalLink size='18' />
          </a>
        </Link>
      </div>
      <div className='text-left text-5xl md:text-7xl font-bold leading-none tracking-wide'>
        <span
          className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-500 
  via-purple-500 animate-gradient-xy'
        >
          ${lotteryPrize}
        </span>
      </div>
    </div>
  )
}
export default Banner
