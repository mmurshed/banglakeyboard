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





	Authors: S M Mahbub Murshed, Arup Kamal
	Copyright: Authors
	Email: udvranto@yahoo.com, arup.kamal@gmail.com
	Version: 1.2.0
	Date: September 06, 2006, XX:XX GMT


	TODO:
	- Update Avro keyboard
*******************************************/
var IE=(document.all ? 1:0);

var LCUNI=0; // Last typed character converted into unicode
var LLCUNI=0; // Last before last typed character converted into unicode, used for avro
var LC=0; // Last english character typed
var LLC=0; // Last before last english character typed, used for Avro

var LC_KAR=0; // Last recognized pre-kar, needed for bijoy input
var LC_STRING=""; // Array of complex-borno or banjoborno 
		 // after last pre-kar input. Required for bijoy input


// Keyboard layout to follow
var EnglishKeyboard = false;
var ENGLISH = 1;
var BIJOY = 2;
var UNIJOY = 3;
var PROBHAT = 4;
var SWIPHONETIC = 5;
var AVROPHONETIC = 6;
var BORNOSOFTACCENT = 7;

/*
	1 - English,
	2 - Bijoy,
	3 - Unijoy
	4 - Probhat
	5 - Somewhere-in Phonetic,
	6 - Avro Phonetic,
*/
var KeyBoardLayout = BIJOY;

var ctl_v_conversion = false; // should convert with ctrl+v?



var Avro_Cha_Flag = false;
var Avro_A_Press_Flag = false;
var Avro_EnglishWord = "";
var Avro_BanglaWord = "";
var Avro_EnableDictionary = false;
var Avro_Forced = false;



/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to Bijoy
	layout.

	Coded by : S M Mahbub Murshed
	Date: September 07, 2006
*******************************************/
var bijoy_keyboard_map = {
	"0":"০",
	"1":"১",
	"2":"২",
	"3":"৩",
	"4":"৪",
	"5":"৫",
	"6":"৬",
	"7":"৭",
	"8":"৮",
	"9":"৯",

	"a":"ৃ",
	"A":"র্",
	"d":"ি",
	"D":"ী",
	"s":"ু",
	"S":"ূ",
	"f":"া",
	"F":"অ",
	"g":"্",
	"G":"।",
	"h":"ব",
	"H":"ভ",
	"j":"ক",
	"J":"খ",
	"k":"ত",
	"K":"থ",
	"l":"দ",
	"L":"ধ",
	"z":"্র",
	"Z":"্য",
	"x":"ও",
	"X":"ৗ",
	"c":"ে",
	"C":"ৈ",
	"v":"র",
	"V":"ল",
	"b":"ন",
	"B":"ণ",
	"n":"স",
	"N":"ষ",
	"m":"ম",
	"M":"শ",

	"q":"ঙ",
	"Q":"ং",
	"w":"য",
	"W":"য়",
	"e":"ড",
	"E":"ঢ",
	"r":"প",
	"R":"ফ",
	"t":"ট",
	"T":"ঠ",
	"y":"চ",
	"Y":"ছ",
	"u":"জ",
	"U":"ঝ",
	"i":"হ",
	"I":"ঞ",
	"o":"গ",
	"O":"ঘ",
	"p":"ড়",
	"P":"ঢ়",
	"&":"ঁ",
	"$":"৳",
	"`":"\u200C",
	"~":"\u200D",

	"\\":"ৎ",
	"|":"ঃ"
}; // end bijoy_keyboard_map
/******************************************/





/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to Phonetic
	layout.

	Coded by : S M Mahbub Murshed
	Date: September 07, 2006
******************************************/
var somewherein_phonetic_keyboard_map = {
	"0":"০",
	"1":"১",
	"2":"২",
	"3":"৩",
	"4":"৪",
	"5":"৫",
	"6":"৬",
	"7":"৭",
	"8":"৮",
	"9":"৯",

	"a":"া",
	"A":"আ",
	"d":"ড",
	"D":"দ",
	"s":"স",
	"S":"ষ",
	"f":"ফ",
	"F":"ঋ",
	"g":"গ",
	"G":"ঘ",
	"h":"হ",
	"H":"ঃ",
	"j":"জ",
	"J":"ঝ",
	"k":"ক",
	"K":"খ",
	"l":"ল",
	"L":"খ",
	"z":"য",
	"Z":"ত",
	"x":"ক্স",
	"X":"ঢ",
	"c":"চ",
	"C":"ছ",
	"v":"ভ",
	"V":"ঠ",
	"b":"ব",
	"B":"ই",
	"n":"ন",
	"N":"ণ",
	"m":"ম",
	"M":"গ",

	"q":"য়",
	"Q":"ছ",
	"w":"ৃ",
	"W":"ঋ",
	"e":"ে",
	"E":"এ",
	"r":"র",
	"R":"ড়",
	"t":"ট",
	"T":"ত",
	"y":"য়",
	"Y":"্য",
	"u":"ু",
	"U":"উ",
	"i":"ি",
	"I":"ই",
	"o":"ো",
	"O":"ও",
	"p":"প",
	"P":"চ",
	"&":"্",
	"$":"৳",
	"+":"্",
	".":"।",
	"`":"\u200C",
	"~":"\u200D",

	"\\":"॥",
	"|":"।"
}; // end somewherein_phonetic_keyboard_map 
/******************************************/





