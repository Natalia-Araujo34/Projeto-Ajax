const teams = [
{
"idTeam": "133772",
"idSoccerXML": "188",
"idAPIfootball": "194",
"intLoved": "2",
"strTeam": "Amsterdamsche Football Club Ajax",
"strTeamShort": null,
"strAlternate": "AFC Ajax",
"intFormedYear": "1900",
"intFormedMonth": "Março",
"intFormedDay": "18",
"strSport": "Soccer",
"strLeague": "Dutch Eredivisie",
"idLeague": "4337",
"strLeague2": "UEFA Champions League",
"strManager": "Erik ten Hag",
"strCaptain": "Dušan Tadić",
"strStadium": "Johan Cruyff Arena",
"strKeywords": "de Godenzonen",
"strRSS": "",
"strStadiumThumb": "https://www.thesportsdb.com/images/media/team/stadium/qwyxqu1420576824.jpg",
"strStadiumDescription": "The Johan Cruyff Arena (Dutch: Johan Cruijff Arena, officially stylised as Johan Cruijff ArenA) is the main stadium of the Dutch capital city of Amsterdam and the home stadium of the association football club AFC Ajax since its opening. Built from 1993 to 1996 at a cost equivalent to €140 million, it is the largest stadium in the country. The stadium was previously known as the Amsterdam Arena (stylised as Amsterdam ArenA) until the 2018–19 football season, when it was officially renamed in honour of legendary Dutch footballer Johan Cruyff who died in March 2016.\r\n\r\nIt was one of the stadiums used during Euro 2000, and also held the 1998 Champions League and 2013 Europa League finals. The stadium will also host three group stage matches and one match in the round of 16 of the Euro 2020, that is postponed to 2021.\r\n\r\nBoth international and Dutch artists have given concerts in the stadium, including Coldplay, Take That, Celine Dion, Madonna, Michael Jackson, André Hazes, David Bowie, AC/DC, One Direction, The Rolling Stones, Beyoncé and Rihanna. The dance event Sensation was held in the stadium every year, up until the final edition in 2017.\r\n\r\nThe stadium has a retractable roof combined with a grass surface. It has a capacity of 54,990 people during football matches, and of 68,000 people during concerts if a centre-stage setup is used (the stage in the middle of the pitch); for end-stage concerts, the capacity is 50,000, and for concerts for which the stage is located in the east side of the stadium, the capacity is 35,000. It held UEFA five-star stadium status, which was superseded by a new system of classification.",
"strStadiumLocation": "Amsterdam, Netherlands",
"intStadiumCapacity": "54990",
"strWebsite": "www.ajax.nl",
"strFacebook": "www.facebook.com/afcajax",
"strTwitter": "twitter.com/afcajax",
"strInstagram": "www.instagram.com/afcajax",
"strDescriptionEN": "Amsterdamsche Football Club Ajax (also known as AFC Ajax, Ajax Amsterdam, or simply Ajax, is a Dutch professional football club based in Amsterdam, that plays in the Eredivisie, the top tier in Dutch football. Historically, Ajax (named after the legendary Greek hero) has been the most successful club in the Netherlands, with 34 Eredivisie titles and 19 KNVB Cups. It has continuously played in the Eredivisie, since the league's inception in 1956 and, along with Feyenoord and PSV Eindhoven, it is one of the country's \"big three\" clubs that have dominated that competition.\r\n\r\nAjax has historically been one of the most successful clubs in the world. According to the IFFHS, Ajax were the seventh-most successful European club of the 20th century and The World's Club Team of the Year in 1992. According to German magazine Kicker, Ajax were the second-most successful European club of the 20th century. The club is one of the five teams that has earned the right to keep the European Cup and to wear a multiple-winner badge; they won consecutively in 1971–1973. In 1972, they completed the continental treble by winning the Eredivisie, KNVB Cup, and the European Cup. It also won the first organized UEFA Super Cup in 1972 against Glasgow Rangers (played in 1973). Ajax's last international trophies were the 1995 Intercontinental Cup, 1995 UEFA Super Cup and the 1995 Champions League, where they defeated Milan in the final; they lost the 1996 Champions League final on penalties to Juventus. In 1995, Ajax was crowned as World Team of the Year by World Soccer magazine.\r\n\r\nAjax is also one of four teams to win the continental treble and the Intercontinental Cup or Club World Cup in the same season/calendar year; This was achieved in the 1971–72 season. Ajax are one of the five clubs to have won all three major UEFA club competitions. They have also won the Intercontinental Cup twice, the 1991–92 UEFA Cup, as well as the Karl Rappan Cup, a predecessor of the UEFA Intertoto Cup in 1962. Ajax plays at the Johan Cruyff Arena, which opened as the Amsterdam ArenA in 1996 and was renamed in 2018. They previously played at De Meer Stadion and the Amsterdam Olympic Stadium (for international matches).",
"strGender": "Male",
"strCountry": "Netherlands",
"strTeamBadge": "https://www.thesportsdb.com/images/media/team/badge/v18y441579206708.png",
"strTeamJersey": "https://www.thesportsdb.com/images/media/team/jersey/97sg631600520913.png",
"strTeamLogo": "https://www.thesportsdb.com/images/media/team/logo/xwvptv1426074241.png",
"strTeamFanart1": "https://www.thesportsdb.com/images/media/team/fanart/qvrwpt1426046323.jpg",
"strTeamFanart2": "https://www.thesportsdb.com/images/media/team/fanart/wyurqt1426046337.jpg",
"strTeamFanart3": "https://www.thesportsdb.com/images/media/team/fanart/yuyrvx1426046354.jpg",
"strTeamFanart4": "https://www.thesportsdb.com/images/media/team/fanart/xuxpxt1426046367.jpg",
"strTeamBanner": "https://www.thesportsdb.com/images/media/team/banner/gcyuok1577036310.jpg",
"strYoutube": "www.youtube.com/afcajax",
"strLocked": "unlocked"
}
]; 

