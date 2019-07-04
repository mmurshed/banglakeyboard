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
	unicode text to ASCII based text .

	To convert call
	ConvertToASCII(ConvertTo, line)
	where 	'ConvertTo' is the string representing convert to ASCII input,
			   "bijoy" - To convert to bijoy
			   "somewherein" - To convert to somewhere-in-blog text
			   "boisakhi" - To convert to boisakhi
	and 'line' The ASCII encoded string


	Author: S M Mahbub Murshed
	Copyright: S M Mahbub Murshed
	Email: udvranto@yahoo.com
	Version: 1.0.0
	Date: September 10, 2006, XX:XX GMT
*******************************************/






/******************************************
	Array containing Unicode to ASCII map 
	for bijoy
*******************************************/
var uni2bijoy_string_conversion_map = {
	// signs
	"।":"|",
	"‘":"Ô",
	"’":"Õ",
	"“":"Ò",
	"”":"Ó",

	// <JUKTAKHKHOR>
	"্র্য":"ª¨",
	"ম্প্র":"¤cÖ",
	"র‌্য":"i¨",
	"ক্ষ্ম":"²",
	"ক্ক":"°",
	"ক্ট":"±",
	"ক্ত":"³",
	"ক্ব":"K¡",
	"স্ক্র":"¯Œ",
	"ক্র":"µ",
	"ক্ল":"K¬",
	"ক্ষ":"¶",
	"ক্স":"·",
	"গু":"¸",
	"গ্ধ":"»",
	"গ্ন":"Mœ",
	"গ্ম":"M¥",
	"গ্ল":"M­",
	"গ্রু":"Mªy",
	"ঙ্ক":"¼",
	"ঙ্ক্ষ":"•¶",
	"ঙ্খ":"•L",
	"ঙ্গ":"½",
	"ঙ্ঘ":"•N",
//	"ক্স":"•",
	"চ্ছ্ব":"”Q¡",
	"চ্চ":"”P",
	"চ্ছ":"”Q",
	"চ্ঞ":"”T",
	"জ্জ্ব":"¾¡",
	"জ্জ":"¾",
	"জ্ঝ":"À",
	"জ্ঞ":"Á",
	"জ্ব":"R¡",
	"ঞ্চ":"Â",
	"ঞ্ছ":"Ã",
	"ঞ্জ":"Ä",
	"ঞ্ঝ":"Å",
	"ট্ট":"Æ",
	"ট্ব":"U¡",
	"ট্ম":"U¥",
	"ড্ড":"Ç",
	"ণ্ট":"È",
	"ণ্ঠ":"É",
	"ন্স":"Ý",
	"ণ্ড":"Ê",
	"ন্তু":"š‘",
	"ণ্ব":"Y^",
	"ত্ত্ব":"Ë¡",
	"ত্ত":"Ë",
	"ত্থ":"Ì",
	"ত্ন":"Zœ",
	"ত্ম":"Z¥",
	"ন্ত্ব":"š—¡",
	"ত্ব":"Z¡",
	"থ্ব":"_¡",
	"দ্গ":"˜M",
	"দ্ঘ":"˜N",
	"দ্দ":"Ï",
	"দ্ধ":"×",
	"দ্ব":"˜¡",
	"দ্ব":"Ø",
	"দ্ভ":"™¢",
	"দ্ম":"Ù",
	"দ্রু":"`ª“",
	"ধ্ব":"aŸ",
	"ধ্ম":"a¥",
	"ন্ট":"›U",
	"ন্ঠ":"Ú",
	"ন্ড":"Û",
	"ন্ত্র":"š¿",
	"ন্ত":"š—",
	"স্ত্র":"¯¿",
	"ত্র":"Î",
	"ন্থ":"š’",
	"ন্দ":"›`",
	"ন্দ্ব":"›Ø",
	"ন্ধ":"Ü",
	"ন্ন":"bœ",
	"ন্ব":"š^",
	"ন্ম":"b¥",
	"প্ট":"Þ",
	"প্ত":"ß",
	"প্ন":"cœ",
	"প্প":"à",
	"প্ল":"c­",
	"প্স":"á",
	"ফ্ল":"d¬",
	"ব্জ":"â",
	"ব্দ":"ã",
	"ব্ধ":"ä",
	"ব্ব":"eŸ",
	"ব্ল":"e­",
	"ভ্র":"å",
	"ম্ন":"gœ",
	"ম্প":"¤ú",
	"ম্ফ":"ç",
	"ম্ব":"¤^",
	"ম্ভ":"¤¢",
	"ম্ভ্র":"¤£",
	"ম্ম":"¤§",
	"ম্ল":"¤­",
	"্র":"ª",
	"রু":"i“",
	"রূ":"iƒ",
	"ল্ক":"é",
	"ল্গ":"ê",
	"ল্ট":"ë",
	"ল্ড":"ì",
	"ল্প":"í",
	"ল্ফ":"î",
	"ল্ব":"j¦",
	"ল্ম":"j¥",
	"ল্ল":"j­",
	"শু":"ï",
	"শ্চ":"ð",
	"শ্ন":"kœ",
	"শ্ব":"k¦",
	"শ্ম":"k¥",
	"শ্ল":"k­",
	"ষ্ক":"®‹",
	"ষ্ক্র":"®Œ",
	"ষ্ট":"ó",
	"ষ্ঠ":"ô",
	"ষ্ণ":"ò",
	"ষ্প":"®ú",
	"ষ্ফ":"õ",
	"ষ্ম":"®§",
	"স্ক":"¯‹",
	"স্ট":"÷",
	"স্খ":"ö",
	"স্ত":"¯—",
	"স্তু":"¯‘",	
	"স্থ":"¯’",
	"স্ন":"mœ",
	"স্প":"¯ú",
	"স্ফ":"ù",
	"স্ব":"¯^",
	"স্ম":"¯§",
	"স্ল":"¯­",
	"হু":"û",
	"হ্ণ":"nè",
	"হ্ব":"nŸ",
	"হ্ন":"ý",
	"হ্ম":"þ",
	"হ্ল":"n¬",
	"হৃ":"ü",
	// Hasant char
	"র্":"©",
	// "্র":"ª",
	// "্র":"Ö",
	"্র":"«",
	"্য":"¨",
	// "&i":"ª",
	"্":"&", 

	// <VOWELS>
	"আ":"Av",
	"অ":"A",
	"ই":"B",
	"ঈ":"C",
	"উ":"D",
	"ঊ":"E",
	"ঋ":"F",
	"এ":"G",
	"ঐ":"H",
	"ও":"I",
	"ঔ":"J",

	// <CONSONANTS>
	"ক":"K",
	"খ":"L",
	"গ":"M",
	"ঘ":"N",
	"ঙ":"O",
	"চ":"P",
	"ছ":"Q",
	"জ":"R",
	"ঝ":"S",
	"ঞ":"T",
	"ট":"U",
	"ঠ":"V",
	"ড":"W",
	"ঢ":"X",
	"ণ":"Y",
	"ত":"Z",
	"থ":"_",
	"দ":"`",
	"ধ":"a",
	"ন":"b",
	"প":"c",
	"ফ":"d",
	"ব":"e",
	"ভ":"f",
	"ম":"g",
	"য":"h",
	"র":"i",
	"ল":"j",
	"শ":"k",
	"ষ":"l",
	"স":"m",
	"হ":"n",
	"ড়":"o",
	"ঢ়":"p",
	"য়":"q",
	"ৎ":"r",

	// <DIGITS>
	"০":"0",
	"১":"1",
	"২":"2",
	"৩":"3",
	"৪":"4",
	"৫":"5",
	"৬":"6",
	"৭":"7",
	"৮":"8",
	"৯":"9",

	// Kars
	// "ো":"‡v",
	// "ৌ":"‡Š",
	"া":"v",
	"ি":"w",
	"ী":"x",
	"ু":"y",
	// "ু":"z",
	"ূ":"~",
	// "ৃ":"„",
	"ৃ":"…",
	"ে":"‡",
	// "ে":"†",
	"ৈ":"‰",
	// "ৈ":"ˆ",
	"ৗ":"Š",

	 // Nukta
 	"ং":"s",
 	"ঃ":"t",
	"ঁ":"u"

}; // end uni2bijoy_string_conversion_map
/******************************************/





