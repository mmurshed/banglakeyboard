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




	Contains function to convert
	ASCII based text to unicode.

	To convert call
	ConvertToUnicode(ConvertFrom, line)
	where 	'ConvertFrom' is the string representing convert from ASCII input,
			   "bijoy" - To convert from bijoy
			   "somewherein" - To convert from somewhere-in-blog text
			   "boisakhi" - To convert from boisakhi
	and 'line' The ASCII encoded string


	Author: S M Mahbub Murshed
	Copyright: S M Mahbub Murshed
	Email: udvranto@yahoo.com
	Version: 1.2.0
	Date: September 06, 2006, XX:XX GMT
*******************************************/





/******************************************
	Array containing ASCII to Unicode map 
	for bijoy
*******************************************/
var bijoy_string_conversion_map = {
	// <JUKTAKHKHOR>
	"i¨":"\u09B0\u200C\u09CD\u09AF", // র‌্য
	"ª¨":"্র্য",
	"¤cÖ":"ম্প্র",
	"²":"ক্ষ্ম",
	"°":"ক্ক",
	"±":"ক্ট",
	"³":"ক্ত",
	"K¡":"ক্ব",
	"¯Œ":"স্ক্র",
	"µ":"ক্র",
	"K¬":"ক্ল",
	"¶":"ক্ষ",
	"ÿ":"ক্ষ",
	"·":"ক্স",
	"¸":"গু",
	"»":"গ্ধ",
	"Mœ":"গ্ন",
	"M¥":"গ্ম",
	"M­":"গ্ল",
	"Mø":"গ্ল",
	"¼":"ঙ্ক",
	"•¶":"ঙ্ক্ষ",
	"•L":"ঙ্খ",
	"½":"ঙ্গ",
	"•N":"ঙ্ঘ",
	"•":"ক্স",
	"”Q¡":"চ্ছ্ব",
	"”Q¦":"চ্ছ্ব",
	"”P":"চ্চ",
	"”Q":"চ্ছ",
	"”T":"চ্ঞ",
	"¾¡":"জ্জ্ব",
	"¾":"জ্জ",
	"À":"জ্ঝ",
	"Á":"জ্ঞ",
	"R¡":"জ্ব",
	"Â":"ঞ্চ",
	"Ã":"ঞ্ছ",
	"Ä":"ঞ্জ",
	"Å":"ঞ্ঝ",
	"Æ":"ট্ট",
	"U¡":"ট্ব",
	"U¥":"ট্ম",
	"Ç":"ড্ড",
	"È":"ণ্ট",
	"É":"ণ্ঠ",
	"Ý":"ন্স",
	"Ê":"ণ্ড",
	"š‘":"ন্তু",
	"Y\\^":"ণ্ব",
	"Ë¡":"ত্ত্ব",
	"Ë":"ত্ত",
	"Ì":"ত্থ",
	"Z¥":"ত্ম",
	"š—¡":"ন্ত্ব",
	"Z¡":"ত্ব",
	"Î":"ত্র",
	"_¡":"থ্ব",
	"›Ø":"ন্দ্ব",
	"˜M":"দ্গ",
	"˜N":"দ্ঘ",
	"Ï":"দ্দ",
	"×":"দ্ধ",
	"˜¡":"দ্ব",
	"Ø":"দ্ব",
	"™¢":"দ্ভ",
	"Ù":"দ্ম",
	"`ª“":"দ্রু",
	"aŸ":"ধ্ব",
	"a¥":"ধ্ম",
	"›U":"ন্ট",
	"Ú":"ন্ঠ",
	"Û":"ন্ড",
	"šÍ":"ন্ত",
	"š—":"ন্ত",
	"š¿":"ন্ত্র",
	"š’":"ন্থ",
	"›`":"ন্দ",
	"Ü":"ন্ধ",
	"bœ":"ন্ন",
	"š\\^":"ন্ব",
	"b¥":"ন্ম",
	"Þ":"প্ট",
	"ß":"প্ত",
	"cœ":"প্ন",
	"à":"প্প",
	"cø":"প্ল",
	"c­":"প্ল",
	"á":"প্স",
	"d¬":"ফ্ল",
	"â":"ব্জ",
	"ã":"ব্দ",
	"ä":"ব্ধ",
	"eŸ":"ব্ব",
	"e­":"ব্ল",
	"eø":"ব্ল",
	"å“":"ভ্রু",
	"å":"ভ্র",
	"gœ":"ম্ন",
	"¤ú":"ম্প",
	"ç":"ম্ফ",
	"¤\\^":"ম্ব",
	"¤¢":"ম্ভ",
	"¤£":"ম্ভ্র",
	"¤§":"ম্ম",
	"¤­":"ম্ল",
	"¤ø":"ম্ল",
	"i“":"রু",
	"iæ":"রু",
	"iƒ":"রূ",
	"é":"ল্ক",
	"ê":"ল্গ",
	"ë":"ল্ট",
	"ì":"ল্ড",
	"í":"ল্প",
	"î":"ল্ফ",
	"j¦":"ল্ব",
	"j¥":"ল্ম",
	"j­":"ল্ল",
	"jø":"ল্ল",
	"ï":"শু",
	"ð":"শ্চ",
	"kœ":"শ্ন",
	"k¦":"শ্ব",
	"k¥":"শ্ম",
	"k­":"শ্ল",
	"kø":"শ্ল",
	"®‹":"ষ্ক",
	"®Œ":"ষ্ক্র",
	"ó":"ষ্ট",
	"ô":"ষ্ঠ",
	"ò":"ষ্ণ",
	"®ú":"ষ্প",
	"õ":"ষ্ফ",
	"®§":"ষ্ম",
	"¯‹":"স্ক",
	"÷":"স্ট",
	"ö":"স্খ",
	"¯—":"স্ত",
	"¯Í":"স্ত",
	"¯‘":"স্তু",
	"¯¿":"স্ত্র",
	"¯’":"স্থ",
	"mœ":"স্ন",
	"¯ú":"স্প",
	"ù":"স্ফ",
	"¯\\^":"স্ব",
	"¯§":"স্ম",
	"¯­":"স্ল",
	"¯ø":"স্ল",
	"û":"হু",
	"nè":"হ্ণ",
	"nŸ":"হ্ব",
	"ý":"হ্ন",
	"þ":"হ্ম",
	"n¬":"হ্ল",
	"ü":"হৃ",
	"©":"র্",

	// <VOWELS>
	"Av":"আ",
	"A":"অ",
	"B":"ই",
	"C":"ঈ",
	"D":"উ",
	"E":"ঊ",
	"F":"ঋ",
	"G":"এ",
	"H":"ঐ",
	"I":"ও",
	"J":"ঔ",

	// <CONSONANTS>
	"K":"ক",
	"L":"খ",
	"M":"গ",
	"N":"ঘ",
	"O":"ঙ",
	"P":"চ",
	"Q":"ছ",
	"R":"জ",
	"S":"ঝ",
	"T":"ঞ",
	"U":"ট",
	"V":"ঠ",
	"W":"ড",
	"X":"ঢ",
	"Y":"ণ",
	"Z":"ত",
	"_":"থ",
	"`":"দ",
	"a":"ধ",
	"b":"ন",
	"c":"প",
	"d":"ফ",
	"e":"ব",
	"f":"ভ",
	"g":"ম",
	"h":"য",
	"i":"র",
	"j":"ল",
	"k":"শ",
	"l":"ষ",	
	"m":"স",
	"n":"হ",
	"o":"ড়",
	"p":"ঢ়",
	"q":"য়",
	"r":"ৎ",

	// <DIGITS>
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

	// Kars
	"v":"া",
	"w":"ি",
	"x":"ী",
	"y":"ু",
	"z":"ু",
	"æ":"ু",
	"~":"ূ",
	"‚":"ূ",
	"„":"ৃ",
	"‡":"ে",
	"†":"ে",
	"‰":"ৈ",
	"\\ˆ":"ৈ",
	 "Š":"ৗ",

	// signs
	"Ð":"-",
	"Ô":"‘",
	"Õ":"’",
	"\\|":"।",
	"\\\\":"॥",
	"Ò":"“",
	"Ó":"”",
	 
	 // Complex
 	"s":"ং",
 	"t":"ঃ",
	"u":"ঁ",
	"ª":"্র",
	"Ö":"্র",
	"«":"্র",
	"¨":"্য",
	"\\&":"্",
	"…":"ৃ"
}; // end bijoy_string_conversion_map
/******************************************/





