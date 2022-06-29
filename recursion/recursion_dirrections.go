package main

// in this file , we aime to print numbers 1...N recusively in
// decreasing order
// increasing order

import (
	"fmt"
)


func asc(n int) {
  //base case
	if(n < 1){
    return;
  }
  //rec case
  dec(n-1);
  fmt.Println(n);
  
}

func desc(n int){
    //base case
      if(n < 1){
      return;
    }
    //rec case
    fmt.Println(n);
    desc(n-1);
    
  }

func main() {
  asc(10);
  desc(10);
}