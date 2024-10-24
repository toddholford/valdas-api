const valdasSpireOfSecrets = {
    "contents": [
        {
            "id": "1",
            "name": "Races",
            "races": [
                {
                    "id": "1",
                    "name": "Geppettin",
                    "description": "The Geppettin race is a race of small, furry creatures",
                    "variants": [
                        {
                            "id": "1",
                            "name": "Bisque",
                            "description": "Porcelain Doll",
                            "racial traits": {
                                "ability score increase": {
                                    "options": [
                                        {
                                            "id": "1",
                                            abilities: [
                                                {
                                                    "id": "1",
                                                    name: "any",
                                                    value: 2
                                                },
                                                {
                                                    "id": "2",
                                                    name: "any",
                                                    value: 1
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            abilities: [
                                                {
                                                    "id": "1",
                                                    name: "any",
                                                    value: 1
                                                },
                                                {
                                                    "id": "2",
                                                    name: "any",
                                                    value: 1
                                                },
                                                {
                                                    "id": "3",
                                                    name: "any",
                                                    value: 1
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "creature type": "Humanoid",
                                "size": "Small",
                                "speed": 30,
                                "special abilities": [
                                    {
                                        "id": "1",
                                        "name": "dark vision",
                                        "description": "The creature can see in the dark",
                                        "distance": 60
                                    }
                                ]
                            }
                        },
                        {
                            "id": "2",
                            "name": "Marionette",
                            "description": "Wooden painted Doll",
                            "racial traits": {
                                "ability score increase": {
                                    "options": [
                                        {
                                            "id": "1",
                                            abilities: [
                                                {
                                                    "id": "1",
                                                    name: "any",
                                                    value: 2
                                                },
                                                {
                                                    "id": "2",
                                                    name: "any",
                                                    value: 1
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            abilities: [
                                                {
                                                    "id": "1",
                                                    name: "any",
                                                    value: 1
                                                },
                                                {
                                                    "id": "2",
                                                    name: "any",
                                                    value: 1
                                                },
                                                {
                                                    "id": "3",
                                                    name: "any",
                                                    value: 1
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "creature type": "Humanoid",
                                "size": "Small",
                                "speed": 30,
                                "special abilities": [
                                    {
                                        "id": "1",
                                        "name": "dark vision",
                                        "description": "The creature can see in the dark",
                                        "distance": 60
                                    }
                                ]
                            }
                        },
                        {
                            "id": "3",
                            "name": "Plushie",
                            "description": "Stuffed plushie",
                            "racial traits": {
                                "ability score increase": {
                                    "options": [
                                        {
                                            "id": "1",
                                            abilities: [
                                                {
                                                    "id": "1",
                                                    name: "any",
                                                    value: 2
                                                },
                                                {
                                                    "id": "2",
                                                    name: "any",
                                                    value: 1
                                                }
                                            ]
                                        },
                                        {
                                            "id": "2",
                                            abilities: [
                                                {
                                                    "id": "1",
                                                    name: "any",
                                                    value: 1
                                                },
                                                {
                                                    "id": "2",
                                                    name: "any",
                                                    value: 1
                                                },
                                                {
                                                    "id": "3",
                                                    name: "any",
                                                    value: 1
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "creature type": "Humanoid",
                                "size": "Small",
                                "speed": 30,
                                "special abilities": [
                                    {
                                        "id": "1",
                                        "name": "dark vision",
                                        "description": "The creature can see in the dark",
                                        "distance": 60
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": "2",
                    "name": "Mandrake",
                    "description": "The Mandrake race are large, wooden creatures"
                },
                {
                    "id": "3",
                    "name": "Mousefolk",
                    "description": "The Mousefolk race are small, mouse-like creatures"
                },
                {
                    "id": "4",
                    "name": "Spirithost",
                    "description": "The Spirithost race are ghostly, humanoid creatures"
                }
            ]
        },
        {
            "id": "2",
            "name": "Classes",
            "classes": [
                {
                    "id": "1",
                    "name": "Alchemist",
                    "subtitle": "Alchemy, the class",
                    "description": "The Alchemist class is a class of spellcasters",
                    "hit_die": "1d6",
                    "primary_abilities": [
                        "Intelligence",
                        "Dexterity"
                    ],
                    "starting_gold": "4d4 x 10gp",
                    "saving throw proficiencies": [
                        "Dexterity",
                        "Intelligence"
                    ],
                    "armor_and_weapon_proficiencies": [
                        "Light armor",
                        "Simple weapons",
                        "bombs",
                        "alchemist's supplies"
                    ],
                    "lore": [
                        {
                            "id": "1",
                            "name": "Intro",
                            "description": "Intro"
                        },
                        {
                            "id": "2",
                            "name": "Chemical Reactions",
                            "description": "lorem ipsum"
                        },
                        {
                            "id": "3",
                            "name": "Serums and Tinctures",
                            "description": "lorem ipsum"
                        },
                        {
                            "id": "4",
                            "name": "Elemental Sciences",
                            "description": "lorem ipsum"
                        },
                        {
                            "id": "5",
                            "name": "Creating an Alchemist",
                            "description": "lorem ipsum",
                            "quick build": {
                                "description": "lorem ipsum"
                            }
                        }
                    ],
                    "level_table": [
                        {
                            "id": "1",
                            "level": "1",
                            "proficiency bonus": "2",
                            "formulae known": "0",
                            "reagent dice": "0",
                            "discoveries known": "0",
                            "features": [
                                {
                                    "id": "1",
                                    "name": "Bombs"
                                },
                                {
                                    "id": "2",
                                    "name": "Natural Philosopher"
                                }
                            ]
                        },
                        {
                            "id": "2",
                            "level": "2",
                            "proficiency bonus": "2",
                            "formulae known": "3",
                            "reagent dice": "0",
                            "discoveries known": "0",
                            "features": [
                                {
                                    "id": "1",
                                    "name": "Bomb Formulae"
                                },
                                {
                                    "id": "2",
                                    "name": "Field of Study"
                                }
                            ]
                        }
                    ],
                    "features":[
                        {
                            "id": "1",
                            "name": "Hit Points",
                            "hit dice": "1d6 per alchemist level",
                            "hit points at level 1": "6 + your consitution modifier",
                            "hit point at higher levels": "1d6(or 4) + your constitution modifier per alchemist level after 1st",
                        },
                        {
                            "id": "2",
                            "name": "Proficiencies",
                            "armor": ["Light armor"],
                            "weapons": ["Simple weapons", "bombs"],
                            "tools": ["Alchemist's supplies", "herbalism kit"],
                            "saving throws": ["Dexterity", "Intelligence"],
                            "skills": {
                                "amount": 3,
                                "choices": [
                                    "Arcana",
                                    "History",
                                    "Insight",
                                    "Medicine",
                                    "Nature",
                                    "Perception",
                                    "Sleight of Hand",
                                    "Survival"
                                ]
                            }
                        },
                        {
                            "id": "3",
                            "name": "Equipment",
                            "choices": [
                                {
                                    "id": "1",
                                    "options": [
                                        {
                                            "id": "1",
                                            "items": ["light crossbow", "20 bolts"]
                                        },
                                        {
                                            "id": "2",
                                            "items": ["simple weapon"]
                                        }
                                    ]
                                },
                                {
                                    "id": "2",
                                    "options": [
                                        {
                                            "id": "1",
                                            "items": ["explorer's pack"]
                                        },
                                        {
                                            "id": "2",
                                            "items": ["scholar's pack"]
                                        }
                                    ]
                                },
                                {
                                    "id": "3",
                                    "options": [
                                        {
                                            "id": "1",
                                            "items": ["alchemist's supplies", "vial of acid"]
                                        },
                                        {
                                            "id": "2",
                                            "items": ["flask of alchemist's fire"]
                                        },
                                        {
                                            "id": "3",
                                            "items": ["vial of basic poison"]
                                        }
                                    ]
                                },
                                {
                                    "id": "4",
                                    "options": [
                                        {
                                            "id": "1",
                                            "items": ["leather armor", "dagger"]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "4",
                            "name": "Natural Philosopher",
                            "description": "lorem ipsum"
                        },
                        {
                            "id": "5",
                            "name": "Bombs",
                            "description": "lorem ipsum"
                        },
                        {
                            "id": "6",
                            "name": "Bomb Formulae",
                            "description": "lorem ipsum"
                        },
                        {
                            "id": "7",
                            "name": "Field of Study",
                            "description": "lorem ipsum"
                        },
                        {
                            "id": "8",
                            "name": "Reagent",
                            "description": "lorem ipsum"
                        },
                        {
                            "id": "9",
                            "name": "Discoveries",
                            "description": "lorem ipsum"
                        },
                        {
                            "id": "10",
                            "name": "Ability Score Improvement",
                            "description": "lorem ipsum"
                        },
                        {
                            "id": "11",
                            "name": "Flashbang",
                            "description": "lorem ipsum"
                        },
                        {
                            "id": "12",
                            "name": "Evasion",
                            "description": "lorem ipsum"
                        },
                        {
                            "id": "13",
                            "name": "Blast Coating",
                            "description": "lorem ipsum"
                        },
                        {
                            "id": "14",
                            "name": "Philosopher's Stone",
                            "description": "lorem ipsum"
                        }
                    ]
                }
            ]
        },
        {
            "id": "3",
            "name": "Subclasses",
            "subclasses": []
        },
        {
            "id": "4",
            "name": "Customization",
            "customizations": []
        },
        {
            "id": "5",
            "name": "Equipment",
            "equipment": []
        },
        {
            "id": "6",
            "name": "Spells",
            "spells": []
        },
        {
            "id": "7",
            "name": "Appendices",
            "appendices": []
        }
    ]
}

console.log(valdasSpireOfSecrets)