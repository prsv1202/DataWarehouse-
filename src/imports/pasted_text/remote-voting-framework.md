# Decision-Maker

## Primary Decision-Maker

**Election Commission of India (ECI)** should be the primary decision-maker and authority for any implementation of a remote/online voting system for Indian elections.

The technology company or startup developing the platform should act only as a **technology provider/research and implementation partner**, unless the government establishes another legally authorized structure.

### Decision Authority

The Election Commission, together with other legally required government institutions, should decide:

* Whether remote online voting is legally permitted
* Which elections are eligible
* Which voters are eligible
* Whether a pilot can be conducted
* Security and technical standards
* Identity-verification requirements
* Ballot-secrecy requirements
* Audit requirements
* Data-protection requirements
* Whether the system is ready for wider deployment
* Whether the system should be expanded, modified, paused or discontinued

### Independent Oversight

The decision-making process should also involve appropriate independent experts and stakeholders in:

* Cybersecurity
* Election technology
* Cryptography
* Privacy
* Accessibility
* Constitutional/election law
* Public policy

No private company should have unilateral authority to decide whether an election system is secure enough to deploy.

---

# Go / No-Go Decision Framework

Before moving from one phase to the next, the Election Commission should evaluate predefined criteria.

### GO

Proceed to the next phase only if:

* Legal requirements are satisfied.
* Security requirements are independently validated.
* Voter identity can be reliably verified.
* Duplicate voting can be prevented.
* Ballot secrecy is demonstrated.
* Votes can be independently audited.
* The system remains available during the election.
* Accessibility requirements are satisfied.
* Independent experts find no unresolved critical vulnerabilities.
* Voters can understand and use the system correctly.

### NO-GO

Stop, delay or return to testing if:

* A critical security vulnerability remains.
* Ballot secrecy cannot be guaranteed.
* Duplicate or unauthorized voting cannot be reliably prevented.
* The system cannot produce trustworthy audit evidence.
* Significant coercion risks remain unresolved.
* Legal authorization is incomplete.
* Independent testing identifies unacceptable election-integrity risks.

---

# Success Criteria

The project should not define success simply as:

**"Millions of people voted online."**

The primary measure of success should be:

**"Eligible voters can participate remotely while the election remains secure, secret, auditable, accessible and trustworthy."**

## 1. Election Integrity

Target:

**100% of accepted votes must be associated with an eligible voting event, with no unresolved evidence of unauthorized or duplicate voting.**

Any confirmed material integrity failure should trigger investigation and potentially a **NO-GO** decision.

---

## 2. Ballot Secrecy

Target:

**The system must prevent unauthorized parties from determining how an individual voter voted.**

This includes protection against:

* Employers
* Administrators
* Developers
* Attackers
* Unauthorized government personnel
* Other third parties

---

## 3. Security

Target:

**Zero unresolved critical security vulnerabilities at production launch.**

The system should undergo:

* Independent penetration testing
* Source-code/security review where appropriate
* Threat modeling
* Cryptographic review
* Infrastructure testing
* Red-team exercises
* Disaster-recovery testing

---

## 4. Availability

Target:

**The voting service should remain available throughout the authorized voting period with an extremely high availability target, subject to the election authority's defined standard.**

The system should have:

* Redundant infrastructure
* Disaster recovery
* Backup systems
* DDoS protection
* Incident response
* Offline/contingency procedures where appropriate

---

## 5. Accuracy

Target:

**The final election outcome must be reproducible and independently auditable from the official election records.**

The system should provide evidence that:

**Votes accepted → votes recorded → votes counted → results reported**

without unauthorized alteration.

---

## 6. Voter Experience

Measure:

* Successful authentication rate
* Successful ballot-completion rate
* Average time required to vote
* Error rate
* Accessibility compliance
* User comprehension

The goal should be a voting process that an ordinary voter can complete without specialized technical knowledge.

---

## 7. Accessibility

The system should be usable by people with different:

* Physical abilities
* Visual abilities
* Hearing abilities
* Languages
* Technical skill levels
* Internet conditions

Accessibility should be treated as an election requirement, not an optional feature.

---

## 8. Speed

Measure the improvement in:

* Voter authentication
* Ballot delivery
* Vote collection
* Administrative processing
* Counting/verification

However:

**Speed is a secondary success criterion. Election integrity always takes priority.**

---

## 9. Cost Efficiency

Compare the total cost of the digital system against the relevant existing voting process.

Measure:

**Infrastructure + cybersecurity + staffing + maintenance + auditing + support + disaster recovery**

rather than claiming that online voting is automatically cheaper.

Success means achieving meaningful efficiency **without reducing security or election quality**.

---

## 10. Public Trust

Measure:

* Voter confidence
* Independent expert confidence
* Audit results
* Number and severity of incidents
* Transparency of the system
* Public understanding of how the system protects their vote

The ultimate goal is not merely technical performance.

It is:

> **A voter should be able to cast a vote remotely and have reasonable, independently supported confidence that their vote was counted correctly, remained secret, and could not be manipulated.**

---

# Final Success Gate

The system should only progress toward nationwide deployment when the Election Commission determines that all critical requirements have been satisfied.

### Success =

**Legal authorization

* Election integrity
* Ballot secrecy
* Strong security
* Independent auditability
* Accessibility
* Reliability
* Public trust
* Demonstrated operational performance**

If any critical election-integrity requirement fails, **deployment should stop regardless of how fast, inexpensive or popular the system is.**
