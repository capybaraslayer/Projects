#include <iostream>
#include <cmath>
using namespace std;
int main()
{
	double d,g,V,e;
	double PI=3.14;
	
	cout<<"Introdu valoarea lui d:";
	cin>>d;
	cout<<"Introdu valoarea lui g:";
	cin>>g;
	cout<<"Introdu valoarea lui e:";
	cin>>e;
	if(d*2>=1 && d*2<=9)
	{
		V=PI*pow(d,3)-sqrt(abs(d-g));
		cout<<"Rezultatul lui V este:"<<V<<endl;
		cout<<"d*2>=1 && d*2<=9";
	}else if(d*2<1)
	{
		V=d*g-pow(e,-d);
		cout<<"Rezultatul lui V este:"<<V<<endl;
		cout<<"Pe intervalul d*2<1";
		
	}else if(d*2>9)
	{
		V=sin(d*g)+1;
		cout<<"Rezultatul lui V este:"<<V<<endl;
		cout<<"Pe intervalul d*2>9";
	}else
	{
		cout<<"Nu ai introdus ce trebuie mai incearca!!!";
	}
	

	
	return 0;
}
