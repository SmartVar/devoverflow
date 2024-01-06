/* eslint-disable spaced-comment */
//@ts-ignore

import LeftSidebar from '@/components/shared/LeftSidebar'
import Navbar from '@/components/shared/navbar/Navbar'
import React from 'react'
import RightSidebar from '@/components/shared/RightSidebar'
// import LeftSidebarDash from '@/components/shared/dashboard/LeftSidebarDash'


const Layout = ({ children }: { children: React.ReactNode }) => {
  // const path=``;
  
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        {/* {path==='/dashboard' ? <LeftSidebarDash />: <LeftSidebar />} */}
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">
            {children}
          </div>
        </section>

        <RightSidebar />
      </div>

      Toaster
    </main>
  )
}

export default Layout