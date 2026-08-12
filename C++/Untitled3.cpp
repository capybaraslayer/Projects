//autorizarea intrarii in bloc de serviciu
#include<iostream>
using namespace std;

int main()
{
	
	int varsta,anExperienta,nivelSecuritate;
	bool legitimatie,autorizatie;
	
	cout<<"Varsta:";
	cin>>varsta;
	cout<<"Ani experienta:";
	cin>>anExperienta;
	cout<<"Nivel de securitate(1-5):";
	cin>>nivelSecuritate;
	cout<<"Are legitimatie(1-da;0-nu):";
	cin>>legitimatie;
	cout<<"Are autorizatie(1-da;0-nu):";
	cin>>autorizatie;
	if(varsta >=21 && anExperienta>=2 && legitimatie && autorizatie && nivelSecuritate>=3)
	{
		cout<<"Acces avansat";	
	}
	else if(varsta >=18 && legitimatie && (autorizatie || nivelSecuritate>=2))
	{
		cout<<"Acces standard";
	}	
	else if((varsta>=16 && autorizatie)||(legitimatie&&nivelSecuritate))
	{
		cout<<"Acces insotit de supraveghetor";
	}
	else
	{
		cout<<"Acces interzis";	
	}
	
	
	
	
	
	
	
	
	return 0;
}
