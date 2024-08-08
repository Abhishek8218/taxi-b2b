import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "../src/providers/QueryProvider";
import RecoilContextProvider from "../src/providers/RecoilProvider";
import  { Toaster } from 'react-hot-toast';
import 'react-material-symbols/rounded'; 
import Header from "@/src/components/header/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={"font-indivisible h-screen antialiased  select-none"}> 
      <QueryProvider>
        <RecoilContextProvider>
          <Header/>
          {children}
        </RecoilContextProvider>
        </QueryProvider>
        <Toaster />
        </body>
    </html>
  );
}