/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to Avro Phonetic
	layout.

	\param C The ASCII character to find its Map

	Coded by : S M Mahbub Murshed
	Date: September 07, 2006
******************************************/
var avro_phonetic_keyboard_map = {
	"0":"০",
	"1":"১",
	"2":"২",
	"3":"৩",
	"4":"৪",
	"5":"৫",
	"6":"৬",
	"7":"৭",
	"8":"৮",
	"9":"৯",

	"o":"অ",
	"a":"আ",
	"A":"আ",
	"i":"ই",
	"I":"ঈ",
	"u":"উ",
	"U":"ঊ",
	"e":"এ",
	"E":"এ",
	"O":"ও",

	"d":"দ",
	"D":"ড",
	"s":"স",
	"S":"শ",
	"f":"ফ",
	"g":"গ",
	"h":"হ",
	"H":"হ",
	"j":"জ",
	"J":"য",
	"k":"ক",
	"K":"ক",
	"l":"ল",
	"L":"ল",
	"z":"য",
	"Z":"্য",
	"c":"চ",
	"v":"ভ",
	"V":"ভ",
	"b":"ব",
	"n":"ন",
	"N":"ণ",
	"m":"ম",
	"y":"য়",
	"w":"্ব",
	"r":"র",
	"R":"ড়",
	"t":"ত",
	"T":"ট",
	"y":"য়",
	"Y":"য়",
	"p":"প",
	"$":"৳",
	"+":"্",
	".":"।",
	":":"ঃ",
	"^":"ঁ",
	"`":"্"
}; // end avro_phonetic_keyboard_map
/******************************************/






/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to Unijoy
	layout.

	Coded by : S M Mahbub Murshed
	Date: September 07, 2006
******************************************/
var unijoy_keyboard_map = {
	"0":"০",
	"1":"১",
	"2":"২",
	"3":"৩",
	"4":"৪",
	"5":"৫",
	"6":"৬",
	"7":"৭",
	"8":"৮",
	"9":"৯",

	"a":"ৃ",
	"A":"র্",
	"d":"ি",
	"D":"ী",
	"s":"ু",
	"S":"ূ",
	"f":"া",
	"F":"অ",
	"g":"্",
	"G":"।",
	"h":"ব",
	"H":"ভ",
	"j":"ক",
	"J":"খ",
	"k":"ত",
	"K":"থ",
	"l":"দ",
	"L":"ধ",
	"z":"্র",
	"Z":"্য",
	"x":"ো", 
	"X":"ৌ", 
	"c":"ে",
	"C":"ৈ",
	"v":"র",
	"V":"ল",
	"b":"ন",
	"B":"ণ",
	"n":"স",
	"N":"ষ",
	"m":"ম",
	"M":"শ",

	"q":"ঙ",
	"Q":"ং",
	"w":"য",
	"W":"য়",
	"e":"ড",
	"E":"ঢ",
	"r":"প",
	"R":"ফ",
	"t":"ট",
	"T":"ঠ",
	"y":"চ",
	"Y":"ছ",
	"u":"জ",
	"U":"ঝ",
	"i":"হ",
	"I":"ঞ",
	"o":"গ",
	"O":"ঘ",
	"p":"ড়",
	"P":"ঢ়",
	"&":"ঁ",
	"$":"৳",
	"`":"\u200C",
	"~":"\u200D",
	"^":"÷",
	"*":"×",

	"\\":"ৎ",
	"|":"ঃ"
}; // end unijoy_keyboard_map
/******************************************/







/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to Probhat
	layout.

	Coded by : S M Mahbub Murshed
	Date: April 23, 2006
******************************************/
var probhat_keyboard_map = {
	"0":"০",
	"1":"১",
	"2":"২",
	"3":"৩",
	"4":"৪",
	"5":"৫",
	"6":"৬",
	"7":"৭",
	"8":"৮",
	"9":"৯",

	"a":"া",
	"A":"অ",
	"s":"স",
	"S":"ষ",
	"d":"ড",
	"D":"ঢ",
	"f":"ত",
	"F":"থ",
	"g":"গ",
	"G":"ঘ",
	"h":"হ",
	"H":"ঃ",
	"j":"জ",
	"J":"ঝ",
	"k":"ক",
	"K":"খ",
	"l":"ল",
	"L":"ং",
	"z":"য়",
	"Z":"য",
	"x":"শ", 
	"X":"ঢ়", 
	"c":"চ",
	"C":"ছ",
	"v":"আ",
	"V":"ঋ",
	"b":"ব",
	"B":"ভ",
	"n":"ন",
	"N":"ণ",
	"m":"ম",
	"M":"ঙ",

	"q":"দ",
	"Q":"ধ",
	"w":"ূ",
	"W":"ঊ",
	"e":"ী",
	"E":"ঈ",
	"r":"র",
	"R":"ড়",
	"t":"ট",
	"T":"ঠ",
	"y":"এ",
	"Y":"ঐ",
	"u":"ু",
	"U":"উ",
	"i":"ি",
	"I":"ই",
	"o":"ও",
	"O":"ঔ",
	"p":"প",
	"P":"ফ",
	"[":"ে",
	"{":"ৈ",
	"]":"ো",
	"}":"ৌ",
	"*":"ৎ",

	"&":"ঞ",
	"$":"৳",
	"~":"\u200C",
	"`":"\u200D",
	"<":"ৃ",
	">":"ঁ",
	".":"।",
	"/":"্",

	"|":"॥"
}; // end probhat_keyboard_map
/******************************************/




