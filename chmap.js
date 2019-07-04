/******************************************

    This file is part of Bangla Unicode Web Tools 2.

Copyright (C) 2007  S M Mahbub Murshed

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA


	Contains bangla character map

	Author: S M Mahbub Murshed
	Email: udvranto@yahoo.com
	Version: 1.0.0
	Date: September 06, 2006, XX:XX GMT
*******************************************/


/***** Bangla Character Map ******/
var BanglaCharacterMapVowel = new Array(
			"অ",
			"আ",
			"া",
			"ই",
			"ি",
			"ঈ",
			"ী",
			"উ",
			"ু",
			"ঊ",
			"ূ",
			"এ",
			"ে",
			"ঐ",
			"ৈ",
			"ও",
			"ো",
			"ঔ",
			"ৌ",
			"ঋ",
			"ৃ");
var BanglaCharacterMapConsonant = new Array(
			"ক",
			"খ",
			"গ",
			"ঘ",
			"ঙ",

			"চ",
			"ছ",
			"জ",
			"ঝ",
			"ঞ",

			"ট",
			"ঠ",
			"ড",
			"ঢ",
			"ণ",

			"ত",
			"থ",
			"দ",
			"ধ",
			"ন",

			"প",
			"ফ",
			"ব",
			"ভ",
			"ম",

			"য",
			"র",
			"ল",
			"শ",
			"ষ",
			"স",
			"হ",

			"ৎ",
			"ড়",
			"ঢ়",
			"য়",
			"ঁ",
			"ং",
			"ঃ");
var BanglaCharacterMapSpecial = new Array(
			"যুক্ত",
			"হসন্ত",
			"র-ফলা",
			"ব-ফলা",
			"য-ফলা",
			"রেফ",
			"zwj",
			"zwnj",
			"।",
			"॥");

var BanglaCharacterMapSpecialInsert = new Array(
			"্",
			"্‌",
			"্র",
			"্ব",
			"্য",
			"র্",
			"\u200D",
			"\u200C",
			"।",
			"॥");


/***** Bijoy Character Map ******/
var BijoyCharacterMapVowel = {
			"অ":"F",
			"আ":"gf",
			"া":"f",
			"ই":"gd",
			"ি":"d",
			"ঈ":"gD",
			"ী":"D",
			"উ":"gs",
			"ু":"s",
			"ঊ":"gS",
			"ূ":"S",
			"এ":"gc",
			"ে":"c",
			"ঐ":"gC",
			"ৈ":"C",
			"ও":"gx",
			"ো":"x",
			"ঔ":"gX",
			"ৌ":"X",
			"ঋ":"ga",
			"ৃ":"a" };

var BijoyCharacterMapConsonant = {
			"ক":"j",
			"খ":"J",
			"গ":"o",
			"ঘ":"O",
			"ঙ":"q",

			"চ":"y",
			"ছ":"Y",
			"জ":"u",
			"ঝ":"U",
			"ঞ":"I",

			"ট":"t",
			"ঠ":"T",
			"ড":"e",
			"ঢ":"E",
			"ণ":"B",

			"ত":"k",
			"থ":"K",
			"দ":"l",
			"ধ":"L",
			"ন":"b",

			"প":"r",
			"ফ":"R",
			"ব":"h",
			"ভ":"H",
			"ম":"m",

			"য":"w",
			"র":"v",
			"ল":"V",
			"শ":"M",
			"ষ":"N",
			"স":"n",
			"হ":"i",

			"ৎ":"|",
			"ড়":"p",
			"ঢ়":"P",
			"য়":"W",
			"ঁ":"&amp;",
			"ং":"Q",
			"ঃ":"\\" };

var BijoyCharacterMapSpecial = { 
			"যুক্ত":"g",
			"হসন্ত":"g`",
			"র-ফলা":"z",
			"ব-ফলা":"gh",
			"য-ফলা":"Z",
			"রেফ":"A",
			"zwj":"~",
			"zwnj":"`",
			"।":"G",
			"॥":"gG" };
var BijoyHint	= 	"যুক্তাক্ষর লিখতে \"ব্যাঞ্জনবর্ণ g ব্যাঞ্জনবর্ণ\" চাপুন। যেমন: ক্ষ লিখতে চাপুন kgN।<br>\
			র‌্য (র-য-ফলা) লিখতে র+`+য-ফলা চাপুন। যেমন: র‌্যাব (RAB) লিখতে চাপুন v`ZFh।\
			<br>কোন কোন ক্ষেত্রে ফায়ারফক্সের <a \
			href=\"https://bugzilla.mozilla.org/show_bug.cgi?id=274152\
			\">এই বাগের জন্য</a> ঠিকমত দেখতে দুবার ` চাপুন।";







