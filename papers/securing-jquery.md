# Can securing jQuery help secure the Web forward?

By [Tobie Langel](#author).


## Description

Open source security has increasingly become a top concern due to numerous high-profile and high-impact vulnerabilities affecting critical open source projects that underpin the internet's infrastructure. Over the years, various industry efforts have aimed to address this issue, with a renewed sense of urgency emerging recently. The White House and the EU Commission have taken notice, and legislative efforts are underway across multiple jurisdictions. Open source security is now increasingly framed as a software supply chain issue.

In this context, the OpenSSF has launched an ambitious new project called Alpha-Omega. Most of the open source projects identified by Alpha-Omega fit well within the activity streams defined by the OpenSSF's Open Source Software Security Mobilization Plan. they are, after all, the infrastructure building blocks that this initiative was designed to harden.

A few projects, however, stand out. jQuery is one of them.

Originally released in 2006, jQuery has significantly impacted both web developers and browser vendors by addressing browser interoperability issues through a unified and enjoyable-to-use API. This has empowered web developers, accelerated the advent of the Web as an application platform, and driven the adoption of better Web standards and more interoperable implementations.

Despite newer frameworks like React, Vue.js, and Svelte gaining popularity, jQuery remains an essential feature of the Web. As of today, it is present in a staggering 78% of the top 1 million websites, according to BuiltWith. For context, React is only found on 14% of the same sample, and most other JavaScript libraries that appeared in the meantime (e.g., Twitter Bootstrap, Modernizr, or Backbone) have fallen out of favor.

jQuery's massive reach and longevity aren't its only unique aspects. It's also one of the rare JavaScript libraries identified by Alpha-Omega that is directly consumer-facing--effectively running on billions of consumer devices--and it runs inside the browser sandbox. This combination creates a different set of security concerns and calls for a dedicated approach.

While this approach is specific to jQuery in this context, it touches on several broader points relevant to this audience, notably:

- Identifying vulnerabilities that are specific to JavaScript code that is meant to be run in the browser sandbox.
- Educating maintainers of web-facing open source projects about those vulnerabilities.
- Improving web developer education about browser and web application security to reduce the prevalence of those vulnerabilities that the browser sandbox cannot protect from.
- Supporting standardization efforts designed to reduce related risk (particularly around making it easier to manage user-generated content more safely).
- Exploring the life cycle of open-source projects, in particular those that fill browser standardization gaps ot interoperability issues.
- Examining the security aspects of hosting JavaScript on CDNs and determining best practices around those (and a possible deprecation path).

This project also provides an opportunity to explore improving the security of end-users on the web through multi-modal approaches across:

- standard bodies and standardization efforts
- browser implementations and developer tools
- developers advocates
- documentation (such as MDN)
- specialized media
- maintainers of open source libraries and the foundations that support them
- industry-wide security-focused efforts such as Alpha-Omega project
- open source funding through both industry and national efforts

Once again--and against all odds--jQuery can be a trailblazer and help move the web forward.

## Resources

* Fireside chat with Cody Zuschlag: [jQuery - Too much of a good thing?](https://www.youtube.com/watch?v=Yxu5ja0S2Ic)
* OpenJS Foundation announcement blog post: [OpenSSF Project Alpha-Omega Invests in the OpenJS Foundation and jQuery to Help Secure the Consumer Web](https://openjsf.org/blog/2022/10/24/openssf-project-alpha-omega-invests-in-the-openjs-foundation-and-jquery/)
* The New Stack article: [Why Outdated jQuery Is Still the Dominant JavaScript Library](https://thenewstack.io/why-outdated-jquery-is-still-the-dominant-javascript-library/)
* [Alpha-Omega - Open Source Security Foundation](https://openssf.org/community/alpha-omega/)
* [The Open Source Software Security Mobilization Plan](https://openssf.org/oss-security-mobilization-plan/) ([PDF](https://8112310.fs1.hubspotusercontent-na1.net/hubfs/8112310/OpenSSF/OSS%20Mobilization%20Plan.pdf))


## Author

Tobie Langel is a world-leading expert and international speaker on open source and standardization. He advises some of the biggest names in tech (Google, Microsoft, Mozilla, Intel, Cisco), promising startups (GitLab, Airtable, Coil), industry organizations (OpenJS Foundation, OASIS, W3C) and nonprofits (Organization for Ethical Source, Ushahidi, Omidyar Network), either pro bono or through his consultancy, UnlockOpen.