/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to Bornosoft Accent
	layout.

	Coded by : S M Mahbub Murshed
	Date: September 30, 2007
******************************************/
var bornosoft_keyboard_map = {
	"0":"০",
	"1":"১",
	"2":"২",
	"3":"৩",
	"4":"৪",
	"5":"৫",
	"6":"৬",
	"7":"৭",
	"8":"৮",
	"9":"৯",

	"a":"আ",
	"A":"অ",
	"d":"দ",
	"D":"ধ",
	"s":"স",
	"S":"শ",
	"f":"া",
	"F":"অ",
	"g":"গ",
	"G":"ঘ",
	"h":"হ",
	"H":"হ",
	"j":"জ",
	"J":"ঝ",
	"k":"ক",
	"K":"খ",
	"l":"ল",
	"L":"ল",

	"z":"য",
	"Z":"জ",
	"x":"ষ", 
	"X":"ষ", 
	"c":"চ",
	"C":"ছ",
	"v":"র",
	"V":"ল",
	"b":"ব",
	"B":"ভ",
	"n":"ন",
	"N":"ণ",
	"m":"ম",
	"M":"ম",

	"q":"ঙ",
	"Q":"ং",
	"w":"্ব",
	"W":"ঃ",
	"e":"এ",
	"E":"ঐ",
	"r":"র",
	"R":"র",
	"t":"ত",
	"T":"থ",
	"y":"্য",
	"Y":"য়",
	"u":"উ",
	"U":"ঊ",
	"i":"ই",
	"I":"ঈ",
	"o":"ও",
	"O":"ঔ",
	"p":"প",
	"P":"ফ",

	".":"।",
	":":"ঃ",
	"~":"ঁ",
	"$":"৳"
}; // end bornosoft_keyboard_map
/******************************************/






/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to selected
	layout.

	\param C The ASCII character to find its Map

	Coded by : S M Mahbub Murshed
	Date: August 30, 2006
******************************************/
function MapUnicodeCharacter(C)
{
	if(KeyBoardLayout == BIJOY)
		return bijoy_keyboard_map[C];
	else if(KeyBoardLayout == UNIJOY)
		return unijoy_keyboard_map[C];
	else if(KeyBoardLayout == PROBHAT)
		return probhat_keyboard_map[C];
	else if(KeyBoardLayout == SWIPHONETIC)
		return somewherein_phonetic_keyboard_map [C];
	else if(KeyBoardLayout == AVROPHONETIC) {
		Avro_Forced = IsAvorForced(C);
		return avro_phonetic_keyboard_map [C];
	}
	else if(KeyBoardLayout == BORNOSOFTACCENT) {
		return bornosoft_keyboard_map [C];
	}

	return C;
} // end function MapUnicodeCharacter