/***** Somewherein Character Map ******/
var SomewhereInCharacterMapVowel = {
			"অ":"ao",
			"আ":"A",
			"া":"a",
			"ই":"I",
			"ি":"i",
			"ঈ":"II",
			"ী":"ii",
			"উ":"U",
			"ু":"u",
			"ঊ":"UU",
			"ূ":"uu",
			"এ":"E",
			"ে":"e",
			"ঐ":"OI",
			"ৈ":"oi",
			"ও":"O",
			"ো":"o",
			"ঔ":"OU",
			"ৌ":"ou",
			"ঋ":"WR",
			"ৃ":"wr" };

var SomewhereInCharacterMapConsonant = {
			"ক":"k",
			"খ":"kh/K",
			"গ":"g",
			"ঘ":"gh/G",
			"ঙ":"Ng",

			"চ":"c/ch",
			"ছ":"C",
			"জ":"j",
			"ঝ":"jh/J",
			"ঞ":"NG",

			"ট":"t",
			"ঠ":"th",
			"ড":"d",
			"ঢ":"dh",
			"ণ":"N",

			"ত":"T",
			"থ":"Th",
			"দ":"D",
			"ধ":"Dh",
			"ন":"n",

			"প":"p",
			"ফ":"ph/f",
			"ব":"b",
			"ভ":"bh/v",
			"ম":"m",

			"য":"z",
			"র":"r",
			"ল":"l",
			"শ":"sh",
			"ষ":"S",
			"স":"s",
			"হ":"H",

			"ৎ":"tt",
			"ড়":"R",
			"ঢ়":"Rh",
			"য়":"y",

			"ঁ":"NN",
			"ং":"ng",
			"ঃ":"HH"};

var SomewhereInCharacterMapSpecial = { 
			"যুক্ত":"+",
			"হসন্ত":"+",
			"র-ফলা":"+r",
			"ব-ফলা":"+b/+w",
			"য-ফলা":"Y",
			"রেফ":"r+",
			"zwj":"~",
			"zwnj":"`",
			"।":".",
			"॥":"" };
var SomewhereInHint =	"যুক্তাক্ষর লিখতে \"ব্যাঞ্জনবর্ণ + ব্যাঞ্জনবর্ণ\" চাপুন। যেমন: ক্ষ লিখতে চাপুন k+S।<br>\
			র‌্য (র-য-ফলা) লিখতে র+`+য-ফলা চাপুন। যেমন: র‌্যাব (RAB) লিখতে চাপুন r`Yab।\
			<br>কোন কোন ক্ষেত্রে ফায়ারফক্সের <a \
			href=\"https://bugzilla.mozilla.org/show_bug.cgi?id=274152\
			\">এই বাগের জন্য</a> ঠিকমত দেখতে দুবার ` চাপুন।";







/***** Avro Character Map ******/
var AvroCharacterMapVowel = {
			"অ":"o",
			"আ":"a/A",
			"া":"a",
			"ই":"i",
			"ি":"i",
			"ঈ":"I",
			"ী":"I",
			"উ":"u",
			"ু":"u",
			"ঊ":"U",
			"ূ":"U",
			"এ":"e/E",
			"ে":"e",
			"ঐ":"",
			"ৈ":"",
			"ও":"O",
			"ো":"o",
			"ঔ":"",
			"ৌ":"",
			"ঋ":"",
			"ৃ":"" };

var AvroCharacterMapConsonant = {
			"ক":"k/K",
			"খ":"kh",
			"গ":"g/G",
			"ঘ":"gh",
			"ঙ":"",

			"চ":"c/ch",
			"ছ":"chh",
			"জ":"j/J",
			"ঝ":"jh",
			"ঞ":"",

			"ট":"T",
			"ঠ":"Th",
			"ড":"D",
			"ঢ":"Dh",
			"ণ":"N",

			"ত":"t",
			"থ":"th",
			"দ":"D",
			"ধ":"Dh",
			"ন":"n",

			"প":"p",
			"ফ":"ph/f",
			"ব":"b",
			"ভ":"bh/v",
			"ম":"m",

			"য":"J/z",
			"র":"r",
			"ল":"l/L",
			"শ":"S",
			"ষ":"sh",
			"স":"s",
			"হ":"h/H",

			"ৎ":"",
			"ড়":"R",
			"ঢ়":"Rh",
			"য়":"y",

			"ঁ":"^",
			"ং":"",
			"ঃ":"\:"};

