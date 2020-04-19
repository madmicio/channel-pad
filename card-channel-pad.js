import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";
class ChannelPad extends LitElement {
  
  static get properties() {
    return {
      hass: {},
      config: {},
      active: {}
    };
  }
  
  constructor() {
    super();
  }
  
  render() {
    var coverWidth = this.config.coverWidth ? this.config.coverWidth : "80px";
    var coverHeight = this.config.coverHeight ? this.config.coverHeight : "670px";
    var sliderdistance = this.config.sliderdistance ? this.config.sliderdistance : "150px";
    
    var entityCounter = 0;

    var background = this.config.background ? this.config.background : "transparent";


    
    
    return html`
    <div class="grid-container">
      ${this.config.entities.map(ent => {
          entityCounter++;
          const stateObj = this.hass.states[ent.entity];
          const numberObj = this.hass.states[ent.number];
          return stateObj ? html`
                
                  <div class="grid-item">
                    <input type="button" id='${entityCounter}' class="input-btn ripple" .value="${ent.number}"  @click=${e => this._channel(stateObj, e.target.value ) }>
<!--                    <button class="btn ripple" style="background-image: ${ent.image} " >${ent.number}cazz</button>' -->
                    <label class="ripple" style="background-image: ${ent.image}" for='${entityCounter}'></label>


                    </div>
                  </div>

                
          `: html``;
    
      })}
      </div>
    `;
  }
    
  updated() {}
  
  _channel(state, value,) {

    this.hass.callService("media_player", "play_media", {
        entity_id: state.entity_id,
        media_content_type: "channel",
        media_content_id: value,
        
    });
  

    }

  setConfig(config) {
    if (!config.entities) {
      throw new Error("You need to define entities");
    }
    this.config = config;
  }

  getCardSize() {
    return this.config.entities.length + 1;
  }
  
  static get styles() {
    return css`

    /*Create ripple effec*/
    
    .ripple {
      position: relative;
      overflow: hidden;
      transform: translate3d(0, 0, 0);
    }
    
    .ripple:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #7a7f87 13%, transparent 7.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform .5s, opacity 1s;
    }
    
    .ripple:active:after {
      transform: scale(0, 0);
      opacity: .3;
      transition: 0s;
    }
    button:focus {outline:0;}

    .grid-item > input.input-btn {
      display: none;
    }
    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto auto auto auto auto auto auto;
      grid-template-rows: auto;
      background-color: transparent;
      padding: 10px;
      overflow: hidden;
    }
    
    .grid-item {
      background-color: transparent;
      // border: 1px solid rgba(0, 0, 0, 0.8);
      font-size: 30px;
      text-align: center;
      overflow: hidden;
      display:flex;
      align-items:center;
      justify-content:center;
    }

    .btn {
      background-color: transparent; //var(--primary-background-color);
      color: var(--primary-text-color);
      font-size: 26px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      border: none;
      width: 100%;
      padding-top: 56.34%;
    }

    label {
      width: 100%;
      padding-top: 56.34%;
      background-image: url("/local/lg_remote/tv_logos/Wii.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      border: none;
      cursor: pointer;
    }
    
    /*Create ripple effec*/
    
    .ripple {
      position: relative;
      overflow: hidden;
      transform: translate3d(0, 0, 0);
    }
    
    .ripple:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #7a7f87 7%, transparent 7.01%);
      background-repeat: no-repeat;
      border-radius: 40px;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform .5s, opacity 1s;
    }
    
    .ripple:active:after {
      transform: scale(0, 0);
      opacity: .3;
      transition: 0s;
    }
    button:focus {outline:0;}
    `;
  }  
  
}

customElements.define('card-channel-pad', ChannelPad);
