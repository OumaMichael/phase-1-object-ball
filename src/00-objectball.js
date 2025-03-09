function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}
console.table(gameObject());
// Function to return the home team name.
function homeTeamName() {
    return gameObject().home.teamName;
  }
  console.log("Home Team Name:", homeTeamName());
  
  // Function: numPointsScored
  function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    return "Player not found";
  }
  console.log("Points scored by Alan Anderson:", numPointsScored("Alan Anderson"));
  
  // Function: shoeSize
  function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    return "Player not found";
  }
  console.log("Shoe size for Jason Terry:", shoeSize("Jason Terry"));
  
  // Function: teamColors
  function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return "Team not found";
  }
  console.log("Team colors for Charlotte Hornets:", teamColors("Charlotte Hornets"));
  
  // Function: teamNames returns an array of both team names.
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  console.log("All team names:", teamNames());
  
  // Function: playerNumbers returns jersey numbers for a given team.
  function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
    return "Team not found";
  }
  console.log("Player numbers for Brooklyn Nets:", playerNumbers("Brooklyn Nets"));
  
  // Function: playerStats returns a player's stats as an object.
  function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
    return "Player not found";
  }
  console.log("Stats for Reggie Evans:", playerStats("Reggie Evans"));
  
  // Function: bigShoeRebounds returns the number of rebounds of the player with the largest shoe size.
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoe = 0;
    let rebounds = 0;
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (players[player].shoe > largestShoe) {
          largestShoe = players[player].shoe;
          rebounds = players[player].rebounds;
        }
      }
    }
    return rebounds;
  }
  console.log("Rebounds for player with biggest shoe size:", bigShoeRebounds());
  
  /* --- Bonus Functions --- */
  
  // Bonus: Which player has the most points?
  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = "";
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (players[player].points > maxPoints) {
          maxPoints = players[player].points;
          topPlayer = player;
        }
      }
    }
    return topPlayer;
  }
  console.log("Player with most points:", mostPointsScored());
  
  // Bonus: Which team has the most points?
  function winningTeam() {
    const game = gameObject();
    let scores = { home: 0, away: 0 };
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        scores[team] += players[player].points;
      }
    }
    return scores.home > scores.away ? game.home.teamName : game.away.teamName;
  }
  console.log("Winning team:", winningTeam());
  
  // Bonus: Which player has the longest name?
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  console.log("Player with the longest name:", playerWithLongestName());
  
  // Bonus: Does the player with the longest name have the most steals?
  function doesLongNameStealATon() {
    const game = gameObject();
    const longNamePlayer = playerWithLongestName();
    let maxSteals = 0;
    let topStealer = "";
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (players[player].steals > maxSteals) {
          maxSteals = players[player].steals;
          topStealer = player;
        }
      }
    }
    return longNamePlayer === topStealer;
  }
  console.log("Does the player with the longest name have the most steals?", doesLongNameStealATon());