//switch - alegem o varianta din mai multe posibile
//

//switch(expresie)
//{
//	case eticheta:
//	{
//		break;
//	}
//	case eticheta:
//	{
//		break;
//	}
//	case eticheta:
//	{
//		break;
//	}
//	case eticheta:
//	{
//		break;
//	}
//	default:
//	{
//		break;
//	}
//		
//	
//}
//
//un sistem simplu bancomat
//switch - alegem o varianta din mai multe posibile

//un sistem simplu bancomat
#include<iostream>
using namespace std;
int main()
{
  int optiune, PIN=1234;
  float sold=15000,suma;

  cout<<"---BANCOMAT----"<<endl;
  cout<<"1. Afiseaza sold"<<endl;
  cout<<"2. Depune bani"<<endl;
  cout<<"3. Extrage bani"<<endl;
  cout<<"4. Schimba PIN"<<endl;
  cout<<"5. Iesire"<<endl;

  cout<<"Alege optiunea(1-5):";
  cin>>optiune;

  switch(optiune)
  {
     case 1:
     {
       cout<<"Soldul curent este "<<sold<<" lei";
    break;
     }

     case 2:
     {
       cout<<"Indica suma pentru depunere: ";
       cin>>suma;
       sold+=suma;
       cout<<"Soldul nou: "<<sold<<" lei";
    break;
     }

       case 3:
     {
       cout<<"Indica suma pentru extragere: ";
       cin>>suma;
       if(suma<=sold)
       {
         sold-=suma;
           cout<<"Soldul nou: "<<sold<<" lei";
       }
       else
       {
         cout<<"Mijloace insuficiente";
       }

    break;
     }

     case 4:
     {
       int pin_curent;
       cout<<"Penttru a modifica PIN-ul indica pinul curent:";
       cin>>pin_curent;

       if(PIN==pin_curent)
       {
           cout<<"indica PIN-ul nou:";
           cin>>PIN;
         cout<<"pinul "<<PIN<<" a fost aplicat cu succes";
    }
    else
    {
      cout<<"pinul curent nu este valid";  
    }
    break;
     }

     case 5:
     {
       cout<<"Va multumim ca a ti ales serviciile noastre";
    break;
     }

     default:
     {
       cout<<"Optiune invalida";
    break;
     }  
  }
  return 0;
}
