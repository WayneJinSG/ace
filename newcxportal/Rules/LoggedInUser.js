/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function LoggedInUser(context) {

let userId = context.evaluateTargetPath('#Application/#ClientData/UserId');



return userId;

}
