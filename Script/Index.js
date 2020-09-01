let jsonCatalogo;
let menus;
let destaques;
let titulo;
let tt;
var URL ='https://sky-frontend.herokuapp.com/movies';
var base = fetch(URL).then(function(res){ 
 	res.json().then(function(data){
		jsonCatalogo = data;
		
		//Variaveis Destaques
    	destaques = jsonCatalogo[0].items;
		titulo = [destaques[0].title, destaques[1].title, destaques[2].title,destaques[3].title,destaques[4].title];
		sinopses = [destaques[0].description, destaques[1].description, destaques[2].description, destaques[3].description, destaques[4].description]
		capas = [destaques[0].images[0],destaques[1].images[0],destaques[2].images[0],destaques[3].images[0],destaques[4].images[0]]
			//Destaques
			//TITLE01
				var div01 = document.createElement("div")
				var sino01 = document.createTextNode(sinopses[0])
				div01.appendChild(sino01)
				document.getElementById("sino01").appendChild(div01)
			// destaque01
				var div02 = document.createElement("div")
				var tit01 = document.createTextNode(titulo[0])
				div02.appendChild(tit01)
				document.getElementById("tit01").appendChild(div02)
			// capa01
				var div03 = document.createElement("div")
				var capa01 = document.createElement("capa01")
				div03.appendChild(capa01)
				document.getElementById("capa01").src = capas[0].url


			//TITLE02
			var div04 = document.createElement("div")
				var sino02 = document.createTextNode(sinopses[1])
				div04.appendChild(sino02)
				document.getElementById("sino02").appendChild(div04)
			// destaque02
				var div05 = document.createElement("div")
				var tit02 = document.createTextNode(titulo[1])
				div05.appendChild(tit02)
				document.getElementById("tit02").appendChild(div05)
			// capa02
				var div06 = document.createElement("div")
				var capa02 = document.createElement("capa02")
				div06.appendChild(capa02)
				document.getElementById("capa02").src = capas[1].url

			//TITLE03
			var div07 = document.createElement("div")
				var sino03 = document.createTextNode(sinopses[2])
				div07.appendChild(sino03)
				document.getElementById("sino03").appendChild(div07)
			// destaque03
				var div08 = document.createElement("div")
				var tit03 = document.createTextNode(titulo[2])
				div08.appendChild(tit03)
				document.getElementById("tit03").appendChild(div08)
			// capa03
				var div09 = document.createElement("div")
				var capa03 = document.createElement("capa03")
				div09.appendChild(capa02)
				document.getElementById("capa03").src = capas[2].url

				//TITLE04
			var div010 = document.createElement("div")
				var sino04 = document.createTextNode(sinopses[3])
				div010.appendChild(sino04)
				document.getElementById("sino04").appendChild(div010)
			// destaque04
				var div011 = document.createElement("div")
				var tit04 = document.createTextNode(titulo[3])
				div011.appendChild(tit04)
				document.getElementById("tit04").appendChild(div011)
			// capa04
				var div012 = document.createElement("div")
				var capa04 = document.createElement("capa04")
				div012.appendChild(capa04)
				document.getElementById("capa04").src = capas[3].url

				//TITLE05
			var div013 = document.createElement("div")
				var sino05 = document.createTextNode(sinopses[4])
				div013.appendChild(sino05)
				document.getElementById("sino05").appendChild(div013)
			// destaque05
				var div014 = document.createElement("div")
				var tit05 = document.createTextNode(titulo[4])
				div014.appendChild(tit05)
				document.getElementById("tit05").appendChild(div014)
			// capa05
				var div015 = document.createElement("div")
				var capa05 = document.createElement("capa05")
				div015.appendChild(capa05)
				document.getElementById("capa05").src = capas[4].url
			//Destaques FIM


		
	// Filme 01
			var div001 = document.createElement("div")
			var tit001 = document.createTextNode(jsonCatalogo[2].movies[0].title)
			div001.appendChild(tit001)
			document.getElementById("tit001").appendChild(div001)
	// capa01
			var div002 = document.createElement("div")
			var img01 = document.createElement("img01")
			div002.appendChild(img01)
			document.getElementById("img01").src = jsonCatalogo[2].movies[0].images[0].url
	// Filme02
			var div003 = document.createElement("div")
			var tit002 = document.createTextNode(jsonCatalogo[2].movies[1].title)
			div003.appendChild(tit002)
			document.getElementById("tit002").appendChild(div003)
	// capa02
			var div004 = document.createElement("div")
			var img02 = document.createElement("img02")
			div004.appendChild(img02)
			document.getElementById("img02").src = jsonCatalogo[2].movies[1].images[0].url
	// Filme03
			var div005 = document.createElement("div")
			var tit003 = document.createTextNode(jsonCatalogo[2].movies[2].title)
			div005.appendChild(tit003)
			document.getElementById("tit003").appendChild(div005)
	// capa03
			var div006 = document.createElement("div")
			var img03 = document.createElement("img03")
			div006.appendChild(img03)
			document.getElementById("img03").src = jsonCatalogo[2].movies[2].images[0].url
	// Filme04
			var div007 = document.createElement("div")
			var tit004 = document.createTextNode(jsonCatalogo[2].movies[3].title)
			div007.appendChild(tit004)
			document.getElementById("tit004").appendChild(div007)
	// capa04
			var div008 = document.createElement("div")
			var img04 = document.createElement("img04")
			div008.appendChild(img04)
			document.getElementById("img04").src = jsonCatalogo[2].movies[3].images[0].url
	// Filme05
	var div009 = document.createElement("div")
			var tit005 = document.createTextNode(jsonCatalogo[2].movies[4].title)
			div009.appendChild(tit005)
			document.getElementById("tit005").appendChild(div009)
	// capa05
			var div010 = document.createElement("div")
			var img05 = document.createElement("img05")
			div010.appendChild(img05)
			document.getElementById("img05").src = jsonCatalogo[2].movies[4].images[0].url
	// Filme06
			var div011 = document.createElement("div")
			var tit006 = document.createTextNode(jsonCatalogo[2].movies[5].title)
			div011.appendChild(tit006)
			document.getElementById("tit006").appendChild(div011)
	// capa06
			var div012 = document.createElement("div")
			var img06 = document.createElement("img06")
			div012.appendChild(img06)
			document.getElementById("img06").src = jsonCatalogo[2].movies[5].images[0].url
	// Filme 07
			var div013 = document.createElement("div")
			var tit007 = document.createTextNode(jsonCatalogo[2].movies[6].title)
			div013.appendChild(tit007)
			document.getElementById("tit007").appendChild(div013)
	// capa07
			var div014 = document.createElement("div")
			var img07 = document.createElement("img07")
			div014.appendChild(img07)
			document.getElementById("img07").src = jsonCatalogo[2].movies[6].images[0].url
	// Filme08
			var div015 = document.createElement("div")
			var tit008 = document.createTextNode(jsonCatalogo[2].movies[7].title)
			div015.appendChild(tit008)
			document.getElementById("tit008").appendChild(div015)
	// capa08
			var div016 = document.createElement("div")
			var img08 = document.createElement("img08")
			div016.appendChild(img08)
			document.getElementById("img08").src = jsonCatalogo[2].movies[7].images[0].url
	// Filme09
			var div017 = document.createElement("div")
			var tit009 = document.createTextNode(jsonCatalogo[2].movies[8].title)
			div017.appendChild(tit009)
			document.getElementById("tit009").appendChild(div017)
	// capa09
			var div018 = document.createElement("div")
			var img09 = document.createElement("img09")
			div018.appendChild(img09)
			document.getElementById("img09").src = jsonCatalogo[2].movies[8].images[0].url
	// Filme10
			var div19 = document.createElement("div")
			var tit10 = document.createTextNode(jsonCatalogo[2].movies[9].title)
			div19.appendChild(tit10)
			document.getElementById("tit10").appendChild(div19)
	// capa10
			var div20 = document.createElement("div")
			var img10 = document.createElement("img10")
			div20.appendChild(img10)
			document.getElementById("img10").src = jsonCatalogo[2].movies[9].images[0].url
	// Filme11
			var div21 = document.createElement("div")
			var tit11 = document.createTextNode(jsonCatalogo[2].movies[10].title)
			div21.appendChild(tit11)
			document.getElementById("tit11").appendChild(div21)
	// capa11
			var div22 = document.createElement("div")
			var img11 = document.createElement("img11")
			div22.appendChild(img11)
			document.getElementById("img11").src = jsonCatalogo[2].movies[10].images[0].url
	// Filme12
			var div23 = document.createElement("div")
			var tit12 = document.createTextNode(jsonCatalogo[2].movies[11].title)
			div23.appendChild(tit12)
			document.getElementById("tit12").appendChild(div23)
	// capa12
			var div24 = document.createElement("div")
			var img12 = document.createElement("img12")
			div24.appendChild(img12)
			document.getElementById("img12").src = jsonCatalogo[2].movies[11].images[0].url

	// Filme13
			var div25 = document.createElement("div")
			var tit13 = document.createTextNode(jsonCatalogo[2].movies[12].title)
			div25.appendChild(tit13)
			document.getElementById("tit13").appendChild(div25)
	// capa13
			var div26 = document.createElement("div")
			var img13 = document.createElement("img13")
			div26.appendChild(img13)
			document.getElementById("img13").src = jsonCatalogo[2].movies[12].images[0].url
	// Filme14
			var div27 = document.createElement("div")
			var tit14 = document.createTextNode(jsonCatalogo[2].movies[13].title)
			div27.appendChild(tit14)
			document.getElementById("tit14").appendChild(div27)
	// capa14
			var div28 = document.createElement("div")
			var img14 = document.createElement("img14")
			div28.appendChild(img14)
			document.getElementById("img14").src = jsonCatalogo[2].movies[13].images[0].url
	// Filme15
			var div29 = document.createElement("div")
			var tit15 = document.createTextNode(jsonCatalogo[2].movies[14].title)
			div29.appendChild(tit15)
			document.getElementById("tit15").appendChild(div29)
	// capa15
			var div30 = document.createElement("div")
			var img15 = document.createElement("img15")
			div30.appendChild(img15)
			document.getElementById("img15").src = jsonCatalogo[2].movies[14].images[0].url
	// Filme16
			var div31 = document.createElement("div")
			var tit16 = document.createTextNode(jsonCatalogo[2].movies[15].title)
			div31.appendChild(tit16)
			document.getElementById("tit16").appendChild(div31)
	// capa16
			var div32 = document.createElement("div")
			var img16 = document.createElement("img16")
			div32.appendChild(img16)
			document.getElementById("img16").src = jsonCatalogo[2].movies[15].images[0].url
	// Filme17
	var div33 = document.createElement("div")
			var tit17 = document.createTextNode(jsonCatalogo[2].movies[16].title)
			div33.appendChild(tit17)
			document.getElementById("tit17").appendChild(div33)
	// capa17
			var div35 = document.createElement("div")
			var img17 = document.createElement("img17")
			div35.appendChild(img17)
			document.getElementById("img17").src = jsonCatalogo[2].movies[16].images[0].url
	// Filme18
			var div36 = document.createElement("div")
			var tit18 = document.createTextNode(jsonCatalogo[2].movies[17].title)
			div36.appendChild(tit18)
			document.getElementById("tit18").appendChild(div36)
	// capa18
			var div37 = document.createElement("div")
			var img18 = document.createElement("img18")
			div37.appendChild(img18)
			document.getElementById("img18").src = jsonCatalogo[2].movies[17].images[0].url
	// Filme19
			var div38 = document.createElement("div")
			var tit19 = document.createTextNode(jsonCatalogo[2].movies[18].title)
			div38.appendChild(tit19)
			document.getElementById("tit19").appendChild(div38)
	// capa19
			var div39 = document.createElement("div")
			var img19 = document.createElement("img19")
			div39.appendChild(img19)
			document.getElementById("img19").src = jsonCatalogo[2].movies[18].images[0].url

	// Filme20
			var div40 = document.createElement("div")
			var tit20 = document.createTextNode(jsonCatalogo[2].movies[19].title)
			div40.appendChild(tit20)
			document.getElementById("tit20").appendChild(div40)
	// capa20
			var div41 = document.createElement("div")
			var img20 = document.createElement("img20")
			div41.appendChild(img20)
			document.getElementById("img20").src = jsonCatalogo[2].movies[19].images[0].url
	// Filme21
			var div42 = document.createElement("div")
			var tit21 = document.createTextNode(jsonCatalogo[2].movies[20].title)
			div42.appendChild(tit21)
			document.getElementById("tit21").appendChild(div42)
	// capa21
			var div43 = document.createElement("div")
			var img21 = document.createElement("img21")
			div43.appendChild(img21)
			document.getElementById("img21").src = jsonCatalogo[2].movies[20].images[0].url
	// Filme22
			var div44 = document.createElement("div")
			var tit22 = document.createTextNode(jsonCatalogo[2].movies[21].title)
			div44.appendChild(tit22)
			document.getElementById("tit22").appendChild(div44)
	// capa22
			var div45 = document.createElement("div")
			var img22 = document.createElement("img22")
			div45.appendChild(img22)
			document.getElementById("img22").src = jsonCatalogo[2].movies[21].images[0].url
	// Filme23
			var div46 = document.createElement("div")
			var tit23 = document.createTextNode(jsonCatalogo[2].movies[22].title)
			div46.appendChild(tit23)
			document.getElementById("tit23").appendChild(div46)
	// capa23
			var div47 = document.createElement("div")
			var img23 = document.createElement("img23")
			div47.appendChild(img23)
			document.getElementById("img23").src = jsonCatalogo[2].movies[22].images[0].url
	// Filme24
			var div48 = document.createElement("div")
			var tit24 = document.createTextNode(jsonCatalogo[2].movies[23].title)
			div48.appendChild(tit24)
			document.getElementById("tit24").appendChild(div48)
	// capa24
			var div49 = document.createElement("div")
			var img24 = document.createElement("img24")
			div49.appendChild(img24)
			document.getElementById("img24").src = jsonCatalogo[2].movies[23].images[0].url
	// Filme25
			var div50 = document.createElement("div")
			var tit25 = document.createTextNode(jsonCatalogo[2].movies[24].title)
			div50.appendChild(tit25)
			document.getElementById("tit25").appendChild(div50)
	// capa25
			var div51 = document.createElement("div")
			var img25 = document.createElement("img25")
			div51.appendChild(img25)
			document.getElementById("img25").src = jsonCatalogo[2].movies[24].images[0].url
	// Filme26
			var div52 = document.createElement("div")
			var tit26 = document.createTextNode(jsonCatalogo[2].movies[25].title)
			div52.appendChild(tit26)
			document.getElementById("tit26").appendChild(div52)
	// capa26
			var div53 = document.createElement("div")
			var img26 = document.createElement("img26")
			div37.appendChild(img26)
			document.getElementById("img26").src = jsonCatalogo[2].movies[25].images[0].url
	// Filme27
			var div54 = document.createElement("div")
			var tit27 = document.createTextNode(jsonCatalogo[2].movies[26].title)
			div54.appendChild(tit27)
			document.getElementById("tit27").appendChild(div54)
	// capa27
			var div55 = document.createElement("div")
			var img27 = document.createElement("img27")
			div27.appendChild(img27)
			document.getElementById("img27").src = jsonCatalogo[2].movies[26].images[0].url
 



	});

}); 




	



