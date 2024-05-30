import ApplyJob from '@/components/dashboard/apply';
import React from 'react'

const Apply = async({params}:any) => {
    const data = await fetch("http://localhost:3000/api/post/id", {
    method: "POST",
    body: JSON.stringify({
      id: params.apply,
    }),
    }).then((res) => res.json()).catch((err) => console.log(err));
  return (
  <main className='w-full min-h-screen'>
    {data && data.post ? <ApplyJob data={data.post}/> : <div>loading...</div>}
  </main>
  )
}

export default Apply
