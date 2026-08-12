//acordarea unui credit

#include<iostream>
using namespace std;
int main()
{
int virsta,vechime;
double salariul;
bool datorii;

  cout<<"virsta: ";
  cin>>virsta;

  cout<<"Salariul: ";
  cin>>salariul;

  cout<<"Vechimea in munca(ani): ";
  cin>>vechime;

  cout<<"Are datorii?(1-da, 0-nu): ";
  cin>>datorii;

   if(virsta>=25 && salariul>=15000 && vechime>=5 && !datorii)
   {
     SumaCredit=salariu*40;
     dobinda=0.08;//8
     ani=10;
     double total=sumaCredit*(1+dobinda*ani);
     double rata=total/(ani*12);
     cout<<"===Credit aprobat";
     cout<<"Suma aprobata"<<sumaCredit<<" lei"<<endl;
     cout<<"Dobanda 8% pe an"<<endl;
     cout<<"Perioada: "<<ani<<" ani"<<endl;
     cout<<"Total de returnat: "<<total<<" lei"<<endl;
     
   }
   else if(virsta>=21 && salariul>=10000 && vechime>=2 && !datorii)
   {
   	 SumaCredit=salariu*40;
   	 dobinda=0.08;//8
     ani=10;
     double total=sumaCredit*(1+dobinda*ani);
     cout<<"===Credit aprobat";
     cout<<"Suma aprobata"<<sumaCredit<<" lei"<<endl;
     cout<<"Dobanda 8% pe an"<<endl;
     cout<<"Perioada: "<<ani<<" ani"<<endl;
     cout<<"Total de returnat: "<<total<<" lei"<<endl;
     
   }
    else if(virsta>=18 && salariul>=7000 && vechime>=2 )
   {
     cout<<"credit aprobat dar cu garant";
     cout<<"suma maxima: "<<salariul*20<<" lei";
   }
    else if(salariul>=5000 && !datorii )
   {
     cout<<"dosar necesita analiza suplimentara";
     cout<<"suma maxima: "<<salariul*10<<" lei";
   }
   else
   {
     cout<<"credit respins";
   }

return 0;
}
