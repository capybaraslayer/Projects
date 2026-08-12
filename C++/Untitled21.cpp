//sa se calculeza valoarea lui y independenta de conditii
#include<iostream>
#include<math.h>
using namespace std;

int main()
{
	cout<<"MENIU"<<endl;
	cout<<"1.Metoda if"<<endl;
	cout<<"2.Metoda if else "<<endl;
	cout<<"3.Metoda if else if "<<endl;
	cout<<"4.Iesire"<<endl;
	
	int optiune;
	cout<<"Indica metoda:";
	cin >> optiune;
	int x;
	float Y;
	cout<<"Indica valoarea lui x:";
	cin>>x;
	
	switch (optiune)
	{
		case 1://metoda if
		{
			if(x<0) Y=pow(x,2)+2;	
			if(x>=0 && x<10) Y=abs(x+2);
			if(x>=10) Y=sqrt(x)-2;	
			cout<<"Prin metoda if,Y="<<Y;	
			break;
		}
		case 2://metoda if else 
		{
			if(x<0) {Y=pow(x,2)+2;cout<<"Pentru x<0,Y="<<Y;}
			else cout<<"Pentru intervalul x<0 nu sunt solutii";
			if(x>=0 && x<10) {Y=abs(x+2);cout<<"Pentru x>=0 && x<10 Y="<<Y;}
			else cout<<"Pentru intervalul x>=0 && x<10 nu sunt solutii";
			if (x>=10) {Y=sqrt(x)-2;cout<<"Pentru x>=0 && x<10 Y="<<Y;}
			else cout<<"Pentru intervalul x>=0 && x<10 nu sunt solutii";
					
			break;
		}
		case 3://metoda if else if 
		{	if(x<0) 
			{
				Y=pow(x,2)+2;
				
			}
			else if(x>=0 && x<10)
			{
			 	Y=abs(x+2);
				
			}
	
		
			else if (x>=10)
			{
			 	Y=sqrt(x)-2;
				
			}
			
			cout<<"Prin metoda if else if ,Y"<<Y;
					
			break;
		}
		case 4://exit 
		{	
			exit(0);
		}	
	}
	
	
	
	return 0;
}
