# Channel Pad for LG WebOs TV

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)
[![buymeacoffee_badge](https://img.shields.io/badge/Donate-buymeacoffe-ff813f?style=flat)](https://www.buymeacoffee.com/madmicio)

![all](example/channels.jpg)

## hacs Card install
1. search on hacs plugin LG WebOS channel pad.

2. install `LG WebOS channel pad` plugin

3. Add a reference  inside your resources config:

  ```yaml
resources:
  - type: module
    url: /hacsfiles/channel-pad/card-channel-pad.js
```


### Manual install

1. Download and copy `lg-remote-control.js` from (https://github.com/madmicio/channel-pad/) into your custom components  directory.

2. Add a reference `lg-remote-control.js` inside your resources config:

 ```yaml
  resources:
    - url: /local/"your_directory"/card-channel-pad.js
      type: module
```

### Use as standalone card:
lovelace config:

 ```yaml
type: 'custom:card-channel-pad'
entity: media_player.tv_lg_55c8
channels:
  - image: "/local/lg_remote/tv_logos/Rai 1 HD.png"
    number: '501'
  - image: "/local/lg_remote/tv_logos/Rai 2 HD.png"
    number: '502'
  - image: "/local/lg_remote/tv_logos/Rai 3 HD.png"
    number: '503' 
```

<a href="https://www.buymeacoffee.com/madmicio" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

