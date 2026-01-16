const festivals = [
    { name: "Nataraja Festival", country: "França", continent: "Europa", genre: "Psytrance - multigênero", status: "Ativo", lat: 46.0201, lng: 3.7616 },
    { name: "Universo Paralello", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", status: "Ativo", lat: -13.512251, lng: -38.92635 },
    { name: "Mo.dem Festival", country: "Croácia", continent: "Europa", genre: "Darkpsy", status: "Ativo", lat: 45.216951, lng: 15.471648 },
   { name: "Alien Safari", country: "África do Sul", continent: "África", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -31.388542, lng: 24.284814 },
            { name: "Indian Spirit", country: "Alemanha", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 53.2623, lng: 11.4153 },
            { name: "Antaris Project", country: "Alemanha", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: 52.7388, lng: 12.3821 },
            { name: "Shankra Festival", country: "Suíça", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 46.3439, lng: 9.1011 },
            { name: "Vuuv Festival", country: "Alemanha", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 52.8625, lng: 12.1538 },
            { name: "Envision Festival", country: "Costa Rica", continent: "América Central", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 10.446698, lng: -83.312888 },
            { name: "Lucidity Festival", country: "EUA", continent: "América do Norte", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 34.4208, lng: -119.6982 },
            { name: "Eclipse Festival", country: "Canadá", continent: "América do Norte", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 46.8139, lng: -71.208 },
            { name: "Jacundá Trance Festival", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -2.548959, lng: -60.145092 },
            { name: "Mundo de Oz", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -23.100547, lng: -45.170907 },
            { name: "High Stage", country: "Brasil", continent: "América do Sul", genre: "Hitech Psytrance", subgenres: "Hitech, Darkpsy, Core", status: "Ativo", lat: -23.08043, lng: -45.20952 },
            { name: "Hitech Revolution", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Hitech, Darkpsy, Core", status: "Ativo", lat: -23.078685, lng: -45.178715 },
            { name: "Swampy Festival", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -21.060319, lng: -44.845167 },
            { name: "Universo Paralello", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -13.512251, lng: -38.92635 },
            { name: "Undervision Festival", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -28.78656, lng: -52.07779 },
            { name: "Earthdance Festival", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -30.023123, lng: -50.550707 },
            { name: "Zion Festival", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -30.93924, lng: -53.588792 },
            { name: "Festival Terrazul", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -27.256784, lng: -48.775212 },
            { name: "Elementorum Naturae", country: "Brasil", continent: "América do Sul", genre: "Hitech Psytrance", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -23.761119, lng: -53.268706 },
            { name: "Zuvuya Festival", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -15.710742, lng: -47.911257 },
            { name: "Hipnótica Crew", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -16.542452, lng: -49.279106 },
            { name: "Happiness Festival", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -5.892661, lng: -47.384999 },
            { name: "Inchalla Festival", country: "Uruguai", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -34.458919, lng: -54.209206 },
            { name: "Arkana Festival", country: "Perú", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -13.454688, lng: -71.948714 },
            { name: "Psycristrance Festival", country: "México", continent: "América do Norte", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 17.466728, lng: -92.866588 },
            { name: "Winter Solstice Gathering", country: "México", continent: "América do Norte", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 16.280933, lng: -92.45536 },
            { name: "Totem", country: "Bolívia", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -16.575838, lng: -68.007017 },
            { name: "Hybrid Festival", country: "Chile", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -36.712002, lng: -72.88202 },
            { name: "Forest Festival", country: "Equador", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 0.572869, lng: -78.122396 },
            { name: "Chakra Psy Festival", country: "Argentina", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -34.17276, lng: -58.172867 },
            { name: "Montemapu Festival", country: "Chile", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -32.814198, lng: -71.020313 },
            { name: "Fractal Research", country: "Argentina", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -32.88964, lng: -61.16462 },
            { name: "Ganesha Trance", country: "Argentina", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -41.4750978, lng: -71.213113 },
            { name: "Earthdance Argentina", country: "Argentina", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -31.567992, lng: -64.190227 },
            { name: "Origens Gathering", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -29.605478, lng: -50.024575 },
            { name: "Terra Oca", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -9.094822, lng: -63.898045 },
            { name: "Liquid Sky", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -8.359513, lng: -35.202517 },
            { name: "Naturaiz", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Darkpsy, Hitech, Core, Forest", status: "Ativo", lat: -23.098494, lng: -45.204391 },
            { name: "Nighters Unity", country: "Argentina", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -35.160846, lng: -58.872331 },
            { name: "Pachamama Festival", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -23.245285, lng: -46.392073 },
            { name: "Abrakadabra", country: "Argentina", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -34.308013, lng: -58.888094 },
            { name: "Jardim de Oz", country: "Bolívia", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -13.721316, lng: -65.160572 },
            { name: "Adhana Festival", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -25.47658, lng: -48.822487 },
            { name: "Eclipse Festival", country: "Canadá", continent: "América do Norte", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 49.538639, lng: -105.595987 },
            { name: "Amazonas Andes Festival", country: "Bolívia", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -17.065202, lng: -62.77641 },
            { name: "Ritual Xalpen", country: "Chile", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -34.371561, lng: -71.154979 },
            { name: "Fractal Festival", country: "Namíbia", continent: "África", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -21.845339, lng: 15.177458 },
            { name: "Hypnophonia", country: "Marrocos", continent: "África", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: 32.692806, lng: -7.578707 },
            { name: "Xylophobia", country: "Marrocos", continent: "África", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: 33.170747, lng: -6.826367 },
            { name: "Transahara Festival", country: "Marrocos", continent: "África", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: 31.457302, lng: -3.40015 },
            { name: "Karacus Maracus", country: "Índia", continent: "Ásia", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 14.986373, lng: 74.064123 },
            { name: "Silvester Magica", country: "Índia", continent: "Ásia", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 31.712368, lng: 77.439124 },
            { name: "Maya Gathering", country: "Nepal", continent: "Ásia", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 28.30698, lng: 85.971816 },
            { name: "Maya Mantra", country: "Nepal", continent: "Ásia", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: 27.367647, lng: 84.993448 },
            { name: "Arzeia Festival", country: "Tunísia", continent: "África", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: 37.284509, lng: 9.829413 },
            { name: "Boom Festival", country: "Portugal", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 39.784492, lng: -7.45194 },
            { name: "ZNA Gathering", country: "Portugal", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Goa, Prog, Night, Forest", status: "Ativo", lat: 39.070486, lng: -8.179916 },
            { name: "Global Tribe", country: "Espanha", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 37.319755, lng: -6.448378 },
            { name: "Multiverse Festival", country: "Chile", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -33.04224, lng: -71.481953 },
            { name: "Quantum Fest", country: "Chile", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -33.845702, lng: -70.348073 },
            { name: "Makuna Festival", country: "Brasil", continent: "América do Sul", genre: "Darkpsy", subgenres: "Hitech, Darkpsy, Core", status: "Ativo", lat: -21.104368, lng: -47.848644 },
            { name: "Aluna Ritual", country: "Colômbia", continent: "América do Sul", genre: "Darkpsy", subgenres: "Hitech, Darkpsy, Core", status: "Ativo", lat: 11.209893, lng: -73.5259 },
            { name: "Mo.dem Festival", country: "Croácia", continent: "Europa", genre: "Darkpsy", subgenres: "Hitech, Darkpsy, Core", status: "Ativo", lat: 45.216951, lng: 15.471648 },
            { name: "Uforest Festival", country: "EUA", continent: "América do Norte", genre: "Darkpsy", subgenres: "Hitech, Darkpsy, Core", status: "Ativo", lat: 34.528943, lng: -118.324689 },
            { name: "Heaven on Earth Festival", country: "EUA", continent: "América do Norte", genre: "Darkpsy", subgenres: "Hitech, Darkpsy, Core", status: "Ativo", lat: 39.449545, lng: -121.115488 },
            { name: "Huytaca Ritual", country: "Venezuela", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 10.044612, lng: -66.753783 },
            { name: "OVNI Invasión", country: "Guatemala", continent: "América Central", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 15.638839, lng: -89.979085 },
            { name: "Cosmic Convergence", country: "Guatemala", continent: "América Central", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 14.560312, lng: -90.627401 },
            { name: "Texas Eclipse", country: "EUA", continent: "América do Norte", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 30.548318, lng: -98.841636 },
            { name: "Sola Luna Festival", country: "Tailândia", continent: "Ásia", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 9.111928, lng: 99.80451 },
            { name: "Trance Portal Festival", country: "México", continent: "América do Norte", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 23.916436, lng: -104.822274 },
            { name: "Equinox Festival", country: "México", continent: "América do Norte", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 19.23673, lng: -96.269526 },
            { name: "Atmosphere Festival", country: "México", continent: "América do Norte", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 18.916937, lng: -98.994863 },
            { name: "Limitless Festival", country: "Canadá", continent: "América do Norte", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 47.013977, lng: -72.370865 },
            { name: "Mind Levitation", country: "Canadá", continent: "América do Norte", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 45.07101, lng: -79.38973 },
            { name: "Tree of Life Festival", country: "Turquia", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 38.557962, lng: 27.217006 },
            { name: "Hill Top Goa", country: "Índia", continent: "Ásia", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 15.415892, lng: 73.635303 },
            { name: "Shuangda Festival", country: "China", continent: "Ásia", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 30.033724, lng: 121.508543 },
            { name: "Ligoor Spirit Festival", country: "China", continent: "Ásia", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 30.849691, lng: 104.063824 },
            { name: "Ananta Gathering", country: "Canadá", continent: "América do Norte", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 51.953908, lng: -85.192186 },
            { name: "Sacred Aeon Festival", country: "Cambodia", continent: "Ásia", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 11.122385, lng: 102.947911 },
            { name: "Lost in Paradise", country: "Nova Zelândia", continent: "Oceania", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -35.725995, lng: 174.320699 },
            { name: "Invoke Festival", country: "Inglaterra", continent: "Europa", genre: "Darkpsy", subgenres: "Hitech, Darkpsy, Core", status: "Ativo", lat: 53.167294, lng: -0.249981 },
            { name: "Pyramid Festival", country: "Sérvia", continent: "Europa", genre: "Darkpsy", subgenres: "Hitech, Darkpsy, Core", status: "Ativo", lat: 43.557516, lng: 21.940234 },
            { name: "Pulsar Festival", country: "Brasil", continent: "América do Sul", genre: "Darkpsy", subgenres: "Hitech, Darkpsy, Core", status: "Ativo", lat: -19.612239, lng: -43.427707 },
            { name: "Insomnia Festival", country: "Portugal", continent: "Europa", genre: "Darkpsy", subgenres: "Hitech, Darkpsy, Core", status: "Ativo", lat: 40.337772, lng: -7.800269 },
            { name: "Terra Incógnita", country: "Brasil", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -31.156741, lng: -51.84757 },
            { name: "Psychedelic Resistance", country: "Argentina", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -34.792092, lng: -59.05887 },
            { name: "Ethereal Decibel Festival", country: "França", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 48.536211, lng: -0.999927 },
            { name: "Hadra Trance Festival", country: "França", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 45.188742, lng: 5.703492 },
            { name: "Free Earth Festival", country: "Grécia", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 40.720365, lng: 23.709953 },
            { name: "Tribe Gathering", country: "Panamá", continent: "América Central", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 9.100921, lng: -80.392383 },
            { name: "Midnight Sun Festival", country: "Noruega", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 58.337636, lng: 7.196158 },
            { name: "Xibalba", country: "Japão", continent: "Ásia", genre: "Darkpsy", subgenres: "Hitech, Darkpsy, Core", status: "Ativo", lat: 35.059651, lng: 135.213746 },
            { name: "Forest Soul Gathering", country: "Portugal", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Forest, Darkpsy, Night", status: "Ativo", lat: 41.732198, lng: -7.831288 },
            { name: "Trance Odissey", country: "Portugal", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 39.249052, lng: -8.811818 },
            { name: "Mumush Festival", country: "Romênia", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 46.492779, lng: 24.803299 },
            { name: "Mimosa Festival", country: "Chile", continent: "América do Sul", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -33.51225, lng: -70.906146 },
            { name: "Grooven Bass Festival", country: "Canadá", continent: "América do Norte", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 48.375358, lng: -74.014819 },
            { name: "Kali Mela", country: "Índia", continent: "Ásia", genre: "Darkpsy", subgenres: "Hitech, Darkpsy, Core", status: "Ativo", lat: 32.063376, lng: 76.983855 },
            { name: "Ozora Festival", country: "Hungria", continent: "Europa", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: 46.779312, lng: 18.410091 },
            { name: "Rainbow", country: "Austrália", continent: "Oceania", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Inativo", lat: -32.276796, lng: 145.374314 },
            { name: "Universal Frequencies", country: "Austrália", continent: "Oceania", genre: "Psytrance - multigênero", subgenres: "Full on, Prog, Night, Forest", status: "Ativo", lat: -31.979072, lng: 121.995408 }
        ];


const countryCodes = {
    'Alemanha': 'de', 'França': 'fr', 'Brasil': 'br', 'Croácia': 'hr', 'Portugal': 'pt',
    'EUA': 'us', 'México': 'mx', 'Índia': 'in', 'Argentina': 'ar', 'Chile': 'cl' 
    // Completa com os outros códigos que já tinhas
};

const FLAG_BASE_URL = 'https://flagcdn.com/w80/';

function getFlagUrl(countryName) {
    const code = countryCodes[countryName];
    return code ? `${FLAG_BASE_URL}${code.toLowerCase()}.png` : null;
}

const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const markerGroups = {
    active: L.layerGroup().addTo(map),
    inactive: L.layerGroup().addTo(map)
};

function getGenreColor(genre) {
    if (genre === 'Hitech Psytrance') return '#e74c3c';
    if (genre === 'Darkpsy') return '#9b59b6';
    return '#3498db';
}

// A FUNÇÃO MÁGICA PARA AS BANDEIRAS CIRCULARES
function getFestivalIcon(festival) {
    const flagUrl = getFlagUrl(festival.country);
    const color = getGenreColor(festival.genre);
    
    if (!flagUrl) {
        return L.divIcon({
            className: '',
            html: `<div style="background-color: ${color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>`,
            iconSize: [12, 12], iconAnchor: [6, 6]
        });
    }

    return L.divIcon({
        className: '',
        html: `
            <div style="position: relative;">
                <div class="flag-marker-container">
                    <img src="${flagUrl}" alt="${festival.country}">
                </div>
                <div class="genre-indicator" style="background-color: ${color};"></div>
            </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
    });
}

function addMarkers() {
    markerGroups.active.clearLayers();
    markerGroups.inactive.clearLayers();
    
    const showActive = document.getElementById('filter-active').checked;
    const showInactive = document.getElementById('filter-inactive').checked;

    festivals.forEach(festival => {
        if ((festival.status === 'Ativo' && !showActive) || (festival.status === 'Inativo' && !showInactive)) return;

        const marker = L.marker([festival.lat, festival.lng], { icon: getFestivalIcon(festival) });
        const flagUrl = getFlagUrl(festival.country);
        
        marker.bindPopup(`
            <div class="festival-popup">
                <h3>${flagUrl ? `<img src="${flagUrl}" class="country-flag">` : ''}${festival.name}</h3>
                <p><strong>Gênero:</strong> ${festival.genre}</p>
                <p><strong>Status:</strong> <span class="status-${festival.status === 'Ativo' ? 'active' : 'inactive'}">${festival.status}</span></p>
            </div>
        `);

        if (festival.status === 'Ativo') markerGroups.active.addLayer(marker);
        else markerGroups.inactive.addLayer(marker);
    });
    document.getElementById('total-festivals').textContent = festivals.length;
}

document.getElementById('filter-active').addEventListener('change', addMarkers);
document.getElementById('filter-inactive').addEventListener('change', addMarkers);
addMarkers();
