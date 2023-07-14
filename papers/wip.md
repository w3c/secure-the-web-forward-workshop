# JavaScript realms are used to bypass and eliminate many existing web apps security tools - A problem with a WIP solution

## Intro

There are many security tools that try to defend web apps in runtime in the browser by redefining and protecting built in JavaScript APIs.
The need for such tools grows with the difficulty in securing web apps supply chains which results in having a hard time detecting changes in the supply chain that might cause harm in the victim's browser.

For example, if a malicious code manages to execute within the browser of the victim, it can try accessing some secrets stored by the app in the `localStorage` - therefore we have different security tools which attempt to better control access to such sensitive APIs by redefining their behaviour to be more selective on which code is allowed to access it and which code isn't.

## Problem

However, thanks to JavaScript realms, an attacker can ignore such protection quite easily by simply creating a new JavaScript realm and accessing such sensitive APIs via the new realm's unique set of APIs:

```javascript
// will fail if the localStorage API is hooked into by a security tool
const stolenSecret = localStorage.secret;
// bypass security tool easily - access the sensitive API via a new realm
const stolenSecret = document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage.secret
```

This effectively eliminates such protections almost completely.

## Solution (WIP)

We currntly are working on the most advanced solution to this problem by trying to provide an easy way to handle creation of new realms in runtime before attackers gain access to those.

However, implementing such a solution in JS comes with many difficulties and issues, which could have been easier to address natively by the browser.

## Goal

I wish to bring up this issue and the possible approaches to it in order to discuss and explore them.

## Author's background

I've been working on browser JavaScript runtime security specifically for supply chain security for the past 5 years, focusing mostly on realms security research. In general, most of my work so far was about browser JavaScript security in all sorts of aspects.
I currently lead the research and work around realms security in MetaMask, and work on Snow being an open source WIP solution for this problem.

## Links to related supporting resources

### Read

* Long term research of realms security https://github.com/weizman/awesome-javascript-realms-security
* GitHub repo of Snow, the solution we are working on to deal with the problem https://github.com/lavamoat/snow

### Watch

* OWASP AppSec talk about realms security and Snow https://www.youtube.com/watch?v=l2l_qnEhx3M
