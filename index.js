 function receivesAFunction(bskjc){
    return bskjc()
}



function returnsANamedFunction(){
    return function joe(){
        return 'Jason'
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return 'Hi'
    }
}