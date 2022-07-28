/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = new Map();
    let map2 = new Map();
    
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] === undefined){
            if(map2[t[i]] !== undefined) return false;
            map[s[i]] = t[i];
            map2[t[i]] = s[i];
        }
        else if(map[s[i]] !== t[i]) return false;
    }
    return true
    
};