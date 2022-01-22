import React from 'react'
import work_home from '../assets/images/work-home.jpg'
import work_one from '../assets/images/work-one.PNG'
import work_two from '../assets/images/work-two.PNG'
import work_three from '../assets/images/work-three.PNG'
import work_four from '../assets/images/work-four.PNG'
import work_five from '../assets/images/work-five.png'
import work_six from '../assets/images/work-six.PNG'
import work_seven from '../assets/images/work-seven.PNG'

const Work = () => {

    const data = [
        {
            image: work_one,
            title: 'Kigali Titans',
            link:'https://www.kigalititans.com'
        },{
            image: work_two,
            title: 'CINETIE',
            link:'https://www.cinetie.com'
        },{
            image: work_three,
            title: 'MadiBabu',
            link:'https://www.madibabu.com'
        },{
            image: work_four,
            title: 'Pizza Hut',
            link:'https://zen-jang-9600fc.netlify.app/'
        },{
            image: work_five,
            title: 'Royal',
            link:'https://www.royal.rw'
        },{
            image: work_six,
            title: 'Unsplash Clone',
            link:'https://unsplash--clone.herokuapp.com/'
        },{
            image: work_seven,
            title: 'Virunga App',
            link:null
        }
    ]

    return (
        <div id="work" className="relative grid grid-cols-1 overflow-y-scroll">
            <section className="fixed pointer-events-none -z-10 flex left-0 top-0 w-1/2 h-full">
                <section className="w-3/5 bg-gray-600 relative">
                    <img src={work_home} className="absolute w-full h-full object-cover work_home" alt="" />
                </section>
                <section className="flex-1 flex flex-col relative">
                    <h1 className="font-extrabold text-green-600 mt-32 ml-10 text-6xl">Work.</h1>
                    <div className='flex mt-3 ml-12'>
                        <section>
                            <p className="font-normal text-gray-500">You can't use up creativity</p>
                            <p className="font-normal text-gray-500">The more you use</p>
                            <p className="font-normal text-gray-500">The more you have</p>
                        </section>
                        <section className="border-2 border-green-600 py-8 px-4 rounded-3xl absolute bottom-24 left-12">
                            <section className="absolute w-5 h-5 rounded-full bg-green-600 left-1 top-0 dot"></section>
                        </section>
                    </div>
                </section>
            </section>
            {
                React.Children.toArray(
                    data.map((one,index) => 
                        <div className={`w-1/4 ${ index%2 ? "ml-1/4" :'ml-auto'}`} style={{ marginTop: index ? '-4.5em' : '4em' }} >
                            <div className="flex justify-between items-end px-3">
                                <h3 className="text-xl font-medium text-gray-600">{one.title}</h3>
                                <h1 className="text-7xl font-black text-green-600">{index + 1}</h1>
                            </div>
                            <div className="h-52 w-full relative overflow-hidden">
                                <div className="absolute w-1/4 h-full bg-green-600 left-0" />
                                <img src={one.image} className="w-full  object-contain relative"  alt=""/>
                            </div>
                        </div>
                        )
                )
            }
        </div>
    )
}

export default Work
