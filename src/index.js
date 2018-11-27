import style from "./_scss/main.scss";
//
function f() {
	let x = "scoped not hoisted";
	{
		// okay, block scoped name
		const x = "sneaky";
	}

	console.log(x);
}

f();