/******************************************
	Array containing ASCII to Unicode map 
	for somewhere-in-text
*******************************************/
var somewherein_string_conversion_map = {
	// <JUKTAKHKHOR>
	"i¨":"\u09B0\u200C\u09CD\u09AF", // র‌্য
	"ª¨":"্র্য",
	"¤cÖ":"ম্প্র",
	"²":"ক্ষ্ম",
	"°":"ক্ক",
	"±":"ক্ট",
	"³":"ক্ত",
	"K¡":"ক্ব",
	"¯Œ":"স্ক্র",
	"µ":"ক্র",
	"K¬":"ক্ল",
	"¶":"ক্ষ",
	"·":"ক্স",
	"¸":"গু",
	"»":"গ্ধ",
	"Mœ":"গ্ন",
	"M¥":"গ্ম",
	"M­":"গ্ল",
	"¼":"ঙ্ক",
	"•¶":"ঙ্ক্ষ",
	"•L":"ঙ্খ",
	"½":"ঙ্গ",
	"•N":"ঙ্ঘ",
	"•":"ক্স",
	"”Q¡":"চ্ছ্ব",
	"”P":"চ্চ",
	"”Q":"চ্ছ",
	"”T":"চ্ঞ",
	"¾¡":"জ্জ্ব",
	"¾":"জ্জ",
	"À":"জ্ঝ",
	"Á":"জ্ঞ",
	"R¡":"জ্ব",
	"Â":"ঞ্চ",
	"Ã":"ঞ্ছ",
	"Ä":"ঞ্জ",
	"Å":"ঞ্ঝ",
	"Æ":"ট্ট",
	"U¡":"ট্ব",
	"U¥":"ট্ম",
	"Ç":"ড্ড",
	"È":"ণ্ট",
	"É":"ণ্ঠ",
	"Ý":"ন্স",
	"Ê":"ণ্ড",
	"š‘":"ন্তু",
	"Y\\^":"ণ্ব",
	"Ë¡":"ত্ত্ব",
	"Ë":"ত্ত",
	"Ì":"ত্থ",
	"Z¥":"ত্ম",
	"š—¡":"ন্ত্ব",
	"Z¡":"ত্ব",
	"Î":"ত্র",
	"_¡":"থ্ব",
	"›Ø":"ন্দ্ব",
	"˜M":"দ্গ",
	"˜N":"দ্ঘ",
	"Ï":"দ্দ",
	"×":"দ্ধ",
	"˜¡":"দ্ব",
	"Ø":"দ্ব",
	"™¢":"দ্ভ",
	"Ù":"দ্ম",
	"`ª“":"দ্রু",
	"aŸ":"ধ্ব",
	"a¥":"ধ্ম",
	"›U":"ন্ট",
	"Û":"ন্ড",
        "šÍ":"ন্ত",
	"š—":"ন্ত",
	"š¿":"ন্ত্র",
	"š’":"ন্থ",
	"›`":"ন্দ",
	"Ü":"ন্ধ",
	"bœ":"ন্ন",
	"š\\^":"ন্ব",
	"b¥":"ন্ম",
	"Þ":"প্ট",
	"ß":"প্ত",
	"cœ":"প্ন",
	"à":"প্প",
	"cø":"প্ল",
	"c­":"প্ল",
	"á":"প্স",
	"d¬":"ফ্ল",
	"â":"ব্জ",
	"ã":"ব্দ",
	"ä":"ব্ধ",
	"eŸ":"ব্ব",
	"e­":"ব্ল",
	"å“":"ভ্রু",
	"å":"ভ্র",
	"gœ":"ম্ন",
	"¤ú":"ম্প",
	"ç":"ম্ফ",
	"¤\\^":"ম্ব",
	"¤¢":"ম্ভ",
	"¤£":"ম্ভ্র",
	"¤§":"ম্ম",
	"¤­":"ম্ল",
	"i“":"রু",
	"iæ":"রু",
	"iƒ":"রূ",
	"é":"ল্ক",
	"ê":"ল্গ",
	"ë":"ল্ট",
	"ì":"ল্ড",
	"í":"ল্প",
	"î":"ল্ফ",
	"j¦":"ল্ব",
	"j¥":"ল্ম",
	"j­":"ল্ল",
	"ï":"শু",
	"ð":"শ্চ",
	"kœ":"শ্ন",
	"k¦":"শ্ব",
	"k¥":"শ্ম",
	"k­":"শ্ল",
	"®‹":"ষ্ক",
	"®Œ":"ষ্ক্র",
	"ó":"ষ্ট",
	"ô":"ষ্ঠ",
	"ò":"ষ্ণ",
	"®ú":"ষ্প",
	"õ":"ষ্ফ",
	"®§":"ষ্ম",
	"¯‹":"স্ক",
	"÷":"স্ট",
	"ö":"স্খ",
	"¯—":"স্ত",
	"¯‘":"স্তু",
	"¯¿":"স্ত্র",
	"¯’":"স্থ",
	"mœ":"স্ন",
	"¯ú":"স্প",
	"ù":"স্ফ",
	"¯\\^":"স্ব",
	"¯§":"স্ম",
	"¯­":"স্ল",
	"nè":"হ্ণ",
	"nŸ":"হ্ব",
	"ý":"হ্ন",
	"þ":"হ্ম",
	"û":"হু",
	"n¬":"হ্ল",
	"ü":"হৃ",
	"©":"র্",

	// <VOWELS>
	"Av":"আ",
	"A":"অ",
	"B":"ই",
	"C":"ঈ",
	"D":"উ",
	"E":"ঊ",
	"F":"ঋ",
	"G":"এ",
	"H":"ঐ",
	"I":"ও",
	"J":"ঔ",

	// <CONSONANTS>
	"K":"ক",
	"L":"খ",
	"M":"গ",
	"N":"ঘ",
	"O":"ঙ",
	"P":"চ",
	"Q":"ছ",
	"R":"জ",
	"S":"ঝ",
	"T":"ঞ",
	"U":"ট",
	"V":"ঠ",
	"W":"ড",
	"X":"ঢ",
	"Y":"ণ",
	"Z":"ত",
	"_":"থ",
	"`":"দ",
	"a":"ধ",
	"b":"ন",
	"c":"প",
	"d":"ফ",
	"e":"ব",
	"f":"ভ",
	"g":"ম",
	"h":"য",
	"i":"র",
	"j":"ল",
	"k":"শ",
	"l":"ষ",
	"m":"স",
	"n":"হ",
	"o":"ড়",
	"p":"ঢ়",
	"q":"য়",
	"r":"ৎ",

	// <DIGITS>
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

	// Kars
	"v":"া",
	"w":"ি",
	"x":"ী",
	"y":"ু",
	"z":"ু",
	"~":"ূ",
	"„":"ৃ",
	"‡":"ে",
	"†":"ে",
	"‰":"ৈ",
	"\\ˆ":"ৈ",
	"Š":"ৗ",
	 
	 // Complex
 	"s":"ং",
 	"t":"ঃ",
	"u":"ঁ",
	"ª":"্র",
	"Ö":"্র",
	"«":"্র",
	"¨":"্য",
	"…":"ৃ",

	// signs
	"Ô":"‘",
	"Õ":"’",
	"\\|":"।",
	"\\\\":"॥",
	"\\&":"্",
	"Ò":"“",
	"Ó":"”"

}; // end somewherein_string_conversion_map
/******************************************/





