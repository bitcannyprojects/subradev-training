/* --------problem--------*/
/*The insurance guy calls again and apologizes.They found another policy made by your spouse,
but this one is limited to cover a particular maximum in losses(for example, 50, 000€).
You send a bill to your spouse for the difference you lost.

1. Given an object of the stolen items and a limit
2. return the difference between 
   --- the total value of those items and the limit of the policy.

   Note:-
     i) The object will always contain items (no empty objects).
    ii) The sum of the items will always be greater than the limit.


Example:
calculateDifference({ "baseball bat": 20 }, 5) ➞ 15

calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11

calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1

*/



function calculateDifference(item, limit) {

    //console.log(item);

    let allitem = 0
    let counter = 0

    for (let key in item) {
        //console.log(key, item[key]);
        allitem += item[key]
        counter++
    }

    //console.log(counter);
    //console.log(allitem);

    if (counter !== 0 && allitem > limit) {
        return allitem - limit
    } else {
        return "error"
    }

}


console.log(

    calculateDifference({ "baseball bat": 20 }, 5),

    calculateDifference({ skate: 10, painting: 20 }, 19),

    calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)

);


