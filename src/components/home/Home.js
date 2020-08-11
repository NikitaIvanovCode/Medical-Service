import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <p>
                Medical Service - это приложение для онлайн записи к медицинскому cпециалисту.
            </p>
            <br />
            <p>
                Перейдя во вкладку "Запись" вы увидите категории специалистов. Так же есть возможность поиска. Выбрав специалиста, кликайте по нему.
            </p>
            <br />
            <p>
                Далее появится краткое описание специалиста и спикок докторов. Каждый доктор отображается с ФИО, фото и днями приема на неделю вперед, включая сегодня.
            </p>
            <br />
            <p>
                Выбрав подходящий день и кликнув по нему, появится окно с временем приема на этот день. Зеленые - свободное время, Красные - занято. Если дата не устраивает, то можно вернуться назад и выбрать другую.
            </p>
            <br />
            <p>
                После выбора времени приема вас ждет окно с формой, где необходимо ввести номер своего полюса и дату рождения. День приема, время и врач будут продублированы сверху.
            </p>
            <br />
            <p>
                Подтвердите запись или откажитесь от приема.
            </p>
            <br />
            <p>
                Во вкладке "Визиты" вы увидите запланированные приемы к специалисту.
            </p>
        </div>
    )
}

export default Home;