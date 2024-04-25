var simplifyPath = function(path) {
    let segments = path.split('/').filter(segment => segment !== '' && segment !== '.');
    let stack = [];

    for(let segment of segments) {
        if(segment === '..'){
            if(stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(segment);
        }
    }
    let canonicalPath = '/' + stack.join('/');
    return canonicalPath;
};

//Example usage
console.log(simplifyPath("/home/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));