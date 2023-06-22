import React, { useState } from "react";
import { Collapse } from 'antd';

import 'react-light-accordion/demo/css/index.css';

const HelpCenter = () => {
    const text = `«Центр коммуникационных технологий» – новая, инновационная российская компания, внедряющая сложные IT-решения для людей с нарушением слуха.

    Компания основана в 2020 году и работает в направлении «Социальный бизнес». Ключевая цель – объединить усилия государства, бизнеса и гражданского общества для решения социальных проблем, в частности, улучшения качества жизни неслышащих и слабослышащих россиян, используя современные IT-продукты.
    
    Команда компании владеет компетенциями в области формирования доступной среды для людей с особыми потребностями и запускает линейку готовых IT-решений для личного пользования неслышащими и слабослышащими, а также для государства и коммерческих учреждений.
`;
    const label = `Вопрос в одну строку не очень длинный?`
    const label1 = `Вопрос подлиннее в две строки например но и не слишком длинный точно не длиннее трёх строк?`
    const items = [
        {
            key: '1',
            label: <h2 className="text-xl">{label}</h2>,
            children: <p className="text-lg">{text}</p>,
        },
        {
            key: '2',
            label: <h2 className="text-xl">{label1}</h2>,
            children: <p className="text-lg">{text}</p>,
        },
        {
            key: '3',
            label: <h2 className="text-xl">{label}</h2>,
            children: <p className="text-lg">{text}</p>,
        },
        {
            key: '4',
            label: <h2 className="text-xl">{label1}</h2>,
            children: <p className="text-lg">{text}</p>,
        },
    ];

    return (
        <div className="container mx-auto mt-10 max-md:px-8">
            <h1 className="text-4xl">
                Центр помощи
            </h1>
            <div className="mt-10">
                <Collapse defaultActiveKey={['1']} ghost items={items} />
            </div>
            <button className="bg-blue text-lg text-white px-8 py-2 rounded-full my-10">
                В центр помощи
            </button>
        </div>
    );
};

export default HelpCenter;