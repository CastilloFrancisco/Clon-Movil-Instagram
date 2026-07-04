import api from "./catapi";

const USERNAMES = [
    "miau_ninja",
    "pixel_michi",
    "tomcat_vibes",
    "neo_whiskers",
    "gato_cosmico",
    "purr_fusion",
    "michi_wave",
    "astro_kitty",
    "shadow_paws",
    "meow_horizon",
    "lucky_felines",
    "catzilla_x",
    "nova_miau",
    "tiger_whisk"
];

const LOCATIONS = [
    "Baghadad",
    "Bosnia",
    "Merlo",
    "Chaco",
    "Birmania",
    "Casino Mar del Plata",
    "Casa de Bruno",
    "Sumeria",
];

const CAPTIONS = [
    "Acá, casual dominando el mundo. 🐾",
    "Si me mirás así de nuevo no respondo por mis actos... 😼",
    "Esperando que me sirvan el alimento premium. 🍲",
    "Dormir 18 horas seguidas es mi verdadera pasión. 😴",
    "¿Me das un poquito de tu comida? Prometo portarme bien. 🥺",
    "Cazando fantasmas invisibles en la pared a las 3 AM. 👻",
    "Hoy me levanté con ganas de tirar cosas de la mesa.",
    "Mood de día martes... No me molesten. 🛑",
    "Elegancia pura en cuatro patas. ✨",
    "Buscando los rayos de sol por toda la casa. ☀️",
];

export const catService = {
    getFeedPosts: async (limit = 15) => {
        try {
            const response = await api.get(`/images/search?limit=${limit}`);
            const cats = response.data;

            return cats.map((cat, index) => {
                const avatarUrl = `https://i.pravatar.cc/150?img=${index + 10}`;

                return {
                    id: cat.id,
                    userId: USERNAMES[index % USERNAMES.length],
                    avatarUrl,
                    location: LOCATIONS[index % LOCATIONS.length],
                    imageUrl: cat.url,
                    caption: CAPTIONS[index % CAPTIONS.length],
                    likesCount: Math.floor(Math.random() * 5000) + 150,
                    isLiked: false,
                };
            });
        } catch (error) {
            console.error("No fue posible cargar las publicaciones:", error);
            throw error;
        }
    },
};