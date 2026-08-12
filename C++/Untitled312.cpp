//sa se calculeze valoarea lui Y in dependenta de conditii
#include<iostream>
#include<math.h>
using namespace std;
int main()
{
  cout<<"MENIU"<<endl;
  cout<<"1-Metoda if"<<endl;
  cout<<"2-Metoda if else"<<endl;
  cout<<"3-Metoda if else if"<<endl;
  cout<<"4-Iesire"<<endl;

  int optiune;
  cout<<"indica metoda: ";
  cin>>optiune;

  float i;
  int c,a,b;
  float G;
  cout<<"indica valoarea lui i: ";
  cin>>i;
  cout<<"indica valoarea lui c: ";
  cin>>c;
  cout<<"indica valoarea lui a: ";
  cin>>a;
  cout<<"indica valoarea lui b: ";
  cin>>b;
  switch(optiune)
  {
    case 1:
    {
      if(i<4) G=c*(a/i)+b*pow(i,2);
      if(i>=4 && i<=6) G=i+2*i+2;
      if(i>6) G=a*i+b*pow(i,3);
      cout<<"Prin metoda if, G="<<G;
      break;
    }
    case 2:
    {
      if(i<4) {G=c*(a/i)+b*pow(i,2); cout<<"pentru i<4, G="<<G<<endl;}
      else cout<<"pentru intervalul i<4, nu sunt solutii"<<endl;

      if(i>=4 && i<=6) {G=i+2*i+2; cout<<"pentru i>=4 && i<=6, G="<<G<<endl;}
      else cout<<"pentru intervalul i>=4 && i<=6, nu sunt solutii"<<endl;

      if(i>6) {G=a*i+b*pow(i,3); cout<<"pentru i>6, G="<<G<<endl;}
      else cout<<"pentru intervalul i>6, nu sunt solutii"<<endl;

      break;
    }
    case 3:
    {
      if(i<4)
       {
         G=c*(a/i)+b*pow(i,2);
       }
      else
       {
         if(i>=4 && i<=6) 
         {
          G=i+2*i+2;  
         }
        else
        {
          G=a*i+b*pow(i,3);  
        }                
         }
         cout<<"Prin metoda if else i, G="<<G;
      break;
    }
    case 4:
    {
     exit(0);
    }
  }

  return 0;
}
 
