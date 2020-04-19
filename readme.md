# Channel Pad for LG WebOs TV


![all](example/channels.jpg)

## hacs Card install
1. add custom reposity: madmicio/channel-pad as plugin.

2. install `LG WebOS Remote Control` plugin

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
entities: #!include: /local/lg_remote/channel-pad-entities.yaml
  - entity: media_player.tv_lg_55c8
    image: "url('/local/lg_remote/tv_logos/Rai 1 HD.png')"
    number: '501'
  - entity: media_player.tv_lg_55c8
    image: "url('/local/lg_remote/tv_logos/Rai 2 HD.png')"
    number: '502'
  - entity: media_player.tv_lg_55c8
    image: "url('/local/lg_remote/tv_logos/Rai 3 HD.png')"
    number: '503' 
```


