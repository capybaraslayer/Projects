#include <iostream>
using namespace std;


bool set_alarm(const bool& employed,const bool& vacation){
	if(employed&&vacation){
		return false;
	}else if(employed&&!vacation){
		return true;
	}else if(!employed&&vacation){
		return false;
	}else{
		return false;
	}
	

}

	



int main(){
	
	
	
	
	return 0;
}
