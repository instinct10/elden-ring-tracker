const MAIN_PLAYER = 'Nazar (Isshin Killer)';

window.GAME_DATA = {
    title: 'Lies of P',
    logo: 'img/lies_of_p.jpg',
    playerName: MAIN_PLAYER,
    footerText: 'Ложь во спасение. Правда — во тьме.',
    victoryText: 'ELIMINATED',
    victoryColor: '#e8e8e8',
    theme: {
        '--accent': '#7fa8c9',
        '--accent-bright': '#a8c8e0',
        '--deep': '#2e4a63',
        '--bg-color': '#080b10',
        '--bg-image': 'radial-gradient(circle at 50% 25%, #12202e 0%, #080b10 70%), radial-gradient(circle at 15% 80%, rgba(46, 74, 99, 0.25) 0%, transparent 50%), radial-gradient(circle at 85% 60%, rgba(61, 90, 115, 0.15) 0%, transparent 45%), url("https://www.transparenttextures.com/patterns/dark-matter.png")',
        '--card-bg': 'rgba(14, 20, 28, 0.95)',
        '--blood': '#b02323',
        '--text-main': '#c8d4de',
        '--text-muted': '#7d8d9b'
    },
    bosses: [
            {
                name: "Командующий парадом (Parade Master)",
                img: "img/lop_parade_master.jpg",
                link: "https://liesofp.wiki.fextralife.com/Parade+Master",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Безумный осёл (Mad Donkey)",
                img: "img/lop_mad_donkey.jpg",
                link: "https://liesofp.wiki.fextralife.com/Mad+Donkey",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Бракованный смотритель (Scrapped Watchman)",
                img: "img/lop_scrapped_watchman.jpg",
                link: "https://liesofp.wiki.fextralife.com/Scrapped+Watchman",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Марионетка будущего (Puppet of the Future)",
                img: "img/lop_puppet_of_the_future.jpg",
                link: "https://liesofp.wiki.fextralife.com/Puppet+of+the+Future",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Выживший (Survivor)",
                img: "img/lop_survivor.jpg",
                link: "https://liesofp.wiki.fextralife.com/Survivor",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Фуоко, Пламя Короля (King's Flame, Fuoco)",
                img: "img/lop_king_flame_fuoco.jpg",
                link: "https://liesofp.wiki.fextralife.com/King's+Flame,+Fuoco",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Искупительница (The Atoned)",
                img: "img/lop_the_atoned.jpg",
                link: "https://liesofp.wiki.fextralife.com/The+Atoned",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Падший архиепископ Андреус (Fallen Archbishop Andreus)",
                img: "img/lop_fallen_archbishop_andreus.jpg",
                link: "https://liesofp.wiki.fextralife.com/Fallen+Archbishop+Andreus",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Старейшина братства чёрного кролика (Eldest of the Black Rabbit Brotherhood)",
                img: "img/lop_black_rabbit_elder.jpg",
                link: "https://liesofp.wiki.fextralife.com/Eldest+of+the+Black+Rabbit+Brotherhood",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Белая леди (The White Lady)",
                img: "img/lop_white_lady.jpg",
                link: "https://liesofp.wiki.fextralife.com/The+White+Lady",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Безумная марионетка-клоун (Mad Clown Puppet)",
                img: "img/lop_mad_clown_puppet.jpg",
                link: "https://liesofp.wiki.fextralife.com/Mad+Clown+Puppet",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Король марионеток (King of Puppets)",
                img: "img/lop_king_of_puppets.jpg",
                link: "https://liesofp.wiki.fextralife.com/King+of+Puppets",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Чемпион Виктор (Champion Victor)",
                img: "img/lop_champion_victor.jpg",
                link: "https://liesofp.wiki.fextralife.com/Champion+Victor",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Доктор-сова (Owl Doctor)",
                img: "img/lop_owl_doctor.jpg",
                link: "https://liesofp.wiki.fextralife.com/Owl+Doctor",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Зелёный монстр болот (Green Monster of the Swamp)",
                img: "img/lop_green_monster_swamp.jpg",
                link: "https://liesofp.wiki.fextralife.com/Green+Monster+of+the+Swamp",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Грабительница-ласка (Robber Weasel)",
                img: "img/lop_robber_weasel.jpg",
                link: "https://liesofp.wiki.fextralife.com/Robber+Weasel",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Ходящий по иллюзиям (Walker of Illusions)",
                img: "img/lop_walker_of_illusions.jpg",
                link: "https://liesofp.wiki.fextralife.com/Walker+of+Illusions",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Осквернённый командующий парадом (Corrupted Parade Master)",
                img: "img/lop_corrupted_parade_master.jpg",
                link: "https://liesofp.wiki.fextralife.com/Corrupted+Parade+Master",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Братство чёрного кролика (Black Rabbit Brotherhood)",
                img: "img/lop_black_rabbit_brotherhood.jpg",
                link: "https://liesofp.wiki.fextralife.com/Black+Rabbit+Brotherhood",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Страж дверей (Door Guardian)",
                img: "img/lop_door_guardian.jpg",
                link: "https://liesofp.wiki.fextralife.com/Door+Guardian",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Чёрный кот (Black Cat)",
                img: "img/lop_black_cat.jpg",
                link: "https://liesofp.wiki.fextralife.com/Black+Cat",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Лаксазия Совершенная (Laxasia the Complete)",
                img: "img/lop_laxasia.jpg",
                link: "https://liesofp.wiki.fextralife.com/Laxasia+the+Complete",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Рыжая лиса (Red Fox)",
                img: "img/lop_red_fox.jpg",
                link: "https://liesofp.wiki.fextralife.com/Red+Fox",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Саймон Манус, Пробудившийся бог (Simon Manus, Awakened God)",
                img: "img/lop_simon_manus.jpg",
                link: "https://liesofp.wiki.fextralife.com/Simon+Manus,+Awakened+God",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Безымянная марионетка (Nameless Puppet)",
                img: "img/lop_nameless_puppet.jpg",
                link: "https://liesofp.wiki.fextralife.com/Nameless+Puppet",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Вселяющий ужас хищник (Tyrannical Predator)",
                img: "img/lop_Tyrannical_Predator.jpg",
                link: "https://liesofp.fandom.com/ru/wiki/Вселяющий_ужас_хищник",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Вероник, лидер Мусорщиков (Veronique, Leader of the Sweepers)",
                img: "img/lop_Veronique.jpg",
                link: "https://liesofp.fandom.com/ru/wiki/Вероник,_лидер_Мусорщиков",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },  
            {
                name: "Детеныш Зеленой твари",
                img: "img/lop_green_tvar.jpg",
                link: "https://liesofp.fandom.com/ru/wiki/Детеныш_Зеленой_твари",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            }, 
            {
                name: "Люмаккио, лидер Бастардов (Lumacchio, Leader of the Bastards)",
                img: "img/lop_Lumacchio.jpg",
                link: "https://liesofp.fandom.com/ru/wiki/Люмаккио,_лидер_Бастардов",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },             
            {
                name: "Маркиона, кукловод смерти (Markiona, Puppeteer of Death)",
                img: "img/lop_Markiona.jpg",
                link: "https://liesofp.fandom.com/ru/wiki/Маркиона,_кукловод_смерти",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Двуликий надзиратель (Two-faced Overseer)",
                img: "img/lop_two_faced_overseer.jpg",
                link: "https://liesofp.fandom.com/ru/wiki/Двуликий_надзиратель",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Скорбный хранитель руин (Anguished Guardian of the Ruins)",
                img: "img/lop_Anguished_Guardian_of_the_Ruins.jpg",
                link: "https://liesofp.fandom.com/ru/wiki/Скорбный_хранитель_руин",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Арлекино, кровавый художник (Arlecchino, the Blood Artist)",
                img: "img/lop_Arlecchino.jpg",
                link: "https://liesofp.fandom.com/ru/wiki/Арлекино,_кровавый_художник",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            }
    ]
};