/******************************************
	Array containing Unicode to ASCII map 
	for somewhere-in-text
*******************************************/
var uni2somewherein_string_conversion_map = {
	// signs
	"।":"|",
	"‘":"Ô",
	"’":"Õ",
	"“":"Ò",
	"”":"Ó",

	// <JUKTAKHKHOR>
	"্র্য":"ª¨",
	"ম্প্র":"¤cÖ",
	"র‌্য":"i¨",
	"ক্ষ্ম":"²",
	"ক্ক":"°",
	"ক্ট":"±",
	"ক্ত":"³",
	"ক্ব":"K¡",
	"স্ক্র":"¯Œ",
	"ক্র":"µ",
	"ক্ল":"K¬",
	"ক্ষ":"¶",
	"ক্স":"·",
	"গু":"¸",
	"গ্ধ":"»",
	"গ্ন":"Mœ",
	"গ্ম":"M¥",
	"গ্ল":"M­",
	"গ্রু":"Mªy",
	"ঙ্ক":"¼",
	"ঙ্ক্ষ":"•¶",
	"ঙ্খ":"•L",
	"ঙ্গ":"½",
	"ঙ্ঘ":"•N",
//	"ক্স":"•",
	"চ্ছ্ব":"”Q¡",
	"চ্চ":"”P",
	"চ্ছ":"”Q",
	"চ্ঞ":"”T",
	"জ্জ্ব":"¾¡",
	"জ্জ":"¾",
	"জ্ঝ":"À",
	"জ্ঞ":"Á",
	"জ্ব":"R¡",
	"ঞ্চ":"Â",
	"ঞ্ছ":"Ã",
	"ঞ্জ":"Ä",
	"ঞ্ঝ":"Å",
	"ট্ট":"Æ",
	"ট্ব":"U¡",
	"ট্ম":"U¥",
	"ড্ড":"Ç",
	"ণ্ট":"È",
	"ণ্ঠ":"É",
	"ন্স":"Ý",
	"ণ্ড":"Ê",
	"ন্তু":"š‘",
	"ণ্ব":"Y^",
	"ত্ত্ব":"Ë¡",
	"ত্ত":"Ë",
	"ত্থ":"Ì",
	"ত্ম":"Z¥",
	"ত্ন":"Zœ",
	"ন্ত্ব":"š—¡",
	"ত্ব":"Z¡",
	"থ্ব":"_¡",
	"দ্গ":"˜M",
	"দ্ঘ":"˜N",
	"দ্দ":"Ï",
	"দ্ধ":"×",
	"দ্ব":"˜¡",
	"দ্ব":"Ø",
	"দ্ভ":"™¢",
	"দ্ম":"Ù",
	"দ্রু":"`ª“",
	"ধ্ব":"aŸ",
	"ধ্ম":"a¥",
	"ন্ট":"›U",
	"ন্ড":"Û",
	"ন্ত্র":"š¿",
	"ন্ত":"š—",
	"স্ত্র":"¯¿",
	"ত্র":"Î",
	"ন্থ":"š’",
	"ন্দ":"›`",
	"ন্দ্ব":"›Ø",
	"ন্ধ":"Ü",
	"ন্ন":"bœ",
	"ন্ব":"š^",
	"ন্ম":"b¥",
	"প্ট":"Þ",
	"প্ত":"ß",
	"প্ন":"cœ",
	"প্প":"à",
	"প্ল":"c­",
	"প্স":"á",
	"ফ্ল":"d¬",
	"ব্জ":"â",
	"ব্দ":"ã",
	"ব্ধ":"ä",
	"ব্ব":"eŸ",
	"ব্ল":"e­",
	"ভ্র":"å",
	"ম্ন":"gœ",
	"ম্প":"¤ú",
	"ম্ফ":"ç",
	"ম্ব":"¤^",
	"ম্ভ":"¤¢",
	"ম্ভ্র":"¤£",
	"ম্ম":"¤§",
	"ম্ল":"¤­",
	"্র":"ª",	
	"রু":"i“",
	"রূ":"iƒ",
	"ল্ক":"é",
	"ল্গ":"ê",
	"ল্ট":"ë",
	"ল্ড":"ì",
	"ল্প":"í",
	"ল্ফ":"î",
	"ল্ব":"j¦",
	"ল্ম":"j¥",
	"ল্ল":"j­",
	"শু":"ï",
	"শ্চ":"ð",
	"শ্ন":"kœ",
	"শ্ব":"k¦",
	"শ্ম":"k¥",
	"শ্ল":"k­",
	"ষ্ক":"®‹",
	"ষ্ক্র":"®Œ",
	"ষ্ট":"ó",
	"ষ্ঠ":"ô",
	"ষ্ণ":"ò",
	"ষ্প":"®ú",
	"ষ্ফ":"õ",
	"ষ্ম":"®§",
	"স্ক":"¯‹",
	"স্ট":"÷",
	"স্খ":"ö",
	"স্ত":"¯—",
	"স্তু":"¯‘",
	"স্থ":"¯’",
	"স্ন":"mœ",
	"স্প":"¯ú",
	"স্ফ":"ù",
	"স্ব":"¯^",
	"স্ম":"¯§",
	"স্ল":"¯­",
	"হ্ণ":"nè",
	"হ্ব":"nŸ",
	"হ্ন":"ý",
	"হ্ম":"þ",
	"হু":"û",
	"হ্ল":"n¬",
	"হৃ":"ü",
	"র্":"©",
	// "্র":"ª",
	"্র":"Ö",
	// "্র":"«",
	"্য":"¨",
	"্":"&",

	// <VOWELS>
	"আ":"Av",
	"অ":"A",
	"ই":"B",
	"ঈ":"C",
	"উ":"D",
	"ঊ":"E",
	"ঋ":"F",
	"এ":"G",
	"ঐ":"H",
	"ও":"I",
	"ঔ":"J",

	// <CONSONANTS>
	"ক":"K",
	"খ":"L",
	"গ":"M",
	"ঘ":"N",
	"ঙ":"O",
	"চ":"P",
	"ছ":"Q",
	"জ":"R",
	"ঝ":"S",
	"ঞ":"T",
	"ট":"U",
	"ঠ":"V",
	"ড":"W",
	"ঢ":"X",
	"ণ":"Y",
	"ত":"Z",
	"থ":"_",
	"দ":"`",
	"ধ":"a",
	"ন":"b",
	"প":"c",
	"ফ":"d",
	"ব":"e",
	"ভ":"f",
	"ম":"g",
	"য":"h",
	"র":"i",
	"ল":"j",
	"শ":"k",
	"ষ":"l",
	"স":"m",
	"হ":"n",
	"ড়":"o",
	"ঢ়":"p",
	"য়":"q",
	"ৎ":"r",

	// <DIGITS>
	"০":"0",
	"১":"1",
	"২":"2",
	"৩":"3",
	"৪":"4",
	"৫":"5",
	"৬":"6",
	"৭":"7",
	"৮":"8",
	"৯":"9",

	// Kars
	// "ো":"‡v",
	// "ৌ":"‡Š",
	"া":"v",
	"ি":"w",
	"ী":"x",
	"ু":"y",
	// "ু":"z",
	"ূ":"~",
	"ৃ":"„",
	// "ৃ":"…",
	"ে":"‡",
	"ৈ":"‰",
	// "ৈ":"ˆ",
	"ৗ":"Š",
	 
	 // Complex
 	"ং":"s",
 	"ঃ":"t",
	"ঁ":"u"

}; // end uni2somewherein_string_conversion_map
/******************************************/





