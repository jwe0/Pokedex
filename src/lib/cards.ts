const cards = [
    {
        "name": "Togepi",
        "hp": "50",
        "type": "Psychic",
        "stage": "Basic",
        "weakness": [
            "Metal"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 15.0,
            "market": 0.05,
            "directLow": 0.01
        }
    },
    {
        "name": "Drowzee",
        "hp": "70",
        "type": "Psychic",
        "stage": "Basic",
        "weakness": [
            "Darkness"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 3.95,
            "market": 0.04,
            "directLow": 0
        }
    },
    {
        "name": "Dusclops",
        "hp": "90",
        "type": "Psychic",
        "stage": "Stage 1",
        "weakness": [
            "Darkness"
        ],
        "prices": {
            "low": 0.02,
            "mid": 0.25,
            "high": 3.95,
            "market": 0.18,
            "directLow": 0
        }
    },
    {
        "name": "Hypno",
        "hp": "110",
        "type": "Psychic",
        "stage": "Stage 1",
        "weakness": [
            "Darkness"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.05,
            "high": 3.95,
            "market": 0.03,
            "directLow": 0
        }
    },
    {
        "name": "Sylveon",
        "hp": "120",
        "type": "Psychic",
        "stage": "Stage 1",
        "weakness": [
            "Metal"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.1,
            "high": 3.95,
            "market": 0.05,
            "directLow": 0
        }
    },
    {
        "name": "Horsea",
        "hp": "60",
        "type": "Water",
        "stage": "Basic",
        "weakness": [
            "Lightning"
        ],
        "prices": 0
    },
    {
        "name": "Cryogonal",
        "hp": "90",
        "type": "Water",
        "stage": "Basic",
        "weakness": [
            "Metal"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.08,
            "high": 15.0,
            "market": 0.05,
            "directLow": 0.03
        }
    },
    {
        "name": "Seadra",
        "hp": "90",
        "type": "Water",
        "stage": "Stage 1",
        "weakness": [
            "Lightning"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.08,
            "high": 3.95,
            "market": 0.05,
            "directLow": 0
        }
    },
    {
        "name": "Weavile",
        "hp": "100",
        "type": "Water",
        "stage": "Stage 1",
        "weakness": [
            "Metal"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.05,
            "high": 3.95,
            "market": 0.04,
            "directLow": 0
        }
    },
    {
        "name": "Joltik",
        "hp": "40",
        "type": "Grass",
        "stage": "Basic",
        "weakness": [
            "Fire"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 3.95,
            "market": 0.03,
            "directLow": 0
        }
    },
    {
        "name": "Combee",
        "hp": "50",
        "type": "Grass",
        "stage": "Basic",
        "weakness": [
            "Fire"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 15.0,
            "market": 0.04,
            "directLow": 0.02
        }
    },
    {
        "name": "Rowlet",
        "hp": "70",
        "type": "Grass",
        "stage": "Basic",
        "weakness": [
            "Fire"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.09,
            "high": 3.95,
            "market": 0.05,
            "directLow": 0
        }
    },
    {
        "name": "Dartrix",
        "hp": "90",
        "type": "Grass",
        "stage": "Stage 1",
        "weakness": [
            "Fire"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.1,
            "high": 3.95,
            "market": 0.08,
            "directLow": 0
        }
    },
    {
        "name": "Galvantula",
        "hp": "100",
        "type": "Grass",
        "stage": "Stage 1",
        "weakness": [
            "Fire"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 3.95,
            "market": 0.03,
            "directLow": 0
        }
    },
    {
        "name": "Masquerain",
        "hp": "100",
        "type": "Grass",
        "stage": "Stage 1",
        "weakness": [
            "Fire"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 3.95,
            "market": 0.03,
            "directLow": 0.02
        }
    },
    {
        "name": "Decidueye",
        "hp": "150",
        "type": "Grass",
        "stage": "Stage 2",
        "weakness": [
            "Fire"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.07,
            "high": 3.95,
            "market": 0.07,
            "directLow": 0
        }    
    },
    {
        "name": "Axew",
        "hp": "70",
        "type": "Dragon",
        "stage": "Basic",
        "weakness": 0,
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 3.95,
            "market": 0.06,
            "directLow": 0
        }
    },
    {
        "name": "Bonsly",
        "hp": "30",
        "type": "Fighting",
        "stage": "Basic",
        "weakness": [
            "Grass"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.08,
            "high": 15.0,
            "market": 0.07,
            "directLow": 0.03
        }
    },
    {
        "name": "Toedscool",
        "hp": "60",
        "type": "Fighting",
        "stage": "Basic",
        "weakness": [
            "Grass"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 15.0,
            "market": 0.03,
            "directLow": 0.01
        }
    },
    {
        "name": "Pupitar",
        "hp": "80",
        "type": "Fighting",
        "stage": "Stage 1",
        "weakness": [
            "Grass"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.09,
            "high": 15.0,
            "market": 0.05,
            "directLow": 0.03
        }
    },
    {
        "name": "Houndour",
        "hp": "70",
        "type": "Fire",
        "stage": "Basic",
        "weakness": [
            "Water"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 3.95,
            "market": 0.04,
            "directLow": 0.02
        }
    },
    {
        "name": "Houndoom",
        "hp": "120",
        "type": "Fire",
        "stage": "Stage 1",
        "weakness": [
            "Water"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.08,
            "high": 3.95,
            "market": 0.05,
            "directLow": 0
        }
    },   
    {
        "name": "Eevee",
        "hp": "70",
        "type": "Colorless",
        "stage": "Basic",
        "weakness": [
            "Fighting"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.1,
            "high": 3.95,
            "market": 0.06,
            "directLow": 0
        }
    },     
    {
        "name": "Stufful",
        "hp": "80",
        "type": "Colorless",
        "stage": "Basic",
        "weakness": [
            "Fighting"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 3.95,
            "market": 0.03,
            "directLow": 0
        }
    },
    {
        "name": "Furfrou",
        "hp": "100",
        "type": "Colorless",
        "stage": "Basic",
        "weakness": [
            "Fighting"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.05,
            "high": 3.95,
            "market": 0.03,
            "directLow": 0
        }
    },
    {
        "name": "Persian",
        "hp": "110",
        "type": "Colorless",
        "stage": "Stage 1",
        "weakness": [
            "Fighting"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.08,
            "high": 3.95,
            "market": 0.04,
            "directLow": 0
        }
    },
    {
        "name": "Gumshoos",
        "hp": "120",
        "type": "Colorless",
        "stage": "Stage 1",
        "weakness": [
            "Fighting"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 15.0,
            "market": 0.05,
            "directLow": 0.03
        }
    },
    {
        "name": "Zubat",
        "hp": "50",
        "type": "Darkness",
        "stage": "Basic",
        "weakness": [
            "Lightning"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 3.95,
            "market": 0.04,
            "directLow": 0
        }
    },
    {
        "name": "Houndour",
        "hp": "50",
        "type": "Darkness",
        "stage": "Basic",
        "weakness": [
            "Grass"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.09,
            "high": 15.0,
            "market": 0.08,
            "directLow": 0.03
        }
    },    
    {
        "name": "Inkay",
        "hp": "60",
        "type": "Darkness",
        "stage": "Basic",
        "weakness": [
            "Grass"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 3.95,
            "market": 0.04,
            "directLow": 0
        }
    },
    {
        "name": "Zorua",
        "hp": "70",
        "type": "Darkness",
        "stage": "Basic",
        "weakness": [
            "Grass"
        ],
        "prices": 0
    },
    {
        "name": "Absol",
        "hp": "110",
        "type": "Darkness",
        "stage": "Basic",
        "weakness": [
            "Grass"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.08,
            "high": 3.95,
            "market": 0.04,
            "directLow": 0
        }
    },    
    {
        "name": "Malamar",
        "hp": "120",
        "type": "Darkness",
        "stage": "Stage 1",
        "weakness": [
            "Grass"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.06,
            "high": 3.95,
            "market": 0.03,
            "directLow": 0
        }
    },
    {
        "name": "Crobat",
        "hp": "130",
        "type": "Darkness",
        "stage": "Stage 2",
        "weakness": [
            "Lightning"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.08,
            "high": 3.95,
            "market": 0.07,
            "directLow": 0
        }
    },    
    {
        "name": "Cufant",
        "hp": "100",
        "type": "Metal",
        "stage": "Basic",
        "weakness": [
            "Fire"
        ],
        "prices": 0
    },
    {
        "name": "Genesect",
        "hp": "110",
        "type": "Metal",
        "stage": "Basic",
        "weakness": [
            "Fire"
        ],
        "prices": {
            "low": 0.01,
            "mid": 0.1,
            "high": 3.95,
            "market": 0.08,
            "directLow": 0
        }
    },
    {
        "name": "Varoom",
        "hp": "60",
        "type": "Metal",
        "stage": "Basic",
        "weakness": [
            "Fire"
        ],
        "prices": {
            "low": 1.53,
            "mid": 1.53,
            "high": 1.53,
            "market": 1.53,
            "directLow": 1.53
        }
    },
    {
        "name": "Dugtrio",
        "hp": "90",
        "type": "Fighting",
        "stage": "Stage 1",
        "weakness": [
            "Grass"
        ],
        "prices": {
            "low":1.53,
            "mid": 1.53,
            "high": 1.53,
            "market": 1.53,
            "directLow": 1.53
        }
    },
    {
        "name": "Dragonair",
        "hp": "100",
        "type": "Dragon",
        "stage": "Stage 1",
        "weakness": 0,
        "prices": {
            "low": 1.75,
            "mid": 1.75,
            "high": 1.75,
            "market": 1.75,
            "directLow": 1.75
        }
    },
    {
        "name": "Zoroark",
        "hp": "120",
        "type": "Darkness",
        "stage": "Stage 1",
        "weakness": [
            "Grass"
        ],
        "prices": {
            "low" : 0.99,
            "mid": 0.99,
            "high": 0.99,
            "market": 0.99,
            "directLow": 0.99
        }
    },
    {
        "name": "Kyurem",
        "hp": "130",
        "type": "Dragon",
        "stage": "Basic",
        "weakness": 0,
        "prices": {
            "low": 1.53,
            "mid": 1.53,
            "high": 1.53,
            "market": 1.53,
            "directLow": 1.53
        }
    },
    {
        "name": "Dusknoir",
        "hp": "160",
        "type": "Psychic",
        "stage": "Stage 2",
        "weakness": [
            "Darkness"
        ],
        "prices": {
            "low": 1.37,
            "mid": 1.37,
            "high": 1.37,
            "market": 1.37,
            "directLow": 1.37
        }
    },
    {
        "name": "Copperajah",
        "hp": "200",
        "type": "Metal",
        "stage": "Stage 1",
        "weakness": [
            "Fire"
        ],
        "prices": {
            "low" : 0.77,
            "mid": 0.77,
            "high": 0.77,
            "market": 0.77,
            "directLow": 0.77
        }
    }        
]

const tests = [
    {

        "name": "Copperajah",
        "hp": "200",
        "type": "Metal",
        "stage": "Stage 1",
        "weakness": [
            "Fire"
        ],
        "prices": {
            "low" : 0.77,
            "mid": 0.77,
            "high": 0.77,
            "market": 0.77,
            "directLow": 0.77
        }
    }
]

export {cards, tests}