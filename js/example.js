var logText = 
`|j|ndhhhk2
|j|ndhhhk1
|player|p1|ndhhhk2|169
|player|p2|ndhhhk1|102
|gametype|singles
|gen|7
|tier|[Gen 7] Random Battle
|seed|61526,37801,27313,35081,44795,57870,3204,23567,5238,44236,7503,31132
|rule|Sleep Clause Mod: Limit one foe put to sleep
|rule|HP Percentage Mod: HP is shown in percentages
|
|start
|switch|p1a: Swanna|Swanna, L77, M|100/100
|switch|p2a: Corsola|Corsola, L77, F|100/100
|-item|p2a: Corsola|Air Balloon
|turn|1
|choice|move defog|move toxic
|
|move|p1a: Swanna|Defog|p2a: Corsola
|-unboost|p2a: Corsola|evasion|1
|move|p2a: Corsola|Toxic|p1a: Swanna
|-status|p1a: Swanna|tox
|
|-damage|p1a: Swanna|94/100 tox|[from] psn
|upkeep
|turn|2
|choice|move roost|move powergem
|
|move|p1a: Swanna|Roost|p1a: Swanna
|-heal|p1a: Swanna|100/100 tox
|move|p2a: Corsola|Power Gem|p1a: Swanna
|-damage|p1a: Swanna|72/100 tox
|
|-heal|p1a: Swanna|78/100 tox|[from] item: Leftovers
|-damage|p1a: Swanna|66/100 tox|[from] psn
|upkeep
|turn|3
|choice|move hurricane|move scald
|
|move|p1a: Swanna|Hurricane|p2a: Corsola
|-resisted|p2a: Corsola
|-crit|p2a: Corsola
|-damage|p2a: Corsola|71/100
|-enditem|p2a: Corsola|Air Balloon
|move|p2a: Corsola|Scald|p1a: Swanna
|-resisted|p1a: Swanna
|-damage|p1a: Swanna|50/100 tox
|
|-heal|p1a: Swanna|57/100 tox|[from] item: Leftovers
|-damage|p1a: Swanna|38/100 tox|[from] psn
|upkeep
|turn|4
|choice|move hurricane|move stealthrock
|
|move|p1a: Swanna|Hurricane|p2a: Corsola
|-resisted|p2a: Corsola
|-damage|p2a: Corsola|52/100
|-start|p2a: Corsola|confusion
|-activate|p2a: Corsola|confusion
|-damage|p2a: Corsola|48/100|[from] confusion
|
|-heal|p1a: Swanna|44/100 tox|[from] item: Leftovers
|-damage|p1a: Swanna|20/100 tox|[from] psn
|upkeep
|turn|5
|choice|move roost|move powergem
|
|move|p1a: Swanna|Roost|p1a: Swanna
|-heal|p1a: Swanna|70/100 tox
|-activate|p2a: Corsola|confusion
|move|p2a: Corsola|Power Gem|p1a: Swanna
|-damage|p1a: Swanna|37/100 tox
|
|-heal|p1a: Swanna|43/100 tox|[from] item: Leftovers
|-damage|p1a: Swanna|12/100 tox|[from] psn
|upkeep
|turn|6
|choice|move roost|move powergem
|
|move|p1a: Swanna|Roost|p1a: Swanna
|-heal|p1a: Swanna|62/100 tox
|-end|p2a: Corsola|confusion
|move|p2a: Corsola|Power Gem|p1a: Swanna
|-damage|p1a: Swanna|31/100 tox
|
|-heal|p1a: Swanna|38/100 tox|[from] item: Leftovers
|-damage|p1a: Swanna|0 fnt|[from] psn
|upkeep
|faint|p1a: Swanna
|choice|switch 2|
|
|switch|p1a: Hitmonlee|Hitmonlee, L77, M|100/100
|turn|7
|choice|move highjumpkick|move toxic
|
|move|p1a: Hitmonlee|High Jump Kick|p2a: Corsola
|-supereffective|p2a: Corsola
|-damage|p2a: Corsola|0 fnt
|faint|p2a: Corsola
|
|upkeep
|choice||switch 2
|
|switch|p2a: Cinccino|Cinccino, L77, M|100/100
|turn|8
|choice|move stoneedge|move bulletseed
|
|move|p2a: Cinccino|Bullet Seed|p1a: Hitmonlee
|-damage|p1a: Hitmonlee|84/100
|-damage|p1a: Hitmonlee|67/100
|-damage|p1a: Hitmonlee|50/100
|-enditem|p1a: Hitmonlee|Sitrus Berry|[eat]
|-heal|p1a: Hitmonlee|75/100|[from] item: Sitrus Berry
|-damage|p1a: Hitmonlee|58/100
|-damage|p1a: Hitmonlee|40/100
|-hitcount|p1a: Hitmonlee|5
|move|p1a: Hitmonlee|Stone Edge|p2a: Cinccino
|-damage|p2a: Cinccino|57/100
|
|upkeep
|turn|9
|choice|move machpunch|move bulletseed
|
|move|p1a: Hitmonlee|Mach Punch|p2a: Cinccino
|-supereffective|p2a: Cinccino
|-crit|p2a: Cinccino
|-damage|p2a: Cinccino|0 fnt
|faint|p2a: Cinccino
|
|upkeep
|choice||switch 3
|
|switch|p2a: Jolteon|Jolteon, L77, M|100/100
|turn|10
|choice|move poisonjab|move substitute
|
|move|p1a: Hitmonlee|Poison Jab|p2a: Jolteon
|-damage|p2a: Jolteon|63/100
|-status|p2a: Jolteon|psn
|move|p2a: Jolteon|Substitute|p2a: Jolteon
|-start|p2a: Jolteon|Substitute
|-damage|p2a: Jolteon|39/100 psn
|
|-heal|p2a: Jolteon|45/100 psn|[from] item: Leftovers
|-damage|p2a: Jolteon|33/100 psn|[from] psn
|upkeep
|turn|11
|choice|move stoneedge|move hiddenpower
|
|move|p1a: Hitmonlee|Stone Edge|p2a: Jolteon|[miss]
|-miss|p1a: Hitmonlee|p2a: Jolteon
|move|p2a: Jolteon|Hidden Power|p1a: Hitmonlee
|-damage|p1a: Hitmonlee|21/100
|
|-heal|p2a: Jolteon|39/100 psn|[from] item: Leftovers
|-damage|p2a: Jolteon|26/100 psn|[from] psn
|upkeep
|turn|12
|choice|move machpunch|move thunderbolt
|
|move|p1a: Hitmonlee|Mach Punch|p2a: Jolteon
|-end|p2a: Jolteon|Substitute
|move|p2a: Jolteon|Thunderbolt|p1a: Hitmonlee
|-damage|p1a: Hitmonlee|0 fnt
|faint|p1a: Hitmonlee
|
|-heal|p2a: Jolteon|33/100 psn|[from] item: Leftovers
|-damage|p2a: Jolteon|20/100 psn|[from] psn
|upkeep
|choice|switch 3|
|
|switch|p1a: Rapidash|Rapidash, L77, M|100/100
|turn|13
|choice|move drillrun|move thunderbolt
|
|move|p2a: Jolteon|Thunderbolt|p1a: Rapidash
|-damage|p1a: Rapidash|58/100
|move|p1a: Rapidash|Drill Run|p2a: Jolteon
|-supereffective|p2a: Jolteon
|-crit|p2a: Jolteon
|-damage|p2a: Jolteon|0 fnt
|-damage|p1a: Rapidash|48/100|[from] item: Life Orb
|faint|p2a: Jolteon
|
|upkeep
|choice||switch 4
|
|switch|p2a: Wishiwashi|Wishiwashi, L77, F|100/100
|-formechange|p2a: Wishiwashi|Wishiwashi-School|[from] ability: Schooling
|turn|14
|choice|move wildcharge|move scald
|
|move|p1a: Rapidash|Wild Charge|p2a: Wishiwashi
|-supereffective|p2a: Wishiwashi
|-damage|p2a: Wishiwashi|39/100
|-damage|p1a: Rapidash|35/100|[from] recoil|[of] p2a: Wishiwashi
|-damage|p1a: Rapidash|25/100|[from] item: Life Orb
|move|p2a: Wishiwashi|Scald|p1a: Rapidash
|-supereffective|p1a: Rapidash
|-damage|p1a: Rapidash|0 fnt
|faint|p1a: Rapidash
|
|upkeep
|choice|switch 4|
|
|switch|p1a: Delibird|Delibird, L77, M|100/100
|turn|15
|choice|move spikes|move earthquake
|
|move|p1a: Delibird|Spikes|p2a: Wishiwashi
|-sidestart|p2: ndhhhk1|Spikes
|move|p2a: Wishiwashi|Earthquake|p1a: Delibird
|-immune|p1a: Delibird|[msg]
|
|upkeep
|turn|16
|choice|move iceshard|move icebeam
|
|move|p1a: Delibird|Ice Shard|p2a: Wishiwashi
|-resisted|p2a: Wishiwashi
|-damage|p2a: Wishiwashi|33/100
|move|p2a: Wishiwashi|Ice Beam|p1a: Delibird
|-damage|p1a: Delibird|40/100
|
|-heal|p1a: Delibird|46/100|[from] item: Leftovers
|upkeep
|turn|17
|choice|move icepunch|move hiddenpower
|
|move|p1a: Delibird|Ice Punch|p2a: Wishiwashi
|-resisted|p2a: Wishiwashi
|-damage|p2a: Wishiwashi|18/100
|move|p2a: Wishiwashi|Hidden Power|p1a: Delibird
|-resisted|p1a: Delibird
|-damage|p1a: Delibird|25/100
|
|-heal|p1a: Delibird|31/100|[from] item: Leftovers
|-formechange|p2a: Wishiwashi|Wishiwashi|[from] ability: Schooling
|upkeep
|turn|18
|choice|move destinybond|move icebeam
|
|move|p1a: Delibird|Destiny Bond|p1a: Delibird
|-singlemove|p1a: Delibird|Destiny Bond
|move|p2a: Wishiwashi|Ice Beam|p1a: Delibird
|-damage|p1a: Delibird|11/100
|
|-heal|p1a: Delibird|17/100|[from] item: Leftovers
|upkeep
|turn|19
|choice|move spikes|move icebeam
|
|move|p1a: Delibird|Spikes|p2a: Wishiwashi
|-sidestart|p2: ndhhhk1|Spikes
|move|p2a: Wishiwashi|Ice Beam|p1a: Delibird
|-damage|p1a: Delibird|0 fnt
|faint|p1a: Delibird
|
|upkeep
|choice|switch 5|
|
|switch|p1a: Carnivine|Carnivine, L77, M|100/100
|turn|20
|choice|move knockoff|move hiddenpower
|
|move|p1a: Carnivine|Knock Off|p2a: Wishiwashi
|-damage|p2a: Wishiwashi|0 fnt
|-enditem|p2a: Wishiwashi|Expert Belt|[from] move: Knock Off|[of] p1a: Carnivine
|faint|p2a: Wishiwashi
|
|upkeep
|choice||switch 5
|
|switch|p2a: Butterfree|Butterfree, L77, M|100/100
|turn|21
|choice|move knockoff|move quiverdance
|
|move|p2a: Butterfree|Quiver Dance|p2a: Butterfree
|-boost|p2a: Butterfree|spa|1
|-boost|p2a: Butterfree|spd|1
|-boost|p2a: Butterfree|spe|1
|move|p1a: Carnivine|Knock Off|p2a: Butterfree
|-damage|p2a: Butterfree|55/100
|-enditem|p2a: Butterfree|Life Orb|[from] move: Knock Off|[of] p1a: Carnivine
|
|upkeep
|turn|22
|choice|move substitute|move gigadrain
|
|move|p2a: Butterfree|Giga Drain|p1a: Carnivine
|-resisted|p1a: Carnivine
|-damage|p1a: Carnivine|70/100
|-heal|p2a: Butterfree|72/100|[from] drain|[of] p1a: Carnivine
|move|p1a: Carnivine|Substitute|p1a: Carnivine
|-start|p1a: Carnivine|Substitute
|-damage|p1a: Carnivine|45/100
|
|-heal|p1a: Carnivine|51/100|[from] item: Leftovers
|upkeep
|turn|23
|choice|move powerwhip|move airslash
|
|move|p2a: Butterfree|Air Slash|p1a: Carnivine
|-supereffective|p1a: Carnivine
|-end|p1a: Carnivine|Substitute
|move|p1a: Carnivine|Power Whip|p2a: Butterfree
|-resisted|p2a: Butterfree
|-damage|p2a: Butterfree|51/100
|
|-heal|p1a: Carnivine|57/100|[from] item: Leftovers
|upkeep
|turn|24
|choice|move sleeppowder|move bugbuzz
|
|move|p2a: Butterfree|Bug Buzz|p1a: Carnivine
|-supereffective|p1a: Carnivine
|-damage|p1a: Carnivine|0 fnt
|faint|p1a: Carnivine
|
|upkeep
|choice|switch 6|
|
|switch|p1a: Armaldo|Armaldo, L77, F|100/100
|turn|25
|choice|move stoneedge|move quiverdance
|
|move|p2a: Butterfree|Quiver Dance|p2a: Butterfree
|-boost|p2a: Butterfree|spa|1
|-boost|p2a: Butterfree|spd|1
|-boost|p2a: Butterfree|spe|1
|move|p1a: Armaldo|Stone Edge|p2a: Butterfree
|-supereffective|p2a: Butterfree
|-damage|p2a: Butterfree|0 fnt
|faint|p2a: Butterfree
|
|upkeep
|choice||switch 6
|
|switch|p2a: Jirachi|Jirachi, L75|100/100
|-damage|p2a: Jirachi|84/100|[from] Spikes
|turn|26
|choice|move stoneedge|move wish
|
|move|p2a: Jirachi|Wish|p2a: Jirachi
|move|p1a: Armaldo|Stone Edge|p2a: Jirachi
|-resisted|p2a: Jirachi
|-damage|p2a: Jirachi|56/100
|
|-heal|p2a: Jirachi|62/100|[from] item: Leftovers
|upkeep
|turn|27
|choice|move stoneedge|move bodyslam
|
|move|p2a: Jirachi|Body Slam|p1a: Armaldo
|-resisted|p1a: Armaldo
|-damage|p1a: Armaldo|90/100
|-status|p1a: Armaldo|par
|cant|p1a: Armaldo|par
|
|-heal|p2a: Jirachi|100/100|[from] move: Wish|[wisher] Jirachi
|upkeep
|turn|28
|choice|move stoneedge|move ironhead
|
|move|p2a: Jirachi|Iron Head|p1a: Armaldo
|-supereffective|p1a: Armaldo
|-damage|p1a: Armaldo|30/100 par
|move|p1a: Armaldo|Stone Edge|p2a: Jirachi
|-resisted|p2a: Jirachi
|-damage|p2a: Jirachi|72/100
|
|-heal|p2a: Jirachi|78/100|[from] item: Leftovers
|upkeep
|turn|29
|choice|move stoneedge|move ironhead
|
|move|p2a: Jirachi|Iron Head|p1a: Armaldo
|-supereffective|p1a: Armaldo
|-damage|p1a: Armaldo|0 fnt
|faint|p1a: Armaldo
|
|win|ndhhhk1
|player|p1
|player|p2`;