import Woman from '../assets/woman.png';

const Banner2 = () => {
    return (
        <div className='px-8'>
            <div className="container mx-auto bg-[#F1F3F5] rounded-3xl mt-10">
                <div className="flex flex-row-reverse justify-between">
                    <div className="flex flex-col items-center justify-center w-[500px] m-10">
                        <h1 className="text-4xl self-start"><span className="text-blue text-4xl">Специалисты</span> <br /> Контактного центра ЦКТ — </h1>
                        <span className='text-xl'>это профессиональные переводчики, работающие 24/7, со знанием русского жестового языка (РЖЯ)</span>
                    </div>
                    <div className='max-md:hidden'>
                        <img src={Woman} alt="" className='object-cover h-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner2;