/******************************************
	Array containing ASCII to Unicode map 
	for boisakhi
*******************************************/
var boisakhi_string_conversion_map = {
	// <JUKTAKHKHOR>
	"kø":"\u09B0\u200C\u09CD\u09AF", // র‌্য
	"Ûø":"্র্য",
	"qô":"ক্ষ্ম",
	"~":"ক্ক",
	"ƒ":"ক্ট",
	"£ß":"ক্ত",
	"Kò":"ক্ব",
	"Ç":"স্ক্র",
	"¢ß":"ক্র",
	"q":"ক্ষ",
	"…":"ক্স",
	"•":"ক্স",
	"Kõ":"ক্ল",
	"†":"গু",
	"‡":"গ্গ",
	"ˆ":"গ্ধ",
	"Mí":"গ্ন",
	"Mô":"গ্ম",
	"Mö":"গ্ল",
	"‰":"ঙ্ক",
	"áq":"ঙ্ক্ষ",
	"áL":"ঙ্খ",
	"Š":"ঙ্গ",
	"áN":"ঙ্ঘ",
	"âQò":"চ্ছ্ব",
	"âP":"চ্চ",
	"âQ":"চ্ছ",
	"Œò":"জ্জ্ব",
	"Œ":"জ্জ",
	"š":"জ্ঞ",
	"Rò":"জ্ব",
	"é":"ঞ্চ",
	"˜":"ঞ্ছ",
	"™":"ঞ্জ",
	"ã":"ঞ্ঝ",
	"›":"ট্ট",
	"Uò":"ট্ব",
	"Uô":"ট্ম",
	"œ":"ড্ড",
	"Ÿ":"ণ্ঠ",
	"Ý":"ন্স",
	"¡":"ণ্ড",
	"š‘":"ন্তু",
	"ìç":"ন্তু",
	"ìÿ":"ন্থ",
	"Yð":"ণ্ব",
	"ª":"ন্ঠ",
	"£ò":"ত্ত্ব",
	"¤":"ত্থ",
	"Zí":"ত্ন",
	"£ô":"ত্ম",
	"Zô":"ত্ম",
	"£":"ত্ত",
	"Zò":"ত্ব",
	"¢":"ত্র",
	"aò":"থ্ব",
	"ë§":"ন্দ্ব",
	"¥":"দ্দ",
	"¦":"দ্ধ",
	"§":"দ্ব",
	"¨":"দ্ভ",
	"bô":"দ্ম",
	"cµ":"ধ্ব",
	"ëU":"ন্ট",
	"åU":"ন্ট",
	"«":"ন্ড",
	"ìæ":"ন্ত",
	"ìòæ":"ন্ত্ব",
	"ìè":"ন্ত্র",
	"ëb":"ন্দ",
	"¬":"ন্ধ",
	"ëc":"ন্ধ",
	"Ò":"ন্ন",
	"dí":"ন্ন",
	"ìñ":"ন্ব",
	"dô":"ন্ম",
	"ëo":"ন্স",
	"ïU":"প্ট",
	"®":"প্ত",
	"eí":"প্ন",
	"¯":"প্প",
	"eö":"প্ল",
	"eõ":"প্ল",
	"d¬":"ফ্ল",
	"fõ":"ফ্ল",
	"±":"ব্জ",
	"²":"ব্দ",
	"³":"ব্ধ",
	"gµ":"ব্ব",
	"gö":"ব্ল",
	"gõ":"ব্ল",
	"»":"ম্ভ্র",
	"ó¸":"ম্ভ্র",
	"¸":"ভ্র",
	"ií":"ম্ন",
	"óe":"ম্প",
	"óf":"ম্ফ",
	"¹":"ম্ব",
	"º":"ম্ভ",
	"ói":"ম্ম",
	"óö":"ম্ল",
//	"kØ":"রু",
//	"kÕ":"রূ",
	"¿":"ল্ক",
	"ùM":"ল্গ",
	"ùU":"ল্ট",
	"À":"ল্ড",
	"ùe":"ল্প",
	"ùf":"ল্ফ",
	"lð":"ল্ব",
	"lô":"ল্ম",
	"Á":"ল্ল",
	"lö":"ল্ল",
	"lõ":"ল্ল",
	"Â":"শু",
	"úP":"শ্চ",
	"mí":"শ্ন",
	"mð":"শ্ব",
	"mô":"শ্ম",
	"mö":"শ্ল",
	"ûK":"ষ্ক",
	"û¢ß":"ষ্ক্র",
	"Ä":"ষ্ট",
	"Å":"ষ্ঠ",
	"ûe":"ষ্প",
	"üf":"ষ্ফ",
	"ûô":"ষ্ম",
	"Æ":"স্ক",
	"ýL":"স্খ",
	"ýU":"স্ট",
	"þU":"স্ট",
	"þÿ":"স্খ",
	"þæ":"স্ত",
	"þç":"স্তু",
	"þè":"স্ত্র",
	"þí":"স্ন",
	"oí":"স্ন",
	"þe":"স্প",
	"ýf":"স্ফ",
	"È":"স্ব",
	"þñ":"স্ব",
	"þô":"স্ম",
	"É":"হু",
	"pî":"হ্ণ",
	"pµ":"হ্ব",
	"pß":"হ্ন",
	"Ê":"হ্ম",
	"n¬":"হ্ল",
	"põ":"হ্ল",
	"pÕ":"হৃ",
	"ò":"ব",

	// <VOWELS>
	"Aw":"আ",
	"A":"অ",
	"B":"ই",
	"C":"ঈ",
	"D":"উ",
	"E":"ঊ",
	"F":"ঋ",
	"G":"এ",
	"H":"ঐ",
	"I":"ও",
	"J":"ঔ",

	// <CONSONANTS>
	"K":"ক",
	"L":"খ",
	"M":"গ",
	"N":"ঘ",
	"O":"ঙ",
	"P":"চ",
	"Q":"ছ",
	"R":"জ",
	"S":"ঝ",
	"T":"ঞ",
	"U":"ট",
	"V":"ঠ",
	"W":"ড",
	"X":"ঢ",
	"Y":"ণ",
	"Z":"ত",
	"¤":"থ",
	"b":"দ",
	"c":"ধ",
	"d":"ন",
	"e":"প",
	"f":"ফ",
	"g":"ব",
	"h":"ভ",
	"i":"ম",
	"j":"য",
	"k":"র",
	"l":"ল",
	"m":"শ",
	"n":"ষ",
	"o":"স",
	"p":"হ",
	"r":"ড়",
	"s":"ঢ়",
	"t":"য়",
	"a":"থ",
	"u":"ৎ",

	// <DIGITS>
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

	// Kars
	"w":"া",
	"x":"ি",
	"y":"ী",
	"×":"ু",
	"Ö":"ু",
	"Ø":"ু",
	"Ô":"ূ",
	"Õ":"ূ",
	"Ó":"ূ",
	"Ù":"ৃ",
	"Ú":"ৃ",
	"Ë":"ে",
	"Ì":"ে",
	"Ð":"ৈ",
	"Ñ":"ৈ",
	"\\ˆ":"ৈ",
	"#":"ৗ",

	// signs
	"„":"।",
	"z":"্",
	 
	 // Complex
 	"v":"ং",
	"\\^":"ঁ",
	"Þ":"্র",
	"Û":"্র",
	"ê":"র্",
	"ø":"্য"
}; // end boisakhi_string_conversion_map
/******************************************/






