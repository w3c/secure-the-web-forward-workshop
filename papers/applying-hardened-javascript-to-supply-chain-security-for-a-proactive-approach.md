# Applying Hardened Javascript to supply chain security for a proactive approach

The problem of supply chain security for the Web is currently being addressed by building up databases of known issues and improving the pace at which research and testing results are delivered to the web developers. The approach has been successful in improving the security of popular open source software. The friction introduced by false-positives and its impact on ecurity postures in the community is yet to be addressed.
This approach depends on security researchers, increasingly aided by AI, discovering vulnerabilities and malicious packages. It constitutes an arms race, while the growth in malicious packages for the web ecosystem is clearly superlinear.

As a result, projects need to be able to afford waiting for audit results of their dependencies to trickle down to developers and assume malicious packages would be discovered in time for them to be stopped. Targeted attacks and sophisticated threat actors may never be stopped by this approach even at maximum throughput.

We need another layer of protection that can be proactive, not reactive.

Using Hardened JavaScript one can take control of all powerful APIs and resources in JavaScript and decide which should be granted to specific dependencies. With appropriate tooling that can also include projects producing bundles where application code and dependencies coexist in one file and share references.

Hardened JavaScript protects all intrinsics from being modified and introduces Compartment constructor, which can be used to evaluate code in isolation from outer scope.

The current approach in LavaMoat is to generate a policy at a point in time and only allow access to expected globals and imports. The enforcement happens at runtime using Compartments. Any dependency suddenly turning malicious and eg. reaching for `fetch` while it was not accessing network before will fail to work.

As work on introducing Hardened Javascript (Module\* classes, Evaluators, Compartment and lockdown) to JavaScript progresses, it's time to look into making runtime supply chain security a feature of the Web platform.

While using Compartment to isolate dependencies and control what they access is a proven technique by now, open questions remain.
- Access to DOM is the ultimate power that makes references to all globals reachable. Attempts to apply a membrane to DOM have not been successful.
- Compartment can provide isolation within one Realm, but accessing another Realm would allow escalating privileges further.

I wish to present on the topic above and open a conversation about supporting the proactive approach to supply chain security in the Web platform.

## Author's background

I've been involved in Open Source and Web development. Spent 7 years leading a team building and maintaining ultimately over 30 web applications in production. Over that period I've been putting increased attention towards security and building up awareness of the needs of development teams in security context, built [npm-audit-resolver](https://github.com/naugtur/npm-audit-resolver) and ultimately joined the LavaMoat team where I'm working on tooling to apply Hardened Javascript to the problem of supply chain security.

## Links to related supporting resources

- TC39 Compartments proposal https://github.com/tc39/proposal-compartments
- SES shim - a userspace implementation of Compartments and lockdown https://github.com/endojs/endo/tree/master/packages/ses
- LavaMoat - an opensource tool for using SES shim to deliver runtime protections against supply chain attacks https://github.com/LavaMoat/LavaMoat
- Gal Weizman on addressing the Realm issue in LavaMoat https://weizman.github.io/page-what-is-a-realm-in-js/

### Video resources

- Mark Miller on Hardened Javascript https://www.youtube.com/watch?v=u-XETUbxNUU
- My presentation on the topic at NodeConfEU https://www.youtube.com/watch?v=Qjeh7Qo2u28