/******************************************
	Resets Kar modifier tracking.

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
function ResetKarModifier()
{
	LC_KAR = 0;
	LC_STRING = "";
} // end function ResetKarModifier





/******************************************
	Modifies a kar

	\param CUni Current charater

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
function KarModification(field, CUni)
{
	if (LC_KAR == LCUNI || IsBanglaHalant(LCUNI) || CUni=="্র" || CUni=="্য")
	{
		var len = LC_STRING.length;
		LC_STRING = LC_STRING + CUni;
		RemoveNInsert(field, LC_STRING + LC_KAR,len+LC_KAR.length);
	}
	else if(CUni=="র্")
	{
		var len = LC_STRING.length;
		LC_STRING = CUni + LC_STRING;
		RemoveNInsert(field, LC_STRING + LC_KAR,len+LC_KAR.length);
	}
	else if(IsBanglaHalant(CUni))
	{
		LC_STRING = LC_STRING + CUni;
		Insert(field, CUni);
	}
	else
	{
		Insert(field, CUni);
		ResetKarModifier();
	}
} // end function KarModification







/******************************************
	Modifies a ref insertion

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
function RefModification(field)
{
	var len = 1;
	var kar = "";
	var str = "";
	var halant_found = true;
	var CH = "";
		field.focus();
	while(true)
	{
		if (document.selection) 
		{
			sel = document.selection.createRange();
			if (field.value.length >= len)
			{
				sel.moveStart('character', -1 * len);   
			}
			else
			{
				CH = "",
				len--;
				sel.moveStart('character', -1 * len);
				break;
			}
			CH = sel.text.charAt(0);
		}
		else if (field.selectionStart || field.selectionStart == 0) 
		{
			var startPos = field.selectionStart-len;
			var endPos = field.selectionEnd;
			var scrollTop = field.scrollTop;

			if(startPos <0)
			{
				CH = "",
				len--;
				startPos = field.selectionStart-len;
				break;
			} 
			CH = field.value.substring(startPos, startPos+1)

		}

		if(len!=1 && IsBanglaKar(CH))
			break;

		if(len==1 && IsBanglaKar(CH))
			kar=CH;
		else if(IsBanglaSoroborno(CH) || IsBanglaDigit(CH) || IsSpace(CH))
			break;
		else if(IsBanglaBanjonborno(CH))
		{
			if(halant_found==true)
			{
				str = CH + str;
				halant_found = false;
			}
			else
				break;
		}
		else if(IsBanglaHalant(CH))
		{
			str = CH + str;
			halant_found = true;
		}
		len++;
	}

	var line = CH + "র্" + str + kar;
	if (document.selection) 
	{
		sel.text = line;
		sel.collapse(true);
		sel.select();
	}
	else if (field.selectionStart || field.selectionStart == 0) 
	{
		field.value = field.value.substring(0, startPos)
				+ line
				+ field.value.substring(endPos, field.value.length);
		field.focus();
		field.selectionStart = startPos + line.length;
		field.selectionEnd = startPos + line.length;
		field.scrollTop = scrollTop;
	}

} // end function RefModification





/******************************************
	Modifies a o-kar and ou-kar insertion

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
function OAndOuKarModification(field, CH1, CH2)
{
	if (document.selection) 
	{
		field.focus();
		sel = document.selection.createRange();
		if (field.value.length >= 1)
			sel.moveStart('character', -1);   
		if(sel.text.charAt(0) == 'ে')
			sel.text = CH1;
		else
			sel.text = sel.text.charAt(0) + CH2;
		sel.collapse(true);
		sel.select();
	}
	else if (field.selectionStart || field.selectionStart == 0)
	{
		var startPos = field.selectionStart-1;
		var endPos = field.selectionEnd;
		var scrollTop = field.scrollTop;
		var CH;
		startPos = (startPos == -1 ? field.value.length : startPos );
		if(field.value.substring(startPos, startPos+1) == "ে")
			CH = CH1;
		else
		{
			startPos=startPos+1;
			CH = CH2;
		}
		field.value = field.value.substring(0, startPos)
			+ CH
			+ field.value.substring(endPos, field.value.length);
		field.focus();
		field.selectionStart = startPos + CH.length;
		field.selectionEnd = startPos + CH.length;
		field.scrollTop = scrollTop;
	}

} // end function OAndOuKarModification






/******************************************
	Determines whether its a phonetic
	modifier character or not.

	Coded by : S M Mahbub Murshed
	Date: August 30, 2006
******************************************/
function IsSomewhereinPhoneticModifierCharaceter(CUni)
{
	if(CUni=='হ' || CUni=='গ' 
	|| CUni=='ঘ' || CUni=='ণ'
	|| CUni=='ঃ' || CUni=='ট'
	|| CUni=='ো' 
	|| CUni=='ই' || CUni=='ি' 
	|| CUni=='উ' || CUni=='ু'
	|| CUni=='র' || CUni=='ড়' )
		return true;
	return false;
} // end function IsSomewhereinPhoneticModifierCharaceter





/******************************************
	Modifies phonetic ha

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
function GetSomewhereinPhoneticModifiedCharaceter(CUni)
{
	var CMod=CUni;

	if(LCUNI=='ক' && CUni=='হ') CMod = 'খ';
	else if(LCUNI=='গ' && CUni=='হ') CMod = 'ঘ';
	else if(LCUNI=='চ' && CUni=='হ') CMod = 'চ';
	else if(LCUNI=='জ' && CUni=='হ') CMod = 'ঝ';
	else if(LCUNI=='ট' && CUni=='হ') CMod = 'ঠ';
	else if(LCUNI=='ড' && CUni=='হ') CMod = 'ঢ';
	else if(LCUNI=='ত' && CUni=='হ') CMod = 'থ';
	else if(LCUNI=='দ' && CUni=='হ') CMod = 'ধ';
	else if(LCUNI=='প' && CUni=='হ') CMod = 'ফ';
	else if(LCUNI=='ব' && CUni=='হ') CMod = 'ভ';
	else if(LCUNI=='স' && CUni=='হ') CMod = 'শ';
	else if(LCUNI=='ড়' && CUni=='হ') CMod = 'ঢ়';

	else if(LCUNI=='ণ' && CUni=='গ') CMod = 'ঙ';
	else if(LCUNI=='ন' && CUni=='গ') CMod = 'ং';
	
	else if(LCUNI=='ণ' && CUni=='ঘ') CMod = 'ঞ';

	else if(LCUNI=='ণ' && CUni=='ণ') CMod = 'ঁ';

	else if(LCUNI=='ঃ' && CUni=='ঃ') CMod = 'ঃ';
	
	else if(LCUNI=='ট' && CUni=='ট') CMod = 'ৎ';
	
	else if(LCUNI=='া' && CUni=='ো') CMod = 'অ';
	else if(LCUNI=='ি' && CUni=='ি') CMod = 'ী';
	else if(LCUNI=='ই' && CUni=='ই') CMod = 'ঈ';
	else if(LCUNI=='ু' && CUni=='ু') CMod = 'ূ';
	else if(LCUNI=='উ' && CUni=='উ') CMod = 'ঊ';
	else if(LCUNI=='ও' && CUni=='ই') CMod = 'ঐ';
	else if(LCUNI=='ো' && CUni=='ি') CMod = 'ৈ';
	else if(LCUNI=='ও' && CUni=='উ') CMod = 'ঔ';
	else if(LCUNI=='ো' && CUni=='ু') CMod = 'ৌ';
	else if(LCUNI=='ৃ' && CUni=='র') CMod = 'ৃ';
	else if(LCUNI=='ঋ' && CUni=='ড়') CMod = 'ঋ';

	return CMod;
} // end function GetSomewhereinPhoneticModifiedCharaceter



/******************************************
	Determines whether its a bornosoft
	modifier character or not.

	Coded by : S M Mahbub Murshed
	Date: September 30, 2007
******************************************/
function IsBornosoftModifierCharaceter(CUni)
{
	if(CUni=='হ' || CUni=='`' 
	|| CUni=='~' )
		return true;
	return false;
} // end function IsSomewhereinPhoneticModifierCharaceter

