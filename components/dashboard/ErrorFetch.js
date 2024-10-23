import { Button } from '@/components/ui/button'
import React from 'react'

const ErrorFetch = ({ errMssg }) => {
  return (
    <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 min-h-[700px]'>
    <div
      className='flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'
      x-chunk='dashboard-02-chunk-1'
    >
      <div className='flex flex-col items-center gap-1 text-center'>
        <h3 className='text-4xl text-red-500 font-bold  tracking-tight'>
          {'Error :('}
        </h3>
        <p className='text-sm text-muted-foreground'>
          {errMssg}
        </p>
        <Button onClick={()=>{
            location.reload();
        }} className='mt-4 bg-primary'>Refresh</Button>
      </div>
    </div>
  </main>
  )
}

export default ErrorFetch