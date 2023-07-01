
import React from 'react'

const RecentPost = () => {
  return (
    <div className='max-h-96 w-48 p-3 border border-t-white rounded-lg shadow-lg bg-white'>
         
         <div>
          <p className='text-xs font-semibold text-left'>Recent</p>
          <ul className='pt-1'>
             <li className='flex'>
             <p className='px-2'>#️⃣</p> <p className='text-xs font-medium p-1'>Java developers</p>
             </li>
             <li className='flex'>
             <p className='px-2'>#️⃣</p> <p className='text-xs font-medium p-1'>Interview</p>
             </li>
             <li className='flex'>
             <p className='px-2'>#️⃣</p> <p className='text-xs font-medium p-1'>Job search</p>
             </li>
             <li className='flex'>
             <p className='px-2'>#️⃣</p> <p className='text-xs font-medium p-1'>algorithim</p>
             </li>
             <li className='flex'>
             <p className='px-2'>#️⃣</p> <p className='text-xs font-medium p-1'>python</p>
             </li>
          </ul>
          <p className='text-xs font-bold text-blue-600 pt-3 text-left'>Groups</p>

          <ul className='pt-1'>
             <li className='flex'>
             <p className='px-2'>👩‍👩‍👦‍👦</p> <p className='text-xs font-medium p-1'>Java Network</p>
             </li>
             <li className='flex'>
             <p className='px-2'>👩‍👩‍👦‍👦</p> <p className='text-xs font-medium p-1'>React Network</p>
             </li>
             <li className='flex'>
             <p className='px-2'>👩‍👩‍👦‍👦</p> <p className='text-xs font-medium p-1'>UI Network</p>
             </li>
            
          </ul>

          <p className='text-xs font-bold text-blue-600 pt-3 text-left'>Follow Hash tags</p>

          <ul className='pt-1'>
          <li className='flex'>
             <p className='px-2'>#️⃣</p> <p className='text-xs font-medium p-1'># Java</p>
             </li>
             <li className='flex'>
             <p className='px-2'>#️⃣</p> <p className='text-xs font-medium p-1'># Interview</p>
             </li>
             <li className='flex'>
             <p className='px-2'>#️⃣</p> <p className='text-xs font-medium p-1'># Job search</p>
             </li>
          </ul>

          

         </div>


</div>
  )
}

export default RecentPost