/******************************************
	Array containing ASCII to Unicode map 
	for bangsee
*******************************************/
var bangsee_string_conversion_map = {
	// <JUKTAKHKHOR>
	"ਠઙ":"ক্র",
	// "એઐ":"স্থ",
	"ਡઙ":"ক্ত",
	"রઘ":"র\u200C্য",

	// "�":"ন্ঠ",
	"੍":"স্ক্র",
	"ਊ":"গু",
	"ੂ":"শু",
	"ੌ":"স্ক",
	"ਔ":"ঙ্গ",
	"ਓ":"ঙ্ক",
	"ੋ":"ষ্ঠ",
	"ੈ":"ষ্ট",
	"੬":"ত্র",
	"ਠ":"ত্র",
	"ਉ":"ক্ষ",
	"ਙ":"ঞ্জ",
	"ਣ":"দ্দ",
	"ਮ":"প্ত",
	"ਡ":"ত্ত",
	"ਦ":"দ্ব",
	"ਤ":"দ্ধ",
	"ਫ":"ন্ড",
	"ਟ":"ণ্ড",
	"ਹ":"ম্ব",
	"਼":"ম্ভ",
	"੫":"তু",
	"ਢ":"ত্থ",
	"ਛ":"জ্ঞ",
	"ਕ":"জ্জ",
	"ਬ":"ন্ধ",
	"ਜ":"ট্ট",
	"ਞ":"ন্ঠ",
	"ੀ":"ল্ড",
	"ਈ":"ক্স",
	"ਟ":"ন্ড",
	"ਇ":"ক্ট",
	"ਨ":"দ্র",
	"ਲ਼":"ব্দ",
	"ੁ":"ল্ল",
	"ਖ਼":"স্ব",
	"ਭ":"ন্ন",
	"ਗ਼":"হু",
	"ਗ":"ঞ্চ",
	"ઊ":"ষ্ক",
	"ੜ":"ড়্গ",
	"ਝ":"ড্ড",
	"ਸ":"ভ্র",
	"ਿ":"ল্ক",
	"ਰ":"ফ্র",
	"ਐ":"গ্ধ",
	"ਯ":"প্প",
	"ਧ":"দ্ভ",
	"ਵ":"ব্ধ",
	"ਘ":"ঞ্ছ",
	"ষ੨":"ষ্ণ",


	// <VOWELS>

	// <CONSONANTS>
	"੪":"ত",
	"ਅ":"ৎ",
	"়":".",

	// <DIGITS>
	"ঌ":"৯",

	// Kars
	"ઓ":"ু",
	"ક":"ু",
	// "ઔ":"ূ",
	"ઔ":"ু",
	"ো":"ে",
	"ৌ":"ৈ",
	"ৄ":"ৃ",

	// signs
	"৷":"।",
	"�":"\"",
	"৴":"\,",
	"৶":"?",
	"৸":"\'",
	"৹":"\'",
	"৲":"!",
	"৵":"\;",

	 // Complex
	"ખ":"ূ",
	"੦":"ঙ্",
	"੯":"ন্",
	"ੰ":"ন্",
	"੩":"ণ্",
	"ੱ":"্ন",
	"ઙ":"্ন",
	"ઃ":"ম্",
	"અ":"্ম",
	"ੳ":"প্",
	"੧":"চ্",
	"ં":"্ব",
	"ઁ":"্ব",
	"ਸ਼":"্ব",
	"ੴ":"্ব",
	// "�":"্ব",
	"આ":"্ল",
	"ઇ":"্ল",
	"ઈ":"ল্",
	"ઐ":"্থ",
	"ઝ":"্র",
	"ઉ":"শ্",
	"ચ":"্র",
	"છ":"্র",
	"ગ":"র্",
	"એ":"স্",
	"ઍ":"স্",
	"ઘ":"্য"
}; // end bangsee_string_conversion_map
/******************************************/





