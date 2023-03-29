/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/NewCXPortal/Actions/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return Promise.resolve();
        } else {
            return Promise.reject('User Deferred');
        }
    });
}