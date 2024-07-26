const getTotalIsles = function (grid) {
  if (! grid || grid.length === 0)
    return 0;

  const rows = grid.length;
  const cols = grid[0].length ;
  const visited =Array.from({length : rows},()=> Array(cols).fill(false));

  const directions =[
    [0,1],
    [1,0],
    [0,-1],
    [-1,0]
  ];

  const isValid =(r,c) => {
    return r >= 0 && r <rows && c>=0 && c<cols && grid[r][c] === 'L' && !visited[r][c];
  };

  const dfs =(r,c)=>{
    const stack =[[r,c]];
    while (stack.length){
      const[curRow,curCol]=stack.pop();
      if(!isValid(curRow ,curCol))  continue;
      visited[curRow] [curCol] = true;
      for(const [dr,dc]of directions){
        stack.push([curRow + dr,curCol + dc]);
      }
    }
  };
  let numIslands =0;
  for(let i=0 ; i<rows ; i++){
    for(let j=0;j<cols;j++){
      if(grid[i][j] === 'L' && !visited[i][j]){
        dfs(i,j);
        numIslands ++;

      }
    }
  }
  return numIslands;
  // write your code here

};

module.exports = getTotalIsles;