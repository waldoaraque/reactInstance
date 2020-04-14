export function calculateTotal(quantity, term) {
    /*  0 - 1000 = 25%
        1001 - 5000 = 20%
        5001 - 10000 = 15%
        +10000 = 10%
    */
   let totalQ
   if (quantity <= 1000) {
       totalQ = quantity * .25
   } else if (quantity > 1000 && quantity <= 5000) {
       totalQ = quantity * .20
   } else if (quantity > 5000 && quantity <= 10000) {
       totalQ = quantity * .15
   } else {
       totalQ = quantity * .10
   }

   /*  3 = 5%
        6 = 10%
        12 = 15%
        24 = 20%
    */
   let totalTerm
   switch (term) {
       case 3:
           totalTerm = quantity * .05
           break;
       case 6:
           totalTerm = quantity * .10
           break;
       case 12:
           totalTerm = quantity * .15
           break;
       case 24:
           totalTerm = quantity * .20
           break;
       default:
           break;
   }

   return totalTerm + totalQ + quantity
}
