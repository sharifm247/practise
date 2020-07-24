
var product =['pen','book','highlighter','pensil','eraser','box'];
/*product= product.toString();
alert(product.toString());
document.write(product[0]);
product.push('prodjf');
document.write(product,"</br>");*/
product.splice(3,1,"gori");
document.write(product);

var price=[10,20,40,30,60,50];
document.write(price.sort(),"</br>");
 
document.write("</br>");

var x=20;
if(x%2==0){
	document.write("this is even number");
}