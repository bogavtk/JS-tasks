class BinaryTree {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}

	get height() {
		let leftHeight = this.left ? this.left.height + 1 : 0;
		let rightHeight = this.right ? this.right.height + 1 : 0;
		return Math.max(leftHeight, rightHeight);
	}

	setLeft(node) {
		if (this.left) {
			this.left.parent = null;
		}
		if (node) {
			this.left = node;
			this.left.parent = this;
		}
	}

	setRight(node) {
		if (this.right) {
			this.right.parent = null;
		}
		if (node) {
			this.right = node;
			this.right.parent = this;
		}
	}
}

function bypassDFRecursive(node, callback) {

	callback(node);

	if (node.left) {
		bypassDFRecursive(node.left, callback);
	}

	if (node.right) {
		bypassDFRecursive(node.right, callback);
	}
}

function bypassDF(root, callback) {
	bypassDFRecursive(root, callback);
}

let Node_A = new BinaryTree('A');

let Node_B = new BinaryTree('B');
Node_A.setLeft(Node_B);

let Node_C = new BinaryTree('C');
Node_A.setRight(Node_C);

let Node_D = new BinaryTree('D');
Node_B.setRight(Node_D);

let Node_E = new BinaryTree('E');
Node_C.setLeft(Node_E);

let Node_F = new BinaryTree('F');
Node_C.setRight(Node_F);

bypassDF(Node_A, node => console.log(node.value));