class TextFinder
{
	find(text)
	{

	}
}
class PlatziFinder extends TextFinder
{
	find(text)
	{
		console.log('El texto fue encontrado ' + text)
	}
}
class MyOtherFinder extends TextFinder
{
	find(text)
	{
		console.log('El texto fue encontrado ' + text)
	}
}

var finderOne = new PlatziFinder();
var finderTwo = new MyOtherFinder();

finderOne.find('abc');
finderTwo.find('abc')