/******************************************
	Modifies bornosoft characters

	Coded by : S M Mahbub Murshed
	Date: September 30, 2007
******************************************/
function GetBornosoftModifiedCharaceter(CUni)
{
	var CMod=CUni;

	if(LCUNI=='ক' && CUni=='হ') CMod = 'খ';
	else if(LCUNI=='গ' && CUni=='হ') CMod = 'ঘ';
	else if(LCUNI=='চ' && CUni=='হ') CMod = 'চ';
	else if(LCUNI=='জ' && CUni=='হ') CMod = 'ঝ';
	else if(LCUNI=='ট' && CUni=='হ') CMod = 'ঠ';
	else if(LCUNI=='ড' && CUni=='হ') CMod = 'ঢ';
	else if(LCUNI=='ত' && CUni=='হ') CMod = 'থ';
	else if(LCUNI=='দ' && CUni=='হ') CMod = 'ধ';
	else if(LCUNI=='প' && CUni=='হ') CMod = 'ফ';
	else if(LCUNI=='ব' && CUni=='হ') CMod = 'ভ';
	else if(LCUNI=='স' && CUni=='হ') CMod = 'শ';
	else if(LCUNI=='ড়' && CUni=='হ') CMod = 'ঢ়';

	else if(LCUNI=='ণ' && CUni=='গ') CMod = 'ঙ';
	else if(LCUNI=='ন' && CUni=='গ') CMod = 'ং';
	
	else if(LCUNI=='ণ' && CUni=='ঘ') CMod = 'ঞ';

	else if(LCUNI=='ণ' && CUni=='ণ') CMod = 'ঁ';

	else if(LCUNI=='ঃ' && CUni=='ঃ') CMod = 'ঃ';
	
	else if(LCUNI=='ট' && CUni=='ট') CMod = 'ৎ';
	
	else if(LCUNI=='া' && CUni=='ো') CMod = 'অ';
	else if(LCUNI=='ি' && CUni=='ি') CMod = 'ী';
	else if(LCUNI=='ই' && CUni=='ই') CMod = 'ঈ';
	else if(LCUNI=='ু' && CUni=='ু') CMod = 'ূ';
	else if(LCUNI=='উ' && CUni=='উ') CMod = 'ঊ';
	else if(LCUNI=='ও' && CUni=='ই') CMod = 'ঐ';
	else if(LCUNI=='ো' && CUni=='ি') CMod = 'ৈ';
	else if(LCUNI=='ও' && CUni=='উ') CMod = 'ঔ';
	else if(LCUNI=='ো' && CUni=='ু') CMod = 'ৌ';
	else if(LCUNI=='ৃ' && CUni=='র') CMod = 'ৃ';
	else if(LCUNI=='ঋ' && CUni=='ড়') CMod = 'ঋ';

	return CMod;
} // end function GetBornosoftModifiedCharaceter



/******************************************
	Determines whether its a avro force
	modifier character or not.

	Coded by : S M Mahbub Murshed
	Date: July 28, 2007
******************************************/
function IsAvorForced(C)
{
	if(C=='`' || C=='Y')
		return true;

	return false;
}

/******************************************
	Determines whether its a avro phonetic
	modifier character or not.

	Coded by : S M Mahbub Murshed
	Date: August 30, 2006
******************************************/
function IsAvroPhoneticModifierCharaceter(CUni)
{
/*
	if( IsBanglaSoroborno(CUni)
	|| CUni=='হ' || CUni=='গ' || CUni=='ঘ' || CUni=='ণ'
	|| CUni=='ঃ' || CUni=='ট'
	|| CUni=='ো' || CUni=='ি' 
	|| CUni=='ু'
	|| CUni=='র' || CUni=='ড়' || IsBanglaBanjonborno(CUni))
		return true;
*/
	if( CUni=='ঃ' || CUni=='ো' || CUni=='ি' || CUni=='ু' ||
	IsBanglaSoroborno(CUni)|| IsBanglaBanjonborno(CUni))
		return true;

	return false;
}



/******************************************
	For banjon + banjon returns appropriate
	combination according to avro layout

	Coded by : S M Mahbub Murshed
	Date: September 29, 2006
******************************************/
function GetAvroPhoneticBanjonBanjonEquivalent(CUni1, CUni2)
{
	var CMod = CUni2;

	if( (CUni1 == 'ক' && CUni2 == 'ক')||
	(CUni1 == 'ক' && CUni2 == 'খ') )
		CMod = '\u09CD' + CUni2;
	// CUni1 == 'ক' + CUni2 == 'খ'||
	return CMod;
}

