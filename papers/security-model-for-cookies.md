# Establishing a robust long-term security model for cookies on the web

By [Artur Janc](#author).


## Description

Browser vendors' efforts to disable third-party cookies are motivated
primarily by privacy / anti-tracking considerations, but they have a
significant - and generally underappreciated - impact on the overall
security of the web platform. The presence of third-party cookies is the
root cause of multiple classes of vulnerabilities in web applications, such
as Cross-Site Request Forgery (CSRF), clickjacking and numerous cross-site
leaks; consequently, blocking the sending of cookies on cross-site requests
would provide web applications with substantial isolation benefits.

However, the anti-tracking focus of third-party cookie blocking efforts
carries a risk of leading to implementations which won't reliably protect
websites from cross-site attacks. For example, establishing the top-level
site as the boundary for sending third-party cookies (the current
implementation in multiple browsers) risks allowing untrusted embedded
content, such as ads, to send credentialed requests to endpoints hosted by
the top-level site and continue to exploit cross-site vulnerabilities.

Similarly, mechanisms meant to restore functionality limited by the
deprecation of third-party cookies, such as the
[Storage Access API](https://privacycg.github.io/storage-access/),
[Cookies Having Independent Partitioned State](https://github.com/privacycg/CHIPS) (CHIPS),
[Federated Credential Management API](https://fedidcg.github.io/FedCM/) (FedCM),
as well as various features to re-enable third-party cookies on a
per-site basis, need to grapple with the same scoping rules. The risk of
being overly permissive (for example, creating convenient mechanisms to
fully re-enable third-party cookies for a given site) is that it will
permit web-based attackers to bypass built-in isolation defenses. This is
particularly concerning in the long run: if the web is safe by default from
cross-site vulnerabilities, developers will pay less attention to
implementing application mitigations (such as the use of CSRF tokens or
`X-Frame-Options` headers). As a result, attackers who can regain access to
third-party cookies on their sites will be able to exploit gaps in
isolation on a large fraction of the web.

This session is meant to discuss the cookie model that we're aiming for
from a security perspective, including a review of the potential security
benefits of reliable third-party cookie blocking. It also aims to identify
specific hardening opportunities for browsers' third-party cookie blocking
logic to help browser vendors improve their implementations.


## Links

- [Improving the Storage Access API security model](https://docs.google.com/document/d/1AsrETl-7XvnZNbG81Zy9BcZfKbqACQYBSrjM3VsIpjY/edit#)
- [Issue raised on the Storage Access API security model](https://github.com/privacycg/storage-access/issues/113)
- [Standardizing Security Semantics of Cross-Site Cookies](https://github.com/DCtheTall/standardizing-cross-site-cookie-semantics)
- [Keynote by Artur Janc on (Re-)Designing the web's cookie model with security in mind](https://secweb.work/2023.html) - SecWeb Workshop - May 2023


## Author

Artur Janc is the Team Leader for web security on Google's Information Security
Engineering team, focusing on the adoption of security features across the
Google web ecosystem as well as broader security and privacy improvements to
the web platform.