var AvroCharacterMapSpecial = { 
			"যুক্ত":"+",
			"হসন্ত":"+`",
			"র-ফলা":"r+",
			"ব-ফলা":"",
			"য-ফলা":"z+",
			"রেফ":"",
			"zwj":"~",
			"zwnj":"`",
			"।":".",
			"॥":"" };
var AvroHint =	"যুক্তাক্ষর লিখতে \"ব্যাঞ্জনবর্ণ + ব্যাঞ্জনবর্ণ\" চাপুন। যেমন: ক্ষ লিখতে চাপুন k+sh।<br>\
			র‌্য (র-য-ফলা) লিখতে র+`+য-ফলা চাপুন। যেমন: র‌্যাব (RAB) লিখতে চাপুন r`Yab।\
			<br>কোন কোন ক্ষেত্রে ফায়ারফক্সের <a \
			href=\"https://bugzilla.mozilla.org/show_bug.cgi?id=274152\
			\">এই বাগের জন্য</a> ঠিকমত দেখতে দুবার ` চাপুন।";







/***** Probhat Character Map ******/
var ProbhatCharacterMapVowel = {
			"অ":"A",
			"আ":"v",
			"া":"a",
			"ই":"I",
			"ি":"i",
			"ঈ":"E",
			"ী":"e",
			"উ":"U",
			"ু":"u",
			"ঊ":"W",
			"ূ":"w",
			"এ":"y",
			"ে":"[",
			"ঐ":"Y",
			"ৈ":"{",
			"ও":"o",
			"ো":"]",
			"ঔ":"O",
			"ৌ":"}",
			"ঋ":"V",
			"ৃ":"<" };

var ProbhatCharacterMapConsonant = {
			"ক":"k",
			"খ":"K",
			"গ":"g",
			"ঘ":"G",
			"ঙ":"M",

			"চ":"c",
			"ছ":"C",
			"জ":"j",
			"ঝ":"J",
			"ঞ":"&",

			"ট":"t",
			"ঠ":"T",
			"ড":"d",
			"ঢ":"D",
			"ণ":"n",

			"ত":"f",
			"থ":"F",
			"দ":"q",
			"ধ":"Q",
			"ন":"N",

			"প":"p",
			"ফ":"P",
			"ব":"b",
			"ভ":"B",
			"ম":"m",

			"য":"Z",
			"র":"r",
			"ল":"l",
			"শ":"x",
			"ষ":"S",
			"স":"s",
			"হ":"h",

			"ৎ":"*",
			"ড়":"R",
			"ঢ়":"X",
			"য়":"z",

			"ঁ":">",
			"ং":":",
			"ঃ":"H"};

var ProbhatCharacterMapSpecial = { 
			"যুক্ত":"/",
			"হসন্ত":"/-",
			"র-ফলা":"/r",
			"ব-ফলা":"/b",
			"য-ফলা":"/Z",
			"রেফ":"r/",
			"zwj":"`",
			"zwnj":"~",
			"।":".",
			"॥":"|" };
var ProbhatHint =	"যুক্তাক্ষর লিখতে \"ব্যাঞ্জনবর্ণ / ব্যাঞ্জনবর্ণ\" চাপুন। যেমন: ক্ষ লিখতে চাপুন \'k/S\'।<br>\
			র‌্য (র-য-ফলা) লিখতে \'র-যফলা\' চাপুন। যেমন: র‌্যাব (RAB) লিখতে চাপুন \'r~/Zab\'।\
			<br>কোন কোন ক্ষেত্রে ফায়ারফক্সের <a \
			href=\"https://bugzilla.mozilla.org/show_bug.cgi?id=274152\
			\">এই বাগের জন্য</a> ঠিকমত দেখতে দুবার \'~\' চাপুন।";




/***** Bornosoft Accent Character Map ******/
var BornosoftCharacterMapVowel = {
			"অ":"A",
			"আ":"v",
			"া":"a",
			"ই":"I",
			"ি":"i",
			"ঈ":"E",
			"ী":"e",
			"উ":"U",
			"ু":"u",
			"ঊ":"W",
			"ূ":"w",
			"এ":"y",
			"ে":"[",
			"ঐ":"Y",
			"ৈ":"{",
			"ও":"o",
			"ো":"]",
			"ঔ":"O",
			"ৌ":"}",
			"ঋ":"V",
			"ৃ":"<" };

