export const isJsonString = (str) =>{
    try {
        JSON.parse(str);
    } catch (e) {
        alert(e)
        return false;
    }
    return true;
};