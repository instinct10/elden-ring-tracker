const MAIN_PLAYER = 'Nazar (Isshin Killer)';

window.GAME_DATA = {
    title: 'Elden Ring',
    logo: 'img/Elden_Ring_logo.webp',
    playerName: MAIN_PLAYER,
    footerText: 'Кровь, кишки и слёзы казуалов.',
    victoryText: 'FOE VANQUISHED',
    victoryColor: '#ff2a2a',
    theme: {
        '--accent': '#cda052',
        '--accent-bright': '#e0b866',
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
            name: 'Маргит, Ужасное Знамение',
            img: 'img/Margit the Fell Omen.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Маргит,_Ужасное_Знамение',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 19 }
        },
        {
            name: 'Мог, Повелитель Крови',
            img: 'img/Mohg Lord of Blood.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Мог_Повелитель_Крови',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 13 }
        },
        {
            name: 'Погребальная птица (Вершина Великанов)',
            img: 'img/Death Rite Bird.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Погребальная_птица',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 10 }
        },
        {
            name: 'Рыцарь Горнила',
            img: 'img/Crucible Knight.png',
            link: 'https://eldenring.fandom.com/ru/wiki/Рыцарь_Горнила',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 8 }
        },
        {
            name: 'Рикард, богохульный владыка',
            img: 'img/Rykard, Lord of Blasphemy.png',
            link: 'https://eldenring.fandom.com/ru/wiki/Рикард,_богохульный_владыка',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 7 }
        },
        {
            name: 'Рыцарь-ищейка Дарривил',
            img: 'img/Bloodhound Knight Darriwil.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Рыцарь-ищейка_Дарривил',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 5 }
        },
        {
            name: 'Годрик Сторукий',
            img: 'img/Godrick The Grafted.png',
            link: 'https://eldenring.fandom.com/ru/wiki/Годрик_Сторукий',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 5 }
        },
        {
            name: 'Радан Бич Звёзд',
            img: 'img/Starscourge Radahn.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Радан_Бич_Звёзд',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 5 }
        },
        {
            name: 'Дух величавого предка',
            img: 'img/Regal Ancestor Spirit.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Дух_величавого_предка',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 5 }
        },
        {
            name: 'Эгхил, крылатый дракон',
            img: 'img/Flying Dragon Agheel.png',
            link: 'https://eldenring.fandom.com/ru/wiki/Эгхил,_крылатый_дракон',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 4 }
        },
        {
            name: 'Астель, Рождённый Бездной',
            img: 'img/Astel, Naturalborn of the Void.avif',
            link: 'https://eldenring.fandom.com/ru/wiki/Астель,_Рождённый_Бездной',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 4 }
        },
        {
            name: 'Командир Найлл',
            img: 'img/Commander Niall.png',
            link: 'https://eldenring.fandom.com/ru/wiki/Командир_Найлл',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 4 }
        },
        {
            name: 'Морготт, король знамений',
            img: 'img/Morgott, The Omen King.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Морготт,_король_знамений',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 3 }
        },
        {
            name: 'Взрослый зверь Падающей звезды',
            img: 'img/Full-Grown Fallingstar Beast.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Взрослый_зверь_Падающей_звезды',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 3 }
        },
        {
            name: 'Борелис Леденящий Туман',
            img: 'img/Borealis, the Freezing Fog.png',
            link: 'https://eldenring.fandom.com/ru/wiki/Борелис_Леденящий_Туман',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 7 }
        },
        {
            name: 'Нериюс, Окровавленный палец',
            img: 'img/Bloody Finger Nerijus.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Нериюс,_Окровавленный_палец',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 2 }
        },
        {
            name: 'Древний герой Замора',
            img: 'img/Ancient Hero of Zamor.png',
            link: 'https://eldenring.fandom.com/ru/wiki/Древний_герой_Замора',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 2 }
        },
        {
            name: 'Лоретта, королевский рыцарь',
            img: 'img/Royal Knight Loretta.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Лоретта,_королевский_рыцарь',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 2 }
        },
        {
            name: 'Драконий Страж Древа',
            img: 'img/Draconic Tree Sentinel.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Драконий_Страж_Древа',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 2 }
        },
        {
            name: 'Аристократ божественной кожи',
            img: 'img/Godskin Noble.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Аристократ_божественной_кожи',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 2 }
        },
        {
            name: 'Элемер из Шипов',
            img: 'img/Elemer of the Briar.png',
            link: 'https://eldenring.fandom.com/ru/wiki/Элемер_из_Шипов',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 2 }
        },
        {
            name: 'Бастард Леонин',
            img: 'img/Leonine Misbegotten.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Бастард_Леонин',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 1 }
        },
        {
            name: 'Лоскутик',
            img: 'img/Patches.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Лоскутик',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 1 }
        },
        {
            name: 'Предводитель полулюдей',
            img: 'img/Demi-Human Chief.png',
            link: 'https://eldenring.fandom.com/ru/wiki/Предводитель_полулюдей',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 1 }
        },
        {
            name: 'Тролль-камнекоп',
            img: 'img/Stonedigger Troll.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Тролль-камнекоп',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 1 }
        },
        {
            name: 'Королева Реннала Полнолунная',
            img: 'img/Rennala, Queen of the Full Moon.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Королева_Реннала_Полнолунная',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 1 }
        },
        {
            name: 'Маления, Клинок Микеллы',
            img: 'img/Malenia, Blade of Miquella.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Маления,_Клинок_Микеллы',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 137 }
        },
        {
            name: 'Огненный великан',
            img: 'img/Fire Giant.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Огненный_великан',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 7 }
        },
        {
            name: 'Двое из божественной кожи',
            img: 'img/Godskin Duo.avif',
            link: 'https://eldenring.fandom.com/ru/wiki/Двое_из_божественной_кожи',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 7 }
        },
        {
            name: 'Лоретта, рыцарь Святого Древа',
            img: 'img/Loretta, Knight of the Haligtree.avif',
            link: 'https://eldenring.fandom.com/ru/wiki/Лоретта,_рыцарь_Святого_Древа',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 5 }
        },
        {
            name: 'Владыка драконов Пласидусакс',
            img: 'img/Dragonlord Placidusax.avif',
            link: 'https://eldenring.fandom.com/ru/wiki/Владыка_драконов_Пласидусакс',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 3 }
        },
        {
            name: 'Маликет Чёрный Клинок',
            img: 'img/Maliketh, The Black Blade.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Маликет_Чёрный_Клинок',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 37 }
        },
        {
            name: 'Годфри, первый повелитель Элдена',
            img: 'img/Godfrey, First Elden Lord.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Годфри,_первый_повелитель_Элдена',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 7 }
        },
        {
            name: 'Радагон из Золотого порядка',
            img: 'img/Radagon of the Golden Order.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Радагон_из_Золотого_порядка',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 3 }
        },
        {
            name: 'Зверь Элдена',
            img: 'img/Elden Beast.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Зверь_Элдена',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 2 }
        },
        {
            name: 'Бейл Ужасный',
            img: 'img/Bayle The Dread.png',
            link: 'https://eldenring.fandom.com/ru/wiki/Бейл_Ужасный',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 32 }
        },
        {
            name: 'Гниющий рыцарь',
            img: 'img/Putrescent Knight.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Гниющий_рыцарь',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 55 }
        },
        {
            name: 'Мидра, Владыка Яростного Пламени',
            img: 'img/Midra, Lord of Frenzied Flame.avif',
            link: 'https://eldenring.fandom.com/ru/wiki/Мидра,_Владыка_Яростного_Пламени',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 52 }
        },
        {
            name: 'Ромина, Святая Цветочных Бутонов',
            img: 'img/Romina, Saint of the Bud.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Ромина,_Святая_Цветочных_Бутонов',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 37 }
        },
        {
            name: 'Священный танцующий лев',
            img: 'img/Divine Beast Dancing Lion.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Священный_танцующий_лев',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 18 }
        },
        {
            name: 'Золотой гиппопотам',
            img: 'img/Golden Hippopotamus.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Золотой_гиппопотам',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 28 }
        },
        {
            name: 'Командующий Гай',
            img: 'img/Commander Gaius.png',
            link: 'https://eldenring.fandom.com/ru/wiki/Командующий_Гай',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 12 }
        },
        {
            name: 'Мессмер Колосажатель',
            img: 'img/Messmer the Impaler.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Мессмер_Колосажатель',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 197 }
        },
        {
            name: 'Будущий консорт Радан',
            img: 'img/Promised Consort Radahn.jpg',
            link: 'https://eldenring.fandom.com/ru/wiki/Будущий_консорт_Радан',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 202 }
        },
        {
            name: 'Реллана, Рыцарь Двойной Луны',
            img: 'img/Rellana, Twin Moon Knight.png',
            link: 'https://eldenring.fandom.com/ru/wiki/Реллана,_Рыцарь_Двойной_Луны',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 2 }
        },
        {
            name: 'Дракон смерти',
            img: 'img/Ghostflame Dragon.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Дракон_смерти',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 1 }
        },
        {
            name: 'Воплощение Древа Упадка',
            img: 'img/Scadutree Avatar.webp',
            link: 'https://eldenring.fandom.com/ru/wiki/Воплощение_Древа_Упадка',
            defeated: true,
            attempts: { [MAIN_PLAYER]: 10 }
        }
    ]
};