/******************************************
	Retuns Modified phonetic characters according
	to avro layout

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
function GetAvroPhoneticModifiedCharaceter(C, CUni)
{
	// var statusLabel = document.getElementById("statuslabel");
	// var CUni= String.fromCharCode(LCUNI.charCodeAt(0)+1);
	var CMod=CUni;

	if(CUni!='হ' && Avro_Cha_Flag == true)
		Avro_Cha_Flag = false;

	if(LCUNI=='ক' && CUni=='হ') CMod = 'খ';
	else if(LCUNI=='গ' && CUni=='হ') CMod = 'ঘ';
	else if(LCUNI=='চ' && CUni=='হ' && Avro_Cha_Flag==false) { CMod = 'চ'; Avro_Cha_Flag = true; }
	else if(LCUNI=='চ' && CUni=='হ' && Avro_Cha_Flag==true) { CMod = 'ছ'; Avro_Cha_Flag = false; }
	else if(LCUNI=='জ' && CUni=='হ') CMod = 'ঝ';
	else if(LCUNI=='ট' && CUni=='হ') CMod = 'ঠ';
	else if(LCUNI=='ড' && CUni=='হ') CMod = 'ঢ';
	else if(LCUNI=='ত' && CUni=='হ') CMod = 'থ';
	else if(LCUNI=='দ' && CUni=='হ') CMod = 'ধ';
	else if(LCUNI=='প' && CUni=='হ') CMod = 'ফ';
	else if(LCUNI=='ব' && CUni=='হ') CMod = 'ভ';
	else if(LCUNI=='স' && CUni=='হ') CMod = 'শ';
	else if(LCUNI=='শ' && CUni=='হ') CMod = 'ষ';
	else if(LCUNI=='ড়' && CUni=='হ') CMod = 'ঢ়';

	else if(LCUNI=='ণ' && CUni=='গ') CMod = 'ঙ';
	else if(LCUNI=='ন' && CUni=='গ') CMod = 'ং';
	
	else if(LCUNI=='ণ' && CUni=='ঘ') CMod = 'ঞ';

	else if(LCUNI=='ঃ' && CUni=='ঃ') CMod = 'ঃ';
	
	else if(LCUNI=='ট' && CUni=='ট') CMod = 'ৎ';
	
	else if(LCUNI=='া' && CUni=='ো') CMod = 'অ';
	else if(LCUNI=='ি' && CUni=='ি') CMod = 'ী';
	else if(LCUNI=='ু' && CUni=='ু') CMod = 'ূ';
	else if(LCUNI=='উ' && CUni=='উ') CMod = 'ঊ';
	else if(LCUNI=='ও' && CUni=='ই') CMod = 'ঐ';
	else if(LCUNI=='ো' && CUni=='ি') CMod = 'ৈ';
	else if(LCUNI=='ও' && CUni=='উ') CMod = 'ঔ';
	else if(LCUNI=='ো' && CUni=='ু') CMod = 'ৌ';
	else if(LCUNI=='ৃ' && CUni=='র') CMod = 'ৃ';
	else if(LCUNI=='ঋ' && CUni=='ড়') CMod = 'ঋ';
	else if( (LCUNI=='র' || LCUNI=='ড়') && IsBanglaBanjonborno(CUni)) CMod = CUni;
	else if(CUni=='ঁ')
		CMod = CUni;
	else if(IsBanglaBanjonborno(LCUNI) && CUni=='অ' 
		&& Avro_A_Press_Flag == false) { Avro_A_Press_Flag = true; CMod = LCUNI; }
	else if(IsBanglaBanjonborno(LCUNI) && IsBanglaSoroborno(CUni)
		&& Avro_A_Press_Flag == true) { CMod = CUni; }
	else if(IsBanglaBanjonborno(LCUNI) && IsBanglaSoroborno(CUni))
		CMod = MapSorbornoToKar(CUni);
	else if(IsBanglaBanjonborno(LCUNI) && IsBanglaBanjonborno(CUni)
		&& Avro_A_Press_Flag == false)
		CMod = '\u09CD'+CUni;
	else if( (IsBanglaSoroborno(LCUNI) 
	|| IsBanglaKar(LCUNI) ) && CUni=='আ')
		CMod = 'য়া';
	else if(LCUNI==0 && CUni=='য়' && Avro_Forced==false)
		{ CMod = 'ইয়'; }
/*	else if(IsBanglaHalant(LCUNI) && IsBanglaSoroborno(CUni))
		{ CMod = MapKarToSorborno(CUni); } */
//	else if(LCUNI == CUni)
//		CMod = '\u09CD' + CUni;
	else if(LCUNI=='অ' && CUni=='অ') CMod = 'উ';
//	else if(LCUNI=='অ' && CUni=='ই') CMod = 'ঐ';
//	else if(LCUNI=='অ' && CUni=='ই') CMod = 'ঐ';
	else if(LCUNI=='া' && CUni=='অ') CMod = 'ও';
	else if(LCUNI=='এ' && CUni=='এ') CMod = 'ঈ';
	else if(LCUNI=='ে' && CUni=='এ') CMod = 'ী';
	else if(LCUNI=='ে' && CUni=='অ') CMod = 'ও';
	else if(LCUNI=='ও' && CUni=='ঈ') CMod = 'ঐ';
	else if(LCUNI=='ও' && CUni=='ঊ') CMod = 'ঔ';

	if(CUni !='অ' && CUni !='\u09CD' && Avro_A_Press_Flag == true)
		Avro_A_Press_Flag = false; 

	return CMod;
} // end function GetAvroPhoneticModifiedCharaceter






