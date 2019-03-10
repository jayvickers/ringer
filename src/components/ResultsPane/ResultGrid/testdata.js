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
      headerName: "Winrate",
      field: "winrate"
    }
  ],
  defaultColDef: {
    sortable: false,
    resizable: true,
    filter: false
  },
  rowData: [
    {
      rank: "Bronze 5",
      summoner: "doublelift",
      winrate: 35000
    },
    {
      rank: "Challenger",
      summoner: "Jensen",
      winrate: 32000
    },
    {
      rank: "Porsche",
      summoner: "Boxter",
      winrate: 72000
    }
  ]
};

export default testdata;
