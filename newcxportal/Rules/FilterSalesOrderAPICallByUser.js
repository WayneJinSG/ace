/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 * 
 */
export default function FilterSalesOrderAPICallByUser(context) {

    let userId = context.evaluateTargetPath('#Application/#ClientData/UserId');

    // Test that the logged in user is used to filter the API call
    const userForQuery = userId;
    //const userForQuery = 'test';

    if (userForQuery == 'DemoUser') {

        return "$top=10&$filter=SoldToParty eq 'USCU_S17'&$orderby=CreationDate";

    }

    else {

        return "$top=10&$filter=SoldToParty eq 'USCU_S09'&$orderby=CreationDate";
    
    }


    



    //let userId = Rules/LoggedInUser.js;
    
    //let queryObject = context.dataQueryBuilder();



    //let appFilter = "SoldToParty eq 'USCU_S17'";

    //let top = "top=5";


    //let appFilter = "$top=10&$filter=SoldToParty eq 'USCU_S17'&$orderby=CreationDate";

    //queryObject.filter().and(top, appFilter);

    //return queryObject;



    //const customer17 = USCU_S17;
    //const customer18 = USCU_S18;
    //if (userId == 'DemoUser'){

      //  let apiFilter = "$top=10&$filter=SoldToParty eq '{customer17}'&$orderby=CreationDate";

        //return apiFilter;
    //}




   
}
