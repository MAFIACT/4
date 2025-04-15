import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Web3 Dashboard',
  description: 'Stable connection using web3modal/react'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
