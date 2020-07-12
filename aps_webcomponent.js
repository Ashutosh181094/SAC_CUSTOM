(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Graph Description</legend>
				<table>
					<tr>
						<td>Text</td>
						<td><input id="aps_text" type="string"></td>
					</tr>
				</table>
			</fieldset>
		</form>
               
                <form id="formColor">
			<fieldset>
				<legend>Graph Description Text Color</legend>
				<table>
					<tr>
						<td>Text</td>
						<td><input id="aps_color" type="string"></td>
					</tr>
				</table>
			</fieldset>
		</form>
	`;

	class HelloWorldAps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
			this._shadowRoot.getElementById("formColor").addEventListener("submit", this._submitColor.bind(this));
		}

		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							widgetText: this.widgetText
						}
					}
			}));
		}
		_submitColor(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							widgetTextValue: this.widgetTextValue
						}
					}
			}));
		}


		set widgetTextValue(newText) {
			this._shadowRoot.getElementById("aps_text").value = newText;
		}

		get widgetTextValue() {
			return this._shadowRoot.getElementById("aps_text").value;
		}
		
		set widgetTextColor(newTextColor){
			this._shadowRoot.getElementById("aps_color").value = newTextColor;
		}
		
		get widgetTextColor(){
			return this._shadowRoot.getElementById("aps_color").value;
		}
	}

customElements.define("com-sap-sample-helloworld5-aps", HelloWorldAps);
})();
