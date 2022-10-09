// Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
function buildTree(preorder, inorder) {
    return buildTreeWithPointers({
        preorder: preorder,
        preorderFirstIndex: 0,
        preorderLastIndex: preorder.length,
        inorder: inorder,
        inorderFirstIndex: 0,
        inorderLastIndex: inorder.length
    });
}
function buildTreeWithPointers(_a) {
    var preorder = _a.preorder, preorderFirstIndex = _a.preorderFirstIndex, preorderLastIndex = _a.preorderLastIndex, inorder = _a.inorder, inorderFirstIndex = _a.inorderFirstIndex, inorderLastIndex = _a.inorderLastIndex;
    // we are on the empty subtree
    if (preorderLastIndex - preorderFirstIndex === 0)
        return null;
    // if we are on the leaf
    if (preorderLastIndex - preorderFirstIndex === 1)
        return new TreeNode(preorder[preorderFirstIndex]);
    var root = preorder[preorderFirstIndex];
    // find left and right subtrees in the inorder array
    var rootIndex = inorder.indexOf(root);
    var leftFirstIn = inorderFirstIndex;
    var leftLastIn = rootIndex;
    var rightFirstIn = rootIndex < inorderLastIndex - 1 ? rootIndex + 1 : inorderLastIndex;
    var rightLastIn = inorderLastIndex;
    // find left and right subtrees in the preorder array
    var leftFirstPre = preorderFirstIndex + 1; // avoid the current root
    var leftLastPre = leftFirstPre + leftLastIn - leftFirstIn;
    var rightFirstPre = leftLastPre < preorderLastIndex ? leftLastPre + 1 : preorderLastIndex;
    var rightLastPre = preorderLastIndex;
    // assemble and return result
    var result = new TreeNode(root);
    result.left = buildTreeWithPointers({
        preorder: preorder,
        preorderFirstIndex: leftFirstPre,
        preorderLastIndex: leftLastPre,
        inorder: inorder,
        inorderFirstIndex: leftFirstIn,
        inorderLastIndex: leftLastIn
    });
    result.right = buildTreeWithPointers({
        preorder: preorder,
        preorderFirstIndex: rightFirstPre,
        preorderLastIndex: rightLastPre,
        inorder: inorder,
        inorderFirstIndex: rightFirstIn,
        inorderLastIndex: rightLastIn
    });
    return result;
}
