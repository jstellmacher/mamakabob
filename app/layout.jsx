import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: "MamaKabob - Food Truck",
  description: "Schedule events and contact MamaKabob",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: "transparent" }}>
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Navbar />
        
        <main className="min-h-screen bg-transparent">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
