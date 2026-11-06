const MAIN_PLAYER = 'Nazar (Isshin Killer)';

window.GAME_DATA = {
    title: 'Lords Of The Fallen',
    logo: 'img/lords-of-the-fallen-2023-logo.png',
    playerName: MAIN_PLAYER,
    footerText: 'Кровь, кишки и слёзы казуалов.',
    victoryText: 'SINNER JUDGED',
    victoryColor: '#f0e6e6',
    theme: {
        '--accent': '#a9e8dd',
        '--accent-bright': '#299985',
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
            name: 'Святой Оплот Отто',
            img: 'img/Holy_Bulwark_Otto.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Пьета, Благословенное Обновление',
            img: 'img/Pieta.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Суровая сестра Делит',
            img: 'img/Scourged_Sister_Delyth.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Нежная Гаверус, Хозяйка гончих',
            img: 'img/Gentle_Gaverus.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Священный резонанс Стойкости',
            img: 'img/Sacred_Resonance_of_Tenacity.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Созерцатель Плоти',
            img: 'img/The_Congregated_Flesh.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Лживый Облик',
            img: 'img/Mendacious_Visage.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Притихший Святой',
            img: 'img/The_Hushed_Saint.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Багровый ректор Персиваль',
            img: 'img/Percival.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Губитель',
            img: 'img/Ruiner.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Адская Чародейка',
            img: 'img/Infernal_Enchantress.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Отвергнутый Потомок',
            img: 'img/The_Spurned_Progeny.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Похититель шкур',
            img: 'img/Skinstealer.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Несущий тишину',
            img: 'img/Bringer_of_Stillness.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Непоколебимые защитники Лиренн и Кира',
            img: 'img/Abiding_Defender_Lirenne_and_Kyra.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Настоятельница Урсула',
            img: 'img/Abbess_Ursula.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Хищная охотница Лиренн',
            img: 'img/Rapturous_Huntress_Lirenne.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Судья Клирик Лучезарный',
            img: 'img/Judge_Cleric_the_Radiant.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Благословенный рыцарь-падальщик Санишо',
            img: 'img/Blessed_Carrion_Knight_Sanisho.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Танкред и Рейнхольд',
            img: 'img/Tancred_and_Reinhold.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Кинрангр, Хранитель Фоларда',
            img: 'img/Kinrangr_Guardian_Folard.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Ровена, связанная горем',
            img: 'img/Griefbound_Rowena.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Пустой ворон',
            img: 'img/The_Hollow_Crow.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Бремя паладина',
            img: 'img/Paladins_Burden.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Железный странник',
            img: 'img/The_Iron_Wayfarer.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Дамароза Отмеченная',
            img: 'img/Damarose_the_Marked.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Подземный монарх',
            img: 'img/The_Sundered_Monarch.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Харроуэр Дервла, обещанный рыцарь',
            img: 'img/Harrower_Dervla.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Элианна Голодная',
            img: 'img/Elianne_the_Starved.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Адыр, бог демонов',
            img: 'img/Adyr.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Жнец света',
            img: 'img/The_Lightreaper.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        }
    ]
};