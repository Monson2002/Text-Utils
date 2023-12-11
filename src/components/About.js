import React from 'react'

export default function About(props) {
    return (
        <>
            <div className={`${props.mode === "light" ? "bg-slate-50" : "bg-slate-800"} `}>
                <div className="w-11/12 sm:w-3/4 h-screen mx-auto pt-24 flex flex-col justify-start items-center ">
                    <div className={`flex flex-col justify-center items-center m-1 sm:m-2 md:m-4 ${props.mode === "light" ? "text-gray-800" : "text-slate-50"}`}>
                        <h1 className='font-Solway md:text-3xl'>About Me</h1>
                        <hr className={`w-full m-1 sm:m-2 md:m-4 ${props.mode === "light" ? "bg-slate-800" : "bg-slate-50"}`} />
                        <div className='flex flex-col md:flex-row justify-center items-center'>
                            <div className='m-2 p-1 md:p-2 md:w-3/6'>
                                <img src="images/monson-final.jpg" alt="not" srcset="" className='rounded-md md:rounded-lg' />
                            </div>
                            <div className=' md:w-3/6'>
                            <p className=' m-2 text-sm font-Solway md:text-base md:p-4'>
                                Python | React JS | React Native | Node JS | Tailwind CSS | HTML | Github
                            </p>
                            <p className='my-4 m-2 text-sm font-Solway md:text-base md:p-4'>
                                Hi, MONSON here.... I am an aspiring web-developer currently studying Computer Science. I believe my
                                knack for trying new things will help me in moving forward.You can connect with me on <a href="https://www.linkedin.com/in/monson-reji-verghese-a26061231/"><b className='hover:text-blue-700'>linkedin</b></a> and do
                                check out my <a href="https://monson2002-portfolio-2023.netlify.app/"><b className='hover:text-blue-700' target="_blank">portfolio</b></a>.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
