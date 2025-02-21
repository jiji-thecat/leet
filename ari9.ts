// Simplify the directory path
/**
 * Problem:

You are given a hierarchy array that represents a file system. Each element in the array is an object with an id, a name, and optionally a parent field. The root file has no parent, and other files are nested within their parent files.

Your task is to implement a function findFilePath(name, hierarchy) that takes a file name and the hierarchy array as input, and returns the full file path of the file as a string. The file path should be returned in the format root > parent > file.
Example:

const hierarchy = [
  {id: 0, name: "root"},
  {id: 1, name: "component", parent: 0},
  {id: 2, name: "subcomponent", parent: 1},
  {id: 3, name: "file", parent: 2}
];

findFilePath("file", hierarchy);  // Output: "root > component > subcomponent > file"
findFilePath("component", hierarchy);  // Output: "root > component"

Notes:

    The function should return the path as a string, with each file separated by a " > ".
    The file path starts from the root and traces down through its parents.
    If the file is not found, return null.
 */

/**
 * summary
 *  return filepath by searching through hier
 *
 * example
 *  "file"->root/component/subcomponent/file
 *
 * edge
 *  ""->null
 *  "comp"->null
 *
 * memo
 *  fileName={id: 3, name: "file", parent: 2}
 *
 *  ans=[name]
 *  parentId=fileName.parent // 2
 *  while(parentId)
 *   parent = hier.find(v => v.id === parentId)
 *   if(!parent)
 *     ret null
 *
 *   ans.push(parent.name)
 *   parentId=parent.id
 *
 *  ret ans.reverse().join("/")
 *
 * tc o(n)
 * sc o(n)
 */

export {};

const hierarchy = [
  { id: 0, name: 'root' },
  { id: 1, name: 'component', parent: 0 },
  { id: 2, name: 'subcomponent', parent: 1 },
  { id: 3, name: 'file', parent: 2 },
];

const findFilePath = (name: string, hierarchy: any): string | null => {
  if (name.length === 0) {
    return null;
  }

  const fileName = hierarchy.find((v: any) => {
    if (v.name === name) {
      return true;
    }
  });

  if (!fileName) {
    return null;
  }

  const ans = [name]; // file
  let parentId = fileName.parent; // 2

  while (parentId !== undefined) {
    const parent = hierarchy.find((v: any) => v.id === parentId);
    if (!parent) {
      return null;
    }

    ans.push(parent.name);
    parentId = parent.parent;
  }

  return ans.reverse().join('/');
};
console.log(findFilePath('', hierarchy)); // null
console.log(findFilePath('fil', hierarchy)); // null
console.log(findFilePath('file', hierarchy)); // root/component/subcomponent/file
console.log(findFilePath('component', hierarchy)); // root/component
