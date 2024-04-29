import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] });
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
});
// export const metadata = {
//   title: "Alpha Codes",
//   description: "Built by Prateek Priyadarshi",
// };

export const metadata = {
  title: { default: 'Homepage | Alpha Codes ', templates: '%s | Alpha Codes' },
  description: 'Built by Prateek Priyadarshi',
};

export default function RootLayout({ children }) {
  const combinedClassName = `${inter.className} ${roboto_mono.className}`;
  return (
    <html lang="en">
      <body className={combinedClassName}>
        <div className="container">
          <Navbar />
          <ToastContainer />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
