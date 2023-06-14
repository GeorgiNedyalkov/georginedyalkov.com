import subnautica from "../assets/images/subnautica.jpg";
import starcraft from "../assets/images/starcraft.jpg";
import god_of_war from "../assets/images/god_of_war.jpg";
import returnal from "../assets/images/returnal.jpg";
import quake from "../assets/images/quake.jpg";
import bloodborne from "../assets/images/bloodborne.jpg";
import assassins_creed from "../assets/images/assassins_creed.jpg";
import pandemonium from "../assets/images/pandemonium.jpg";

export const gamesData = [
  {
    id: 1,
    title: "Subnautica",
    image: subnautica,
    genre: "Survival Action-adventure",
    gameLink: "https://store.steampowered.com/app/264710/Subnautica/",
    trailer: "https://www.youtube.com/watch?v=Rz2SNm8VguE",
    description: `Subnautica is an underwater adventure game set on an alien ocean planet. 
    A massive, open world full of wonder and peril awaits you!`,
    reviews: {
      count: 210096,
      opinion: "Overwhelmingly Positive",
    },
  },
  {
    id: 2,
    title: "Starcraft 2",
    genre: "Real-time Strategy Sci-Fi",
    image: starcraft,
    gameLink: "https://starcraft2.com/en-gb/",
    trailer: "https://www.youtube.com/watch?v=MVbeoSPqRs4",
    description: `StarCraft II is a military science fiction video game set in a fictional 
    future, the game centers on a galactic struggle for dominance among the various 
    fictional races of StarCraft: Protoss, Zerg and Terran.`,
    reviews: {
      count: 211,
      opinion: "4.8 ⭐",
    },
  },
  {
    id: 3,
    title: "God Of War",
    image: god_of_war,
    genre: "Action-Adventure, Hach and slash",
    gameLink: "https://www.playstation.com/en-bg/god-of-war/",
    trailer: "https://www.youtube.com/watch?v=g1wr0DfV73E",
    description: `Join Kratos and Atreus on a mythic journey for answers before Ragnarök arrives.
    Together, father and son must put everything on the line as they journey to each of the Nine Realms.
    Throughout stunning mythological landscapes, they’ll face fearsome enemies – from Norse gods to wild
    beasts – as they prepare for the showdown of their lives.`,
    reviews: {
      count: 192,
      opinion: "9.7 ⭐",
    },
  },
  {
    id: 4,
    title: "Returnal",
    image: returnal,
    genre: "Bullet-hell Roguelike Third Person Shooter",
    gameLink: "https://store.steampowered.com/app/1649240/Returnal/",
    trailer: "https://www.youtube.com/watch?v=ov4fJmGCsZM",
    description: `After crash-landing on this shape-shifting world, Selene must search through the barren landscape of an ancient civilization for her escape. Isolated and alone, she finds herself fighting tooth and nail for survival. 
    Again and again, she’s defeated – forced to restart her journey every time she dies.`,
    reviews: {
      count: 2678,
      opinion: "Very Positive",
    },
  },
  {
    id: 5,
    title: "Quake",
    image: quake,
    genre: "First Person Shooter Arena",
    gameLink: "https://store.steampowered.com/app/2200/Quake_III_Arena/",
    trailer: "https://www.youtube.com/watch?v=NsL32y--h00",
    description: `Quake III Arena is a 1999 multiplayer-focused first-person shooter developed by id Software.
    The third installment of the Quake series, Arena differs from previous games by 
    excluding a story-based single-player mode and focusing primarily on multiplayer gameplay`,
    reviews: {
      count: 2642,
      opinion: "Overwhelmingly positive",
    },
  },
  {
    id: 6,
    title: "Bloodborne",
    image: bloodborne,
    genre: "Soul's Like",
    gameLink: "https://www.playstation.com/en-bg/games/bloodborne/",
    trailer: "https://www.youtube.com/watch?v=G203e1HhixY",
    description: `A lone traveller. A cursed town. 
    A deadly mystery that swallows everything it touches. 
    Face your fears as you enter the decaying city of Yharnam, a forsaken place ravaged by a 
    terrible, all-consuming illness. Scour its darkest shadows, fight for your life with blades and guns and discover secrets that will make your blood run cold`,
    reviews: {
      count: 1005,
      opinion: "4.6 ⭐",
    },
  },
  {
    id: 7,
    title: "Assassin's Creed",
    image: assassins_creed,
    genre: "Action Adventure",
    gameLink: "https://store.steampowered.com/app/33230/Assassins_Creed_2/",
    trailer: "https://www.youtube.com/watch?v=_xkCPNECud8",
    description: `Ezio Auditore da Firenze is a young Italian noble who will learn 
    the ways of the assassins after his family was betrayed and he looks to seek vengeance. 
    He is a lady’s man, a free soul with panache yet has a very human side to his personality. 
    Through him, you become a master assassin.`,
    reviews: {
      count: 39681,
      opinion: "Very Positive",
    },
  },
  {
    id: 8,
    title: "Pandemonium 2",
    image: pandemonium,
    genre: "Action Adventure Platformer",
    gameLink: "https://www.gog.com/en/game/pandemonium_2",
    trailer: "https://www.youtube.com/watch?v=lpEVlHqtlbw",
    description: `When the  "Comet of Infinite Possibilities" is about to pass over Lyr 
    , the inhabitants race to reach the comet in order to make a wish 
    on its powers. Nikki, a sassy sorceress, decides that stealing the source of its magic is a quicker 
    way to reach power than study.  Fargus, a court jester, has gone insane over the years and has a simple plan to "touch pretty fire" upon reaching the comet`,
    reviews: {
      count: 3.7,
      opinion: "🌟",
    },
  },
];
