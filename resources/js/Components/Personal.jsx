import React from 'react'

function Personal({personal}) {
  return (
    <div className="p-5 flex space-x-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200 -scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
    <div className='flex-1'>
          <div className='flex justify-between items-center'>
              <div>
                  <span className="text-white">{personal.user.name}</span>
                  {/* <small className="ml-2 text-sm text-white">{dayjs(personal.created_at).fromNow()}</small> */}
              </div>
          </div>
                  
                      <p className="mt-4 text-lg text-white">{personal.condicion}</p>
                      <p className="mt-4 text-white">{personal.fecha_nacimiento}</p>
        
          
</div>
</div>
  )
}

export default Personal