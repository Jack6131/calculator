 export default function postfixEval( postfixArray ) {
    var stack = [];
    //console.log(postfixArray.length)
    for( element of postfixArray){
        //console.log("element: " + element);

        if(isNaN(element)){
            var x = stack.pop();
            var y = stack.pop();
            //console.log("var x/y: " + x + " " + y + " element: " + element) ;
            if (element == '+'){
                result = (y+x);
                //console.log("Expected Result: " + result)
                stack.push(y + x);
            } else if (element == '-'){
                stack.push(y - x);
            } else if (element == 'x'){
                stack.push(y * x);
            } else if (element == '/'){
                stack.push(y / x);
            }
        } else {
            stack.push( parseFloat(element) );
        }
    }
    //final check for non numbers within the stack
    
    var returnValue = 'undefined';
    while( stack.length > 0 ){
        //console.log( stack );
        var element = stack.pop();  
        if(isNaN(element)){
            continue;
        } else{
            returnValue = element;
        }
    }
    return (returnValue)
}