/******************************************
	Array containing ASCII to Unicode map 
	for bornsoft
*******************************************/
var bornosoft_string_conversion_map = {
	// <JUKTAKHKHOR>
	"rY":"\u09B0\u200C\u09CD\u09AF", // র‌্য
	"ü":"ক্ষ্ম",
	"¹¡":"ক্ত",
	"¹":"ত্ত",
	"q":"ক্ক",
	"º¡":"ক্র",
	"£":"ক্ল",
	"Q":"ক্ষ",
	"¤":"ক্স",
	"¢":"ক্ট",
	"§":"গু",
	"«":"ঙ্ক",
	"˜":"ঙ্গ",
	"°":"জ্জ",
	"¯":"জ্ঞ",
	"´":"ট্ট",
	"\\‚":"ঞ্চ",
	"²":"ঞ্জ",
	"Ç¼":"ন্তু",
	"¼":"তু",
	"¾":"ত্থ",
	"º":"ত্র",
	"À":"দ্দ",
	"ÆÅ":"ন্দ্র",
	"Á":"দ্ধ",
	"Ã":"দ্ব",
	"Ä":"দ্ভ",
	"Å":"দ্র",
	"¸":"ন্ড",
	"µ":"ড্ড",
	"½":"ত্র",
	"Çù":"ন্থ",
	"É":"ন্ধ",
	"Ê":"ন্ন",
	"Ë":"ণ্ঠ",
	"Ð":"প্ত",
	"Ñ":"প্প",
	"Ö":"ব্জ", 
	"Ò":"ফ্র",
	"×":"ব্দ",
	"Ø":"ব্ধ",
	"Ù":"ভ্র",
	"Ü":"ম্ব",
	"Ý":"ম্ভ",
	"Ú":"ম্ম",
	"L":"ল্ল",
	"ì":"শু",
	"ï":"ষ্ক",
	"ñ":"ষ্ট",
	"ò":"ষ্ঠ",
	"ô":"স্ক",
	"ö":"স্ট",
	"ó»":"স্ত",
	"óù":"স্থ",
	"÷":"স্ব",
	"û":"হু",

	// <VOWELS>
	"V":"আ",
	"A":"অ",
	"†":"ই",
	"‰":"ঈ",
	"ˆ":"উ",
	// "E":"ঊ",
	"v":"ঋ",
	"…":"এ",
	"Š":"ঐ",
	"w":"ও",
	"‹":"ঔ",

	// <CONSONANTS>
	"k":"ক",
	"K":"খ",
	"g":"গ",
	"G":"ঘ",
	"–":"ঙ",
	"c":"চ",
	"C":"ছ",
	"j":"জ",
	"J":"ঝ",
	// "T":"ঞ",
	"F":"ট",
	"f":"ঠ",
	"h":"ড",
	"z":"ঢ",
	"N":"ণ",
	"t":"ত",
	"T":"থ",
	"d":"দ",
	"D":"ধ",
	"n":"ন",
	"p":"প",
	"P":"ফ",
	"b":"ব",
	"B":"ভ",
	"m":"ম",
	"Z":"য",
	"r":"র",
	"l":"ল",
	"S":"শ",
	"x":"ষ",	
	"s":"স",
	"H":"হ",
	"R":"ড়",
	// "p":"ঢ়",
	"y":"য়",
	"‡":"ৎ",

	// <DIGITS>
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

	// Kars
	"a":"া",
	"i":"ি",
	"I":"ী",
	"™":"ু",
	"›":"ু",
	"u":"ু",
	"š":"ু",
	"œ":"ূ",
	"U":"ূ",
	"â":"ৃ",
	"á":"ৃ",
	"e":"ে",
	"Ÿ":"ে",
	"o":"ৈ",
	"E":"ৈ",
	"O":"ৗ",

	// signs
	"\"":"‘",
	"\'":"’",
	"\\|":"।",
	"Î":"-",
	 
	 // Complex
 	"„":"ং",
 	"W":"ঃ",
	"ƒ":"ঁ",
	// "Å":"্র",
	"ã":"্র",
	"ä":"্র",
	"M":"্ম", 
	"Y":"্য",
	"Ô":"্ব",
	"Õ":"্ব",
	"ÿ":"্ব",
	"å":"্ল",
	"Ó":"্ন",
	"þ":"্ন",
	"È":"্ন",
	"—":"্ণ",
	"»":"্ত",
	"à":"র্",
	"î":"ষ্",
	"ë":"শ্",
	"æ":"ল্",
	"Æ":"ন্",
	"Ç":"ন্",
	"¬":"চ্",
	"Ú":"ম্",
	"ý":"স্",
	"ó":"স্",
	"ª":"ঙ্",
	"ú":"্\u200C"
}; // end bornosoft_string_conversion_map
/******************************************/






