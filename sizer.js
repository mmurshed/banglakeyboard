// Copyright 2003 Eddie Traversa
// http://www.dhtmlnirvana.com/
// free to use as long as this copyright notice stays intact
var tags = new Array( 'div','td','tr','p','b','table','strong','emphasis','a','h1','h2','h3','pre','sub','sup','i','th','cp','ul','ol','li','dt','dd', 'input', 'textarea', 'font', 'span');
var pixelArray =  new Array('10','12','16','20','24','30','40');
var emArray =  new Array('0.7','0.9','1.0','1.5','2.0','2.5','3');
var FontSize = 2;
var FontSizeUnit = "px";

if(cookiePFX==null)
	cookiePFX = "bnw2";

function fontSizerInit()
{
	FontSize = parseInt(bnwGetCookie(cookiePFX+"fontsize"));
	if(FontSize==null || isFinite(FontSize)==false) FontSize = 2;
	FontSizeUnit = bnwGetCookie(cookiePFX+"fontsizeunit");
	if(FontSizeUnit==null || FontSizeUnit=="") FontSizeUnit = "px";
	fontSizerChangeElements(FontSize,FontSizeUnit);
}

function fontSizerReset()
{
	FontSize = 2;
	FontSizeUnit = "px";
	fontSizer(0,FontSizeUnit);
}

function fontSizer(inc,unit) {
	var size = FontSize;
	size += inc;
	if (size < 0 ) size = 0;
	if (size > 6 ) size = 6;
	FontSize = size;
	bnwSetCookie(cookiePFX+"fontsize",size,90);
	bnwSetCookie(cookiePFX+"fontsizeunit",unit,90);
	fontSizerChangeElements(size,unit);
}

function fontSizerChangeElements(size,unit)
{
	if (!document.getElementById) 
		return;
	getBody = document.getElementsByTagName('body')[0];
	for (i = 0 ; i < tags.length ; i++ )
	{
		getallTags = getBody.getElementsByTagName(tags[i]);
		for (k = 0 ; k < getallTags.length ; k++) 
			fontSizerChangeSingleElement
			(getallTags[k],size,unit)
	}
}

function fontSizerChangeSingleElement(elem,size,unit)
{
	elem.style.fontSize = (unit=='px') ? 
		pixelArray[size]+unit: 
		emArray[size]+unit;
}