var BornosoftCharacterMapConsonant = {
			"ক":"k",
			"খ":"K",
			"গ":"g",
			"ঘ":"G",
			"ঙ":"M",

			"চ":"c",
			"ছ":"C",
			"জ":"j",
			"ঝ":"J",
			"ঞ":"&",

			"ট":"t",
			"ঠ":"T",
			"ড":"d",
			"ঢ":"D",
			"ণ":"n",

			"ত":"f",
			"থ":"F",
			"দ":"q",
			"ধ":"Q",
			"ন":"N",

			"প":"p",
			"ফ":"P",
			"ব":"b",
			"ভ":"B",
			"ম":"m",

			"য":"Z",
			"র":"r",
			"ল":"l",
			"শ":"x",
			"ষ":"S",
			"স":"s",
			"হ":"h",

			"ৎ":"*",
			"ড়":"R",
			"ঢ়":"X",
			"য়":"z",

			"ঁ":">",
			"ং":":",
			"ঃ":"H"};

var BornosoftCharacterMapSpecial = { 
			"যুক্ত":"/",
			"হসন্ত":"/-",
			"র-ফলা":"/r",
			"ব-ফলা":"/b",
			"য-ফলা":"/Z",
			"রেফ":"r/",
			"zwj":"`",
			"zwnj":"~",
			"।":".",
			"॥":"|" };
var BornosoftHint =	"যুক্তাক্ষর লিখতে \"ব্যাঞ্জনবর্ণ / ব্যাঞ্জনবর্ণ\" চাপুন। যেমন: ক্ষ লিখতে চাপুন \'k/S\'।<br>\
			র‌্য (র-য-ফলা) লিখতে \'র-যফলা\' চাপুন। যেমন: র‌্যাব (RAB) লিখতে চাপুন \'r~/Zab\'।\
			<br>কোন কোন ক্ষেত্রে ফায়ারফক্সের <a \
			href=\"https://bugzilla.mozilla.org/show_bug.cgi?id=274152\
			\">এই বাগের জন্য</a> ঠিকমত দেখতে দুবার \'~\' চাপুন।";

var CommonHint = "বাংলা থেকে ইংরেজীতে টাইপ করতে Esc চাপুন। দ্বিতীয়বার Esc চাপলে আবার বাংলা ফিরে আসবে।<br>\
                  Ctl+Alt চেপে B চাপলে বিজয়, P চাপলে সামহোয়্যার-ইন ফোনেটিক, A চাপলে অভ্র ফোনেটিক<br>\
		  U চাপলে ইউনিজয়, V চাপলে প্রভাত আসবে।<br><br>\
		  <a href=\"mailto:udvranto@yahoo.com\">মুর্শেদের</a>\
		  <a href=\"http://bnwebtools.sourceforge.net/\">কির্বোড লেআউট "+
bn_resource["bnw_version"] +" (" + bn_resource["bnw_release_date"] + ")</a>";


