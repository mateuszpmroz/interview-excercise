/**
 * Converts array of object to object of objects with property id as a object key
 * 
 * @param array 
 * @returns 
 */
export const convertArrayToObject = <T extends { id: number }>(array: T[]): Record<string, T> => Object.fromEntries(array.map((item) => [ item.id, item ]));
