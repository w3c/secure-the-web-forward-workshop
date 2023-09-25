# Source Code Transparency

By [Daniel Huigens](#author).

## Description

### Problem Statement
 
Today, whenever you open a web app, the browser fetches and runs its
source code from the server. This enables the ease of deployment and
iteration that the web is known for, but can also pose security risks.
In particular, for web apps that don't want to trust the server, such
as those using client-side encryption to protect the user's data before
sending it to the server, or those processing the user's data entirely
client-side without sending any sensitive data to the server, the
current security model of the web is insufficient.
 
After all, if a web app claims not to send sensitive data to the server,
this is very difficult for users to check, as they would need to read
(and understand) the source every time it's loaded from the server.
Even for security researchers, such a claim is impossible to verify, as
the server could simply serve a different version of the web app to a
user it wants to target than to the security researcher.
 
Therefore, we would like to propose a mechanism to enable security
researchers to audit the source code of especially-sensitive web apps
that is (or was) sent to any user, not just to themselves.
 
Our goal is only to allow detection rather than prevention of malicious
code, possibly after the fact, as we believe this will still deter
servers from serving malicious code. Additionally, preventing malicious
code from being deployed would require mandating security audits prior
to deploys, which would slow down and fundamentally change the
deployment model of the web.
 
### High-level Proposal
 
To accomplish the above, the source code of (a given version of) a web
app should be published to a transparency log, similar to [Certificate
Transparency](https://certificate.transparency.dev/). Then, when opening
a web app, the browser should check that the fetched source code was
received by (and is or will be included in) the transparency log, and
only run it if so. Then, security researchers can check the transparency
log for all published versions of a given web app, and check that none of
them contain any malicious code.
 
To aid the auditing process, web apps may want to employ additional
existing and proposed security mechanisms, such as CSP, SRI, SBOMs,
reproducible builds, etc. These mechanisms, which currently only allow
the developer of web apps to check the security of the web app, would
additionally allow external security researchers to audit a web app, if
it used a mechanism such as Source Code Transparency.
 
### Detailed Proposal
 
To simplify the distribution and integrity verification of web apps'
source code, we could make use of
[Web Bundles](https://wpack-wg.github.io/bundled-responses/draft-ietf-wpack-bundled-responses.html),
and publish a hash of the bundle to a transparency log.
 
The transparency log could be structured as an append-only chain of
Merkle Trees, each of which operates as a map of (domain, version) keys
to hash(bundle) values (where the key could be hashed and interpreted
as a binary path in the binary tree, with the value of the final leaf
being the hash of the web bundle). Web apps could submit the hash of
the bundle to the transparency log, which would periodically include
all (existing and new versions of each) web app in the next Merkle Tree.
Auditors could check that the transparency log is behaving consistently
and not changing the hash of old versions of web apps, for example.
 
Then, when loading a participating web app, the browser would check the
latest Merkle Tree and verify that the hash of the bundle received is
included in it, and warn the user if not. To still allow instantaneous
deploys, we could allow this check to be done some time after loading
the web app, at the cost of delayed warnings in case of issues.
 
To signal to the browser that a given web app is using Source Code
Transparency, we could introduce a X.509 certificate extension, which
would automatically be included in the Certificate Transparency logs,
allowing security researchers to check that all certificates for the
domain of the web app include this extension. Browser would refuse to
load web apps without Source Code Transparency from a domain using a
certificate with this extension.

Please see the
[Source Code Transparency](https://github.com/twiss/source-code-transparency)
GitHub repository for discussions.

## References

- [Source Code Transparency on GitHub](https://github.com/twiss/source-code-transparency)
- [Certificate Transparency](https://certificate.transparency.dev/)
- [Web Bundles](https://wpack-wg.github.io/bundled-responses/draft-ietf-wpack-bundled-responses.html)

## Author

Daniel Huigens is the cryptography team lead at [Proton](https://proton.me/). He
maintains [OpenPGP.js](https://github.com/openpgpjs/openpgpjs) and
[go-crypto](https://github.com/ProtonMail/go-crypto), both of which implement
the OpenPGP standard of encryption. Daniel is also a co-author of the
[OpenPGP crypto-refresh](https://datatracker.ietf.org/doc/html/draft-ietf-openpgp-crypto-refresh)
draft standard and edits the
[Web Cryptography API specification](https://w3c.github.io/webcrypto/).
