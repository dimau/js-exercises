// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

interface BuildTreeWithPointersProps {
  preorder: number[];
  preorderFirstIndex: number;
  preorderLastIndex: number;
  inorder: number[];
  inorderFirstIndex: number;
  inorderLastIndex: number;
}

console.log(buildTree([3], [3]));

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  return buildTreeWithPointers({
    preorder,
    preorderFirstIndex: 0,
    preorderLastIndex: preorder.length,
    inorder,
    inorderFirstIndex: 0,
    inorderLastIndex: inorder.length,
  });
}

function buildTreeWithPointers({
  preorder,
  preorderFirstIndex,
  preorderLastIndex,
  inorder,
  inorderFirstIndex,
  inorderLastIndex,
}: BuildTreeWithPointersProps): TreeNode | null {
  // we are on the empty subtree
  if (preorderLastIndex - preorderFirstIndex === 0) return null;

  // if we are on the leaf
  if (preorderLastIndex - preorderFirstIndex === 1)
    return new TreeNode(preorder[preorderFirstIndex]);

  const root = preorder[preorderFirstIndex];

  // find left and right subtrees in the inorder array
  const rootIndex = inorder.indexOf(root);
  const leftFirstIn = inorderFirstIndex;
  const leftLastIn = rootIndex;
  const rightFirstIn =
    rootIndex < inorderLastIndex - 1 ? rootIndex + 1 : inorderLastIndex;
  const rightLastIn = inorderLastIndex;

  // find left and right subtrees in the preorder array
  const leftFirstPre = preorderFirstIndex + 1; // avoid the current root
  const leftLastPre = leftFirstPre + leftLastIn - leftFirstIn;
  const rightFirstPre =
    leftLastPre < preorderLastIndex ? leftLastPre + 1 : preorderLastIndex;
  const rightLastPre = preorderLastIndex;

  // assemble and return result
  const result = new TreeNode(root);

  result.left = buildTreeWithPointers({
    preorder,
    preorderFirstIndex: leftFirstPre,
    preorderLastIndex: leftLastPre,
    inorder,
    inorderFirstIndex: leftFirstIn,
    inorderLastIndex: leftLastIn,
  });

  result.right = buildTreeWithPointers({
    preorder,
    preorderFirstIndex: rightFirstPre,
    preorderLastIndex: rightLastPre,
    inorder,
    inorderFirstIndex: rightFirstIn,
    inorderLastIndex: rightLastIn,
  });

  return result;
}
