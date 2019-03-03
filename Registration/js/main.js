function openForm(evt)
{
	win = window.open("about:blank", "hello", "width=400, height=600");
	var str = document.getElementById('first-name').value;
	win.document.write(str + "<br>");
	var str1 = document.getElementById('middle-name').value;
	win.document.write(str1 + "<br>");
	var str2 = document.getElementById('last-name').value;
	win.document.write(str2 + "<br>");
	var str3 = document.getElementById('date').value;
	win.document.write("Дата народження  " + str3 + "<br>");
	var str6 = document.getElementById('telephone-num').value;
	win.document.write("Номер телефону  " + str6 + "<br>");
	var str7 = document.getElementById('address').value;
	win.document.write("Адреса  " + str7 + "<br>");
	var str4 = parseInt(document.getElementById('math-score').value);
	var str5 = parseInt(document.getElementById('ukr-score').value);
	win.document.write("Сума оцінок  " + (str4 + str5) + "<br>");
	if (document.getElementById("from-here").checked == true)
	{
		win.document.write("Mісцевий" + "<br>");
	} else
	{
		win.document.write("Не місцевий" + "<br>");
	}
	if (document.getElementById("gender").checked == true)
	{
		win.document.write("Стать  чоловіча" + "<br>");
	} else
	{
		win.document.write("Стать жіноча" + "<br>");
	}
}
function closeForm()
{
	win.close();
}