/******************************************
	Array containing Unicode to ASCII map 
	for boisakhi
*******************************************/
var uni2boisakhi_string_conversion_map = {
	// <JUKTAKHKHOR>
	"্র্য":"Ûø",
	"র‌্য":"kø",
	"ক্ষ্ম":"qô",
	"ক্ক":"~",
	"ক্ট":"ƒ",
	"ক্ত":"£ß",
	"ক্ব":"Kò",
	"স্ক্র":"Ç",
	"ক্র":"¢ß",
	"ক্ষ্ম":"qô",
	"ক্ষ":"q",
	"ক্স":"…",
	"ক্ল":"Kõ",
	"গু":"†",
	"গ্গ":"‡",
	"গ্ধ":"ˆ",
	"গ্ন":"Mí",
	"গ্ম":"Mô",
	"গ্ল":"Mö",
	"ঙ্ক":"‰",
	"ঙ্ক্ষ":"áq",
	"ঙ্খ":"áL",
	"ঙ্গ":"Š",
	"ঙ্ঘ":"áN",
	"চ্ছ্ব":"âQò",
	"চ্চ":"âP",
	"চ্ছ":"âQ",
	"জ্জ্ব":"Œò",
	"জ্জ":"Œ",
	"জ্ঞ":"š",
	"জ্ব":"Rò",
	"ঞ্চ":"é",
	"˜":"ঞ্ছ",
	"ঞ্জ":"™",
	"ঞ্ঝ":"ã",
	"ট্ট":"›",
	"ট্ব":"Uò",
	"ট্ম":"Uô",
	"ড্ড":"œ",
	"ণ্ঠ":"Ÿ",
	"ন্ঠ":"ª",
	"ন্স":"Ý",
	"ণ্ড":"¡",
	"ন্ত্ব":"ìòæ",
	"ন্তু":"š‘",
	"ন্তু":"ìç",
	"ণ্ব":"Yð",
	"ত্ত্ব":"£ò",
	"ত্থ":"¤",
	"ত্ন":"Zí",
	"ত্ম":"£ô",
	"ত্ম":"Zô",
	"ত্ত":"£",
	"ত্ব":"Zò",
	"থ্ব":"aò",
	"দ্দ":"¥",
	"দ্ধ":"¦",
	"দ্ব":"§",
	"দ্ভ":"¨",
	"দ্ম":"bô",
	"ধ্ব":"cµ",
	"ন্ট":"ëU",
	"ন্ট":"åU",
	"ন্ড":"«",
	"ন্ত্র":"ìè",
	"ন্ত":"ìæ",
	"স্ত্র":"þè",
	"ত্র":"¢",
	"ন্দ":"ëb",
	"ন্দ্ব":"ë§",
	"ন্ধ":"¬",
	"ন্ধ":"ëc",
	"ন্ন":"Ò",
	"ন্ন":"dí",
	"ন্ব":"ìñ",
	"ন্থ":"ìÿ",
	"ন্ম":"dô",
	"ন্স":"ëo",
	"প্ট":"ïU",
	"প্ত":"®",
	"প্ন":"eí",
	"প্প":"¯",
	"প্ল":"eö",
	"ফ্ল":"d¬",
	"ব্জ":"±",
	"ব্দ":"²",
	"ব্ধ":"³",
	"ব্ব":"gµ",
	"ব্ল":"gö",
	"ম্ভ্র":"»",
	// "ম্ভ্র":"ó¸",
	"ভ্র":"¸",
	"ম্ন":"ií",
	"ম্প":"óe",
	"ম্ফ":"óf",
	"ম্ব":"¹",
	"ম্ভ":"º",
	"ম্ম":"ói",
	"ম্ল":"óö",
//	"রু":"kØ",
//	"রূ":"kÕ",
	"ল্ক":"¿",
	"ল্গ":"ùM",
	"ল্ট":"ùU",
	"ল্ড":"À",
	"ল্প":"ùe",
	"ল্ফ":"ùf",
	"ল্ব":"lð",
	"ল্ম":"lô",
	"ল্ল":"Á",
	// "ল্ল":"lö",
	// "ল্ল":"lõ",
	"শু":"Â",
	"শ্চ":"úP",
	"শ্ন":"mí",
	"শ্ব":"mð",
	"শ্ম":"mô",
	"শ্ল":"mö",
	"ষ্ক":"ûK",
	"ষ্ক্র":"û¢ß",
	"ষ্ট":"Ä",
	"ষ্ঠ":"Å",
	"ষ্প":"ûe",
	"ষ্ফ":"üf",
	"ষ্ম":"ûô",
	"স্ক":"Æ",
	"স্খ":"ýL",
	"স্ট":"ýU",
	"স্থ":"þÿ",
	"স্ত":"þæ",
	"স্তু":"þç",
	"স্ন":"þí",
	"স্প":"þe",
	"স্ফ":"ýf",
	"স্ব":"È",
	"স্ব":"þñ",
	"স্ম":"þô",
	"হু":"É",
	"হ্ণ":"pî",
	"হ্ন":"pß",
	"হ্ব":"pµ",
	"হ্ম":"Ê",
	"হ্ল":"n¬",
	"হ্ল":"põ",
	"হৃ":"pÕ",
	"ব":"ò",

	 // Complex
	"র্":"ê",
	"্র":"Þ",
	// "্র":"Û",
	"্য":"ø",
	"্":"z",

	// <VOWELS>
	"আ":"Aw",
	"অ":"A",
	"ই":"B",
	"ঈ":"C",
	"উ":"D",
	"ঊ":"E",
	"ঋ":"F",
	"এ":"G",
	"ঐ":"H",
	"ও":"I",
	"ঔ":"J",

	// <CONSONANTS>
	"ক":"K",
	"খ":"L",
	"গ":"M",
	"ঘ":"N",
	"ঙ":"O",
	"চ":"P",
	"ছ":"Q",
	"জ":"R",
	"ঝ":"S",
	"ঞ":"T",
	"ট":"U",
	"ঠ":"V",
	"ড":"W",
	"ঢ":"X",
	"ণ":"Y",
	"ত":"Z",
	"থ":"¤",
	"দ":"b",
	"ধ":"c",
	"ন":"d",
	"প":"e",
	"ফ":"f",
	"ব":"g",
	"ভ":"h",
	"ম":"i",
	"য":"j",
	"র":"k",
	"ল":"l",
	"শ":"m",
	"ষ":"n",
	"স":"o",
	"হ":"p",
	"ড়":"r",
	"ঢ়":"s",
	"য়":"t",
	"থ":"a",
	"ৎ":"u",
 	"ং":"v",
	"ঁ":"^",
	"ঃ":"\:",

	// <DIGITS>
	"০":"0",
	"১":"1",
	"২":"2",
	"৩":"3",
	"৪":"4",
	"৫":"5",
	"৬":"6",
	"৭":"7",
	"৮":"8",
	"৯":"9",

	// Kars
	// "ো":"Ëw",
	// "ৌ":"Ë#",
	"া":"w",
	"ি":"x",
	"ী":"y",
	"ু":"×",
	// "ু":"Ö",
	// "ু":"Ø",
	"ূ":"Ô",
	// "ূ":"Õ",
	// "ূ":"Ù",
	// "ূ":"Ó",
	"ৃ":"Ú",
	"ে":"Ë",
	// "ে":"Ì",
	"ৈ":"Ð",
	// "ৈ":"Ñ",
	// "ৈ":"ˆ",
	"ৗ":"#",

	// signs
	"।":"„"
	 
}; // end uni2boisakhi_string_conversion_map
/******************************************/












