package main

import (
	"fmt"
)


func linearSearch(arr [5]int, n int, target int, first int) int{
  if(n == 0){
    return -1;
  }
  if(arr[first] == target){
    return first;
  }
  if(arr[n] == target){
    return n;
  }
  var index int = linearSearch(arr, n - 1, target, first+1);
  if(n > 0){
    index = linearSearch(arr, n - 1, target, first+1);
  }
  
  return index
}
func main() {
  var arr = [5]int{10, 20, 30, 40, 20}
	fmt.Println(linearSearch(arr, 4, 20, 0))
}

