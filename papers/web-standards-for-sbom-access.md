# Establish Standards to Support Web Access to SBOM Data

By [Gary O'Neall](#author).


## Description
Establishing a common vocabulary and protocol for accessing SBOM information over the public internet would ease integration into
various software build and deployment systems thereby improving overall software supply chain security.

Although this is a very ambitious goal, there is already a lot of standardization we can leverage for this purpose.

There is an existing [IETF draft proposal](https://datatracker.ietf.org/doc/html/draft-ietf-opsawg-sbom-access)
to extend the Manufacturers Usage Description ([RFC 8520](https://tools.ietf.org/html/rfc8520)) to discover and retrieve SBOM information.
Although this proposal is focused on devices at the end of the supply chain, aspects of the model and approach could be leveraged for 
more general SBOM discovery scenarios.

For the SBOM vocabulary, the SPDX standard had defined terms for supporting use cases involving SBOMs as well as many other supply chain relevant use cases.

The SPDX standard is a formal ISO standard ([ISO/IEC 5962:2021](https://www.iso.org/standard/81870.html)) as well an 
[RDF ontology](https://spdx.org/rdf/terms/) described in the [W3C OWL Ontology language](https://www.w3.org/OWL/).
The standard is also freely available as a [JSON schema](https://github.com/spdx/spdx-spec/blob/master/schemas/spdx-schema.json)
and more [human readable web pages](https://spdx.github.io/spdx-spec/v2.3/).

SPDX is supported and maintained by a large group of contributors representing tooling providers, SBOM producers and SBOM consumers.

The upcoming SPDX 3.0 has some very specific enhancements for making the SBOM information more web accessible.

Leveraging an existing well-defined vocabulary that supports standards ranging from JSON Schemas to full RDF Ontologies can accelerate
the adoption of internet accessible SBOM data and improve overall software supply chain security.


## Links
- [IETF draft proposel for SBOM Access](https://datatracker.ietf.org/doc/html/draft-ietf-opsawg-sbom-access)
- [SPDX general information website](https://spdx.dev/)
- [SPDX Standard ISO/IEC 5962:2021](https://www.iso.org/standard/81870.html)
- [SPDX RDF ontology web pages](https://spdx.org/rdf/terms/)
- [RDF ontology OWL](https://github.com/spdx/spdx-spec/blob/master/ontology/spdx-ontology.owl.ttl)
- [SPDX 2.3 Model Class Diagram](https://github.com/spdx/spdx-spec/blob/master/ontology/SPDX-2.3-simplified.png)
- [SPDX 3.0 Model Repository](https://github.com/spdx/spdx-3-model)


## Author

Gary is a co-lead of the technical workgroup for the Software Package Data Exchange® (SPDX™) - an open standard for
communicating software bill of material information, including components, licenses, copyrights, and security references.
Gary has contributed several open-source tools including the SPDX Java Libraries and Tools which can be found at https://spdx.dev/spdx-tools/.
Gary O’Neall is responsible for product development and technology for Source Auditor Inc.,
a software and service company helping software companies manage the technical and legal risks of open-source software.