/******************************************
	Array containing ASCII to Unicode map 
	for bangsee
*******************************************/
var nukta_string_conversion_map = {
	"ব়":"র",
	"য়":"য়",
	"ড়":"ড়"
}; // end nukta_string_conversion_map
/******************************************/






/******************************************
	Rearranges the folas, kars in a 
	unicode string already mapped 
	from ASCII.

	\param str The unicode string

	Coded by : S M Mahbub Murshed
	Date: September 05, 2006
******************************************/
function ReArrangeUnicodeConvertedText(str, skipRef)
{
    for (var i=0; i<str.length; i++)
    {
        // for 'Vowel + HALANT + Consonant'
        // it should be 'HALANT + Consonant + Vowel'
        if (i > 0 && str.charAt(i) == '\u09CD' && (IsBanglaKar(str.charAt(i - 1)) || IsBanglaNukta(str.charAt(i - 1))) && i < str.length-1)
        {
            var temp = str.substring(0, i-1);
            temp += str.charAt(i);
            temp += str.charAt(i + 1);
            temp += str.charAt(i - 1);
            temp += str.substring(i + 2, str.length);
            str = temp;
        }

        // for 'RA (\u09B0) + HALANT + Vowel'
        // it should be 'Vowel + RA (\u09B0) + HALANT'
        if (i > 0 && i < str.length - 1 && str.charAt(i) == '\u09CD' && str.charAt(i-1) == '\u09B0'
            && str.charAt(i-2) != '\u09CD' && IsBanglaKar(str.charAt(i + 1)))
        {
            var temp = str.substring(0, i-1);
            temp += str.charAt(i + 1);
            temp += str.charAt(i - 1);
            temp += str.charAt(i);
            temp += str.substring(i + 2, str.length);
            str = temp;
        }

	if(skipRef == false) {
        // Change refs
        if (i < str.length - 1 && str.charAt(i)=='র' && IsBanglaHalant(str.charAt(i+1)) && !IsBanglaHalant(str.charAt(i-1))  )
        {
            var j = 1;
            while(true)
            {
            	if(i-j<0)
            		break;
            	if(IsBanglaBanjonborno(str.charAt(i-j)) && IsBanglaHalant(str.charAt(i-j-1)))
            		j += 2;
            	else if(j==1 && IsBanglaKar(str.charAt(i-j)))
            		j++;
            	else
	            	break;
            }
            var temp = str.substring(0, i-j);
            temp += str.charAt(i);
            temp += str.charAt(i+1);
            temp += str.substring(i-j, i);
            temp += str.substring(i+2, str.length);
            str = temp;
            i += 1;
            continue;
        }

	} // end if(skipRef == false)

	// Change pre-kar to post format suitable for unicode
        if (i < str.length - 1 && IsBanglaPreKar(str.charAt(i)) && IsSpace(str.charAt(i+1))==false)
        {
            var temp = str.substring(0, i);
            var j = 1;

            while(IsBanglaBanjonborno(str.charAt(i+j)))
            {
            	if(IsBanglaHalant(str.charAt(i+j+1)))
            		j += 2;
            	else
	            	break;
            }
            temp += str.substring(i+1,i+j+1);

			var l = 0;
            if(str.charAt(i)=='ে' && str.charAt(i+j+1) == 'া')
	            { temp += "ো"; l = 1;}
            else if(str.charAt(i)=='ে' && str.charAt(i+j+1) == "ৗ")
	            { temp += "ৌ"; l = 1;}
            else
	            temp += str.charAt(i);
            temp += str.substring(i+j+l+1, str.length);
            str = temp;
            i += j;
        }

	// nukta should be placed after kars
	// if(i<str.length-1 && IsBanglaNukta(str.charAt(i)) && IsBanglaPostKar(str.charAt(i+1)))
	if(i<str.length-1 && str.charAt(i)=='ঁ' && IsBanglaPostKar(str.charAt(i+1)))
	{
        	var temp = str.substring(0, i);
		temp += str.charAt(i+1);
        	temp += str.charAt(i);
        	temp += str.substring(i+2,str.length);
        	str = temp;
	}
    }

    return str;
}


