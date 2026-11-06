const MAIN_PLAYER = 'Nazar (Isshin Killer)';

window.GAME_DATA = {
    title: 'Dark Souls 2: Scholar Of The First Sin',
    logo: 'img/dark-souls-2-sotfs-logo.png',
    playerName: MAIN_PLAYER,
    footerText: 'Тише. Тише, маленький',
    victoryText: 'VICTORY ACHIEVED',
    victoryColor: '#e8e343',
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
                name: "Последний гигант (The Last Giant)",
                img: "img/the_last_giant.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Последний_гигант",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Драконий всадник (Dragonrider)",
                img: "img/Dragonrider.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Драконий_всадник",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Забытая Грешница (The Lost Sinner)",
                img: "img/the_lost_sinner.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Забытая_Грешница",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Скорпион Нажка (Scorpioness Najka)",
                img: "img/Scorpioness_Najka.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Скорпион_Нажка",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Странствующий маг и прихожане (Prowling Magus and Congregation)",
                img: "img/Prowling_Magus_and_Congregation.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Странствующий_маг_и_прихожане",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Фрея, Возлюбленная Герцога (The Duke's Dear Freja)",
                img: "img/the_dukes_dear_freja.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Фрея,_Возлюбленная_Герцога",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Повелители скелетов (Skeleton Lords)",
                img: "img/skeleton_lords.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Повелители_скелетов",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Алчный демон (Covetous Demon)",
                img: "img/Covetous_Demon.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Алчный_Демон",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Мита, Губительная королева (Mytha, the Baneful Queen)",
                img: "img/Mytha.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Мита,_губительная_королева",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Старый Железный Король (Old Iron King)",
                img: "img/old_iron_king.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Старый_Железный_Король",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Гниющий (The Rotten)",
                img: "img/the_rotten.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Гниющий",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Два Драконьих всадника (Twin Dragonriders)",
                img: "img/twin_dragonriders.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Два_Драконьих_всадника",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Зеркальный Рыцарь (Looking Glass Knight)",
                img: "img/looking_glass_knight.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Зеркальный_рыцарь",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Демон Песни (Demon of Song)",
                img: "img/demon_of_song.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Демон_песни",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Вельстадт, королевский защитник (Velstadt, The Royal Aegis)",
                img: "img/Velstadt.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Вельстадт,_королевский_защитник",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Дракон-Cтраж (Guardian Dragon)",
                img: "img/Guardian_Dragon.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Дракон-Страж",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
            {
                name: "Повелитель гигантов (Giant Lord)",
                img: "img/giant_lord.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Повелитель_гигантов",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Защитник трона и Смотритель трона (Throne Watcher and Defender)",
                img: "img/throne_watcher_and_defender.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Защитник_трона_и_Смотритель_трона",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Нашандра (Nashandra)",
                img: "img/Nashandra.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Нашандра",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Преследователь (Pursuer)",
                img: "img/Pursuer.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Преследователь",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Древний Драконоборец (Old Dragonslayer)",
                img: "img/old_dragonslayer.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Древний_Драконоборец",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Гибкий часовой (Flexile Sentry)",
                img: "img/flexile_sentry.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Гибкий_часовой",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Стражи Руин (Ruin Sentinels)",
                img: "img/ruin_sentinels.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Стражи_Руин",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Горгульи с башни (Belfry Gargoyles)",
                img: "img/Belfry_Gargoyles.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Горгульи_с_башни",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Колесница палача (Executioner's Chariot)",
                img: "img/Executioners_chariot.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Колесница_палача",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Командир крысиной гвардии (Royal Rat Authority)",
                img: "img/Royal_Rat_Authority.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Командир_крысиной_гвардии",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Боец крысиной гвардии (Royal Rat Vanguard)",
                img: "img/Royal_Rat_Vanguard.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Боец_крысиной_гвардии",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Демон из Плавильни (Smelter Demon)",
                img: "img/Smelter_Demon.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Демон_из_Плавильни",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Древний Дракон (Ancient Dragon)",
                img: "img/Ancient_Dragon.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Древний_Дракон",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Прячущийся во тьме (Darklurker)",
                img: "img/Darklurker.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Прячущийся_во_тьме",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Вендрик (Vendrick)",
                img: "img/Vendrick.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Вендрик",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Алдия, ученый Первородного Греха (Aldia, Scholar of the First Sin)",
                img: "img/Aldia.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Алдия,_ученый_Первородного_Греха",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Варг, Церах и Разорительница Гробниц",
                img: "img/Varg_Cerah.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Варг,_Церах_и_Разорительница_Гробниц",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Скверная Королева Элана (Elana, the Squalid Queen)",
                img: "img/Elana.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Скверная_королева_Элана",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Син Дремлющий дракон (Sinh, the Slumbering Dragon)",
                img: "img/Sinh.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Син_Дремлющий_дракон",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Дымный рыцарь (Fume Knight)",
                img: "img/fume_knight.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Дымный_рыцарь",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Сэр Алонн (Sir Alonne)",
                img: "img/sir_alonne.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Сэр_Алонн",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Старый Демон из Плавильни (Aged Smelter Demon)",
                img: "img/aged_smelter_demon.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Старый_Демон_из_Плавильни",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Аава, питомец короля (Aava, the King's Pet)",
                img: "img/Aava.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Аава,_питомец_короля",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Луд, питомец короля и Заллен, питомец короля (Lud, the King's Pet and Zallen, the King's Pet)",
                img: "img/Lud.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Луд,_питомец_короля_и_Заллен,_питомец_короля",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            },
           {
                name: "Сгоревший Король Слоновой Кости (Burnt Ivory King)",
                img: "img/burnt_ivory_king.jpg",
                link: "https://darksouls.fandom.com/ru/wiki/Сгоревший_Король_Слоновой_Кости",
                defeated: false,
                attempts: { [MAIN_PLAYER]: 0 }
            }
    ]
};