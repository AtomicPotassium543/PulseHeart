function Navbar() {

  return (
    <>
        <div className="z-10 fixed top-0 left-0 w-full h-16 flex flex-row px-8 py-2 mt-4 justify-between items-center">
            <div className="h-full flex flex-row mx-auto my-auto text-lg font-semilight bg-gray-100 rounded-full space-x-16 px-6 py-2 border-2 border-white justify-between items-center">
                <div className="flex flex-row spacing-x-2">
                    <img src="Home.png" className="w-5 my-auto mx-auto mr-2"/>
                    <button className="w-full cursor-pointer hover:font-medium">Home</button>
                </div>
                <div className="flex flex-row spacing-x-2">
                    <img src="Features.png" className="w-5 my-auto mx-auto mr-2"/>
                    <button className="w-full cursor-pointer hover:font-medium">Features</button>
                </div>
                <div className="flex flex-row spacing-x-2">
                    <img src="Pricing.png" className="w-5 my-auto mx-auto mr-2"/>
                    <button className="w-full cursor-pointer hover:font-medium">Pricing</button>
                </div>
                <div className="flex flex-row spacing-x-2">
                    <img src="Blog.png" className="w-5 my-auto mx-auto mr-2"/>
                    <button className="w-full cursor-pointer hover:font-medium">Blog</button>
                </div>
            </div>
        </div>

    </>
  )
}

export default Navbar
