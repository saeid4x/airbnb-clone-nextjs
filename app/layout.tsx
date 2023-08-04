import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';

import ClientOnly from './components/ClientOnly';

import RegisterModal from './components/modals/RegisterModal';
import RentModal from './components/modals/RentModal';
import LoginModal from './components/modals/LoginModal';

import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import SearchModal from './components/modals/searchModal';





export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({
  subsets: ["latin"]
})



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // properties of <Modal>
  const handleOnClose = () => { }
  const handleOnSubmit = () => { }





  const currentUser = await getCurrentUser();
  // console.log(currentUser)
  // end of properties of <Modal>
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly> */}
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        {/* </ClientOnly>  */}
        <div className='pb-20 pt-28'>
        {children}
        </div>
      </body>
    </html>
  )
}
