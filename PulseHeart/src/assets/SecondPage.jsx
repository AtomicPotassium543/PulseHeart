import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function SecondPage() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-y-10">
            <p className='w-full text-center text-6xl text-black font-medium'>
                Features
            </p>

            <div className='w-4/5 h-full flex flex-col gap-y-4 justify-center items-center'>
                <div className='w-full h-1/2 flex flex-row gap-x-4' data-aos-duration="1000">
                    <div className='w-1/2 border-2 border-black flex flex-row p-4' data-aos="fade-right">
                        <div className='w-1/3 flex mx-auto my-auto'>
                            <img src='AIicon.png'/>
                        </div>
                        <div className='w-1/2 flex-col gap-y-2'>
                            <p className='w-full h-1/4 text-3xl font-medium'>
                                Extensive AI Support
                            </p>
                            <p className='w-full h-1/4 text-md font-mono text-pretty'>
                                Experience seamless integration with advanced AI features that adapt to your needs, enhance productivity, and provide intelligent insights—making every interaction smarter, faster, and more personalized than ever before.
                            </p>
                            
                        </div>
                    </div>
                    <div className='w-1/2 border-2 border-black flex flex-row p-4' data-aos="fade-left">
                        <div  className='w-1/3 flex mx-auto my-auto'>
                            <img src='BatteryIcon.png'/>
                        </div>
                        <div className='w-1/2 flex-col gap-y-2'>
                            <p className='w-full h-1/4 text-3xl font-medium'>
                                Tanked Battery
                            </p>
                            <p className='w-full h-1/4 text-md font-mono text-pretty'>
                                Enjoy extended usage with our high-capacity battery, designed to keep you powered throughout the day. Experience fewer interruptions, faster charging, and reliable performance—ensuring your device is always ready when you are.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-1/2 flex flex-row gap-x-4' data-aos-duration="1000">
                    <div className='w-1/3 border-2 border-black p-4' data-aos="fade-right">
                        <p className="w-full h-1/4 text-3xl font-medium text-center inline-flex items-center justify-center">
                            <img src='ConnectivityIcon.png' className='w-6 h-6 mr-2 inline-block' />
                            Seamless Connectivity
                        </p>
                        <p className='w-full h-1/4 text-md font-mono text-pretty'>
                            Stay connected wherever you go with robust Bluetooth and Wi-Fi integration. Effortlessly sync your devices, receive notifications in real-time, and enjoy uninterrupted access to your favorite apps and services.
                        </p>
                    </div>
                    <div className='w-1/3 border-2 border-black p-4' data-aos="fade-left">
                        <p className="w-full h-1/4 text-3xl font-medium text-center inline-flex items-center justify-center">
                            <img src='HealthIcon.png' className='w-6 h-6 mr-2 inline-block' />
                            Health Monitoring
                        </p>
                        <p className='w-full h-1/4 text-md font-mono text-pretty'>
                            Track your health with precision using advanced sensors for heart rate, sleep, and activity. Receive personalized insights and alerts to help you maintain a balanced and healthy lifestyle every day.
                        </p>
                    </div>
                    <div className='w-1/3 border-2 border-black p-4' data-aos="fade-left">
                        <p className="w-full h-1/4 text-3xl font-medium text-center inline-flex items-center justify-center">
                            <img src='CustomizeIcon.png' className='w-6 h-6 mr-2 inline-block' />
                            Customizable Interface
                        </p>
                        <p className='w-full h-1/4 text-md font-mono text-pretty'>
                            Personalize your experience with a variety of watch faces, themes, and widgets. Tailor your device to match your style and preferences, making it truly yours in every way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondPage