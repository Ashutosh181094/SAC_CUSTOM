(function()  {
	

   let chartsJS=document.createElement('script');
    chartsJS.src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js';
    chartsJS.async=false;
    document.head.appendChild(chartsJS);
    
   let tmpl = document.createElement('template');
   tmpl.innerHTML = `
    <div id="myDiv">
			<canvas id="myChart" width="400" height="400"></canvas>
		</div>
    `;

    customElements.define('com-sap-sample-helloworld5', class HelloWorld extends HTMLElement {


		constructor() {
			super(); 
	   this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
           

            //Adding event handler for click events
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
            });
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.redraw(); 
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        
        }
        */

        //Getters and Setters
        get widgetText() {
            return this._tagType;
        }

        set widgetText(value) {
            this._tagText = value;
        }


        get headingType() {
            return this._tagType;
            }

        set headingType(value) {
            this._tagType = value;
        }

        // End - Getters and Setters

        redraw(){
            

           
        }
    
    
    });
        
})();