/******************************************
	Processes an unicode charater input

	\param C the ascii character to process
	\param K the keyboard code for the ascii character to process
	\param CUni the unicode character to process

	Coded by : S M Mahbub Murshed
	Date: Septmeber 05, 2006
******************************************/
function ProcessCharacter(field, C, K, CUni)
{
	if(KeyBoardLayout==AVROPHONETIC && 
	Avro_EnableDictionary==true && 
	AvroAutoCorrectDictionary[Avro_EnglishWord] != null)
	{
		NewTypedWord = AvroAutoCorrectDictionary[Avro_EnglishWord];
		RemoveNInsert(field, "" , Avro_BanglaWord.length);
		Avro_EnglishWord = "";
		Avro_BanglaWord = "";
		ResetKarModifier();

		for(i=0; i<NewTypedWord.length; i++)
		{
			C = NewTypedWord.charAt(i);
			K = NewTypedWord.charCodeAt(i);
			CUni = MapUnicodeCharacter(C);
			ProcessCharacter(field, C, K, CUni);
			LC = C;
		}
		// Avro_EnglishWord = NewTypedWord;
		return;
	}

	if(LCUNI ==0 && CUni =="্য")
	{
		RemoveNInsert(field, field.value.charAt(field.value.length-1) + "‌্য",1);
		ResetKarModifier();
		return;
	}


	// Skip if next kar is Post Kar
	if(IsBanglaPostKar(CUni))
		ResetKarModifier();

	// Skip numbers
	if(IsBanglaDigit(CUni))
		ResetKarModifier();

	if     (LCUNI=='অ' && CUni=='া')
	{
		RemoveNInsert(field, "আ",1); 
		ResetKarModifier();
	}
	else if (KeyBoardLayout != AVROPHONETIC && IsBanglaHalant(LCUNI) && IsBanglaKar(CUni)) { RemoveNInsert(field, MapKarToSorborno(CUni),1); ResetKarModifier(); }
	else if (IsBanglaHalant(LCUNI) && CUni=='।') { RemoveNInsert(field, '॥',1); ResetKarModifier(); }
	else if (KeyBoardLayout != UNIJOY && IsBanglaNukta(LCUNI) && IsBanglaPostKar(CUni)==true ) { RemoveNInsert(field, CUni+LCUNI,1); ResetKarModifier();}
	else if (KeyBoardLayout != UNIJOY && IsBanglaNukta(LCUNI) && IsBanglaFola(CUni)) { RemoveNInsert(field, CUni+LCUNI,1); ResetKarModifier(); }
	
	else if (KeyBoardLayout==BIJOY && IsBanglaPreKar(LC_KAR))
		KarModification(field, CUni);
	else if (KeyBoardLayout==SWIPHONETIC 
	&& IsSomewhereinPhoneticModifierCharaceter(CUni) 
	&& IsSpace(LCUNI)==false) 
	{
		var CMod = GetSomewhereinPhoneticModifiedCharaceter(CUni);
		if(CMod != CUni) {
			CUni = CMod; 
			RemoveNInsert(field, CUni,1); 
			ResetKarModifier();
		}
		else Insert(field, CUni);
	}
	else if (KeyBoardLayout==BORNOSOFTACCENT 
	&& IsBornosoftModifierCharaceter(CUni) 
	&& IsSpace(LCUNI)==false) 
	{
		var CMod = GetBornosoftModifiedCharaceter(CUni);
		if(CMod != CUni) {
			CUni = CMod; 
			RemoveNInsert(field, CUni,1); 
			ResetKarModifier();
		}
		else Insert(field, CUni);
	}
	else if (KeyBoardLayout==AVROPHONETIC /*&& IsAvroPhoneticModifierCharaceter(CUni)*/ /*&& IsSpace(LCUNI)==false*/) 
	{
		var CMod = GetAvroPhoneticModifiedCharaceter(C, CUni);
		if(CMod != CUni ) {
			if(IsBanglaBanjonborno(LCUNI) && CUni=='হ')
				{ RemoveNInsert(field, CMod,1); }
			else if(IsBanglaBanjonborno(LCUNI) && IsBanglaBanjonborno(CUni))
				{ Insert(field, CMod); }
			else if(IsBanglaKar(LCUNI) && IsBanglaSoroborno(CUni))
				{ Insert(field, CMod); }
			else if(CMod == MapSorbornoToKar(CUni)) 
				{ Insert(field, CMod);}
			else
				{ RemoveNInsert(field, CMod,1); }
				
			CUni = CMod.charAt(CMod.length-1);
			ResetKarModifier();
		}
		else if(IsBanglaHalant(LCUNI) && IsBanglaSoroborno(CUni)) {
			RemoveNInsert(field, CUni,1);
		}
		else if(IsBanglaSoroborno(LCUNI) && IsBanglaHalant(CUni)) {			
			RemoveNInsert(field, MapSorbornoToKar(LCUNI),1);
		}
		else Insert(field, CUni);
	}
	/*
		Allow ref modification for unijoy
		Modified June 03, 2007 by Mahbub
	*/
	// else if (KeyBoardLayout != UNIJOY && CUni=="র্")
	else if (CUni=="র্") 
		RefModification(field);
	else if (KeyBoardLayout != UNIJOY && CUni=='া') 
		OAndOuKarModification(field, 'ো', 'া') ;
	else if (KeyBoardLayout != UNIJOY && CUni=='ৗ') 
		OAndOuKarModification(field, 'ৌ', 'ৗ') ;
	// else if(CUni == '‌' || CUni == '‍' ) { Insert(field, CUni);}
	else if (K>29) { Insert(field, CUni); }
	else if (K==13 && IE) { Insert(field, CUni); }


	if( (IsBanglaHalant(LCUNI)==false && IsBanglaPreKar(CUni)))
		LC_KAR=CUni;

	if (!(IsBanglaNukta(LCUNI) && IsBanglaFola(CUni)))
	{
		LCUNI=CUni;
	}
} // end function ProcessCharacter





