/**
 * JavaScript Testing File
 * Run tests by calling runTests() in Chrome Developer Console
 * 
 * Author: Dom D'Attilio
 * Date: 11/18/2021
 */


/**
 * @description This is the test method. To run tests, call runTests() in console. It will create new games for both US rules and UK rules 
 * when necessary.
 */

function runTests()
{
    //Clears console to print tests
    console.clear()

    //Test 1: Does expectedPayout return a non-zero, positive number
    console.log("Test 1: Does expectedPayout() return a non-zero, positive number for US: ");
     //Creates new game with US rules
    gameplay(1);
    let expecVal_testUS = expectedPayout(1);
    if(expecVal_testUS > 0 )
    {
        console.log("Passed.\n");
    }
    else console.log("Failed\n");
    

    //Test 2: Does expectedPayout return a non-zero, positive number
    console.log("Test 2: Does expectedPayout() return a non-zero, positive number for UK: ");
    //Creates new game with UK rules
    gameplay(2);
    let expecVal_testUK = expectedPayout(2);
    if(expecVal_testUK > 0 )
    {
        console.log("Passed.\n");
    }
    else console.log("Failed\n");

    //Test 3: Does bankOffer return a non zero positive number
    console.log("Test 3: Does bankOffer() return a non-zero, positive number for US: ");
     //Creates new game with US rules
    gameplay(1);
    let bankOffer_testUS = bankOffer(1);
    
    if(bankOffer_testUS > 0 )
    {
        console.log("Passed.\n");
    }
    else console.log("Failed.\n")


      //Test 4: Does bankOffer return a non zero positive number
      console.log("Test 4: Does bankOffer() return a non-zero, positive number for UK: ");
       //Creates new game with UK rules
      gameplay(2);
      let bankOffer_testUK = bankOffer(2);
      
      if(bankOffer_testUK > 0 )
      {
          console.log("Passed.\n");
      }
      else console.log("Failed.\n")


    //Test 5
    console.log("Test 5: Does formatMoneyUS() return a monetary value, while keeping the number the same: ");
    let testNumUS = formatMoneyUS(56430);
    if(testNumUS == "$56,430"){
        console.log("Passed.\n");
    }
    else console.log("Failed.\n");



    //Test 6
    console.log("Test 6: Does randomizeCases randomize the array of cases: ");
    let testArray = [1,2,3,4,5,6,7,8]
    randomizeCases(testArray);
    if(testArray == [1,2,3,4,5,6,7,8]){
        console.log("Failed.\n");
    }
    else console.log("Passed.\n");


   

        
    

}