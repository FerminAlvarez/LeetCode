/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false;
    let map = new Map();
    for(let i = 0; i<s.length; i++){
        if(map.get(s[i]) === undefined)
            map.set(s[i], 1);
        else
            map.set(s[i], map.get(s[i]) + 1);
    }
    
    for(let i = 0; i<t.length; i++){
        if(map.get(t[i]) === undefined)
            return false;
        else
            map.set(t[i], map.get(t[i]) - 1);
    }
    
    for(let i = 0; i<map.size; i++){
        if(map.get(s[i]) !== 0)
            return false;
    }
    
    return true;
};