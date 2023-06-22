import { FaBriefcase, FaLandmark, FaUser } from 'react-icons/fa';
import Mob from '../assets/mob.png';


const Banner = () => {
    return (
      <div className="bg-[#F1F3F5]">
        <div className="container mx-auto flex justify-around max-lg:flex-col">
          <div className="flex justify-center max-lg:items-center text-center lg:text-left items-start flex-col gap-6">
            <h1 className="uppercase pb-5 text-xl leading-10 lg:leading-12">
              Центр коммуникационных технологий
            </h1>
            <h1 className="text-4xl lg:text-5xl leading-10 lg:leading-12">
              Упрощаем{" "}
              <span className="text-blue">
                <br /> коммуникацию <br /> с неслышашими
              </span>
            </h1>
            <ul className="flex gap-2 max-md:flex-col">
              <li className="flex gap-2 items-center text-start">
                <FaLandmark className="text-3xl text-[#CAD9F6]" /> Государстенным{" "}
                <br /> учреждениям
              </li>
              <li className="flex gap-2 items-center text-start">
                <FaBriefcase className="text-3xl text-[#CAD9F6]" />Крупному{" "}
                <br /> бизнесу
              </li>
              <li className="flex gap-2 items-center text-start">
                <FaUser className="text-3xl text-[#CAD9F6]" /> Глухим <br /> и
                слабослышащим
              </li>
            </ul>
            <button className="bg-blue text-lg text-white px-4 py-2 rounded-full">
              Связаться с нами
            </button>
          </div>
          <div className="flex items-center justify-center pt-5">
            <img src={Mob} alt="logo" className="h-full object-cover drop-shadow-2xl" />
          </div>
        </div>
      </div>
    );
  };
  
export default Banner;
  