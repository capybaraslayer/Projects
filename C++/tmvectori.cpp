#include <iostream>
using namespace std;

int main()
{
    //popularea listei
    int x[8];
    int y[8];
    for(int i=0;i<8;i++)
    {
        x[i]=rand()%10;
        y[i]=x[i];
    }
    cout<<"Lista inainte de prelucrare x=";

    for(int i=0;i<8;i++)
    {
        cout<<x[i]<<", ";
    }

    
    int a=0,b=8/2;
    while((a<b)&&(b<8))
    {
        int aux=x[a];
        x[a]=x[b];
        x[b]=aux;
        a++;
        b++;
    }
    cout<<endl<<"Lista dupa prelucrare metoda1 x=";
    for(int i=0;i<8;i++)
    {
        cout<<x[i]<<", ";
    }
    
    int q=0,w=7;
    while(q<w)
    {
        int temp=y[q];
        y[q]=y[w];
        y[w]=temp;
        q++;
        w--;
    }
    cout<<endl<<"Lista dupa prelucrare metoda2 x=";
    for(int i=0;i<8;i++)
    {
        cout<<y[i]<<", ";
    }
    return 0;
}
