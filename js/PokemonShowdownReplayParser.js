//  Checklist
// Form changes
// Megas
// Items
// Nicknames
//https://github.com/Zarel/Pokemon-Showdown/blob/master/PROTOCOL.md
function PokemonShowdownReplayParser()
{
	this.log = "";
	this.players = {};

	this.init = function(log)
	{
		this.log = log;
		this.players["p1"] = new Player("p1");
		this.players["p2"] = new Player("p2");
	}

	this.run = function(log)
	{
		this.init(log);
		this.parse();

		var output = "";
		output += this.players["p1"].getTeamFormatString();
		output += this.players["p2"].getTeamFormatString();

		return output;
	}

	this.parse = function()
	{	
		var lines = this.log.split('\n');
		for(var i = 0; i < lines.length; i++){
			var line = lines[i];
			if(line.startsWith("|player|") )
			{
				this.processPlayer(line);
			} 
			else if (line.startsWith("|poke|")) 
			{
				this.processPoke(line);
			} 
			else if (line.startsWith("|move|"))
			{
				this.processMove(line);
			} 
			else if (line.startsWith("|-ability|"))
			{
				this.processAbility(line);
			}
			else if (line.startsWith("|switch|"))
			{
				this.processSwitch(line);
			} else if (line.startsWith("|drag|"))
			{
				this.processDrag(line);
			} 
			else if (line.startsWith("|-mega|"))
			{
				this.processMega(line);
			}  
			else if(line.startsWith("|detailschange|"))
			{
				this.processDetailsChange(line);
			}
			//else if(line.startsWith("|-item|"))
			//{
			//		this.processItem(line);
			//		} 			
			else if(line.startsWith("|-enditem|"))
			{
				this.processEndItem(line);
			} 
			else if(line.includes("|[from] move:"))
			{
				if(line.startsWith("|-item|"))
				{
					this.processItemFromMove(line);
				}
			}
			else if(line.includes("|[from] item:"))
			{
				// Leftovers
				if(line.startsWith("|-heal|"))
				{
					this.processHealFromItem(line);
				}	
			}
			else if(line.includes("[from] ability: "))
			{
				if(line.startsWith("|-weather|"))
				{
					this.processWeatherFromAbility(line);
				}
			}
			else
			{
				if(line.startsWith("|J|")
					|| line.startsWith("|j|")
					|| line.startsWith("|L|")
					|| line.startsWith("|l|")
					|| line.startsWith("|inactive|")
					|| line.startsWith("|choice|")
					|| line.startsWith("|seed|")
					|| line.startsWith("|rated")
					|| line.startsWith("|upkeep")
					|| line.startsWith("|-resisted|")
					|| line.startsWith("|gametype|")
					|| line.startsWith("|gen|")
					|| line.startsWith("|tier|")
					|| line.startsWith("|-miss|")
					|| line.startsWith("|clearpoke")
					|| line.startsWith("|teampreview")
					|| line.startsWith("|c|")
					|| line.startsWith("|rule|")
					|| line.startsWith("|turn|")
					|| line.startsWith("|-sidestart|")
					|| line.startsWith("|-start|")
					|| line.startsWith("|-damage|")
					|| line.startsWith("|-fail|")
					|| line.startsWith("|-activate|")
					|| line.startsWith("|-boost|")
					|| line.startsWith("|start")
					|| line.startsWith("|faint|")
					|| line.startsWith("|win|")
					|| line.startsWith("|-supereffective|")
					|| line.startsWith("|-crit|")
					|| line.startsWith("|-end|")
					|| line.startsWith("|-singleturn|")
					|| line.startsWith("|-message|")
					|| line.startsWith("|cant|")
					|| line.startsWith("|-status|")
					|| line.startsWith("|-unboost|")
					|| line == "|"
					) {
				} else {
					console.log(line);
				}
			}
		}
	}

	this.processPlayer = function(line) 
	{
		var fields = line.split("|");

		if(fields.length >= 4)
		{
			this.players[fields[2]].username = fields[3];
		}
	}

	this.processPoke = function(line)
	{
		var fields = line.split("|");

		var pokemon = new Pokemon();
		pokemon.species = fields[3].replace(/,.*$/, "");
		this.players[fields[2]].pokemon.push(pokemon);
	}


	this.processSwitch = function(line)
	{
		var matches = line.match(/\|switch\|(p[12])a:\s+([^|]+)\|([^,|]+)/);
		var player = matches[1];
		var nickname = matches[2];
		var species = matches[3];

		console.log("###"+line);
		console.log( this.players[player]);
		var pokemon = this.players[player].getPokemonBySpecies(species);	
		if(pokemon == null)
		{
			pokemon = new Pokemon();
			pokemon.species = species;
			this.players[player].pokemon.push(pokemon);
		}	
		pokemon.nickname = nickname;
		this.players[player].currentPokemon = pokemon;

	}

	// |move|PLAYER: NICKNAME|MOVE|PLAYER: NICKNAME
	// |move|p1a: Greninja|Ice Beam|p2a: Azumarill
	this.processMove = function(line)
	{
		var matches = line.match(/\|move\|(p[12])a:\s+([^|]+)\|([^|]+)/);
		var player = matches[1];
		var nickname = matches[2];
		var move = matches[3];

		var pokemon = this.players[player].getPokemonByNickname(nickname);
		pokemon.moves[move] = 1;
	}

	// |-ability|p1a: Landorus|Intimidate|boost
	this.processAbility = function(line)
	{
		var matches = line.match(/\|-ability\|(p[12])a:\s+([^|]+)\|([^|]+)/);	
		var player = matches[1];
		var nickname = matches[2];
		var ability = matches[3];

		var pokemon = this.players[player].getPokemonByNickname(nickname);
		pokemon.ability = ability;
	}

	// |-mega|p2a: Venusaur|Venusaur|Venusaurite
	this.processMega = function(line)
	{
		var matches = line.match(/\|-mega\|(p[12])a:\s+([^|]+)\|([^|]+)\|(.+)/);
		var player = matches[1];
		var nickname = matches[2];
		//var species = matches[3];
		var megastone = matches[4];

		var pokemon = this.players[player].getPokemonByNickname(nickname);
		pokemon.item = megastone;
	}

	// |detailschange|p1a: Sagittarius|Charizard-Mega-Y, M
	this.processDetailsChange = function(line)
	{
		var matches = line.match(/\|detailschange\|(p[12])a:\s+([^|]+)\|([^,]+)/);
		var player = matches[1];
		var nickname = matches[2];
		var species = matches[3];

		var pokemon = this.players[player].getPokemonByNickname(nickname);
		pokemon.species = species;
	}
	
	//|-item|p2a: Landorus|Choice Scarf|[from] move: Trick
	this.processItemFromMove = function(line)
	{
		var matches = line.match(/\|-item\|(p[12])a:\s+([^|]+)\|([^|]+)/);
		var player = matches[1];
		var nickname = matches[2];
		var item = matches[3]

		var otherPlayer = (player == "p1") ? "p2" : "p1";
		var otherPokemon = this.players[otherPlayer].currentPokemon;

		if(otherPokemon.item == "") otherPokemon.item = item;
	}

	//|-enditem|p1a: Greninja|Focus Sash
	this.processEndItem = function(line)
	{
		var matches = line.match(/\|-enditem\|(p[12])a:\s+([^|]+)\|([^|]+)/);
		var player = matches[1];
		var nickname = matches[2];
		var item = matches[3];

		var pokemon = this.players[player].getPokemonByNickname(nickname);
		if(pokemon.item == "") pokemon.item = item;
	}


	//-heal|p1a: Gothitelle|135/343|[from] item: Leftovers
	this.processHealFromItem = function(line)
	{
		var matches = line.match(/-heal\|(p[12])a:\s+([^|]+)\|[^|]+\|\[from\] item: (.+)/);
		var player = matches[1];
		var nickname = matches[2];
		var item = matches[3]

		var pokemon = this.players[player].getPokemonByNickname(nickname);
		pokemon.item = item;
	}

	//|-weather|SunnyDay|[from] ability: Drought|[of] p1a: Sagittarius
	this.processWeatherFromAbility = function(line)
	{
		var matches = line.match(/\|-weather\|[^|]+\|\[from\] ability: ([^|]+)\|\[of\] (p[12])a: (.+)/);
		var ability = matches[1];
		var player = matches[2];
		var nickname = matches[3];
		
		var pokemon = this.players[player].getPokemonByNickname(nickname);
		pokemon.ability = ability;
	}
}

