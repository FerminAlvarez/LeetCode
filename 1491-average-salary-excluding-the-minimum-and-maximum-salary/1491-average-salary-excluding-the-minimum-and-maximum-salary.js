/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let maxSalarium = 0;
    let minSalarium = salary[0];
    let totalSalary = 0;
    
    for (let i = 0; i<salary.length; i++){
        if(salary[i]> maxSalarium) maxSalarium = salary[i];
        if(salary[i]< minSalarium) minSalarium = salary[i];
        
        totalSalary += salary[i];
    }
    
    return (totalSalary-maxSalarium-minSalarium)/(salary.length-2);
    
};