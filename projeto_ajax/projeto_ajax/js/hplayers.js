async function getLS(){
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=34146348')
    return response.json()
  }
  getLS().then(data => {
    const result = data.players
    const hplayer = []
  
    for(let h of result){
      hplayer.push({
        "Nome" : h.strPlayer, 
        "Data de Nascimento" : h.dateBorn,
        "Nacionalidade" : h.strNationality,
        "Descrição" : h.strDescriptionEN
      })
      document.getElementById("Nplayer").innerHTML = h.strPlayer
      document.getElementById("Dplayer").innerHTML = h.dateBorn;
      document.getElementById("Cplayer").innerHTML = h.strNationality;
      document.getElementById("DCplayer").innerHTML = h.strDescriptionEN;
    }
  })
  async function getCE(){
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Christian%20Eriksen')
    return response.json()
  }

  getCE().then(data => {
    const result = data.player
    const hplayer = []
  
    for(let h of result){
      hplayer.push({
        "Nome" : h.strPlayer, 
        "Data de Nascimento" : h.dateBorn,
        "Nacionalidade" : h.strNationality,
        "Descrição" : h.strDescriptionEN
      })
      document.getElementById("Nplayer1").innerHTML = h.strPlayer
      document.getElementById("Dplayer1").innerHTML = h.dateBorn;
      document.getElementById("Cplayer1").innerHTML = h.strNationality;
      document.getElementById("DCplayer1").innerHTML = h.strDescriptionEN;
    }
  })