function Player(name)
{
	this.name = name;
	this.username = "";
	this.pokemon = [];
	this.currentPokemon = null;

	// TODO: Can't handle duplicates..
	this.getPokemonBySpecies = function(species)
	{
		for(var i=0; i<this.pokemon.length; i++)
		{
			if(this.pokemon[i].species == species)
			{
				return this.pokemon[i];
			}
		}
		return null;
	}

	this.getPokemonByNickname = function(nickname)
	{
		for(var i=0; i<this.pokemon.length; i++)
		{
			if(this.pokemon[i].nickname == nickname)
			{
				return this.pokemon[i];
			}
		}
		return null;
	}

	this.getTeamFormatString = function()
	{
		var output = "-------------------------\n";
		output += "Player: "+this.username+"\n";
		output += "-------------------------\n";
		for(var i=0; i<this.pokemon.length; i++)
		{
			output+=this.pokemon[i].getTeamFormatString()+"\n";
		}
		return output;
	}
}

function Pokemon()
{
	this.species = "";
	this.nickname = "";
	this.item = "";
	//this.nature = "";
	this.ability = "";
	this.moves = {};

	this.getTeamFormatString = function()
	{
		var s = "";
		s += this.species + " @ " + this.item +"\n";
		s += "Ability: "+ this.ability + "\n";
		for(var move in this.moves)
		{
			s+= "- "+move+"\n";
		}
		return s;
	}
}