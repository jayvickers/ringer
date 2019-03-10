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
      field: "role"
    }
  ],
  defaultColDef: {
    resizable: true
  },
  rowData: [
    {
      rank: "Bronze 5",
      role: "Bot",
      summoner: "doublelift",
      winrate: "76% winrate"
    },
    {
      rank: "Challenger",
      role: "Mid",
      summoner: "Jensen",
      winrate: "82% winrate"
    }
  ]
};

export default testdata;
