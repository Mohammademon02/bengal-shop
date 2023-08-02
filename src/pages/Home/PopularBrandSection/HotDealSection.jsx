import { useEffect, useRef, useState } from 'react';
import hotDeal1 from '../../../assets/hot-deal-1.png'
import hotDeal2 from '../../../assets/hot-deal-2.png'

const HotDealSection = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('August 10, 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop out timer
                clearInterval(interval.current)
            } else {
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    }, [])


    return (
        <section className='bg-[#FAF4F0] rounded-md mt-14 grid grid-cols-3 items-center justify-between py-5'>
            <div>
                <img className='mx-auto' src={hotDeal1} alt="" />
            </div>
            <div>
                <h1 className='text-center text-[#333333] text-2xl mb-5 font-semibold'>Deal of the Week</h1>
                <div className='flex items-center justify-center'>
                    <section>
                        <p className='text-3xl font-bold text-[#FF5E4D] mr-4 ml-4'>{timerDays}</p>
                        <p className='text-[#828282] text-center'><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p className='text-3xl font-bold text-[#FF5E4D] mr-4 ml-4'>{timerHours}</p>
                        <p className='text-[#828282] text-center'><small>Hour</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p className='text-3xl font-bold text-[#FF5E4D] mr-4 ml-4'>{timerMinutes}</p>
                        <p className='text-[#828282] text-center'><small>Minutes</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p className='text-3xl font-bold text-[#FF5E4D] mr-4 ml-4'>{timerSeconds}</p>
                        <p className='text-[#828282] text-center'><small>Seconds</small></p>
                    </section>
                </div>
                <div className='text-center'>
                    <button className='rounded-full px-6 py-2 mt-4 text-[#FFFFFF]  bg-[#27AE60] hover:bg-[#239b55] inline-flex'>Shop Now</button>
                </div>
            </div>
            <div>
                <img className='mx-auto' src={hotDeal2} alt="" />
            </div>
        </section>
    );
};

export default HotDealSection;