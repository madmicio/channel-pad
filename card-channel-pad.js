var LitElement = LitElement || Object.getPrototypeOf(customElements.get("home-assistant-main"));
var html = html || LitElement.prototype.html;
var css = css || LitElement.prototype.css;

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
        return html`
    <div class="grid-container">
      ${this.config.channels.map(channel => {
            return html`
              <div class="grid-item">
                <input type="button" id='${channel.number}' class="input-btn ripple" .value="${channel.number}"  @click=${e => this._select_channel(e.target.value)}>
                <label class="ripple" style="background-image: url('${channel.image}')" for='${channel.number}'></label>
              </div>
          `;
        })}
      </div>
    `;
    }

    updated() {
    }

    _select_channel(channel) {
        this.hass.callService("media_player", "play_media", {
            entity_id: this.config.entity,
            media_content_type: "channel",
            media_content_id: channel,
        });
    }

    setConfig(config) {
        if (!config.entity) {
            throw new Error("You need to define entity");
        }
        if (!config.channels) {
            throw new Error("You need to define channels");
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
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
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
    

    `;
    }

}

customElements.define('card-channel-pad', ChannelPad);