/******************************************
	Array containing Unicode to ASCII map 
	for bangsee
*******************************************/
var uni2bangsee_string_conversion_map = {
	// <JUKTAKHKHOR>
	"ন্ত্র":"ੰ੬",
	"ক্র":"ਠઙ",
	"ষ্ট্র":"ੈચ",
	"স্ক্র":"੍",
	// "স্থ":"એઐ",
	"ক্ত":"ਡઙ",
	"র\u200C্য":"রઘ",

	// "�":"ন্ঠ",
	"স্ক":"ੌ",
	"ঙ্গ":"ਔ",
	"ঙ্ক":"ਓ",
	"ষ্ঠ":"ੋ",
	"ষ্ট":"ੈ",
	"ত্র":"੬",
	"ত্র":"ਠ",
	"ক্ষ":"ਉ",
	"ঞ্জ":"ਙ",
	"দ্দ":"ਣ",
	"প্ত":"ਮ",
	"ত্ত":"ਡ",
	"দ্ব":"ਦ",
	"দ্ধ":"ਤ",
	"ন্ড":"ਫ",
	"ম্ব":"ਹ",
	"ম্ন":"ઃੱ",
	"ম্ভ":"਼",
	"জ্ঞ":"ਛ",
	"জ্জ":"ਕ",
	"ন্ধ":"ਬ",
	"ন্ব":"নੴ",
	"ট্ট":"ਜ",
	"ন্ঠ":"ਞ",
	"ন্ত":"ੰ੪",
	"ল্ড":"ੀ",
	"ল্ক":"ਿ",
	"ক্স":"ਈ",
	"ণ্ড":"ਟ",
	"ন্ড":"ਫ",
	"ক্ট":"ਇ",
	"দ্র":"ਨ",
	"ব্দ":"ਲ਼",
	"ল্ল":"ੁ",
	"স্ব":"ਖ਼",
	"ন্ন":"ਭ",
	"ঞ্চ":"ਗ",
	"ষ্ক":"ઊ",
	"ড়্গ":"ੜ",
	"ড্ড":"ਝ",
	"ভ্র":"ਸ",
	"স্ত":"એ੪",
	"স্থ":"એઐ",
	"ফ্র":"ਰ",
	"গ্ধ":"ਐ",
	"প্প":"ਯ",
	"দ্ভ":"ਧ",
	"ব্ধ":"ਵ",
	"ঞ্ছ":"ਘ",
	"ষ্ণ":"ষ੨",
	"হ্র":"হછ",

	 // Complex
	"ূ":"ખ",
	"্য":"ઘ",

	"ন্":"੯",
	// "ন্":"ੰ",
	"ণ্":"੩",
	"ঙ্":"੦",
	"র্":"ગ",
	"শ্":"ઉ",
	"স্":"એ",
	// "স্":"ઍ",

	"্ন":"ੱ",
	// "্ন":"ઙ",
	"ম্":"ઃ",
	"্ম":"અ",
	// "প্":"ੳ",
	"চ্":"੧",
	"্ব":"ં",
	// "্ব":"ઁ",
	// "্ব":"ਸ਼",
	// "্ব":"ੴ",
	// "্ব":"�",
	"্ল":"આ",
	// "্ল":"ઇ",
	"ল্":"ઈ",
	"্থ":"ઐ",
	"্র":"ઝ",
	// "্র":"ચ",

	// <VOWELS>

	// <CONSONANTS>
	// "ত":"੪",
	"ৎ":"ਅ",
	// ".":"়",

	// <DIGITS>
	"৯":"ঌ",

	// Kars
	"ু":"ઓ",
	// "ু":"ક",
	// "ু":"ઔ",
	// "ে":"ো",
	"ৈ":"ৌ",
	"ৃ":"ৄ",

	// Kar + Consonant
	"গু":"ਊ",
	// "শু":"ੂ",
	"তু":"੫",
	"ত্থ":"ਢ",
	"হু":"ਗ਼",

	// signs
	"।":"৷",
	"\"":"�",
	"\,":"৴",
	// "\?":"৶",
	"\'":"৸",
	// "\'":"৹",
	"\!":"৲",
	"\;":"৵"
}; // end uni2bangsee_string_conversion_map
/******************************************/

















