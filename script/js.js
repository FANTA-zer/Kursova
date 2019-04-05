function showText(el) {
	if(el.previousElementSibling.clientHeight === 32) {
		el.previousElementSibling.style.height = "100%";
		el.innerHTML = "Згорнути";
	} else {
		el.previousElementSibling.style.height = "32px";
		el.innerHTML = "Розгорнути";
	}
}

function raschitat() {
		neob_act  = document.getElementById('neob_act').value;
		ob_act  = document.getElementById('ob_act').value;
		maib_vitr  = document.getElementById('maib_vitr').value;
		if(neob_act == ""){
		alert("Ви не вкзали необоротні активи");
		} else if(ob_act == ""){
		alert("Ви не вказали оборотні активи");
		} 
		else if(maib_vitr == ""){
		alert("Ви не вказали майбутні витрати");
		}else {
		activ = parseFloat (neob_act)+ parseFloat (ob_act)+ parseFloat(maib_vitr);
		document.getElementById('activ').innerHTML = "Сума активу: "+ activ;

		}
		}
		function raschitat1() {
		vlasn_kapital  = document.getElementById('vlasn_kapital').value;
		zab_nast_vitr  = document.getElementById('zab_nast_vitr').value;
		dovg_zabov  = document.getElementById('dovg_zabov').value;
		pot_zabov  = document.getElementById('pot_zabov').value;
		dochodu_maib_per  = document.getElementById('dochodu_maib_per').value;
		if(vlasn_kapital == ""){
		alert("Ви не вказали власний капітал");
		} else if(zab_nast_vitr == ""){
		alert("Ви не вказали забезпечення наступних витрат");
		} 
		else if(dovg_zabov == ""){
		alert("Ви не вказали Довгострокові забов'язання");
		} else if(pot_zabov == ""){
		alert("Ви не вказали поточні зобов'язання");
		} else if(dochodu_maib_per == ""){
		alert("Ви не вказали доходи майбутніх періодів");
		}
		else {
		pasiv = parseFloat (vlasn_kapital)+ parseFloat (zab_nast_vitr)+ parseFloat(dovg_zabov)+ parseFloat(pot_zabov)+ parseFloat(dochodu_maib_per);

		document.getElementById('pasiv').innerHTML = "Сума пасиву: "+ pasiv;

		}
		}
		function proverka() {
		var activ  = document.getElementById('activ').innerHTML + '';
		var pasiv  = document.getElementById('pasiv').innerHTML + '';

		console.log(activ)
		console.log(pasiv)
		
		activ = parseInt(activ.split(":")[1].trim())
		pasiv = parseInt(pasiv.split(":")[1].trim())

		console.log(activ == pasiv)
		console.log(activ === pasiv)

		if(activ == pasiv){
		alert("Баланс складений вірно");
		} else if (activ != pasiv) {
		alert("Баланс складений не вірно. Його потрібно доопрацювати!");
		} 
		}