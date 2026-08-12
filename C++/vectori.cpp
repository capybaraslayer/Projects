//Tema:tablouri
//tablouri unidimensionale -vectori
//tablouri bidimensionale - matrici
//tablouri unidimensionale
//
//Tablouri unidimensionale - reprezinta siruri ordonate de elemente amplasate uniform intrun rand 
//unde fiecare element este reprezentat de valoare si pozitie
//
//declararea unui tablou 
//tip_de_date nume_tablou[numarul_de_elemente]
//int a[10];declaram un tablou de 10 elemente de tip intreg 
//float b[10]; declaram un tablou de 10 elemente de tip real 
//
//accesul la elementele tabloului 
//a[2] accesez tabloul a cu pozitia 2
//a[2]=3 accesez tabloul a cu pozitia 2 si ii modific valoarea in 3
//sa se populeze 2 tablouri cu valoari 
#include<iostream>
using namespace std;

int main()
{
    int x[10];
    int y[10];
    int xy[8]={2,3,12,4,2,4,-2,4};;
    //popularea tabloului x cu elemente indicate de la tastatura
    // for(int i =0;i<10;i++)
    // {
    //     cout<<"x["<<i<<"]=";
    //     cin>>x[i];
    // }
    // cout<<"x=";
    // for(int i =0;i<10;i++)
    // {
    //     cout<<", "<<x[i]<<" ";
    // }
    //popularea tabloului x cu elemente aleatorii
    cout<<endl<<"y=";
    for(int i =0;i<10;i++)
    {
        x[i]=rand()%100;
        cout<<x[i]<<", ";
    }
    //sa se determine F=s+m+min+max-p
    //s suma elementelor pare din tabloul x si impare din y 
    //media aritmetica a elementelor din prima jumatate a tabloului x si jumatatii 2 
    //a tabloului y 
    //min-elementul minimal din prima jumatate a tablourilor x si y 
    //max - elementul maximal de pe pozitii pare din lista y 
    //p-produsul elementelor divizibile la 3 din a doua jumatate a listei x si divizibile la 5 
    //din prima jumatate a listei y 
    int s =0;
    for(int i =0;i<10;i++)
    {
        if(x[i]%2==0) s+=x[i];
        if(x[i]%2!=0) s+=y[i];
    }
    float s1=0,k=0,m=0;
    for(int i=0;i<10;i++)
    {
        if(i<5)
        {
            s1+=x[i];
            k++;
        }
        else{
            s1+=y[i];
            k++;
        }
    }
    m=s1/k;
    int min =x[0];
    for(int i=1;i<5;i++)
    {
        if(min>x[i]) min=x[i];
        if(min>y[i]) min=y[i];
    }
   
    int max =y[0];
    for(int i=0;i<10;i=i+2)
    {
        if(max<y[i]) max=y[i];
    }
    
    int p=1;
    for(int i=5;i<10;i++)
    {
        if(x[i]%3==0) p*=x[i];
        
    }

    for(int i=0;i<5;i++)
    {
        if(y[i]%5==0) p*=y[i];
        
    }
    float F=s+m+min+max-p;
    cout<<"F="<<s<<"+"<<m<<"+"<<min<<"+"<<max<<"-"<<p<<"="<<F;

   //sa se formeze lista wd care va contine elementele pare din x si elementele
   //impare din y 
   //sa se formeze lista dw care va contine suma elementelor primul din x cu ultimul din y
   int wd[10],dw[10],n=0;

   for(int i=0;i<10;i++)
    {
        if((i<5)&&(x[i]%2==0))
        {
            wd[0]=x[i]; n++;
        }else if((i>=5)&&(y[i]%2!=0))
        {
             wd[0]=x[i]; n++;
        }
        dw[i]=x[i]+y[(10-1)-i];
    }
   cout<<endl<<"wd=";
   for(int i=0;i<n;i++)
    {
        cout<<", "<<wd[i];
    }
    cout<<endl<<"dw=";
    for(int i=0;i<10;i++)
    {
        cout<<", "<<dw[i];
    }
    //afisam dw invers

    cout<<endl<<"dw=";
    for(int i=9;i>=0;i--)
    {
        cout<<", "<<dw[i];
    }

    //algoritmul de aranjare a bulelor 
    for(int j=0;j<10;j++)
    {
        for(int i =0;i<10-1;i++)
        {   
            if(x[i]>x[i+1])
            {
                int aux=x[i];
                x[i]=x[i+1];
                x[i+1]=aux;
            }      
          
        }
    }

        //afisam x aranjat 
    cout<<endl<<"x=";

    for(int i=0;i<10;i++)
    {
        cout<<x[i]<<", ";
    }
    //sa se inverseze tabloul y:primul element din prima jumatate cu primul element din a doua jumatate
    cout<<endl<<"y=";

    for(int i=0;i<10;i++)
    {
        cout<<y[i]<<", ";
    }
    int c=0, b=5;
    while ((c<5)&&(b<10))
    {
        int aux=x[c];
        x[c]=x[b];
        x[b]=aux;
        c++;
        b++;
    }
    
    cout<<endl<<"y=";

    for(int i=0;i<10;i++)
    {
        cout<<y[i]<<", ";
    }
      return 0;
}