/******************************************
	Rearranges the folas, kars in a 
	unicode string before mapping
	to ASCII.

	\param str The unicode string

	Coded by : S M Mahbub Murshed
	Date: September 10, 2006
******************************************/
function ReArrangeUnicodeText(str)
{
	var barrier = 0;
    for (var i=0; i<str.length; i++)
    {
	// Change pre-kar to pre format suitable for ascii
        if (i < str.length && IsBanglaPreKar(str.charAt(i)))
        {
            var j = 1;
            while(IsBanglaBanjonborno(str.charAt(i-j)))
            {
            	if(i-j<0)
            		break;
		if(i-j<=barrier) break;		
            	if(IsBanglaHalant(str.charAt(i-j-1)))
            		j += 2;
            	else
	            	break;
            }
            var temp = str.substring(0, i-j);
            temp += str.charAt(i);
            temp += str.substring(i-j, i);
            temp += str.substring(i+1, str.length);
            str = temp;
	    barrier = i+1;
	    continue;
       }
/*
        // for 'HALANT + Consonant + Vowel'
        // it should be 'Vowel + HALANT + Consonant'
        if (i > 0 && str.charAt(i) == '\u09CD' && IsBanglaKar(str.charAt(i - 1)) && i < str.length-1)
        {
            var temp = str.substring(0, i-1);
            temp += str.charAt(i - 1);
            temp += str.charAt(i);
            temp += str.charAt(i + 1);
            temp += str.substring(i + 2, str.length);
            str = temp;
		continue;
        }

        // for 'Vowel + RA (\u09B0) + HALANT'
        // it should be 'RA (\u09B0) + HALANT + Vowel'
        if (i > 0 && i < str.length - 1 && str.charAt(i) == '\u09CD' && str.charAt(i-1) == '\u09B0'
            && IsBanglaKar(str.charAt(i + 1)))
        {
            var temp = str.substring(0, i-1);
            temp += str.charAt(i - 1);
            temp += str.charAt(i);
            temp += str.charAt(i + 1);
            temp += str.substring(i + 2, str.length);
            str = temp;
		continue;
        }
*/
        // Change refs
        if (i < str.length - 1 && IsBanglaHalant(str.charAt(i)) && str.charAt(i-1)=='র' && !IsBanglaHalant(str.charAt(i-2)))
        {
            var j = 1;
	    var found_pre_kar = 0;
            while(true)
            {
            	if(IsBanglaBanjonborno(str.charAt(i+j)) && IsBanglaHalant(str.charAt(i+j+1)))
            		j += 2;
            	else if(IsBanglaBanjonborno(str.charAt(i+j)) && IsBanglaPreKar(str.charAt(i+j+1)))
            		{ found_pre_kar = 1; break;}
            	else
	            	break;
            }
            var temp = str.substring(0, i-1);
	    temp += str.substring(i+j+1, i+j+found_pre_kar+1);
            temp += str.substring(i+1, i+j+1);
            temp += str.charAt(i-1);
            temp += str.charAt(i);
            temp += str.substring(i+j+found_pre_kar+1, str.length);
            str = temp;
            i += (j+found_pre_kar);
	    barrier = i+1;
            continue;
        }


	// nukta should be placed after kars
	// if(i<str.length-1 && IsBanglaNukta(str.charAt(i)) && IsBanglaPostKar(str.charAt(i+1)))
/*
	if(i<str.length-1 && str.charAt(i)=='ঁ' && IsBanglaPostKar(str.charAt(i+1)))
	{
        	var temp = str.substring(0, i);
		temp += str.charAt(i+1);
        	temp += str.charAt(i);
        	temp += str.substring(i+2,str.length);
        	str = temp;
	}
*/
    }

    return str;
}



