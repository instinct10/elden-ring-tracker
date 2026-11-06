const MAIN_PLAYER = 'Nazar (Isshin Killer)';

window.GAME_DATA = {
    title: 'Wuchang: Fallen Feathers',
    logo: 'img/wuchang-logo.png',
    playerName: MAIN_PLAYER,
    footerText: 'Кровь, кишки и слёзы казуалов.',
    victoryText: 'QUELLING MADNESS',
    victoryColor: '#cfcfb8',
    theme: {
        '--accent': '#dbdb69',
        '--accent-bright': '#bdbd0d',
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
            name: 'Служанка дворца Тан',
            img: 'img/служанка.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Мастер-рейдер — Дутанга-людоед',
            img: 'img/Дутанга.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Пернатый жрец — Лу Бинчжань',
            img: 'img/бинчжань.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Демон-людоедка — Лу Хунлю',
            img: 'img/Хунлю.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Великая сколопендра',
            img: 'img/сколопендра.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Древо душ',
            img: 'img/Древо_душ.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Командующая — Хунлань',
            img: 'img/Хунлань.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Покоритель Севера — Ай Нэнци',
            img: 'img/Нэнци.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Полководец династии Мин — Лю Чэнъэнь',
            img: 'img/Чэнъэнь.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Госпожа ночи — Хуан Янь',
            img: 'img/Хуан.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Идеальная невеста — Фан Лин / Химера — Фан Лин',
            img: 'img/Фан_Лин.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Колдунья племени Бо',
            img: 'img/Бо.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Полководец юга — Лю Вэньсю',
            img: 'img/Вэньсю.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Лютый тигр / Владыка — Чжан Сяньчжун',
            img: 'img/Сяньчжун.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Чудовищное дитя — Бай Келу',
            img: 'img/Келу.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Демон кошмаров',
            img: 'img/Демон_кошмаров.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Багряные перья — Хунлань',
            img: 'img/Хунлань_перья.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Ведьма племени Бо',
            img: 'img/ведьма_бо.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Настоящий дракон — Чжу Юцзянь',
            img: 'img/Юцзянь.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Вечная слава — Чжао Юнь',
            img: 'img/Чжао.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Демон одержимости',
            img: 'img/Демон_одержимости.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        },
        {
            name: 'Пернатая надежда — Сюань Янцзы',
            img: 'img/Демон_одержимости.jpg',
            link: 'https://www.google.com/search?q=казуал+человек',
            defeated: false,
            attempts: { [MAIN_PLAYER]: 0 }
        }
    ]
};