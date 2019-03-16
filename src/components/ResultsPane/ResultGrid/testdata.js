//hard coded test data for grid
const testdata = {
  columnDefs: [
    // {
    //   headerName: "Summoner",
    //   field: "summoner",
    //   maxWidth: 200,
    //   cellRenderer: "nameRenderer"
    // },
    {
      headerName: "Summoner",
      field: "rank",
      cellRenderer: "rankRenderer",
      cellRendererParams: {
        gridVersion: true
      },
      minWidth: 280
    },

    {
      headerName: "Main Role",
      field: "role",
      cellRenderer: "roleRenderer",
      cellRendererParams: {
        gridVersion: true
      },
      maxWidth: 180
    },
    {
      headerName: "Secondary Role",
      field: "secondaryrole",
      cellRenderer: "roleRenderer",
      cellRendererParams: {
        gridVersion: true,
        secondary: true
      },
      maxWidth: 180
    },
    {
      headerName: "Most Played",
      field: "mostplayed",
      cellRenderer: "mostPlayedRenderer",
      cellRendererParams: {
        gridVersion: true
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
      gamesSecondaryRole: "67",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
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
      gamesSecondaryRole: "23",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
    },
    {
      rank: "iron 5",
      mainRole: "Jungle",
      summoner: "Xmithie",
      winrate: "62",
      games: "212",
      gamesMainRole: "155",
      winrateMainRole: "72",
      winrateSecondaryRole: "40",
      secondaryRole: "Bot",
      gamesSecondaryRole: "17",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
    },
    {
      rank: "grand master",
      mainRole: "support",
      summoner: "CoreJJ",
      winrate: "92",
      games: "561",
      gamesMainRole: "264",
      winrateMainRole: "72",
      winrateSecondaryRole: "57",
      secondaryRole: "top",
      gamesSecondaryRole: "123",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
    },
    {
      rank: "master",
      mainRole: "mid",
      summoner: "bjergsen",
      winrate: "83",
      games: "433",
      gamesMainRole: "305",
      winrateMainRole: "62",
      winrateSecondaryRole: "77",
      secondaryRole: "Jungle",
      gamesSecondaryRole: "167",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
    },
    {
      rank: "platinum 1",
      mainRole: "Mid",
      summoner: "CELLSINTERLINKED",
      winrate: "62",
      games: "50",
      gamesMainRole: "42",
      winrateMainRole: "62",
      winrateSecondaryRole: "100",
      secondaryRole: "support",
      gamesSecondaryRole: "3",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
    },
    {
      rank: "Diamond 1",
      mainRole: "top",
      summoner: "jtsw",
      winrate: "66",
      games: "123",
      gamesMainRole: "90",
      winrateMainRole: "67",
      winrateSecondaryRole: "50",
      secondaryRole: "Jungle",
      gamesSecondaryRole: "12",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
    },
    {
      rank: "gold 4",
      mainRole: "bot",
      summoner: "Zven",
      winrate: "50",
      games: "257",
      gamesMainRole: "231",
      winrateMainRole: "44",
      winrateSecondaryRole: "55",
      secondaryRole: "sup",
      gamesSecondaryRole: "42",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
    },
    {
      rank: "silver 3",
      mainRole: "Top",
      summoner: "impact",
      winrate: "36",
      games: "687",
      gamesMainRole: "450",
      winrateMainRole: "52",
      winrateSecondaryRole: "27",
      secondaryRole: "Bot",
      gamesSecondaryRole: "543",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
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
      gamesSecondaryRole: "23",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
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
      gamesSecondaryRole: "67",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
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
      gamesSecondaryRole: "23",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
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
      gamesSecondaryRole: "67",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
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
      gamesSecondaryRole: "23",
      topChamps: [
        { champion: { name: "Vladimir", winrate: 80, games: 137 } },
        { champion: { name: "Kassadin", winrate: 52, games: 81 } },
        { champion: { name: "Velkoz", winrate: 40, games: 12 } }
      ]
    }
  ]
};

export default testdata;