// Decimal to hex conversion
var hD="0123456789ABCDEF";
function d2h(d) {
var h = hD.substr(d&15,1);
while(d>15) {d>>=4;h=hD.substr(d&15,1)+h;}
while(h.length <4) h = "0" + h;
return h;
}




/******************************************
	Converts unicode string to html safe
	string.

	\param line The Unicode string

	Coded by : S M Mahbub Murshed
	Date: September 10, 2006
******************************************/
function UnicodeToHTMLSafe(line, ishex)
{
	var text = "";
	for(i=0; i<line.length; i++)
	{
		if( IsASCII(line.charCodeAt(i)) )
			text += line.charAt(i);
		else
			text += "&#" + (ishex?d2h(line.charCodeAt(i),16):line.charCodeAt(i)) + ";";			
	}

	return text;
}





/******************************************
	Converts unicode string to ascii encoded
	string.

	\param ConvertTo String representing convert to ASCII input
			   "bijoy" - To convert to bijoy
			   "somewherein" - To convert to somewhere-in-blog text
			   "boisakhi" - To convert to boisakhi
	\param line The ASCII encoded string

	Coded by : S M Mahbub Murshed
	Date: September 10, 2006
******************************************/
function ConvertToASCII(ConvertTo, line)
{
	var conversion_map = uni2bijoy_string_conversion_map;
	if(ConvertTo=="bijoy")
		conversion_map = uni2bijoy_string_conversion_map;
	else if(ConvertTo=="somewherein")
		conversion_map = uni2somewherein_string_conversion_map;
	else if(ConvertTo=="boisakhi")
		conversion_map = uni2boisakhi_string_conversion_map;
	else if(ConvertTo=="bangsee")
		conversion_map = uni2bangsee_string_conversion_map;
	else if(ConvertTo=="bornosoft") {
		alert("Not done yet");
		return line;
	}
	else if(ConvertTo=="phonetic") {
		alert("Not done yet");
		return line;
	}
	else if(ConvertTo=="htmlsafehex")
		return UnicodeToHTMLSafe(line,true);
	else if(ConvertTo=="htmlsafedec")
		return UnicodeToHTMLSafe(line,false);
	
	var myRegExp;
	myRegExp = new RegExp("ো", "g");
	line = line.replace(myRegExp, "ো");
	myRegExp = new RegExp("ৌ", "g");
	line = line.replace(myRegExp, "ৌ");

	line = ReArrangeUnicodeText(line);

	for (var unic in conversion_map)
	{
		myRegExp = new RegExp(unic, "g");
		line = line.replace(myRegExp, conversion_map[unic]);
	}

/*
	if(ConvertTo=="bijoy" || ConvertTo=="somewherein")
	{
		var temp_map = {
			"‘":"Ô",
			"’":"Õ",
			"“":"Ò",
			"”":"Ó"
		};
		for (var unic in temp_map)
		{
			myRegExp = new RegExp(unic, "g");
			line = line.replace(myRegExp, temp_map[unic]);
		}
	}

*/	
	return line;
} // end function ConvertBijoyToUnicode




