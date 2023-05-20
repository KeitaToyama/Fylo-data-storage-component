import Image from 'next/image'


export default function Home() {
  return (
    <div 
     className='min-h-screen w-full flex items-center justify-center sm:bg-desktop bg-mobile sm:bg-slate-900 sm:bg-left-bottom sm:bg-no-repeat sm:bg-[length:100%_50vh] bg-no-repeat bg-cover text-center font-bold'>
      <div className='flex flex-col sm:flex-row w-4/5 gap-8 mx-0 my-auto justify-center'>
     <div className='text-white text-4xl flex-[1_1_0%] bg-indigo-900 w-full flex flex-col 
     rounded-tr-[5rem]
     rounded-bl-xl rounded-br-xl rounded-tl-xl  p-12 gap-12'>
      <div>
        <img src='images/logo.svg'/>
      </div>
      <div className='flex gap-4 flex-row '>
      <img className='w-12 p-3 bg-slate-900 rounded-xl' src='images/icon-document.svg'/>
      <img className='w-12 p-3 bg-slate-900 rounded-xl' src='images/icon-folder.svg'/>
      <img className='w-12 p-3 bg-slate-900 rounded-xl' src='images/icon-upload.svg'/>
      </div>
     </div>
     <div className='text-white flex-[2_1_0%] bg-indigo-900 rounded-2xl w-full flex flex-col self-end p-10 gap-6 relative'>
      <div className='absolute 
      sm:right-8 sm:-top-12
      right-1/2 top-[90%] 
      p-4 rounded-xl bg-slate-100  flex flex-row'>
<div className='text-slate-900 text-3xl '>1</div>
<div className='text-slate-900 text-3xl '>8</div>
<div className='text-slate-900 text-3xl'>5</div>
<div className='text-slate-500 text-sm'>GB LEFT</div>
      </div>
      <div className='m-0 p-0 box-border text-start font-normal flex flex-row break-keep'>You've used 
      <div className='font-bold mx-2'> 815GB </div>
       of your storage</div>
       <div id='bar' className='h-8 bg-slate-900 rounded-full p-1 flex flex-row items-center'>
        <div id='bar-red' className='w-4/5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex flex-row justify-end'>
          <div className='bg-slate-50 h-4 w-4 rounded-full m-1'></div>
        </div>
       </div>
       <div className='font-normal flex flex-row justify-between'>
        <div>0GB</div>
        <div>100GB</div>
       </div>
     </div>
      </div>
    </div>
  )
}
