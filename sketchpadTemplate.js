window.sketchpad._css = `
.sketchpad.container {
  border-radius: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  gap: 1rem;

  background-color: #0a0c1d;
  color: #fff;
}

.sketchpad header {
  width: 100%;
}

.sketchpad header > input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: none;
  background: transparent;
  color: #fff;
}

.sketchpad header > input::placeholder {
  font-style: italic;
}

.sketchpad .tooling {
  align-self: center;
  display: flex;
  flex-direction: row;
}

.sketchpad .tooling > canvas {
  flex-grow: 0;
  flex-shrink: 0;
}

.sketchpad .tooling > div {
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;
  max-width: 5rem;
}

.sketchpad .options {
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
}

.sketchpad .info {
  align-self: center;
  display: flex;
  flex-direction: row;
  gap: .5rem;
}

.custom-button {
  background-color: #0a0c1d;
	border: none;
	color: #fff;
	cursor: pointer;
	padding: 0.5rem;
	text-align: center;
	text-decoration: none;
	transition: all 0.2s ease-in-out;
	border-radius: 2rem;
}
    `;

window.sketchpad._html = `
<div class="sketchpad container">
		<header>
			<input type="text" maxlength="2000" id="caption" placeholder="Name your artwork...">
		</header>
		<div class="tooling">
			<div class="picker">
				<button class="custom-button" id="#ff0000">Red</button>
				<button class="custom-button" id="#0000ff">Blue</button>
				<button class="custom-button" id="#00ff00"">Green</button>
				<button class="custom-button" id="#FFFF00">Yellow</button>
				<button class="custom-button" id="#FFA500">Orange</button>
				<button class="custom-button" id="#800080">Purple</button>
				<button class="custom-button" id="#FFC0CB">Pink</button>
				<input type="color" value="#000" id="colour">
			</div>
			<div class="pentools">
				<button class="custom-button" id="pen">Pen</button>
				<button class="custom-button" id="eraser">Eraser</button>
				<button class="custom-button" id="10">10px</button>
				<button class="custom-button" id="20">20px</button>
				<button class="custom-button" id="45">45px</button>
				<button class="custom-button" id="65">65px</button>
				<button class="custom-button" id="100">100px</button>
				<input type="number" placeholder="Custom Size..." value=5 min=1 id="size">
			</div>
		</div>
		<div class="options">
			<button id="toimage" onclick="startUpload()">Upload</button>
			<button id="deleteAll" onclick="clearAll();">Clear</button>
   			<button id="close" onclick="window.sketchpad.toggleSketchpad()">Close</button>
		</div>
		<div class="info">
			<span>sketchvolt</span> - <span>1.0.0</span>  - <a href="https://github.com/amycatgirl/plugin-deps" target="_blank">Source Code</a>
		</div>
      <style>${window.sketchpad._css}</style>
    `;
