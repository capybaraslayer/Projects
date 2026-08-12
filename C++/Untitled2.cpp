//acordarea unei burse
//studentul primeste bursa dara are media >=8.5
//are mai putin de 10 absente
//nu are restante

#include<iostream>
using namespace std;

int main()
{
	float media;
	int absente;
	bool restante;
	
	cout<<"Media";
	cin>>media;
	
	cout<<"Absente";
	cin>>absente;
	
	cout<<"Are restante(1-da;0-nu)";
	cin>>restante;
	
	if(media>=8.5 && absente<10 && !restante)//if (media>=8.5) && (absente<10) && (!restante)
	{
		cout<<"Primeste bursa";
	}
	else if(media >=7 && absente<20)
	{
		cout<<"Poate primi ajutor social";	
	}
	else
	{
		cout<<"Nu primeste bursa";	
	}
	
	return 0;
}
