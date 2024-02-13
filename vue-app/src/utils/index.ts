type HasId = {
  id: number;
};

function pushToArray<T>(array: T[] | null | undefined, ...items: T[]) {
  if (!array) return items;
  return [...array, ...items];
}

function find<T extends HasId>(id: number, array: T[]) {
  return array.findIndex((item) => item.id === id);
}

function update<T extends HasId>(item: T, array: T[]) {
  const index = find(item.id, array);
  if (index !== -1) array[index] = item;
  return array;
}

function convertSize(
  size: number,
  from: string,
  to: string,
  precise: boolean = false,
) {
  const idk = precise ? 1024 : 1000;
  const units = ["B", "KB", "MB", "GB"];
  const fromIndex = units.indexOf(from.toUpperCase());
  const toIndex = units.indexOf(to.toUpperCase());

  if (fromIndex === -1 || toIndex === -1) throw new Error("Invalid unit");

  return size * Math.pow(idk, fromIndex - toIndex);
}

function decapitalize(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

// @ts-ignore
function asyncComponent<T>(path: string) {}

export { pushToArray, find, update, convertSize, decapitalize, asyncComponent };
