/**
 * Converts array of object to record with property id as a object key
 * 
 * @param array 
 * @returns 
 */
export const convertArrayToRecord = <T extends { id: number }>(array: T[]): Record<string, T> => Object.fromEntries(array.map((item) => [ item.id, item ]));
