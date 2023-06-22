import Ios from '../assets/ios.png';
import Android from '../assets/android.png';
import Ig from '../assets/ig.png';
import Tg from '../assets/tg.png';
import Vk from '../assets/vk.png';


const Footer = () => {
    return (
        <footer className="bg-[#E8EBED]">
            <div className="container mx-auto max-md:px-8 py-10">
                <div className='flex flex-col gap-28'>
                    <div className="flex items-center justify-between max-md:flex-col max-md:items-center gap-10">
                        <div className="logo">
                            <img className="max-md:w-[80px]" src="./image.svg" alt="logo" />
                            <h1 className="uppercase max-md:text-md">Центр <br /> коммуникационных <br /> технологий</h1>
                        </div>
                        <ul className="flex-col gap-2 max-md:hidden">
                            <li>О компании</li>
                            <li>Наши продукты</li>
                            <li>Отзывы</li>
                            <li>Центр помощи</li>
                        </ul>
                        <div className="flex flex-col">
                            <h1>Скачать приложение <span className="text-blue">Мой РЖЯ</span></h1>
                            <div className="download flex">
                                <img src={Ios} alt="" />
                                <img src={Android} alt="" />
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={Tg} alt="" /><img src={Ig} alt="" /><img src={Vk} alt="" />
                        </div>

                    </div>
                    <div className='flex items-center justify-between max-md:flex-col max-md:items-center gap-10'>
                        <h1>© 2022 ООО «ЦТК». Все права защищены. <br />
                            Пользовательское соглашение и Политика концфиденциальности</h1>
                        <h1 className='w-[300px]'>*Meta признана экстремистской организацией и ее деятельность запрещена в РФ</h1>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;