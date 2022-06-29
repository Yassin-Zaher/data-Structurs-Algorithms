package main

import (
	"fmt"
)
func fib(n int) int{
  if(n < 2){
    return n;
  }

  var ans = fib(n-1) + fib(n-2);
  return ans;
}

func main() {
  fmt.Println("Hello GO :)");
  fmt.Println(fib(100));
}