/******************************************
	Funtion to convert hex to decimal
*******************************************/
function h2d(h) {return parseInt(h,16);}

/******************************************
	Maps an html safe string to
	equivalent unicode

	\param CUni The Unicode sorborno character to map with

	Coded by : S M Mahbub Murshed
	Date: August 30, 2006
*******************************************/
function HTMLSafeToUnicode(line, ishex)
{
	var re = new RegExp('&#([0-9A-Fa-f]{2,4});');
	var m  = re.exec(line);
	while (m != null)
	{
		var re2 = new RegExp('&#'+m[1]+';','g');
		line = line.replace(re2, String.fromCharCode(ishex==true?h2d(m[1]):m[1]));
		m  = re.exec(line);
	}

	return line;
}








/******************************************
	Converts ascii encoded string to unicode
	string.

	\param ConvertFrom String representing convert from ASCII input
			   "bijoy" - To convert from bijoy
			   "somewherein" - To convert from somewhere-in-blog text
			   "boisakhi" - To convert from boisakhi
	\param line The ASCII encoded string

	Coded by : S M Mahbub Murshed
	Date: September 05, 2006
******************************************/
function ConvertToUnicode(ConvertFrom, line)
{
	var conversion_map = bijoy_string_conversion_map;
	if(ConvertFrom=="bijoy")
		conversion_map = bijoy_string_conversion_map;
	else if(ConvertFrom=="somewherein")
		conversion_map = somewherein_string_conversion_map;
	else if(ConvertFrom=="boisakhi")
		conversion_map = boisakhi_string_conversion_map;
	else if(ConvertFrom=="bangsee")
		conversion_map = bangsee_string_conversion_map;
	else if(ConvertFrom=="bornosoft")
		conversion_map = bornosoft_string_conversion_map;
	else if(ConvertFrom=="nukta")
		conversion_map = nukta_string_conversion_map;
	else if(ConvertFrom=="phonetic")
		return line;
	else if(ConvertFrom=="htmlsafehex")
		return HTMLSafeToUnicode(line,true);
	else if(ConvertFrom=="htmlsafedec")
		return HTMLSafeToUnicode(line,false);

	for (var ascii in conversion_map)
	{
		var myRegExp = new RegExp(ascii, "g");
		line = line.replace(myRegExp, conversion_map[ascii]);
	}

	if(ConvertFrom=="nukta")
	 return line;

	if(ConvertFrom=="bornosoft")
		line = ReArrangeUnicodeConvertedText (line, true);
	else
		line = ReArrangeUnicodeConvertedText (line, false);

	var myRegExp = new RegExp("অা", "g");
	line = line.replace(myRegExp, "আ");

	if(ConvertFrom=="bangsee" || ConvertFrom=="bornosoft" ) {
		myRegExp = new RegExp("্্", "g");
		line = line.replace(myRegExp, "্");
	}

	return line;
} // end function ConvertBijoyToUnicode




