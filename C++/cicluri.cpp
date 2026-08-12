//Tema:instructiuni iterative(for,while, do-while).Studiul break si continue

#include <iostream>
#include <cmath> 
using namespace std;

int main()
{
    // //afisarea unui mesaj de 3 ori 
    // for(int i=0;i<3;i++)
    // {
    //     cout<<"Salut"<<i+1<<endl;
    // }
    // //afisarea numerelor de la 1 la 10
    // for(int i=1;i<=10;i++)
    // {
    //     cout<<i<<" ";
    // }
    // //afisarea numerelor de la 10 la 1
    // cout<<endl;
    // for(int i=10;i>=1;i--)
    // {
    //     cout<<i<<" ";
    // }
    // cout<<endl;
    // cout<<"elemente pare: "<<endl;
    // //afisarea numerelor pare 
    // for(int i=0;i<=20;i=i+2)
    // {
    //     cout<<i<<" ";;
    // }
    // //afisarea numerelor impare 
    // cout<<endl<<"elemente impare"<<endl;
    // for(int i=0;i<=20;i++)
    // {
    //     if(i%2!=0)
    //     {
    //         cout<<i<<" ";
    //     }
    // }
    // //suma numerelor de la 1 la 10 
    // int s=0;
    // for(int i =0;i<10;i++)
    // {
    //     s+=i;
    // }
    // cout<<endl<<"Suma numerelor este "<<s<<endl;
    //
    // //sa se determine valoarea lui F=a*2+b*3 unde 2=a<8
    // float F,b,ss=0;
    // int a;
    // cout<<"Indica valoarea lui b:";
    // cin>>b;
    // for(a=2;a<8;a++)
    // {
    //      F=pow(a,2)+pow(b,3);
    //      cout<<"F="<<F<<endl;
    //      ss+=F;
    // }
    // cout<<"Suma="<<ss<<endl;
   //while
    // int x =0,suma=0;
    // cout<<"Introdu un numar:";
    // cin>>x;
    // while(x!=0)
    // {
    //     suma=suma+x;
    //     cout<<"Introdu un numar: ";
    //     cin>>x;
    // }
    // cout<<"Suma="<<suma<<endl;
    //sa se determine valoarea lui H=|a^2+b|,unde 2+x=a<x-8
    
    int a,x,b,H,sss=0,key;

    cout<<"MENIU"<<endl;
    cout<<"1-metoda for"<<endl;
    cout<<"2-metoda while"<<endl;
    cout<<"3-metoda do while"<<endl;
    cout<<"4-Iesire:"<<endl;
    cout<<"Alege optiunea (1-3):"<<endl;
    cin>>key;
    cout<<"Indica valoarea lui x=";
    cin>>x;
    cout<<"Indica valoarea lui b=";
    cin>>b;
    
    if((x+5)-(x-1)>0)
    {

    switch (key) 
    {
        default:
        {
            cout<<"Nu exista aceasta metoda";
            break;
        }
        case 1://metoda for
        {
            for(int a=x-1;a<x+5;a++)
            {
                H=fabs(pow(a,2))+b;
                cout<<"H="<<H<<endl;
                sss+=H;
            }

            break;
        };
        case 2://metoda while 
        {
            a=x-1;
            while(a<x+5)
            {
                H=fabs(pow(a,2))+b;
                cout<<"H="<<H<<endl;
                sss+=H;
                a++;
            }
            break;
        }  
        case 3:
        {
            a=x-1;
            do 
            {
                H=fabs(pow(a,2))+b;
                cout<<"H="<<H<<endl;
                sss+=H;
                a++;
            }while(a<x+5);
            break;


        }
        case 4:
        {
            exit(0);
            break;
        }


    }

    }

    return 0;
}
