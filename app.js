const scriptRan = new Date();

const readyFn = () => {
	const demo = document.getElementById('demo');
	const DOMLoadedRan = new Date();
	demo.innerHTML = `<p>
		Script Ran at ${scriptRan.toISOString()} <br /> 
		DOMContentLoaded Run at ${DOMLoadedRan.toISOString()}
		Different = ${DOMLoadedRan.getTime() - scriptRan.getTime()}
	<p>`;
}

window.addEventListener("load", readyFn);