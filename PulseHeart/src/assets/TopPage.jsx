import { useState } from "react"

function TopPage() {
  const [current, setcurrent] = useState(0);

  const list = [
    ["Autumn watch", "YellowIMG.png"],
    ["Technologia watch", "GreenIMG.png"]
  ]

  function forward() {
      setcurrent(prev => (prev + 1) % list.length);

  }

  function backward() {
      setcurrent(prev => (prev + 1) % list.length);
  }

  return (
    <>
      <div className="flex flex-row lg:flex-row md:flex-col sm:flex-col justify-around h-screen">
        <div className="flex flex-col gap-y-0 justify-center items-center w-full h-9/10 bg-gradient-to-b from-gray-500 to-black to-55% p-4 overflow-hidden">
              <div className="translate-y-[40%]">
                  <div className="flex flex-col gap-y-4 mb-15" data-aos="fade-down" data-aos-duration="1000">
                      <p className="w-full text-center text-5xl text-white font-medium">Change your belongings, Change your life</p>
                      <p className="w-full text-center text-1xl font-light text-white">Unlock new possibilities with every step you take.</p>
                  </div>
                  <img src="horizontal.png" className="object-cover mx-auto w-1/2" data-aos="fade-up" data-aos-duration="1000"/>
              </div>
        </div>
      </div>
    </>
  )
}

export default TopPage