function CharacterMapTable(maptype)
{
	var table = "";

	var vpart1 = "";
	var vpart2 = "";
	var cpart1 = "";
	var cpart2 = "";
	var spart1 = "";
	var spart2 = "";

	var CharacterMapVowel;
	var CharacterMapConsonant;
	var CharacterMapSpecial;
	var Hint;

	if(maptype=="english")
		return table;
	else if(maptype=="bijoy")
	{
		CharacterMapVowel = BijoyCharacterMapVowel;
		CharacterMapConsonant = BijoyCharacterMapConsonant;
		CharacterMapSpecial = BijoyCharacterMapSpecial;
		Hint = BijoyHint;
		table += "<b><span class=\"bangla\"><a href=\"http://www.bijoy.net\">বিজয়</a> কির্বোড:</span></b><br>";
	}
	else if(maptype=="unijoy" )
	{
		CharacterMapVowel = BijoyCharacterMapVowel;
		CharacterMapConsonant = BijoyCharacterMapConsonant;
		CharacterMapSpecial = BijoyCharacterMapSpecial;
		Hint = BijoyHint;
		table += "<b><span class=\"bangla\"><a href=\"http://www.ekushey.org\">ইউনিজয়</a> কির্বোড:</span></b><br>";
	}
	else if(maptype=="somewherein")
	{
		CharacterMapVowel = SomewhereInCharacterMapVowel;
		CharacterMapConsonant = SomewhereInCharacterMapConsonant;
		CharacterMapSpecial = SomewhereInCharacterMapSpecial;
		Hint = SomewhereInHint;
		table += "<b><span class=\"bangla\"><a href=\"http://www.somewhereinblog.net\">সামহোয়্যারইন ফোনেটিক</a> কির্বোড:</span></b><br>";
	}
	else if(maptype=="avro")
	{
		CharacterMapVowel = AvroCharacterMapVowel;
		CharacterMapConsonant = AvroCharacterMapConsonant;
		CharacterMapSpecial = AvroCharacterMapSpecial;
		Hint = AvroHint;
		table += "<b><span class=\"bangla\"><a href=\"http://www.omicronlab.com\">অভ্র ফোনেটিক</a> কির্বোড:</span></b><br>";
	}
	else if(maptype=="probhat")
	{
		CharacterMapVowel = ProbhatCharacterMapVowel;
		CharacterMapConsonant = ProbhatCharacterMapConsonant;
		CharacterMapSpecial = ProbhatCharacterMapSpecial;
		Hint = ProbhatHint;
		table += "<b><span class=\"bangla\"><a href=\"http://www.bengalinux.org\">প্রভাত</a> কির্বোড:</span></b><br>";
	}
	else if(maptype=="bornosoft")
	{
		CharacterMapVowel = BornosoftCharacterMapVowel;
		CharacterMapConsonant = BornosoftCharacterMapConsonant;
		CharacterMapSpecial = BornosoftCharacterMapSpecial;
		Hint = BornosoftHint;
		table += "<b><span class=\"bangla\"><a href=\"http://www.bornosoft.com\">বর্ণসফট একসেন্ট</a> কির্বোড:</span></b><br>";
	}

	table += "<table border=1 cellspacing=0 id=\'CharacteMapTable\'>";

	for(var i=0; i<BanglaCharacterMapVowel.length; i++)
	{
		vpart1 += "<td><a href=\"javascript:Insert("+ID+", \'"+BanglaCharacterMapVowel[i]+"\');\">"+ BanglaCharacterMapVowel[i] +"</a></td>";
		vpart2 += "<td>"+ CharacterMapVowel[BanglaCharacterMapVowel[i]] +"</td>";
	}

	for(var i=0; i<BanglaCharacterMapConsonant.length; i++)
	{
		cpart1 += "<td><a href=\"javascript:Insert("+ID+", \'"+BanglaCharacterMapConsonant[i]+"\');\">"+ BanglaCharacterMapConsonant[i] +"</a></td>";
		cpart2 += "<td>"+ CharacterMapConsonant[BanglaCharacterMapConsonant[i]] +"</td>";
	}
	
	// Blank cells
	var blanks = BanglaCharacterMapConsonant.length
		   - BanglaCharacterMapSpecial.length
		   - BanglaCharacterMapVowel.length;
	for(var i=0; i<blanks; i++)
	{
		spart1 +="<td></td>"; // insert &nbsp; in between <td> & </td>
		spart2 +="<td></td>"; // to show cell borders
	}

	for(var i=0; i<BanglaCharacterMapSpecial.length; i++)
	{
		spart1 += "<td><a href=\"javascript:Insert("+ID+", \'"+BanglaCharacterMapSpecialInsert[i]+"\');\">"+ BanglaCharacterMapSpecial[i] +"</a></td>";
		spart2 += "<td>"+ CharacterMapSpecial[BanglaCharacterMapSpecial[i]] +"</td>";
	}

	table += "<span class=\"bangla\">";
	table += "<tr align=\"center\">";
	table += cpart1;
	table += "</tr>";
	table += "</span>";

	table += "<span class=\"english\">";
	table += "<tr align=\"center\">";
	table += cpart2;
	table += "</tr>";
	table += "</span>";

	table += "<span class=\"bangla\">";
	table += "<tr align=\"center\">";
	table += vpart1 + spart1;
	table += "</tr>";
	table += "</span>";

	table += "<span class=\"english\">";
	table += "<tr align=\"center\">";
	table += vpart2 + spart2;
	table += "</tr>";
	table += "</span>";

	table += "</table>";
	table += Hint + "<br><br>" + CommonHint;
	return table;
}
