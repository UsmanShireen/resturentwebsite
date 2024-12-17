import React from 'react'
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Client from "@/components/Client";
import Footer from "@/components/Footer";
import Footerbar from "@/components/Footerbar";

const page = () => {
  return (
    <div>
      <Navbar text="Our Menu" textName="Home > " name="Menu"/>
      <Menu />
      <Client />
      <Footer />
      <Footerbar />
    </div>
  )
}

export default page
