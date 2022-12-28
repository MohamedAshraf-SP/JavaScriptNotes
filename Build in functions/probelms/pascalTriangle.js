let pascal=(row,col)=>{
    
    if (col==0){
        return 1
    }else if (row==0){
        return 0
    }else{
    return pascal(row-1,col-1)+pascal(row-1,col)
}
}


console.log(pascal(4,3))


// if (col == 0) {
//      return 1;
//      } else if (row == 0) 
 //    {return 0;
//      } else {
//      return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);

//      }
//      }