document.getElementById("principal").innerHTML =  `
${teams.map(function(ajax){
    return `
    <div class="ajax">
    <center><img src="images/tumblr_pmrxvkAo5W1u75m7so5_250.jpg" width="250px" height="250px"></center>
        <div id="dtitle"><h2>AFC AJAX</h2></div>
        <h3 class="team-name">Nome: ${ajax.strTeam}</h3>
        <h3 class="location">Localização: ${ajax.strStadiumLocation}</h3>
        <h3 class="stadium">Estádio: ${ajax.strStadium}</h3>
        <h3 class="capacity">Capacidade: ${ajax.intStadiumCapacity}</h3>
        <h3 class="team-date">Data de Fundação: ${ajax.intFormedDay} / ${ajax.intFormedMonth} / ${ajax.intFormedYear}</h2>
        <h3 class="league">Liga atual: ${ajax.strLeague}</h3>
        <h3 class="manager">Treinador atual: ${ajax.strManager}</h3> 
        <h3 class="captain">Capitão: ${ajax.strCaptain}</h3> 
    </div>
    `
    
}).join()}
`
async function getDT() {
    const response = await fetch( 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Dusan%20Tadic' )
  
    return response.json()
  }
  getDT().then( data => {
    const result = data.player
    const splayer = []
  
    for(let p of result){
        splayer.push({
          "Nome" : p.strPlayer, 
          "Data de Nascimento" : p.dateBorn,
          "Altura" : p.strHeight,
          "Descrição" : p.strDescriptionEN
  
        })   
        document.getElementById("Nome").innerHTML = p.strPlayer
        document.getElementById("Nasc").innerHTML = p.dateBorn;
        document.getElementById("Alt").innerHTML = p.strHeight;
        document.getElementById("Descr").innerHTML = p.strDescriptionEN;
    }
  })

  async function getNT() {
    const response = await fetch( 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Nicolas%20Tagliafico' )
  
    return response.json()
  }
  getNT().then( data => {
    const result = data.player
    const splayer = []
  
    for(let p of result){
        splayer.push({
          "Nome" : p.strPlayer, 
          "Data de Nascimento" : p.dateBorn,
          "Altura" : p.strHeight,
          "Descrição" : p.strDescriptionEN
  
        })   
        document.getElementById("Nome1").innerHTML = p.strPlayer
        document.getElementById("Nasc1").innerHTML = p.dateBorn;
        document.getElementById("Alt1").innerHTML = p.strHeight;
        document.getElementById("Descr1").innerHTML = p.strDescriptionEN;
    }
  })

  async function getDK() {
    const response = await fetch( 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Davy%20Klaassen' )
  
    return response.json()
  }
  getDK().then( data => {
    const result = data.player
    const splayer = []
  
    for(let p of result){
        splayer.push({
          "Nome" : p.strPlayer, 
          "Data de Nascimento" : p.dateBorn,
          "Altura" : p.strHeight,
          "Descrição" : p.strDescriptionEN
  
        })   
        document.getElementById("Nome2").innerHTML = p.strPlayer
        document.getElementById("Nasc2").innerHTML = p.dateBorn;
        document.getElementById("Alt2").innerHTML = p.strHeight;
        document.getElementById("Descr2").innerHTML = p.strDescriptionEN;
    }
  })
  async function getAN() {
    const response = await fetch( 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Andre%20Onana' )
  
    return response.json()
  }
  getAN().then( data => {
    const result = data.player
    const splayer = []
  
    for(let p of result){
        splayer.push({
          "Nome" : p.strPlayer, 
          "Data de Nascimento" : p.dateBorn,
          "Altura" : p.strHeight,
          "Descrição" : p.strDescriptionEN
  
        })   
        document.getElementById("Nome3").innerHTML = p.strPlayer
        document.getElementById("Nasc3").innerHTML = p.dateBorn;
        document.getElementById("Alt3").innerHTML = p.strHeight;
        document.getElementById("Descr3").innerHTML = p.strDescriptionEN;
    }
  })

  

