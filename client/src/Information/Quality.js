import React, {useContext} from "react";
import {ThemeContext} from "../Layout/Theme/ThemeContext";

function Quality() {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className={'quality'}>
            <h2 style={{color: `${theme.text1}`}}>Идеальные ингредиенты</h2>
            <p style={{color: `${theme.text1}`}}>
                Пицца должна быть вкусной и везде одинаковой. Пиццерии должны быть
                одинаково уютными, кассиры неизменно
                приветливыми, а курьеры — расторопными.</p>
            <p style={{color: `${theme.text1}`}}>
                Вообще пицца — очень простая штука, её сложно испортить. Достаточно хороших ингредиентов и правильного
                теста. Это конструктор, если детали качественные, то и результат будет в порядке. Вот они, наши
                детали:</p>

            <div className={'quality-content'}>
                <div
                    style={{background: `${theme.container}`}}
                    className={'quality-content__info'}>
                    <h2 style={{color: `${theme.text2}`}}>Тесто</h2>
                    <p style={{color: `${theme.text1}`}}>
                        Самая тонкая вещь. Главное - сделать его «живым». Это целый квест из граммов, градусов,
                        процентов
                        и часов с минутами. Процесс непростой, но у нас получается!</p>
                </div>
                <div
                    style={{background: `${theme.container}`}}
                    className={'quality-content__info'}>
                    <h2 style={{color: `${theme.text2}`}}>Моцфрелла</h2>
                    <p style={{color: `${theme.text1}`}}>
                        Сыр в пицце - ключевой ингредиент. Мы используем настоящую моцареллу от российских поставщиков.
                        Сыр должен тянуться, как на картинке.</p>
                </div>
                <div
                    style={{background: `${theme.container}`}}
                    className={'quality-content__info'}>
                    <h2 style={{color: `${theme.text2}`}}>Начинка</h2>
                    <p style={{color: `${theme.text1}`}}>
                        Есть два главных правила вкусной начинки: не экономить на начинке; фанатично соблюдать режим
                        хранения. Это и весь секрет.</p>
                </div>
                <div
                    style={{background: `${theme.container}`}}
                    className={'quality-content__info'}>
                    <h2 style={{color: `${theme.text2}`}}>Томатный соус</h2>
                    <p style={{color: `${theme.text1}`}}>
                        Главное, что нужно знать про хороший томатный соус: он должен быть сделан из томатов. Звучит
                        логично, но задумайтесь!</p>
                </div>
            </div>

        </div>
    );
}

export default Quality;