//admiterea la universitate
//1.nota la bac


#include<iostream>
using namespace std;

int main()
{
	int notaBac,notaExamen,notaAnexa,numarOlimpiade;
	bool olimpiade,Examen;
	cout<<"Introdu nota de la bac: ";
	cin>>notaBac;
	cout<<"Introdu nota din anexa: ";
	cin>>notaAnexa;
	cout<<"Ai mers la olimpiade(da-1;nu-0)";
	cin>>olimpiade;
	cout<<"Ai avut examen de intrare(da-1;nu-0) ";
	cin>>Examen;
	double MGC=0.3*notaBac+0.3*notaAnexa+0.4*notaExamen;
	if(olimpiade==1){
		cout<<"La cate olimpiade ai mers? ";
		cin>>numarOlimpiade;
	}
	if(Examen==1){
		cout<<"Introdu nota la examen ";
		cin>>notaExamen;
		MGC=0.5*notaBac+0.5*notaAnexa;
	}
	

	if(MGC>=5 && MGC<7 && !olimpiade){
		cout<<"Ai fost pus in lista de asteptare";
	}
	else if(MGC>=5 && MGC<7 && olimpiade==1)
	{
		cout<<"Ai intrat la contract";
	}
	else if(MGC==8 && numarOlimpiade>=1)
	{
		cout<<"Ai intrat la buget";
	}
	else if(MGC==9 && numarOlimpiade>=1)
	{
		cout<<"Ai intrat la buget cu bursa a ||";
	}
	else if(MGC==10 && numarOlimpiade>=1)
	{
		cout<<"Ai intrat la buget cu cea mai mare bursa ";
	}else{
		cout<<"Nu ai intrat la Universitate";
	}
	

	return 0;
}
