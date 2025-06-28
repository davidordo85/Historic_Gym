// Pecho
const pechoMaquinas = [
    'Press de pecho en máquina',
    'Press inclinado en máquina',
    'Aperturas en contractor de pecho',
    'Press declinado en máquina',
    'Crossover en polea alta'
];

const pechoMancuernas = [
    'Press de banca con mancuernas',
    'Press inclinado con mancuernas',
    'Aperturas con mancuernas',
    'Pullover con mancuerna'
];

// Espalda
const espaldaMaquinas = [
    'Jalón al pecho',
    'Remo sentado en máquina',
    'Remo unilateral en máquina',
    'Jalón tras nuca',
    'Remo en polea baja'
];

const espaldaMancuernas = [
    'Remo con mancuerna a una mano',
    'Remo inclinado con mancuernas',
    'Pullover con mancuerna',
    'Encogimiento de hombros con mancuernas'
];

// Piernas
const piernasMaquinas = [
    'Prensa de piernas',
    'Extensiones de cuádriceps',
    'Curl femoral tumbado',
    'Sentadilla Hack',
    'Elevación de talones en máquina (gemelos)'
];

const piernasMancuernas = [
    'Sentadillas con mancuernas',
    'Zancadas con mancuernas',
    'Peso muerto rumano con mancuernas',
    'Elevación de talones con mancuernas'
];

// Hombros
const hombrosMaquinas = [
    'Press de hombros en máquina',
    'Elevaciones laterales en máquina',
    'Elevaciones frontales en máquina',
    'Pájaro en peck-deck (posterior)'
];

const hombrosMancuernas = [
    'Press militar con mancuernas',
    'Elevaciones laterales con mancuernas',
    'Elevaciones frontales con mancuernas',
    'Pájaros con mancuernas (posterior)'
];

// Bíceps
const bicepsMaquinas = [
    'Curl de bíceps en máquina',
    'Curl en predicador con máquina',
    'Curl alterno en polea baja'
];

const bicepsMancuernas = [
    'Curl de bíceps alterno',
    'Curl concentrado',
    'Curl martillo',
    'Curl en banco inclinado'
];

// Tríceps
const tricepsMaquinas = [
    'Extensión de tríceps en máquina',
    'Press de tríceps en polea',
    'Extensión unilateral en polea alta'
];

const tricepsMancuernas = [
    'Extensión de tríceps con mancuerna sobre la cabeza',
    'Patada de tríceps',
    'Press francés con mancuernas'
];

export const ejercicios = {
    pecho: {
        maquinas: pechoMaquinas,
        mancuernas: pechoMancuernas
    },
    espalda: {
        maquinas: espaldaMaquinas,
        mancuernas: espaldaMancuernas
    },
    piernas: {
        maquinas: piernasMaquinas,
        mancuernas: piernasMancuernas
    },
    hombros: {
        maquinas: hombrosMaquinas,
        mancuernas: hombrosMancuernas
    },
    biceps: {
        maquinas: bicepsMaquinas,
        mancuernas: bicepsMancuernas
    },
    triceps: {
        maquinas: tricepsMaquinas,
        mancuernas: tricepsMancuernas
    }
};