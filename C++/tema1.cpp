	
#include <iostream>
using namespace std;

int main(){
    
    float greutate;
    float inaltime;

    cout<<"Introdu greutatea ta:";
    cin>>greutate;
    cout<<"Introdu inaltimea ta in cm:";
    cin>>inaltime;
    
	float inaltimeMetri=inaltime/100;
    float IMC=(inaltimeMetri*inaltimeMetri)/greutate;
    
    
    cout<<endl;
    cout<<"IMC-ul:"<<IMC;
    

    return 0;
}
