const MAIN_PLAYER = 'Nazar (Isshin Killer)';

window.GAME_DATA = {
    title: 'Bloodborne',
    logo: 'img/bloodborne-logo.png',
    playerName: MAIN_PLAYER,
    footerText: 'Кровь, кишки и слёзы казуалов.',
    victoryText: 'PREY SLAUGHTERED',
    victoryColor: '#ff2a2a',
    theme: {
        '--accent': '#c45e45',
        '--accent-bright': '#e8817d',
        '--deep': '#85642a',
        '--bg-color': '#0d0d0d',
        '--bg-image': 'radial-gradient(circle at 50% 30%, #1a1510 0%, #0d0d0d 70%), url("https://www.transparenttextures.com/patterns/dark-matter.png")',
        '--card-bg': 'rgba(18, 18, 18, 0.95)',
        '--blood': '#a30000',
        '--text-main': '#e0e0e0',
        '--text-muted': '#9aabb8'
    },
    bosses: [
        {
            name: 'Отец Гаскойн',
            img: 'img/Father_Gascoigne.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Отец_Гаскойн',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Викарий Амелия',
            img: 'img/Vicar_Amelia.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Викарий_Амелия',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Тень Ярнам',
            img: 'img/Shadow_of_Yharnam.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Тень_Ярнама',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Ром, праздный паук',
            img: 'img/Rom.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Ром,_праздный_паук',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Возродившийся',
            img: 'img/The_One_Reborn.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Возродившийся',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Миколаш, Хозяин кошмара',
            img: 'img/Micolash.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Миколаш,_Хозяин_кошмара',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Кормилица Мерго',
            img: 'img/Mergo.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Кормилица_Мерго',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Церковное Чудовище',
            img: 'img/Cleric_Beast.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Церковное_Чудовище',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Посланник Небес',
            img: 'img/Celestial_Emissary.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Посланник_Небес',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Ибраитас, дочь Космоса',
            img: 'img/Ebrietas.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Ибраитас,_дочь_Космоса',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Чудовище-кровоглот',
            img: 'img/Blood_starved_Beast.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Чудовище-кровоглот',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Черное чудовище Паарл',
            img: 'img/Darkbeast_Paarl.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Черное_чудовище_Паарл',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Ведьма Хемвика',
            img: 'img/The_Witch_of_Hemwick.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Ведьма_Хемвика',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Мученик Логариус',
            img: 'img/Martyr_Logarius.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Мученик_Логариус',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Амигдала',
            img: 'img/Amygdala.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Амигдала',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Герман, первый охотник',
            img: 'img/Gehrman.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Герман,_первый_охотник',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Присутствие луны',
            img: 'img/Moon_Presence.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Присутствие_луны',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Людвиг',
            img: 'img/Ludwig.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Людвиг',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Лоуренс, первый викарий',
            img: 'img/Laurence.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Лоуренс,_первый_викарий',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Живые неудачи',
            img: 'img/Living_Failures.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Живые_неудачи',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Леди Мария',
            img: 'img/Lady_Maria.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Леди_Мария_из_Астральной_часовой_башни',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Сирота Кос',
            img: 'img/Orphan_of_Kos.jpg',
            link: 'https://bloodborne.fandom.com/ru/wiki/Сирота_Кос',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        }
    ]
};