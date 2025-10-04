function ThirdPage() {
  const list = [
    ["Autumn watch", "YellowIMG.png", "$249.9"],
    ["Technologia watch", "GreenIMG.png", "$239.9"]
  ]
  return (
    <>
        <div className="flex flex-col justify-center items-center h-[100vh] gap-y-2">
            <p className='w-full text-center text-6xl text-black font-medium'>
                Pricing
            </p>
            <p className='w-full text-center text-lg text-gray-700 font-mono'>
                Find the perfect partner for you
            </p>

            <div className="w-4/5 flex flex-row gap-x-4 gap-y-2">
                {list.map(info => (
                    <a href="#" className="w-1/3 p-4 border-2 rounded-lg bg-white" key={info[0]} data-aos="fade-up" data-aos-duration="1000">
                        <div>
                            <img src={info[1]} alt={info[0]} className="rounded-lg border-2"/>
                            <div className="text-center">
                                <p className="w-full text-lg">{info[0]}</p>
                                <p className="w-full text-md">{info[2]}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </>
  )
}

export default ThirdPage
