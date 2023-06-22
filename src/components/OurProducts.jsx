import Mob from '../assets/mob.png';
import Ipad from '../assets/ipad.png';
import Pc from '../assets/pc.png';

const OurProducts = () => {
    return (
        <div className="bg-gradient-to-b from-0 to-100 via-43 via-58 w-full mx-auto px-8 flex flex-col mt-20">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4 py-4 w-[500px] max-md:w-[300px]">
                    <h1 className="text-4xl">Наши продукты</h1>
                    <p className="text-xl">IT-решения ЦКТ помогают организациям обеспечить обслуживание людей с инвалидностью по слуху на доступном им жестовом языке в рамках прораммы «Доступная среда»</p>
                </div>
                <div className="flex bg-white rounded-3xl items-center justify-around pt-10 my-10 max-md:pb-10">
                    <div className="flex flex-col w-[350px] gap-2">
                        <h1 className="text-4xl">Мой РЖЯ</h1>
                        <span className="text-blue">Для использования слабослышащими и неслышащими в собственном смартфоне</span>
                        <p>Персональный переводчик ЖЯ «в кармане». Работает при поддержке контактного центра в режиме 24/7</p>
                        <button className="bg-blue text-lg text-white px-8 py-2 rounded-full self-start">
                            Подробнее
                        </button>
                    </div>
                    <div className="flex items-center justify-center max-md:hidden">
                        <img src={Mob} alt="logo" className="h-full object-cover drop-shadow-[0_15px_35px_rgba(0,75,219,0.5)]" />
                    </div>
                </div>
                <div className="flex flex-row-reverse bg-white rounded-3xl items-center justify-around my-10 pt-10 max-md:pb-10">
                    <div className="flex flex-col w-[350px] gap-2">
                        <h1 className="text-4xl">Сурдоком</h1>
                        <span className="text-blue">Для коммерческих и государственных структур</span>
                        <p>Вызов переводчика ЖЯ в любом месте, в режиме реального времени. Комфортное общение сторон: неслышащего человека со слышащим, через приложение.</p>
                        <button className="bg-blue text-lg text-white px-8 py-2 rounded-full self-start">
                            Подробнее
                        </button>
                    </div>
                    <div className="flex items-center justify-center max-md:hidden">
                        <img src={Ipad} alt="logo" className="h-full object-cover drop-shadow-[0_15px_35px_rgba(255,192,203,0.8)]" />
                    </div>
                </div>
                <div className="flex bg-white rounded-3xl items-center justify-around pt-10 my-10 max-md:pb-10">
                    <div className="flex flex-col w-[350px] gap-2">
                        <h1 className="text-4xl">Сурдовеб</h1>
                        <span className="text-blue">Для web-сайтов любых организаций и учреждений</span>
                        <p>Звонок по телефону, чтобы совершить заказ, уточнить данные, или просто получить информацию через переводчика ЖЯ.
                        </p>
                        <button className="bg-blue text-lg text-white px-8 py-2 rounded-full self-start">
                            Подробнее
                        </button>
                    </div>
                    <div className="flex items-center justify-center max-md:hidden">
                        <img src={Pc} alt="logo" className="h-full object-cover drop-shadow-[0_15px_35px_rgba(0,75,219,0.5)]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurProducts;