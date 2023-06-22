import {FaCheck} from 'react-icons/fa';

const Mission = () => {
    return(
        <div className="container mx-auto max-md:px-8">
            <div className="flex flex-col">
                <div className='mb-10'>
                    <h1 className="text-4xl"> Миссия и цели</h1>
                    <p className="text-lg">Команда «ЦКТ» ставит перед собой амбициозные цели:</p>
                </div>
                <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10'>
                    <div>
                        <FaCheck className='text-xl text-blue  mb-3'/>
                        <p>Развивать Deaf Friendly инфраструктуру в России, используя современные технологии и нестандартные решения.</p>
                    </div>
                    <div>
                        <FaCheck className='text-xl text-blue mb-3'/>
                        <p>Влиять своими продуктами на качество образования детей и молодежи, их развитие в различных сферах жизни (спорт, культура, здоровье и т.п.).</p>
                    </div>
                    <div>
                        <FaCheck className='text-xl text-blue mb-3'/>
                        <p>Привлечь представителей власти к формированию доступной среды для людей с нарушением слуха.</p>
                    </div>
                    <div>
                        <FaCheck className='text-xl text-blue mb-3'/>
                        <p>Способствовать формированию здорового общества и комфортной адаптации в нем людей с нарушением слуха.</p>
                    </div>
                    <div>
                        <FaCheck className='text-xl text-blue mb-3'/>
                        <p>Обеспечить рост числа трудоустроенных россиян с нарушением слуха, облегчив их коммуникацию с работодателями.</p>
                    </div>
                    <div>
                        <FaCheck className='text-xl text-blue mb-3'/>
                        <p>Стимулировать бизнес, вовлекая его в процесс создания инфраструктуры для людей с особыми потребностями, делая его доступным для людей с нарушением слуха.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <span className='text-blue my-10'>Наша миссия</span>
                    <span className='text-3xl'>
                    Способствовать решению остросоциальных проблем с помощью современных IT-решений 
                    </span>
                    <button className="bg-blue text-lg text-white px-8 py-2 rounded-full my-10">
                        Узнать больше о компании
                    </button>

                </div>
            </div>
        </div>
    )
}
export default Mission;