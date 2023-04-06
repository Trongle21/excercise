// Viết function kiểm tra các cặp dấu ngoặc

// gợi ý

// let prelences - {
//  * '(': ')',
//  * '{': '},
//  * '[': ']'
//  * } 
//  * 

function is_vaild(params) {
    let tag = [];

    let prelences = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    for (let i = 0; i < params.length; i++) {
        if (prelences[params[i]]) {
            tag.push(params[i])
        }
        if (params[i] !== ')' || params[i] !== '}' || params[i] !== ']') {
            return false;
        }
    }
    return tag;
}