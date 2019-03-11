//hard coded test data for grid
const testdata = {
  columnDefs: [
    {
      headerName: "Summoner",
      field: "summoner",
      maxWidth: 200,
      cellRenderer: "nameRenderer"
    },
    {
      headerName: "Rank",
      field: "rank",
      cellRenderer: "rankRenderer",
      cellRendererParams: {
        gridVersion: true
      }
    },

    {
      headerName: "Main Role",
      field: "role",
      cellRenderer: "roleRenderer",
      cellRendererParams: {
        gridVersion: true
      }
    },
    {
      headerName: "Secondary Role",
      field: "secondaryrole",
      cellRenderer: "roleRenderer",
      cellRendererParams: {
        gridVersion: true,
        secondary: true
      }
    }
  ],
  defaultColDef: {
    resizable: true,
    sortable: true
  },
  rowData: [
    {
      rank: "Bronze 5",
      mainRole: "Bot",
      summoner: "doublelift",
      winrate: "76",
      games: "245",
      gamesMainRole: "205",
      winrateMainRole: "42",
      winrateSecondaryRole: "67",
      secondaryRole: "Jungle",
      gamesSecondaryRole: "67"
    },
    {
      rank: "Challenger",
      mainRole: "Mid",
      summoner: "Jensen",
      winrate: "82",
      games: "234",
      gamesMainRole: "163",
      winrateMainRole: "52",
      winrateSecondaryRole: "47",
      secondaryRole: "top",
      gamesSecondaryRole: "23"
    },
    {
      rank: "Bronze 5",
      mainRole: "Bot",
      summoner: "doublelift",
      winrate: "76",
      games: "245",
      gamesMainRole: "205",
      winrateMainRole: "42",
      winrateSecondaryRole: "67",
      secondaryRole: "Jungle",
      gamesSecondaryRole: "67"
    },
    {
      rank: "Challenger",
      mainRole: "Mid",
      summoner: "Jensen",
      winrate: "82",
      games: "234",
      gamesMainRole: "163",
      winrateMainRole: "52",
      winrateSecondaryRole: "47",
      secondaryRole: "top",
      gamesSecondaryRole: "23"
    },
    {
      rank: "Bronze 5",
      mainRole: "Bot",
      summoner: "doublelift",
      winrate: "76",
      games: "245",
      gamesMainRole: "205",
      winrateMainRole: "42",
      winrateSecondaryRole: "67",
      secondaryRole: "Jungle",
      gamesSecondaryRole: "67"
    },
    {
      rank: "Challenger",
      mainRole: "Mid",
      summoner: "Jensen",
      winrate: "82",
      games: "234",
      gamesMainRole: "163",
      winrateMainRole: "52",
      winrateSecondaryRole: "47",
      secondaryRole: "top",
      gamesSecondaryRole: "23"
    },
    {
      rank: "Bronze 5",
      mainRole: "Bot",
      summoner: "doublelift",
      winrate: "76",
      games: "245",
      gamesMainRole: "205",
      winrateMainRole: "42",
      winrateSecondaryRole: "67",
      secondaryRole: "Jungle",
      gamesSecondaryRole: "67"
    },
    {
      rank: "Challenger",
      mainRole: "Mid",
      summoner: "Jensen",
      winrate: "82",
      games: "234",
      gamesMainRole: "163",
      winrateMainRole: "52",
      winrateSecondaryRole: "47",
      secondaryRole: "top",
      gamesSecondaryRole: "23"
    },
    {
      rank: "Bronze 5",
      mainRole: "Bot",
      summoner: "doublelift",
      winrate: "76",
      games: "245",
      gamesMainRole: "205",
      winrateMainRole: "42",
      winrateSecondaryRole: "67",
      secondaryRole: "Jungle",
      gamesSecondaryRole: "67"
    },
    {
      rank: "Challenger",
      mainRole: "Mid",
      summoner: "Jensen",
      winrate: "82",
      games: "234",
      gamesMainRole: "163",
      winrateMainRole: "52",
      winrateSecondaryRole: "47",
      secondaryRole: "top",
      gamesSecondaryRole: "23"
    },
    {
      rank: "Bronze 5",
      mainRole: "Bot",
      summoner: "doublelift",
      winrate: "76",
      games: "245",
      gamesMainRole: "205",
      winrateMainRole: "42",
      winrateSecondaryRole: "67",
      secondaryRole: "Jungle",
      gamesSecondaryRole: "67"
    },
    {
      rank: "Challenger",
      mainRole: "Mid",
      summoner: "Jensen",
      winrate: "82",
      games: "234",
      gamesMainRole: "163",
      winrateMainRole: "52",
      winrateSecondaryRole: "47",
      secondaryRole: "top",
      gamesSecondaryRole: "23"
    },
    {
      rank: "Bronze 5",
      mainRole: "Bot",
      summoner: "doublelift",
      winrate: "76",
      games: "245",
      gamesMainRole: "205",
      winrateMainRole: "42",
      winrateSecondaryRole: "67",
      secondaryRole: "Jungle",
      gamesSecondaryRole: "67"
    },
    {
      rank: "Challenger",
      mainRole: "Mid",
      summoner: "Jensen",
      winrate: "82",
      games: "234",
      gamesMainRole: "163",
      winrateMainRole: "52",
      winrateSecondaryRole: "47",
      secondaryRole: "top",
      gamesSecondaryRole: "23"
    }
  ]
};

export default testdata;
