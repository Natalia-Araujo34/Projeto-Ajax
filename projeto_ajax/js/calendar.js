/**função para pegar os próximos jogos */
async function getNextGame() {
  const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133772')

  return response.json()
}
getNextGame().then(data => {
  const result = data.events
  const calendar = []
/**loop para pegar os dados necessários do array */
  for (let t of result) {
    calendar.push({
      "Jogo": t.strEvent,
      "Campeonato": t.strLeague,
      "Estádio": t.strVenue,
      "Data": t.dateEvent,
      "Hora": t.strTime

    })
/**gerando um ID dos dados adquiridos para utilizar na página HTML */
    document.getElementById("Jogo").innerHTML = t.strEvent;
    document.getElementById("Campeonato").innerHTML = t.strLeague;
    document.getElementById("Estádio").innerHTML = t.strVenue;
    document.getElementById("Data").innerHTML = t.dateEvent;
    document.getElementById("Hora").innerHTML = t.strTime
  }
})
/**função para pegar os dados do último jogo */
async function getLastGame() {
  const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133772')

  return response.json()
}
getLastGame().then(data => {
  const result = data.results
  const calendar = []

  for (let t of result) {
    calendar.push({
      "Jogo": t.strEvent,
      "Gols Casa": t.intHomeScore,
      "Gols Fora": t.intAwayScore,
      "Campeonato": t.strLeague,
      "Estádio": t.strVenue,
      "Data": t.dateEvent,
      "Hora": t.strTime

    })
    /**gerando ID com os dados */
    document.getElementById("Jogo1").innerHTML = t.strEvent;
    document.getElementById("GolsC1").innerHTML = t.intHomeScore;
    document.getElementById("GolsF1").innerHTML = t.intAwayScore;
    document.getElementById("Campeonato1").innerHTML = t.strLeague;
    document.getElementById("Estádio1").innerHTML = t.strVenue;
    document.getElementById("Data1").innerHTML = t.dateEvent;
    document.getElementById("Hora1").innerHTML = t.strTime
  }
})
