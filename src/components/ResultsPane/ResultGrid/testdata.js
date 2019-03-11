//hard coded test data for grid
const testdata = {
  columnDefs: [
    {
      headerName: "Summoner",
      field: "summoner"
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
      headerName: "Role",
      field: "role",
      cellRenderer: "roleRenderer",
      cellRendererParams: {
        gridVersion: true
      }
    }
  ],
  defaultColDef: {
    resizable: true
  },
  rowData: [
    {
      rank: "Bronze 5",
      mainRole: "Bot",
      summoner: "doublelift",
      winrate: "76",
      games: "25",
      gamesMainRole: "20",
      winrateMainRole: "62"
    },
    {
      rank: "Challenger",
      mainRole: "Mid",
      summoner: "Jensen",
      winrate: "82",
      games: "234",
      gamesMainRole: "163",
      winrateMainRole: "82"
    }
  ]
};

export default testdata;
