'use client'
import toast from "react-hot-toast";
import { MaterialSymbol } from "react-material-symbols";
import Sidebar from "./components/Sidebar";

export default function Home() {
    // const handleClick = () => {
    //   toast.success('This is a success message!');
    //   // or toast.error('This is an error message!');
    //   // or toast('This is an info message!');
    // };
  return (
  <main>
  <Sidebar/>
  </main>
  );
}