/******************************************
	Handles javascript keydown event

	\param ev the event

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
function KeyBoardDown(ev)
{
	var field;
	if(IE)
		field = ev.srcElement;
	else
		field = ev.target;

	var K = (window.event) ? event.keyCode : ev.which;
	var C = String.fromCharCode(K);

	if(K==27 /*ESC*/)
		{ EnglishKeyboard = !EnglishKeyboard; ChangeKeyboarLayoutStatus(); }

	// Skip special characters
	if( (K >= 8 && K <= 13) 
	|| K==27 /*ESC*/ || K==32 /*SPACE*/ || K==46/*DEL*/ 
	|| (K>=37 && K<=40)/*ARROWS*/ )
	{
		LCUNI = 0;
		ResetKarModifier();

		// reset avro keyboard flags
		Avro_Cha_Flag = false;
		Avro_A_Press_Flag = false;
		Avro_EnglishWord = "";
		Avro_BanglaWord = "";
	}


	if(ev.altKey && ev.ctrlKey && (C=='E'||C=='e'))
		{ KeyBoardLayout = ENGLISH; ChangeKeyboarLayoutStatus(); }
	else if(ev.altKey && ev.ctrlKey && (C=='B'||C=='b'))
		{ KeyBoardLayout = (KeyBoardLayout==BIJOY?ENGLISH:BIJOY); ChangeKeyboarLayoutStatus(); }
	else if(ev.altKey && ev.ctrlKey && (C=='U'||C=='u'))
		{ KeyBoardLayout = (KeyBoardLayout==UNIJOY?ENGLISH:UNIJOY); ChangeKeyboarLayoutStatus(); }
	else if(ev.altKey && ev.ctrlKey && (C=='V'||C=='v'))
		{ KeyBoardLayout = (KeyBoardLayout==PROBHAT?ENGLISH:PROBHAT); ChangeKeyboarLayoutStatus(); }
	else if(ev.altKey && ev.ctrlKey && (C=='P'||C=='p'))
		{ KeyBoardLayout = (KeyBoardLayout==SWIPHONETIC?ENGLISH:SWIPHONETIC); ChangeKeyboarLayoutStatus(); }
	else if(ev.altKey && ev.ctrlKey && (C=='A'||C=='a'))
		{ KeyBoardLayout = (KeyBoardLayout==AVROPHONETIC?ENGLISH:AVROPHONETIC); ChangeKeyboarLayoutStatus(); }
	else if(ev.altKey && ev.ctrlKey && (C=='O'||C=='o'))
		{ KeyBoardLayout = (KeyBoardLayout==BORNOSOFTACCENT?ENGLISH:BORNOSOFTACCENT); ChangeKeyboarLayoutStatus(); }
	
	if(K==27)
		return false;

	return true;
} // end function KeyBoardDown








/******************************************
	Handles javascript keypress event

	\param ev the event

	Coded by : Arup Kamal, S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
function KeyBoardPress(ev)
{
	var field;
	if(IE)
		field = ev.srcElement;
	else
		field = ev.target;

	var K = (window.event) ? event.keyCode : ev.which;
	var C = String.fromCharCode(K);

	if(ev.altKey && ev.ctrlKey && (C=='E'||C=='e'))
		return false;
	else if(ev.altKey && ev.ctrlKey && (C=='B'||C=='b'))
		return false;
	else if(ev.altKey && ev.ctrlKey && (C=='P'||C=='p'))
		return false;
	else if(ev.altKey && ev.ctrlKey && (C=='A'||C=='a'))
		return false;
	else if(ev.altKey && ev.ctrlKey && (C=='U'||C=='u'))
		return false;
	else if(ev.altKey && ev.ctrlKey && (C=='V'||C=='v'))
		return false;
	else if(ev.altKey && ev.ctrlKey && (C=='O'||C=='o'))
		return false;

	else if(ev.ctrlKey || ev.altKey)
		return true;

	if(KeyBoardLayout == ENGLISH || EnglishKeyboard==true)
		{ return true; }


	var CUni = "";
	CUni = MapUnicodeCharacter(C);
	if(CUni == null)
		return true;

	Avro_EnglishWord =  Avro_EnglishWord + C;

	var statusLabel = document.getElementById("statuslabel");
	if(statusLabel!=null) {
		if(resource != null)
			statusLabel.innerHTML 
			= resource["statuslabel"] + " " + 			Avro_EnglishWord + " (" + LC + " - " + C + " => " + LCUNI + " - " + CUni + ")";
		else
			statusLabel.innerHTML 
			= "যে চাবি টেপা হয়েছে - " + Avro_EnglishWord 
			+ "(" + LC + " - " + C + ")";
	}

	ProcessCharacter(field, C, K, CUni);

	if (IE) 
		event.keyCode=0;
	LC = C;

	if (K>29) return false;

	return true;
} // end function KeyBoardPress

