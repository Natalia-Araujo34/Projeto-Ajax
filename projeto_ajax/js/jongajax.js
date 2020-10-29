/**pegando dados de um jogador específico através da API */
async function getJongAjax() {
  const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Ajax')

  return response.json()
}
getJongAjax().then(data => {
  const result = data.teams
  const team = []

  for (let t of result) {
    team.push({
      "Nome": t.strTeam,
      "Estadio": t.strStadium,
      "Capacity": t.intStadiumCapacity,
      "Description": t.strDescriptionEN

    })
    document.getElementById("Nome").innerHTML = t.strTeam;
    document.getElementById("Estadio").innerHTML = t.strStadium;
    document.getElementById("Capacity").innerHTML = t.intStadiumCapacity;
    document.getElementById("Description").innerHTML = t.strDescriptionEN;
  }
})

async function getNU() {
  const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Naci%20Unuvar')
  return response.json()
}
getNU().then(data => {
  const result = data.player
  const jplayer = []

  for (let p of result) {
    jplayer.push({
      "Nome": p.strPlayer,
      "Data de Nascimento": p.dateBorn,
      "Descrição": p.strDescriptionEN
    })
    document.getElementById("Nome4").innerHTML = p.strPlayer
    document.getElementById("Nasc4").innerHTML = p.dateBorn;
    document.getElementById("Descr4").innerHTML = p.strDescriptionEN;
  }
})

async function getKS() {
  const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Kjell%20Scherpen')
  return response.json()
}
getKS().then(data => {
  const result = data.player
  const jplayer = []

  for (let p of result) {
    jplayer.push({
      "Nome": p.strPlayer,
      "Data de Nascimento": p.dateBorn,
      "Descrição": p.strDescriptionEN
    })
    document.getElementById("Nome5").innerHTML = p.strPlayer
    document.getElementById("Nasc5").innerHTML = p.dateBorn;
    document.getElementById("Descr5").innerHTML = p.strDescriptionEN;
  }
})

async function getJE() {
  const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Jurgen%20Ekkelenkamp')
  return response.json()
}
getJE().then(data => {
  const result = data.player
  const jplayer = []

  for (let p of result) {
    jplayer.push({
      "Nome": p.strPlayer,
      "Data de Nascimento": p.dateBorn,
      "Descrição": p.strDescriptionEN
    })
    document.getElementById("Nome6").innerHTML = p.strPlayer
    document.getElementById("Nasc6").innerHTML = p.dateBorn;
    document.getElementById("Descr6").innerHTML = p.strDescriptionEN;
  }
})

async function getLA() {
  const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Lassina%20Traore')
  return response.json()
}
getLA().then(data => {
  const result = data.player
  const jplayer = []

  for (let p of result) {
    jplayer.push({
      "Nome": p.strPlayer,
      "Data de Nascimento": p.dateBorn,
      "Descrição": p.strDescriptionEN
    })
    document.getElementById("Nome7").innerHTML = p.strPlayer
    document.getElementById("Nasc7").innerHTML = p.dateBorn;
    document.getElementById("Descr7").innerHTML = p.strDescriptionEN;
  }
})

