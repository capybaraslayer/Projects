
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

  float x,M,pi;
  int a,b,e;
  

  cout<<"indica valoarea lui x: ";
  cin>>x;
  cout<<"indica valoarea lui a: ";
  cin>>a;
  cout<<"indica valoarea lui b: ";
  cin>>b;
  cout<<"indica valoarea lui e: ";
  cin>>e;
  switch(optiune)
  {
    case 1:
    {
      if(x>=1&&x<=3) M=(pi*pow(b,3))+abs(a+x);
      if(x<1) M=pow(e,a*x)+pow(x*b,1.0/3.0);
      if(x>3) M=4*tan(a);
      cout<<"Prin metoda if, M="<<M;
      break;
    }
    case 2:
    {
      if(x>=1&&x<=3) {M=(pi*pow(b,3))+abs(a+x); cout<<"pentru x>=1&&x<=3, M="<<M<<endl;}
      else cout<<"pentru intervalul x>=1&&x<=3, nu sunt solutii"<<endl;

      if(x<1) {M=pow(e,a*x)+pow(x*b,1.0/3.0); cout<<"pentru x<1 , M="<<M<<endl;}
      else cout<<"pentru intervalul x<1, nu sunt solutii"<<endl;

      if(x>3) {M=4*tan(a); cout<<"pentru x>3, M="<<M<<endl;}
      else cout<<"pentru intervalul x>3, nu sunt solutii"<<endl;

      break;
    }
    case 3:
    {
      if(x>=1&&x<=3)
       {
         M=(pi*pow(b,3))+abs(a+x);
       }
      else
       {
         if(x<1) 
         {
          M=pow(e,a*x)+pow(x*b,1.0/3.0);   
         }
        else
        {
          M=4*tan(a);
        }                
         }
         cout<<"Prin metoda if else i, M="<<M;
      break;
    }
    case 4:
    {
     exit(0);
    }
  }

  return 0;
}
 
