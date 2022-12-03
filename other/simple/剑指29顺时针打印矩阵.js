// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

//  

// 示例 1：

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 示例 2：

// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
function spiralOrder(matrix){
    if(matrix.length === 0) return []
    let l = 0,r = matrix[0].length,t = 0,b = matrix.length,res = []
    while(l <= r && t <= b){
        for(let i = l;i <= r;i++){ //从左到右
            res.push(matrix[t][i])
        }
        t++
        for(let i = t;i <= b;i++){ //从上到下
            res.push(matrix[i][r])
        }
        r--
        if(l > r || t > b) break
        for(let i = r;i >= l;i--){ //从右->左
            res.push(matrix[b][i])
        }
        b--
        for(let i = b;i >= t;i--){ //从下到上
            res.push(matrix[i][l])
        }
        l++             
    }
    return res

}