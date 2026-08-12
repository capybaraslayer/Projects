#include <iostream>
#include <cmath>
using namespace std;

int main(){
    double b,y,a,x,F,sss=0;
    int key;

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
    cout<<"Indica valoarea lui y=";
    cin>>y;

    if ((1 + y == x) && (x < pow(y, 3)))
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
                for(int a=5;a<pow(y,3);a++)
                {
                    F=(a+pow(b,2))/(pow(a,2)+b)+x;
                    cout<<"F="<<F<<endl;
                    sss+=F;
                }

                break;
            };
            case 2://metoda while 
            {
                a=5;
                while(a<pow(y,3))
                {
                    F=(a+pow(b,2))/(pow(a,2)+b)+x;
                    cout<<"F="<<F<<endl;
                    sss+=F;
                    a++;
                }
                break;
            }  
            case 3:
            {
                a=5;
                do 
                {
                    F=(a+pow(b,2))/(pow(a,2)+b)+x;
                    cout<<"F="<<F<<endl;
                    sss+=F;
                    a++;
                }while(a<pow(y,3));
                break;


            }
            case 4:
            {
                exit(0);
                break;
            }


        }

    }else {
        cout<<"Conditia nu este indeplinita"<<endl;
    }

    return 0;
}

