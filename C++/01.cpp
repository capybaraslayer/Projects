#include <iostream>
#include <iomanip>

#include <cstdlib>
#include <ctime>

using namespace std;
int main()
{	
//	srand(time(0));
//	//int short long x,a=123;
//	unsigned long long int l,i =123;
//	unsigned int w=0;// int -2 miliard ... +2miliarde//unsigned int 0 ... 4miliarde
//	
//	cout<<"w="<<w<<endl;
//	
//	//	float => 0.12312 =>maximum .38cifree
//	
//	//double =>0.123 =>maximum .308cifre 
//	
//	char ch= '$';char sir[]="STEP"; 
//	
//	a != A
	
	//TABLOURI--multime/gramada de valori unificate printrun singur nume si tip de date
	//1.Vector tablou unidimensional- tablou valorile caruia se aranjeaza consecutiv pe axa
	//tip_date vector[declaram_nr_max_de_valori];
	
	//element ne permite sa accesam valorile
	
	//nume_vector[pozitia]=valoare;
	
//	int SAC[100];	 
//	SAC[0]=123;
//	SAC[1]=1222;
//	cout<<"SAC[0]="<<SAC[0]<<endl;
//	cout<<"SAC[1]="<<SAC[1]<<endl;
	 
	//sa se calculeze a+b,n ori -enter user
	//1.Raspunsurile vor fi salvate intro multime
	
	int n,v[1000];
	do
	{
		cout<<"Introduceti nr de valori [1..1000]=";
		cin>>n;
	}while(n<1||n>1000);
	
	for(int i=0, a,b,R;i<n;i++)
	{
		a=rand()%10;
		b=rand()%10;
		R=a+b;
		
		cout<<setw(5)<<i+1<<" din "<<n
			<<setw(5)<<a<<" + "<<b<<" = "<<R<<endl;
		v[i]=R;
	}
	
	cout<<" v["<<n<<"]::";
	for(int i=0;i<n;i++)cout<<' '<<v[i];
	cout<<endl;	
	//2.contor raspunsurile pare si suma raspunsurilor pare
	
	int CRP=0;
	for(int i=0;i<n;i++) if(v[i]%2==0) CRP++;
	cout<<"CRP="<<CRP<<endl;
	
	int SRI=0;
	for(int i=0;i<n;i++) if(v[i]%2!=0) SRI+=v[i];
	cout<<"SRI="<<SRI<<endl;
	
	//3.Sa se calculeze  suma R =>5...15 , 20...30
	
	int SIN=0;
	for(int i=0;i<n;i++) if((v[i]>=5  && v[i]<=15)||(v[i]>=20 && v[i]<=30)) SIN+=v[i];
	cout<<"SIN="<<SIN<<endl;
	
	//4.Sa gaseasca valoare maximala din prima 2 ime si min 2/2
	int max=v[0];
	int min=v[n/2];
	for(int i=0;i<n/2;i++)
	if(max<v[i])max=v[i];

	for(int i=n/2*1;i<n/2*2;i++)
	 if(min>v[i])min=v[i];
	cout<<"max="<<max<<endl; 
	cout<<"min="<<min<<endl;
	
	// [],n
	//1.n-enter user
	//2.show sub-vector x...y x,y -poziitile inserate de user
	//3.sa se extrage toate patrimile 
	return 0;
}


