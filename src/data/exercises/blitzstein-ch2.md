# Chapter 2 Exercises
## Conditioning on evidence

#### 1.
A spam filter is designed by looking at commonly occurring phrases in spam. Suppose that 80% of email is spam. In 10% of the spam emails, the phrase "free money" is used, whereas this phrase is only used in 1% of non-spam emails. A new email has just arrived, which does mention "free money". What is the probability that it is spam?

Sol:
- $P(\text{spam}) = 0.8$, $P(\text{non-spam}) = 0.2$
- $P(\text{FM} \mid \text{spam}) = 0.1$, $P(\text{FM} \mid \text{non-spam}) = 0.01$

$P(\text{spam} \mid \text{FM})$:

$$P(\text{FM}) = 0.1 \times 0.8 + 0.01 \times 0.2 = 0.08 + 0.002 = 0.082$$

$$P(\text{spam} \mid \text{FM}) = \frac{0.1 \times 0.8}{0.082} = \frac{0.08}{0.082} = \frac{40}{41} \approx 0.976$$

$\frac{40}{41} \approx 97.6\%$
#### 2.
A woman is pregnant with twin boys. Twins may be either identical or fraternal. Suppose that 1/3 of twins born are identical, that identical twins have a 50% chance of being both boys and a 50% chance of being both girls, and that for fraternal twins each twin independently has a 50% chance of being a boy and a 50% chance of being a girl. Given the above information, what is the probability that the woman's twins are identical?

Sol:
- $P(\text{identical}) = \frac{1}{3}$, $P(\text{fraternal}) = \frac{2}{3}$
- $P(\text{both boys} \mid \text{identical}) = 0.5$
- $P(\text{both boys} \mid \text{fraternal}) = 0.5 \times 0.5 = 0.25$
  $P(\text{identical} \mid \text{both boys})$:
  $$P(\text{both boys}) = P(\text{both boys} \mid \text{identical}) \cdot P(\text{identical}) + P(\text{both boys} \mid \text{fraternal}) \cdot P(\text{fraternal})$$
  $$P(\text{both boys}) = 0.5 \times \frac{1}{3} + 0.25 \times \frac{2}{3} = \frac{1}{6} + \frac{1}{6} = \frac{1}{3}$$

$$P(\text{identical} \mid \text{both boys}) = \frac{0.5 \times \frac{1}{3}}{\frac{1}{3}} = \frac{\frac{1}{6}}{\frac{1}{3}} = \frac{1}{2}$$
$\frac{1}{2}$
#### 3.
According to the CDC (Centers for Disease Control and Prevention), men who smoke are 23 times more likely to develop lung cancer than men who don't smoke. Also according to the CDC, 21.6% of men in the U.S. smoke. What is the probability that a man in the U.S. is a smoker, given that he develops lung cancer?

Sol:
- $P(\text{cancer} \mid \text{smoker}) = 23 \cdot P(\text{cancer} \mid \text{non-smoker})$
- $P(\text{smoker}) = 0.216$, $P(\text{non-smoker}) = 0.784$
  let $p = P(\text{cancer} \mid \text{non-smoker})$

$$P(\text{cancer}) = 23p \times 0.216 + p \times 0.784 = p(4.968 + 0.784) = 5.752p$$

$$P(\text{smoker} \mid \text{cancer}) = \frac{23p \times 0.216}{5.752p} = \frac{4.968}{5.752} = \frac{621}{719} \approx 0.864$$
$\frac{621}{719}$
#### 4.

Fred is answering a multiple-choice problem on an exam, and has to choose one of $n$ options (exactly one of which is correct). Let $K$ be the event that he knows the answer, and $R$ be the event that he gets the problem right (either through knowledge or through luck). Suppose that if he knows the right answer he will definitely get the problem right, but if he does not know then he will guess completely randomly. Let $P(K) = p$.

(a) Find $P(K|R)$ (in terms of $p$ and $n$).

Sol:
- $P(K) = p$
- $P(R \mid K) = 1$ (knows $\Rightarrow$ gets it right)
- $P(R \mid K^c) = \frac{1}{n}$ (guesses randomly among $n$ options)
  $$P(R) = P(R \mid K) \cdot P(K) + P(R \mid K^c) \cdot P(K^c) = 1 \cdot p + \frac{1}{n} \cdot (1-p) = p + \frac{1-p}{n}$$
  $$P(K|R) = \frac{P(R|K) \cdot P(K)}{P(R)} = \frac{p}{p + \frac{1-p}{n}} = \frac{np}{np + 1 - p} = \frac{np}{(n-1)p + 1}$$

(b) Show that $P(K|R) \geq p$, and explain why this makes sense intuitively. When (if ever) does $P(K|R)$ equal $p$?

Sol:
$$\frac{np}{(n-1)p + 1} \geq p \iff np \geq p[(n-1)p + 1] \iff np \geq (n-1)p^2 + p$$

$$\iff (n-1)p \geq (n-1)p^2 \iff (n-1)p(1-p) \geq 0$$

This holds since $n \geq 1$, $p \in [0,1]$, so $(n-1)p(1-p) \geq 0$.

Getting the problem right is evidence that Fred knew the answer (since knowing guarantees success, while guessing only sometimes works). Observing success increases our belief he knew it.

#### 5.
Three cards are dealt from a standard, well-shuffled deck. The first two cards are flipped over, revealing the Ace of Spades as the first card and the 8 of Clubs as the second card. Given this information, find the probability that the third card is an ace in two ways: using the definition of conditional probability, and by symmetry.

Sol:
Conditional prob
Let $A$ = "third card is an ace"
Let $B$ = "first card is Ace of Spades and second card is 8 of Clubs"
$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

$$P(B) = \frac{1}{52} \cdot \frac{1}{51} = \frac{1}{2652}$$

$$P(A \cap B) = P(\text{first is A, second is 8, third is an ace})$$

Three $A$ remaining

$$P(A \cap B) = \frac{1}{52} \cdot \frac{1}{51} \cdot \frac{3}{50} = \frac{3}{132600}$$

$$P(A|B) = \frac{\frac{3}{132600}}{\frac{1}{2652}} = \frac{3}{132600} \cdot \frac{2652}{1} = \frac{3}{50}$$

Symmetry
Given that the first two cards are known, there are 50 cards remaining in the deck with three of them being $A$.
By symmetry, each of the remaining 50 cards is equally likely to be the third card dealt.
$$P(\text{third card is an ace} \mid \text{first two known}) = \frac{3}{50}$$
#### 6.
A hat contains 100 coins, where 99 are fair but one is double-headed (always landing Heads). A coin is chosen uniformly at random. The chosen coin is flipped 7 times, and it lands Heads all 7 times. Given this information, what is the probability that the chosen coin is double-headed? (Of course, another approach here would be to look at both sides of the coin—but this is a metaphorical coin.)

Sol:
- $P(\text{double-headed}) = \frac{1}{100}$, $P(\text{fair}) = \frac{99}{100}$
- $P(7H \mid \text{double-headed}) = 1$
- $P(7H \mid \text{fair}) = \left(\frac{1}{2}\right)^7 = \frac{1}{128}$
  $P(\text{double-headed} \mid 7H)$:
  $$P(7H) = 1 \cdot \frac{1}{100} + \frac{1}{128} \cdot \frac{99}{100} = \frac{1}{100} + \frac{99}{12800} = \frac{128 + 99}{12800} = \frac{227}{12800}$$

$$P(\text{double-headed} \mid 7H) = \frac{1 \cdot \frac{1}{100}}{\frac{227}{12800}} = \frac{1}{100} \cdot \frac{12800}{227} = \frac{128}{227} \approx 0.564$$
$\frac{128}{227}$
#### 7.
A hat contains 100 coins, where at least 99 are fair, but there may be one that is double-headed (always landing Heads); if there is no such coin, then all 100 are fair. Let $D$ be the event that there is such a coin, and suppose that $P(D) = 1/2$. A coin is chosen uniformly at random. The chosen coin is flipped 7 times, and it lands Heads all 7 times.

(a) Given this information, what is the probability that one of the coins is double-headed?

Sol:
- $P(D) = \frac{1}{2}$ (probability that one double-headed coin exists in the hat)
- If $D$ occurs: 1 double-headed, 99 fair coins
- If $D^c$ occurs: 100 fair coins
  $P(D \mid 7H)$

$$P(7H \mid D) = \frac{1}{100} \cdot 1 + \frac{99}{100} \cdot \frac{1}{128} = \frac{1}{100} + \frac{99}{12800} = \frac{227}{12800}$$

$$P(7H \mid D^c) = \frac{1}{128}$$

$$P(7H) = \frac{227}{12800} \cdot \frac{1}{2} + \frac{1}{128} \cdot \frac{1}{2} = \frac{227}{25600} + \frac{100}{12800} = \frac{227 + 200}{25600} = \frac{427}{25600}$$

$$P(D \mid 7H) = \frac{\frac{227}{12800} \cdot \frac{1}{2}}{\frac{427}{25600}} = \frac{227}{25600} \cdot \frac{25600}{427} = \frac{227}{427}$$
(b) Given this information, what is the probability that the chosen coin is double-headed?

Sol:
Let $C$ = "chosen coin is double-headed"

$$P(C \cap 7H) = P(C \cap 7H \mid D) \cdot P(D) = \frac{1}{100} \cdot 1 \cdot \frac{1}{2} = \frac{1}{200}$$

(Note: $P(C \cap 7H \mid D^c) = 0$ since no double-headed coin exists)

$$P(C \mid 7H) = \frac{\frac{1}{200}}{\frac{427}{25600}} = \frac{1}{200} \cdot \frac{25600}{427} = \frac{128}{427}$$

#### 8.
The screens used for a certain type of cell phone are manufactured by 3 companies, A, B, and C. The proportions of screens supplied by A, B, and C are 0.5, 0.3, and 0.2, respectively, and their screens are defective with probabilities 0.01, 0.02, and 0.03, respectively. Given that the screen on such a phone is defective, what is the probability that Company A manufactured it?

Sol:
- $P(A) = 0.5$, $P(B) = 0.3$, $P(C) = 0.2$
- $P(D \mid A) = 0.01$, $P(D \mid B) = 0.02$, $P(D \mid C) = 0.03$
  **Find** $P(A \mid D)$:
  $$P(D) = 0.01 \times 0.5 + 0.02 \times 0.3 + 0.03 \times 0.2 = 0.005 + 0.006 + 0.006 = 0.017$$

$$P(A \mid D) = \frac{0.01 \times 0.5}{0.017} = \frac{0.005}{0.017} = \frac{5}{17} \approx 0.294$$

$\frac{5}{17}$
#### 9.
(a) Show that if events $A_1$ and $A_2$ have the same prior probability $P(A_1) = P(A_2)$, $A_1$ implies $B$, and $A_2$ implies $B$, then $A_1$ and $A_2$ have the same posterior probability $P(A_1|B) = P(A_2|B)$ if it is observed that $B$ occurred.

Sol:
- $P(A_1) = P(A_2)$
- $A_1 \subseteq B$ (i.e., $A_1 \Rightarrow B$, so $P(B|A_1) = 1$)
- $A_2 \subseteq B$ (i.e., $A_2 \Rightarrow B$, so $P(B|A_2) = 1$)


$$P(A_1|B) = \frac{P(B|A_1) \cdot P(A_1)}{P(B)} = \frac{1 \cdot P(A_1)}{P(B)} = \frac{P(A_1)}{P(B)}$$

$$P(A_2|B) = \frac{P(B|A_2) \cdot P(A_2)}{P(B)} = \frac{1 \cdot P(A_2)}{P(B)} = \frac{P(A_2)}{P(B)}$$

Since $P(A_1) = P(A_2)$, we have $P(A_1|B) = P(A_2|B)$.
(b) Explain why (a) makes sense intuitively, and give a concrete example.

Sol:
**Intuition:** If $A_1$ and $A_2$ started equally likely and both _guarantee_ that $B$ occurs, then observing $B$ provides no information to distinguish between them. The evidence $B$ affects both hypotheses identically, preserving their relative probabilities.

**Example:** A standard deck has 52 cards.
- $A_1$ = "card is the Ace of Spades"
- $A_2$ = "card is the King of Hearts"
- $B$ = "card is a face card or an ace"
  Initially: $P(A_1) = P(A_2) = \frac{1}{52}$
  Both $A_1$ and $A_2$ imply $B$ (if the card is A or K, it's definitely a face card or ace).

After observing $B$ (there are 16 such cards): $$P(A_1|B) = P(A_2|B) = \frac{1/52}{16/52} = \frac{1}{16}$$

The two possibilities remain equally likely after observing $B$.
#### 10.
Fred is working on a major project. In planning the project, two milestones are set up, with dates by which they should be accomplished. This serves as a way to track Fred's progress. Let $A_1$ be the event that Fred completes the first milestone on time, $A_2$ be the event that he completes the second milestone on time, and $A_3$ be the event that he completes the project on time.

Suppose that $P(A_{j+1}|A_j) = 0.8$ but $P(A_{j+1}|A_j^c) = 0.3$ for $j = 1, 2$, since if Fred falls behind on his schedule it will be hard for him to get caught up. Also, assume that the second milestone supersedes the first, in the sense that once we know whether he is on time in completing the second milestone, it no longer matters what happened with the first milestone. We can express this by saying that $A_1$ and $A_3$ are conditionally independent given $A_2$ and they're also conditionally independent given $A_2^c$.

(a) Find the probability that Fred will finish the project on time, given that he completes the first milestone on time. Also find the probability that Fred will finish the project on time, given that he is late for the first milestone.

Sol:
- $P(A_2|A_1) = 0.8$, $P(A_2|A_1^c) = 0.3$
- $P(A_3|A_2) = 0.8$, $P(A_3|A_2^c) = 0.3$
- $A_1 \perp A_3 \mid A_2$ and $A_1 \perp A_3 \mid A_2^c$ (conditional independence)
  By LOTP:
  $$P(A_3|A_1) = P(A_3|A_2) \cdot P(A_2|A_1) + P(A_3|A_2^c) \cdot P(A_2^c|A_1)$$

$$P(A_3|A_1) = 0.8 \times 0.8 + 0.3 \times 0.2 = 0.64 + 0.06 = 0.70$$

$$P(A_3|A_1^c) = P(A_3|A_2) \cdot P(A_2|A_1^c) + P(A_3|A_2^c) \cdot P(A_2^c|A_1^c)$$

$$P(A_3|A_1^c) = 0.8 \times 0.3 + 0.3 \times 0.7 = 0.24 + 0.21 = 0.45$$

(b) Suppose that $P(A_1) = 0.75$. Find the probability that Fred will finish the project on time.

Sol:
$$P(A_3) = P(A_3|A_1) \cdot P(A_1) + P(A_3|A_1^c) \cdot P(A_1^c)$$

$$P(A_3) = 0.70 \times 0.75 + 0.45 \times 0.25 = 0.525 + 0.1125 = 0.6375$$

$P(A_3) = 0.6375$

#### 11.
An exit poll in an election is a survey taken of voters just after they have voted. One major use of exit polls has been so that news organizations can try to figure out as soon as possible who won the election, before the votes are officially counted. This has been notoriously inaccurate in various elections, sometimes because of selection bias: the sample of people who are invited to and agree to participate in the survey may not be similar enough to the overall population of voters.

Consider an election with two candidates, Candidate A and Candidate B. Every voter is invited to participate in an exit poll, where they are asked whom they voted for; some accept and some refuse. For a randomly selected voter, let $A$ be the event that they voted for A, and $W$ be the event that they are willing to participate in the exit poll. Suppose that $P(W|A) = 0.7$ but $P(W|A^c) = 0.3$. In the exit poll, 60% of the respondents say they voted for A (assume that they are all honest), suggesting a comfortable victory for A. Find $P(A)$, the true proportion of people who voted for A.

Sol:
- $P(W|A) = 0.7$ (willing to participate if voted for A)
- $P(W|A^c) = 0.3$ (willing to participate if voted for B)
- Among respondents: $P(A|W) = 0.6$
  $P(A)$:

$$P(A|W) = \frac{P(W|A) \cdot P(A)}{P(W)}$$

$$P(W) = P(W|A) \cdot P(A) + P(W|A^c) \cdot P(A^c) = 0.7 \cdot P(A) + 0.3 \cdot (1 - P(A))$$

$$P(W) = 0.7P(A) + 0.3 - 0.3P(A) = 0.4P(A) + 0.3$$

$$0.6 = \frac{0.7 \cdot P(A)}{0.4P(A) + 0.3}$$

$$0.6(0.4P(A) + 0.3) = 0.7P(A)$$

$$0.24P(A) + 0.18 = 0.7P(A)$$

$$0.18 = 0.46P(A)$$

$$P(A) = \frac{0.18}{0.46} = \frac{18}{46} = \frac{9}{23}$$
#### 12.
Alice is trying to communicate with Bob, by sending a message (encoded in binary) across a channel.

(a) Suppose for this part that she sends only one bit (a 0 or 1), with equal probabilities. If she sends a 0, there is a 5% chance of an error occurring, resulting in Bob receiving a 1; if she sends a 1, there is a 10% chance of an error occurring, resulting in Bob receiving a 0. Given that Bob receives a 1, what is the probability that Alice actually sent a 1?

Sol:
- $P(\text{send 0}) = P(\text{send 1}) = 0.5$

- $P(\text{receive 1}|\text{send 0}) = 0.05$

- $P(\text{receive 0}|\text{send 1}) = 0.10$

- $P(\text{receive 1}|\text{send 1}) = 0.90$


**Find** $P(\text{send 1}|\text{receive 1})$:

$$P(\text{receive 1}) = 0.05 \times 0.5 + 0.90 \times 0.5 = 0.025 + 0.45 = 0.475$$

$$P(\text{send 1}|\text{receive 1}) = \frac{0.90 \times 0.5}{0.475} = \frac{0.45}{0.475} = \frac{18}{19} \approx 0.947$$

(b) To reduce the chance of miscommunication, Alice and Bob decide to use a repetition code. Again Alice wants to convey a 0 or a 1, but this time she repeats it two more times, so that she sends 000 to convey 0 and 111 to convey 1. Bob will decode the message by going with what the majority of the bits were. Assume that the error probabilities are as in (a), with error events for different bits independent of each other. Given that Bob receives 110, what is the probability that Alice intended to convey a 1?

Sol:
- If send 0: error prob = 0.05, correct prob = 0.95
- If send 1: error prob = 0.10, correct prob = 0.90

**Compute** $P(\text{receive 110}|\text{send 000})$ and $P(\text{receive 110}|\text{send 111})$:

For 000 → 110: need errors in positions 1 and 2, no error in position 3: $$P(\text{110}|\text{000}) = 0.05 \times 0.05 \times 0.95 = 0.002375$$

For 111 → 110: need no error in positions 1 and 2, error in position 3: $$P(\text{110}|\text{111}) = 0.90 \times 0.90 \times 0.10 = 0.081$$

$$P(\text{receive 110}) = 0.002375 \times 0.5 + 0.081 \times 0.5 = 0.0011875 + 0.0405 = 0.0416875$$

$$P(\text{send 111}|\text{receive 110}) = \frac{0.081 \times 0.5}{0.0416875} = \frac{0.0405}{0.0416875} = \frac{648}{667}$$

#### 13.
Company A has just developed a diagnostic test for a certain disease. The disease afflicts 1% of the population. As defined in Example 2.3.9, the sensitivity of the test is the probability of someone testing positive, given that they have the disease, and the specificity of the test is the probability that of someone testing negative, given that they don't have the disease. Assume that, as in Example 2.3.9, the sensitivity and specificity are both 0.95.

Company B, which is a rival of Company A, offers a competing test for the disease. Company B claims that their test is faster and less expensive to perform than Company A's test, is less painful (Company A's test requires an incision), and yet has a higher overall success rate, where overall success rate is defined as the probability that a random person gets diagnosed correctly.

(a) It turns out that Company B's test can be described and performed very simply: no matter who the patient is, diagnose that they do not have the disease. Check whether Company B's claim about overall success rates is true.

Sol:
**Company A's test:**

- $P(D) = 0.01$, $P(D^c) = 0.99$

- Sensitivity = $P(+|D) = 0.95$

- Specificity = $P(-|D^c) = 0.95$


$$P(\text{correct}_A) = P(+|D) \cdot P(D) + P(-|D^c) \cdot P(D^c) = 0.95 \times 0.01 + 0.95 \times 0.99 = 0.95$$

**Company B's test:** Always diagnose "no disease"

$$P(\text{correct}_B) = P(-|D^c) \cdot P(D^c) = 1 \times 0.99 = 0.99$$
(b) Explain why Company A's test may still be useful.

Sol:
The purpose of the test is to provide an indicator to the disease, so while company B has higher success, it doesn't catch any of the positive cases.

(c) Company A wants to develop a new test such that the overall success rate is higher than that of Company B's test. If the sensitivity and specificity are equal, how high does the sensitivity have to be to achieve their goal? If (amazingly) they can get the sensitivity equal to 1, how high does the specificity have to be to achieve their goal? If (amazingly) they can get the specificity equal to 1, how high does the sensitivity have to be to achieve their goal?

Sol:
Let sensitivity = specificity = $s$.
$$P(\text{correct}) = s \times 0.01 + s \times 0.99 = s > 0.99$$
So $s > 0.99$ is needed.
**If sensitivity = 1:**

$$P(\text{correct}) = 1 \times 0.01 + c \times 0.99 = 0.01 + 0.99c > 0.99$$

$$0.99c > 0.98 \implies c > \frac{98}{99} \approx 0.9899$$
Specificity must exceed $\frac{98}{99}$.
**If specificity = 1:**

$$P(\text{correct}) = s \times 0.01 + 1 \times 0.99 = 0.01s + 0.99 > 0.99$$
$$0.01s > 0 \implies s > 0$$

#### 14.
Consider the following scenario, from Tversky and Kahneman [27]:

> Let $A$ be the event that before the end of next year, Peter will have installed a burglar alarm system in his home. Let $B$ denote the event that Peter's home will be burglarized before the end of next year.

(a) Intuitively, which do you think is bigger, $P(A|B)$ or $P(A|B^c)$? Explain your intuition.

Sol:
$P(A|B) > P(A|B^c)$ seems intuitive. If Peter's home gets burglarized, he's more likely to install an alarm system afterward (either due to the traumatic experience or increased awareness of risk) compared to if his home was never burglarized.

(b) Intuitively, which do you think is bigger, $P(B|A)$ or $P(B|A^c)$? Explain your intuition.

Sol:
$P(B|A) < P(B|A^c)$ seems intuitive. If Peter installs a burglar alarm, his home is less likely to be burglarized (the alarm deters burglars) compared to if he has no alarm system.

(c) Show that for any events $A$ and $B$ (with probabilities not equal to 0 or 1), the inequality $P(A|B) > P(A|B^c)$ is equivalent to $P(B|A) > P(B|A^c)$.

Sol:
$$P(A|B) > P(A|B^c) \iff \frac{P(A \cap B)}{P(B)} > \frac{P(A) - P(A \cap B)}{P(B^c)}$$

$$\iff P(A \cap B) \cdot P(B^c) > [P(A) - P(A \cap B)] \cdot P(B)$$

$$\iff P(A \cap B)[P(B^c) + P(B)] > P(A) \cdot P(B)$$

$$\iff P(A \cap B) > P(A) \cdot P(B)$$

Similarly:

$$P(B|A) > P(B|A^c) \iff \frac{P(A \cap B)}{P(A)} > \frac{P(B) - P(A \cap B)}{P(A^c)}$$

$$\iff P(A \cap B) \cdot P(A^c) > [P(B) - P(A \cap B)] \cdot P(A)$$

$$\iff P(A \cap B) > P(A) \cdot P(B)$$


(d) Tversky and Kahneman report that 131 out of 162 people whom they posed (a) and (b) to said that $P(A|B) > P(A|B^c)$ and $P(B|A) < P(B|A^c)$. What is a plausible explanation for why this was such a popular opinion despite (c) showing that it is impossible for these inequalities both to hold?

Sol:
People think **temporally** rather than **probabilistically**. They imagine:
- Scenario 1: Burglary happens → Peter installs alarm (causal: past affects future)
- Scenario 2: Alarm installed → Burglary prevented (causal: present prevents future)
  But conditional probability is **symmetric** and doesn't respect temporal order. The mathematical relationship doesn't distinguish between "alarm because of burglary" and "no burglary because of alarm"—both statements about correlation must align.
  The 131 respondents likely conflated:
- $P(A|B)$ with "probability of installing alarm _after_ burglary"

- $P(B|A)$ with "probability of burglary _after_ installing alarm"
#### 15.
Let $A$ and $B$ be events with $0 < P(A \cap B) < P(A) < P(B) < P(A \cup B) < 1$. You are hoping that both $A$ and $B$ occurred. Which of the following pieces of information would you be happiest to observe: that $A$ occurred, that $B$ occurred, or that $A \cup B$ occurred?

Sol:
$A$

$$P(A \cap B | A) = P(B|A) = \frac{P(A \cap B)}{P(A)}$$

$B$

$$P(A \cap B | B) = P(A|B) = \frac{P(A \cap B)}{P(B)}$$

$A \cup B$

$$P(A \cap B | A \cup B) = \frac{P(A \cap B)}{P(A \cup B)}$$

Since $P(A \cap B) < P(A) < P(B) < P(A \cup B)$, we have:

$$\frac{P(A \cap B)}{P(A)} > \frac{P(A \cap B)}{P(B)} > \frac{P(A \cap B)}{P(A \cup B)}$$

Therefore: $P(A \cap B | A) > P(A \cap B | B) > P(A \cap B | A \cup B)$
#### 16.
Show that $P(A|B) \leq P(A)$ implies $P(A|B^c) \geq P(A)$, and give an intuitive explanation of why this makes sense.

Sol:
By the law of total probability:
$$P(A) = P(A|B) \cdot P(B) + P(A|B^c) \cdot P(B^c)$$

Rearranging:
$$P(A|B^c) \cdot P(B^c) = P(A) - P(A|B) \cdot P(B)$$

$$P(A|B^c) = \frac{P(A) - P(A|B) \cdot P(B)}{P(B^c)}$$

Since $P(A|B) \leq P(A)$:

$$P(A|B^c) = \frac{P(A) - P(A|B) \cdot P(B)}{P(B^c)} \geq \frac{P(A) - P(A) \cdot P(B)}{P(B^c)} = \frac{P(A)[1 - P(B)]}{P(B^c)} = \frac{P(A) \cdot P(B^c)}{P(B^c)} = P(A)$$

Therefore $P(A|B^c) \geq P(A)$

If observing $B$ makes $A$ less likely (or doesn't change it), then observing $B^c$ must make $A$ more likely (or not change it) to compensate.

Think of it as a seesaw: $P(A)$ is the weighted average of $P(A|B)$ and $P(A|B^c)$. If one side ($P(A|B)$) is below the average, the other side ($P(A|B^c)$) must be above it to maintain the balance.
#### 17.
In deterministic logic, the statement "A implies B" is equivalent to its contrapositive, "not B implies not A". In this problem we will consider analogous statements in probability, the logic of uncertainty. Let $A$ and $B$ be events with probabilities not equal to 0 or 1.

(a) Show that if $P(B|A) = 1$, then $P(A^c|B^c) = 1$.

Sol:
$P(B|A) = 1$

By Bayes' rule:

$$P(A^c|B^c) = \frac{P(B^c|A^c) \cdot P(A^c)}{P(B^c)}$$

By LOTP:

$$P(B^c) = P(B^c|A) \cdot P(A) + P(B^c|A^c) \cdot P(A^c)$$

Since $P(B|A) = 1$, we have $P(B^c|A) = 0$:

$$P(B^c) = 0 \cdot P(A) + P(B^c|A^c) \cdot P(A^c) = P(B^c|A^c) \cdot P(A^c)$$

Substituting:

$$P(A^c|B^c) = \frac{P(B^c|A^c) \cdot P(A^c)}{P(B^c|A^c) \cdot P(A^c)} = 1$$

(b) Show however that the result in (a) does not hold in general if $=$ is replaced by $\approx$. In particular, find an example where $P(B|A)$ is very close to 1 but $P(A^c|B^c)$ is very close to 0.

Sol:
Let $A$ and $B$ be independent events with:
- $P(A) = 0.99$ (very common)

- $P(B) = 0.99$ (very common)

- $A$ and $B$ independent

Then:

$$P(B|A) = P(B) = 0.99 \approx 1$$

$$P(A^c|B^c) = P(A^c) = 0.01 \approx 0$$

#### 18.
Show that if $P(A) = 1$, then $P(A|B) = 1$ for any $B$ with $P(B) > 0$. Intuitively, this says that if someone dogmatically believes something with absolute certainty, then no amount of evidence will change their mind. The principle of avoiding assigning probabilities of 0 or 1 to any event (except for mathematical certainties) was named Cromwell's rule by the statistician Dennis Lindley, due to Cromwell saying to the Church of Scotland, "Think it possible you may be mistaken."

Sol:
$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

Since $A$ is certain, $A \cap B = B$ (if $A$ always happens, then $A \cap B$ occurs exactly when $B$ occurs):

$$P(A \cap B) = P(B)$$
Therefore:
$$P(A|B) = \frac{P(B)}{P(B)} = 1$$
#### 19.
Explain the following Sherlock Holmes saying in terms of conditional probability, carefully distinguishing between prior and posterior probabilities: "It is an old maxim of mine that when you have excluded the impossible, whatever remains, however improbable, must be the truth."

Sol:
Let $H_1, \ldots, H_n$ be exhaustive hypotheses for evidence $E$.
**"Excluding the impossible":** If $P(E|H_i) = 0$, then by Bayes' rule:

$$P(H_i|E) = \frac{P(E|H_i) \cdot P(H_i)}{P(E)} = 0$$

These hypotheses are eliminated.

**"Whatever remains":** If only $H_j$ satisfies $P(E|H_j) > 0$:

$$P(H_j|E) = 1$$

**"However improbable":** Even if the **prior** $P(H_j)$ was very small, the **posterior** $P(H_j|E) = 1$ once all alternatives are ruled out.
#### 20.
The Jack of Spades (with cider), Jack of Hearts (with tarts), Queen of Spades (with a wink), and Queen of Hearts (without tarts) are taken from a deck of cards. These four cards are shuffled, and then two are dealt. Note: Literary references to cider, tarts, and winks do not need to be considered when solving this problem.

(a) Find the probability that both of these two cards are queens, given that the first card dealt is a queen.

Sol:
$$P(\text{both Q} | \text{first Q}) = P(\text{2nd Q} | \text{1st Q}) = \frac{1}{2}$$
(b) Find the probability that both are queens, given that at least one is a queen.

Sol:
Total ways to choose 2 cards: $\binom{4}{2} = 6$

$$P(\text{both queens}) = \frac{1}{6}$$
$$P(\text{at least one queen}) = 1 - P(\text{both jacks}) = 1 - \frac{1}{6} = \frac{5}{6}$$
$$P(\text{both queens} \mid \text{at least one queen}) = \frac{P(\text{both queens})}{P(\text{at least one queen})} = \frac{1/6}{5/6} = \frac{1}{5}$$

**Answer:** $\frac{1}{5}$
(c) Find the probability that both are queens, given that one is the Queen of Hearts.

Sol:
$$P(\text{both queens} \mid \text{one is Q}) = \frac{1}{3}$$
#### 21.
A fair coin is flipped 3 times. The toss results are recorded on separate slips of paper (writing "H" if Heads and "T" if Tails), and the 3 slips of paper are thrown into a hat.

(a) Find the probability that all 3 tosses landed Heads, given that at least 2 were Heads.

Sol:
$$P(A|B) = \frac{P(A)}{P(B)}$$

(since $A \subseteq B$)

$$P(A) = P(\text{HHH}) = \left(\frac{1}{2}\right)^3 = \frac{1}{8}$$

$$P(B) = P(\text{exactly 2 heads}) + P(\text{exactly 3 heads}) = \binom{3}{2}\left(\frac{1}{2}\right)^3 + \binom{3}{3}\left(\frac{1}{2}\right)^3 = \frac{3}{8} + \frac{1}{8} = \frac{4}{8} = \frac{1}{2}$$

$$P(A|B) = \frac{1/8}{1/2} = \frac{1}{4}$$
(b) Two of the slips of paper are randomly drawn from the hat, and both show the letter H. Given this information, what is the probability that all 3 tosses landed Heads?

Sol:
**Find** $P(\text{HHH} \mid \text{drew 2 H's})$:
$$P(\text{drew 2 H's} \mid \text{HHH}) = 1$$

$$P(\text{drew 2 H's} \mid \text{HHT, HTH, or THH}) = \frac{1}{3}$$

$$P(\text{drew 2 H's}) = \frac{1}{8} \cdot 1 + 3 \cdot \frac{1}{8} \cdot \frac{1}{3} = \frac{1}{8} + \frac{1}{8} = \frac{1}{4}$$

$$P(\text{HHH} \mid \text{drew 2 H's}) = \frac{1 \cdot \frac{1}{8}}{\frac{1}{4}} = \frac{1}{2}$$
#### 22.
A bag contains one marble which is either green or blue, with equal probabilities. A green marble is put in the bag (so there are 2 marbles now), and then a random marble is taken out. The marble taken out is green. What is the probability that the remaining marble is also green?

Sol:
Let $G$ = "original marble is green", $E$ = "drew green marble"
$$P(G) = \frac{1}{2}$$

**If original is green:** Bag has 2 green marbles, draw green with probability 1 $$P(E|G) = 1$$
**If original is blue:** Bag has 1 green and 1 blue, draw green with probability $\frac{1}{2}$ $$P(E|G^c) = \frac{1}{2}$$
$$P(E) = 1 \cdot \frac{1}{2} + \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{2} + \frac{1}{4} = \frac{3}{4}$$

$$P(G|E) = \frac{1 \cdot \frac{1}{2}}{\frac{3}{4}} = \frac{2}{3}$$

#### 23.
Let $G$ be the event that a certain individual is guilty of a certain robbery. In gathering evidence, it is learned that an event $E_1$ occurred, and a little later it is also learned that another event $E_2$ also occurred. Is it possible that individually, these pieces of evidence increase the chance of guilt (so $P(G|E_1) > P(G)$ and $P(G|E_2) > P(G)$), but together they decrease the chance of guilt (so $P(G|E_1, E_2) < P(G)$)?

Sol:
Yes, this is possible.
- $P(G) = 0.5$ (50% prior chance of guilt)
- $E_1$ = "suspect was seen near the crime scene"
- $E_2$ = "suspect has a solid alibi with timestamped video evidence"
- $P(G|E_1) = 0.7 > 0.5$ (being near the scene increases guilt probability)
- $P(G|E_2) = 0.6 > 0.5$ (even with alibi, some doubt remains, so still above prior)
- $P(G|E_1, E_2) = 0.1 < 0.5$ (but together, the alibi explains the presence near the scene, dramatically reducing guilt probability)
#### 24.
Is it possible to have events $A_1, A_2, B, C$ with $P(A_1|B) > P(A_1|C)$ and $P(A_2|B) > P(A_2|C)$, yet $P(A_1 \cup A_2|B) < P(A_1 \cup A_2|C)$? If so, find an example (with a "story" interpreting the events, as well as giving specific numbers); otherwise, show that it is impossible for this phenomenon to happen.

Sol:
$$P(A_1|B) = 0.6, \quad P(A_1|C) = 0.5$$ $$P(A_2|B) = 0.6, \quad P(A_2|C) = 0.5$$ $$P(A_1 \cap A_2|B) = 0.58, \quad P(A_1 \cap A_2|C) = 0.01$$$$P(A_1 \cup A_2|B) = 0.6 + 0.6 - 0.58 = 0.62$$ $$P(A_1 \cup A_2|C) = 0.5 + 0.5 - 0.01 = 0.99$$
#### 25.
A crime is committed by one of two suspects, A and B. Initially, there is equal evidence against both of them. In further investigation at the crime scene, it is found that the guilty party had a blood type found in 10% of the population. Suspect A does match this blood type, whereas the blood type of Suspect B is unknown.

(a) Given this new information, what is the probability that A is the guilty party?

Sol:
$G_A$ = A guilty, $G_B$ = B guilty, $M$ = A match

$P(G_A) = P(G_B) = 0.5$, blood type occurs in 10% of population

$$P(M|G_A) = 1 \quad \text{(guilty party always matches)}$$ $$P(M|G_B) = 0.1 \quad \text{(innocent A matches by chance)}$$

$$P(M) = 1 \times 0.5 + 0.1 \times 0.5 = 0.5 + 0.05 = 0.55$$

$$P(G_A|M) = \frac{1 \times 0.5}{0.55} = \frac{0.5}{0.55} = \frac{10}{11}$$
(b) Given this new information, what is the probability that B's blood type matches that found at the crime scene?

Sol:
Let $M_B$ = B Match

$$P(M_B|M) = P(M_B|G_A, M) \cdot P(G_A|M) + P(M_B|G_B, M) \cdot P(G_B|M)$$

If A is guilty, B's blood type is independent: $P(M_B|G_A, M) = 0.1$

If B is guilty, B must match: $P(M_B|G_B, M) = 1$

$$P(G_B|M) = 1 - \frac{10}{11} = \frac{1}{11}$$

$$P(M_B|M) = 0.1 \times \frac{10}{11} + 1 \times \frac{1}{11} = \frac{1}{11} + \frac{1}{11} = \frac{2}{11}$$

#### 26.
To battle against spam, Bob installs two anti-spam programs. An email arrives, which is either legitimate (event $L$) or spam (event $L^c$), and which program $j$ marks as legitimate (event $M_j$) or marks as spam (event $M_j^c$) for $j \in {1, 2}$. Assume that 10% of Bob's email is legitimate and that the two programs are each "90% accurate" in the sense that $P(M_j|L) = P(M_j^c|L^c) = 9/10$. Also assume that given whether an email is spam, the two programs' outputs are conditionally independent.

(a) Find the probability that the email is legitimate, given that the 1st program marks it as legitimate (simplify).

Sol:
$$P(L) = 0.1, \quad P(L^c) = 0.9$$ $$P(M_1|L) = 0.9, \quad P(M_1|L^c) = 0.1$$

$$P(M_1) = 0.9 \times 0.1 + 0.1 \times 0.9 = 0.09 + 0.09 = 0.18$$

$$P(L|M_1) = \frac{0.9 \times 0.1}{0.18} = \frac{0.09}{0.18} = \frac{1}{2}$$
(b) Find the probability that the email is legitimate, given that both programs mark it as legitimate (simplify).

Sol:
By conditional independence: $P(M_1 \cap M_2|L) = P(M_1|L) \cdot P(M_2|L) = 0.9 \times 0.9 = 0.81$

$$P(M_1 \cap M_2|L^c) = P(M_1|L^c) \cdot P(M_2|L^c) = 0.1 \times 0.1 = 0.01$$

$$P(M_1 \cap M_2) = 0.81 \times 0.1 + 0.01 \times 0.9 = 0.081 + 0.009 = 0.09$$

$$P(L|M_1 \cap M_2) = \frac{0.81 \times 0.1}{0.09} = \frac{0.081}{0.09} = \frac{9}{10}$$
(c) Bob runs the 1st program and $M_1$ occurs. He updates his probabilities and then runs the 2nd program. Let $\tilde{P}(A) = P(A|M_1)$ be the updated probability function after running the 1st program. Explain briefly in words whether or not $\tilde{P}(L|M_2) = P(L|M_1 \cap M_2)$: is conditioning on $M_1 \cap M_2$ in one step equivalent to first conditioning on $M_1$, then updating probabilities, and then conditioning on $M_2$?

Sol:
**Yes.** Conditioning on $M_1 \cap M_2$ in one step is equivalent to first conditioning on $M_1$ (updating to $\tilde{P}$), then conditioning on $M_2$ under the updated probability function.

This follows from the general property: $$P(A|B \cap C) = P(A|B,C) = \frac{P(A \cap B \cap C)}{P(B \cap C)} = \frac{P(C|A \cap B) \cdot P(A|B) \cdot P(B)}{P(C|B) \cdot P(B)} = \tilde{P}(A|C)$$

where $\tilde{P}(\cdot) = P(\cdot|B)$.

#### 27.
Suppose that there are 5 blood types in the population, named type 1 through type 5, with probabilities $p_1, p_2, \ldots, p_5$. A crime was committed by two individuals. A suspect, who has blood type 1, has prior probability $p$ of being guilty. At the crime scene, blood evidence is collected, which shows that one of the criminals has type 1 and the other has type 2.

Find the posterior probability that the suspect is guilty, given the evidence. Does the evidence make it more likely or less likely that the suspect is guilty, or does this depend on the values of the parameters $p, p_1, \ldots, p_5$? If it depends on these values, give a simple criterion for when the evidence makes it more likely that the suspect is guilty.

Sol:
Let $G$ = "suspect is guilty", $E$ = "crime scene has type 1 and type 2 blood"

$P(E|G)$ and $P(E|G^c)$:

$G$, Suspect has type 1, so accomplice must have type 2: $$P(E|G) = p_2$$

$G^c$: Two random criminals have types 1 and 2. This occurs if one has type 1 and the other has type 2: $$P(E|G^c) = 2p_1p_2$$

(Factor of 2 since either criminal could be type 1)

$$P(E) = p_2 \cdot p + 2p_1p_2 \cdot (1-p)$$

$$P(G|E) = \frac{p_2 \cdot p}{p_2 \cdot p + 2p_1p_2(1-p)} = \frac{p}{p + 2p_1(1-p)}$$

Evidence increases guilt:

$$P(G|E) > P(G) \iff \frac{p}{p + 2p_1(1-p)} > p$$

$$\iff p > p[p + 2p_1(1-p)]$$

$$\iff 1 > p + 2p_1(1-p) = p + 2p_1 - 2p_1p$$

$$\iff 1 - p > 2p_1(1-p)$$

$$\iff 1 > 2p_1$$

$$\iff p_1 < \frac{1}{2}$$

$$P(G|E) = \frac{p}{p + 2p_1(1-p)}$$

Evidence makes guilt more likely $p_1 < \frac{1}{2}$ (type 1 blood is relatively rare), and less likely if $p_1 > \frac{1}{2}$ (type 1 blood is common).
#### 28.
Fred has just tested positive for a certain disease.

(a) Given this information, find the posterior odds that he has the disease, in terms of the prior odds, the sensitivity of the test, and the specificity of the test.

Sol:
Let $D$ = disease, $+$ = positive
**Prior odds:** $\frac{P(D)}{P(D^c)}$

**Posterior odds:** Using Bayes' rule:

$$\frac{P(D|+)}{P(D^c|+)} = \frac{P(+|D)}{P(+|D^c)} \cdot \frac{P(D)}{P(D^c)}$$

$$= \frac{\text{sensitivity}}{1 - \text{specificity}} \cdot \text{prior odds}$$
(b) Not surprisingly, Fred is much more interested in $P(\text{have disease}|\text{test positive})$, known as the positive predictive value, than in the sensitivity $P(\text{test positive}|\text{have disease})$. A handy rule of thumb in biostatistics and epidemiology is as follows:

Sol:
$$P(D|+) = \frac{P(+|D) \cdot P(D)}{P(+|D) \cdot P(D) + P(+|D^c) \cdot P(D^c)}$$

For rare disease: $P(D) \approx 0$, so $P(D^c) \approx 1$

$$P(D|+) \approx \frac{\text{sens} \cdot P(D)}{\text{sens} \cdot P(D) + (1 - \text{spec})}$$

Since $P(D)$ is tiny, the denominator is dominated by $(1 - \text{spec})$.
> For a rare disease and a reasonably good test, specificity matters much more than sensitivity in determining the positive predictive value.

Explain intuitively why this rule of thumb works. For this part you can make up some specific numbers and interpret probabilities in a frequentist way as proportions in a large population, e.g., assume the disease afflicts 1% of a population of 10000 people and then consider various possibilities for the sensitivity and specificity.

Population: 10,000 people, disease prevalence: 1% (100 sick, 9,900 healthy)
**Scenario 1: High sensitivity (99%), moderate specificity (90%)**
Among 100 sick people:
- Test catches 99 (sensitivity = 99%)

Among 9,900 healthy people:

- Test wrongly flags 990 (false positive rate = 1 - 0.90 = 10%)

**Total positives: 99 + 990 = 1,089**

Positive predictive value: $\frac{99}{1089}$

Only 9% of positive tests are true cases

**Scenario 2: Moderate sensitivity (90%), high specificity (99%)**
Among 100 sick people:
- Test catches 90 (sensitivity = 90%)

Among 9,900 healthy people:

- Test wrongly flags 99 (false positive rate = 1 - 0.99 = 1%)

**Total positives: 90 + 99 = 189**

Positive predictive value: $\frac{90}{189} $

Nearly half of positive tests are true cases

**Key insight:** For rare diseases, there are **far more healthy people than sick people**. Even a small false positive rate on the huge healthy population creates a flood of false alarms.
#### 29.
A family has two children. Let $C$ be a characteristic that a child can have, and assume that each child has characteristic $C$ with probability $p$, independently of each other and of gender. For example, $C$ could be the characteristic "born in winter" as in Example 2.2.7. Under the assumptions of Example 2.2.5, show that the probability that both children are girls given that at least one is a girl with characteristic $C$ is $\frac{2-p}{4-p}$. Note that this is 1/3 if $p = 1$ (agreeing with the first part of Example 2.2.5) and approaches 1/2 from below as $p \to 0$ (agreeing with Example 2.2.7).

Sol:
Let $E$ = "at least one girl with characteristic $C$"
$P(\text{both girls} \mid E)$:

$$P(\text{both girls} \mid E) = \frac{P(\text{both girls and } E)}{P(E)}$$

$P(\text{both girls and } E)$:

Both girls, at least one has $C$ = 1 - (both girls, neither has $C$):
$$P(\text{both girls and } E) = \frac{1}{4} \cdot [1 - (1-p)^2] = \frac{1}{4}(2p - p^2)$$

$P(E)$ by cases:

- Both girls, at least one has $C$: $\frac{1}{4}(2p - p^2)$
- Girl-boy (girl 1st), girl has $C$: $\frac{1}{4} \cdot p$
- Boy-girl (girl 2nd), girl has $C$: $\frac{1}{4} \cdot p$

$$P(E) = \frac{1}{4}(2p - p^2 + p + p) = \frac{1}{4}(4p - p^2)$$

$$P(\text{both girls} \mid E) = \frac{\frac{1}{4}(2p-p^2)}{\frac{1}{4}(4p-p^2)} = \frac{2p-p^2}{4p-p^2} = \frac{p(2-p)}{p(4-p)} = \frac{2-p}{4-p}$$

- $p = 1$: $\frac{2-1}{4-1} = \frac{1}{3}$
- $p \to 0$: $\frac{2-0}{4-0} = \frac{1}{2}$
## Independence and conditional independence

#### 30.
A family has 3 children, creatively named A, B, and C.

(a) Discuss intuitively (but clearly) whether the event "A is older than B" is independent of the event "A is older than C".

Sol:
Let $E_1$ = "A is older than B" and $E_2$ = "A is older than C"
These events are not independent.
If we know A is older than C, this gives us information about A's relative age in the family. Specifically, A cannot be the youngest child. This changes the probability that A is also older than B.

Without any information, A is equally likely to be in any age position relative to B. But knowing A is older than C restricts the possibilities, making it more likely that A is generally older (and thus more likely older than B too).

(b) Find the probability that A is older than B, given that A is older than C.

Sol:
There are $3! = 6$ equally likely birth orders (oldest to youngest):
$E_2$ occurs in orders 1, 2, 3 (3 outcomes)
$E_1 \cap E_2$ occurs in orders 1, 2 (2 outcomes)

$$P(E_1 \mid E_2) = \frac{2}{3}$$
#### 31.
Is it possible that an event is independent of itself? If so, when is this the case?

Sol:
Yes, an event can be independent of itself.
$$P(A \cap A) = P(A) \cdot P(A)$$

$$P(A) = P(A)^2$$

$$P(A)[1 - P(A)] = 0$$

This holds when $P(A) = 0$ or $P(A) = 1$.
#### 32.
Consider four nonstandard dice (the Efron dice), whose sides are labeled as follows (the 6 sides on each die are equally likely).

- A: 4, 4, 4, 4, 0, 0
- B: 3, 3, 3, 3, 3, 3
- C: 6, 6, 2, 2, 2, 2
- D: 5, 5, 5, 1, 1, 1

These four dice are each rolled once. Let $A$ be the result for die A, $B$ be the result for die B, etc.

(a) Find $P(A>B)$, $P(B>C)$, $P(C>D)$, and $P(D>A)$.
$$P(A > B) = \frac{4}{6} = \frac{2}{3}$$
$$P(B > C) = \frac{4}{6} = \frac{2}{3}$$
$$P(C > D) = \frac{2}{6} \cdot 1 + \frac{4}{6} \cdot \frac{3}{6} = \frac{2}{6} + \frac{12}{36} = \frac{12}{36} + \frac{12}{36} = \frac{24}{36} = \frac{2}{3}$$
$$P(D > A) = \frac{4}{6} \cdot \frac{3}{6} + \frac{2}{6} \cdot 1 = \frac{12}{36} + \frac{12}{36} = \frac{24}{36} = \frac{2}{3}$$


(b) Is the event $A>B$ independent of the event $B>C$? Is the event $B>C$ independent of the event $C>D$? Explain.

Sol:
Yes. Die A and die C are rolled independently, and whether $A > B$ depends only on A's value, while whether $B > C$ depends only on C's value. Since A and C are independent rolls, the events are independent.
$$P(A > B \cap B > C) = P(A > B) \cdot P(B > C) = \frac{2}{3} \cdot \frac{2}{3} = \frac{4}{9}$$

No. Both events depend on C's outcome. If C shows 6, then $B > C$ is false but $C > D$ is true. If C shows 2, then $B > C$ is true but $C > D$ depends on D. The events share the common variable C, creating dependence.
#### 33.
Alice, Bob, and 100 other people live in a small town. Let $C$ be the set consisting of the 100 other people, let $A$ be the set of people in $C$ who are friends with Alice, and let $B$ be the set of people in $C$ who are friends with Bob. Suppose that for each person in $C$, Alice is friends with that person with probability 1/2, and likewise for Bob, with all of these friendship statuses independent.

(a) Let $D \subseteq C$. Find $P(A = D)$.

Sol:
For $A = D$, each person in $D$ must be Alice's friend (prob $\frac{1}{2}$ each), and each person in $C \setminus D$ must not be Alice's friend (prob $\frac{1}{2}$ each).

$$P(A = D) = \left(\frac{1}{2}\right)^{|D|} \cdot \left(\frac{1}{2}\right)^{100 - |D|} = \left(\frac{1}{2}\right)^{100} = \frac{1}{2^{100}}$$
(b) Find $P(A \subseteq B)$.

Sol:
$A \subseteq B$ means every friend of Alice is also a friend of Bob.

For each person in $C$:

- If not Alice's friend: no constraint (prob $\frac{1}{2}$)

- If Alice's friend: must also be Bob's friend (prob $\frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$)


Each person contributes prob $\frac{1}{2} + \frac{1}{4} = \frac{3}{4}$ to $A \subseteq B$.

(c) Find $P(A \cup B = C)$.

Sol:
$A \cup B = C$ means every person in $C$ is a friend of Alice or Bob (or both).

For each person: prob of being friend to at least one = $1 - P(\text{friend to neither}) = 1 - \frac{1}{2} \cdot \frac{1}{2} = \frac{3}{4}$

$$P(A \cup B = C) = \left(\frac{3}{4}\right)^{100}$$
#### 34.
Suppose that there are two types of drivers: good drivers and bad drivers. Let $G$ be the event that a certain man is a good driver, $A$ be the event that he gets into a car accident next year, and $B$ be the event that he gets into a car accident the following year. Let $P(G) = g$ and $P(A|G) = P(B|G) = p_1$, $P(A|G^c) = P(B|G^c) = p_2$, with $p_1 < p_2$. Suppose that given the information of whether or not the man is a good driver, $A$ and $B$ are independent (for simplicity and to avoid being morbid, assume that the accidents being considered are minor and wouldn't make the man unable to drive).

(a) Explain intuitively whether or not $A$ and $B$ are independent.

Sol:
$A$ and $B$ are not independent.

If we observe that the man had no accident in year 1 ($A^c$), this is evidence that he's more likely to be a good driver. This makes him less likely to have an accident in year 2.

While $A$ and $B$ are conditionally independent given $G$ (knowing driver type makes the years independent), marginally they are dependent because observing $A$ gives information about the hidden variable $G$, which affects $B$.

(b) Find $P(G|A^c)$.

Sol:
$$P(A^c|G) = 1 - p_1, \quad P(A^c|G^c) = 1 - p_2$$

$$P(A^c) = (1-p_1)g + (1-p_2)(1-g)$$

$$P(G|A^c) = \frac{(1-p_1)g}{(1-p_1)g + (1-p_2)(1-g)}$$

(c) Find $P(B|A^c)$.

Sol:
$$P(B|A^c) = P(B|G) \cdot P(G|A^c) + P(B|G^c) \cdot P(G^c|A^c)$$

$$P(G^c|A^c) = 1 - P(G|A^c) = \frac{(1-p_2)(1-g)}{(1-p_1)g + (1-p_2)(1-g)}$$

$$P(B|A^c) = p_1 \cdot \frac{(1-p_1)g}{(1-p_1)g + (1-p_2)(1-g)} + p_2 \cdot \frac{(1-p_2)(1-g)}{(1-p_1)g + (1-p_2)(1-g)}$$

$$= \frac{p_1(1-p_1)g + p_2(1-p_2)(1-g)}{(1-p_1)g + (1-p_2)(1-g)}$$

#### 35.
You are going to play 2 games of chess with an opponent whom you have never played against before (for the sake of this problem). Your opponent is equally likely to be a beginner, intermediate, or a master. Depending on which, your chances of winning an individual game are 90%, 50%, or 30%, respectively.

(a) What is your probability of winning the first game?

Sol:
$$P(W_1) = P(W_1|B) \cdot P(B) + P(W_1|I) \cdot P(I) + P(W_1|M) \cdot P(M)$$

$$= 0.9 \cdot \frac{1}{3} + 0.5 \cdot \frac{1}{3} + 0.3 \cdot \frac{1}{3} = \frac{0.9 + 0.5 + 0.3}{3} = \frac{1.7}{3} = \frac{17}{30}$$
(b) Congratulations: you won the first game! Given this information, what is the probability that you will also win the second game (assume that, given the skill level of your opponent, the outcomes of the games are independent)?

Sol:
Update probabilities of opponent type given $W_1$:

$$P(B|W_1) = \frac{0.9 \cdot \frac{1}{3}}{\frac{17}{30}} = \frac{0.3}{\frac{17}{30}} = \frac{9}{17}$$

$$P(I|W_1) = \frac{0.5 \cdot \frac{1}{3}}{\frac{17}{30}} = \frac{1/6}{17/30} = \frac{5}{17}$$

$$P(M|W_1) = \frac{0.3 \cdot \frac{1}{3}}{\frac{17}{30}} = \frac{0.1}{\frac{17}{30}} = \frac{3}{17}$$

By conditional independence:

$$P(W_2|W_1) = 0.9 \cdot \frac{9}{17} + 0.5 \cdot \frac{5}{17} + 0.3 \cdot \frac{3}{17} = \frac{8.1 + 2.5 + 0.9}{17} = \frac{11.5}{17} = \frac{23}{34}$$
Update probabilities of opponent type given $W_1$:

$$P(B|W_1) = \frac{0.9 \cdot \frac{1}{3}}{\frac{17}{30}} = \frac{0.3}{\frac{17}{30}} = \frac{9}{17}$$

$$P(I|W_1) = \frac{0.5 \cdot \frac{1}{3}}{\frac{17}{30}} = \frac{1/6}{17/30} = \frac{5}{17}$$

$$P(M|W_1) = \frac{0.3 \cdot \frac{1}{3}}{\frac{17}{30}} = \frac{0.1}{\frac{17}{30}} = \frac{3}{17}$$

By conditional independence:

$$P(W_2|W_1) = 0.9 \cdot \frac{9}{17} + 0.5 \cdot \frac{5}{17} + 0.3 \cdot \frac{3}{17} = \frac{8.1 + 2.5 + 0.9}{17} = \frac{11.5}{17} = \frac{23}{34}$$
(c) Explain the distinction between assuming that the outcomes of the games are independent and assuming that they are conditionally independent given the opponent's skill level. Which of these assumptions seems more reasonable, and why?

Sol:
Unconditional independence: $P(W_1 \cap W_2) = P(W_1) \cdot P(W_2)$

Conditional independence given skill level: $P(W_1 \cap W_2|S) = P(W_1|S) \cdot P(W_2|S)$ for each skill level $S$

Which is more reasonable?

Conditional independence is more reasonable. Given the opponent's fixed skill level, one game doesn't affect another—your performance in game 1 doesn't change the opponent's skill or your game 2 chances.

Unconditional independence is false: winning game 1 provides information about the opponent's skill (making a beginner more likely), which affects game 2 probabilities. We see $P(W_2|W_1) = \frac{23}{34} \approx 0.676 > \frac{17}{30} \approx 0.567 = P(W_2)$, confirming dependence.

#### 36.
(a) Suppose that in the population of college applicants, being good at baseball is independent of having a good math score on a certain standardized test (with respect to some measure of "good"). A certain college has a simple admissions procedure: admit an applicant if and only if the applicant is good at baseball or has a good math score on the test.

Give an intuitive explanation of why it makes sense that among students that the college admits, having a good math score is negatively associated with being good at baseball, i.e., conditioning on having a good math score decreases the chance of being good at baseball.

Sol:
Among admitted students, good baseball players are less likely to have good math scores because:

- A student with a good math score could have been admitted for math alone (doesn't need baseball)

- A student who is good at baseball could have been admitted for baseball alone (doesn't need math)

- If we know an admitted student has a good math score, this "explains away" their admission—they're less likely to also be good at baseball


Before conditioning on admission, the traits are independent. But conditioning on admission creates a selection effect: among the admitted, excelling in one area makes excelling in the other less likely, since either alone suffices for admission.

(b) Show that if $A$ and $B$ are independent and $C = A \cup B$, then $A$ and $B$ are conditionally dependent given $C$ (as long as $P(A \cap B) > 0$ and $P(A \cup B) < 1$), with $$P(A|B,C) < P(A|C).$$

This phenomenon is known as Berkson's paradox, especially in the context of admissions to a school, hospital, etc.

Sol:
Let $A$ and $B$ be independent with $C = A \cup B$.

Show $P(A|B,C) < P(A|C)$:

$$P(A|C) = \frac{P(A \cap C)}{P(C)} = \frac{P(A)}{P(A \cup B)}$$

(since $A \subseteq C$, so $A \cap C = A$)

$$P(A|B,C) = \frac{P(A \cap B \cap C)}{P(B \cap C)} = \frac{P(A \cap B)}{P(B)}$$

(since $B \subseteq C$, so $B \cap C = B$, and $A \cap B \subseteq C$)

By independence: $P(A \cap B) = P(A) \cdot P(B)$

$$P(A|B,C) = \frac{P(A) \cdot P(B)}{P(B)} = P(A)$$

Now compare:

$$P(A|C) = \frac{P(A)}{P(A \cup B)} = \frac{P(A)}{P(A) + P(B) - P(A)P(B)}$$

$$= \frac{P(A)}{P(A) + P(B)(1 - P(A))}$$

Since $P(B) > 0$ and $1 - P(A) > 0$ (given $P(A \cup B) < 1$):

$$P(A|C) = \frac{P(A)}{P(A) + P(B)(1-P(A))} > P(A) = P(A|B,C)$$

Therefore $P(A|B,C) < P(A|C)$.
#### 37.
Two different diseases cause a certain weird symptom; anyone who has either or both of these diseases will experience the symptom. Let $D_1$ be the event of having the first disease, $D_2$ be the event of having the second disease, and $W$ be the event of having the weird symptom. Suppose that $D_1$ and $D_2$ are independent with $P(D_j) = p_j$, and that a person with neither of these diseases will have the weird symptom with probability $w_0$. Let $q_j = 1 - p_j$, and assume that $0 < p_j < 1$.

(a) Find $P(W)$.

Sol:
$$P(W) = P(W|D_1 \cup D_2) \cdot P(D_1 \cup D_2) + P(W|D_1^c \cap D_2^c) \cdot P(D_1^c \cap D_2^c)$$

$$= 1 \cdot [1 - q_1q_2] + w_0 \cdot q_1q_2 = 1 - q_1q_2 + w_0q_1q_2 = 1 - q_1q_2(1 - w_0)$$

(b) Find $P(D_1|W)$, $P(D_2|W)$, and $P(D_1, D_2|W)$.

Sol:
$$P(D_1|W) = \frac{P(W|D_1) \cdot P(D_1)}{P(W)} = \frac{1 \cdot p_1}{1 - q_1q_2(1-w_0)} = \frac{p_1}{1 - q_1q_2(1-w_0)}$$

$$P(D_2|W) = \frac{1 \cdot p_2}{1 - q_1q_2(1-w_0)} = \frac{p_2}{1 - q_1q_2(1-w_0)}$$

$$P(D_1 \cap D_2|W) = \frac{P(W|D_1 \cap D_2) \cdot P(D_1 \cap D_2)}{P(W)} = \frac{1 \cdot p_1p_2}{1 - q_1q_2(1-w_0)} = \frac{p_1p_2}{1 - q_1q_2(1-w_0)}$$
(c) Determine algebraically whether or not $D_1$ and $D_2$ are conditionally independent given $W$.

Sol:
For conditional independence: $P(D_1 \cap D_2|W) = P(D_1|W) \cdot P(D_2|W)$

$$P(D_1|W) \cdot P(D_2|W) = \frac{p_1}{1 - q_1q_2(1-w_0)} \cdot \frac{p_2}{1 - q_1q_2(1-w_0)} = \frac{p_1p_2}{[1 - q_1q_2(1-w_0)]^2}$$

$$P(D_1 \cap D_2|W) = \frac{p_1p_2}{1 - q_1q_2(1-w_0)}$$

These are equal only if $1 - q_1q_2(1-w_0) = 1$, i.e., $q_1q_2(1-w_0) = 0$.

Since $0 < p_j < 1$ (so $0 < q_j < 1$), this requires $w_0 = 1$.

Answer: $D_1$ and $D_2$ are not conditionally independent given $W$ (unless $w_0 = 1$).

(d) Suppose for this part only that $w_0 = 0$. Give a clear, convincing intuitive explanation in words of whether $D_1$ and $D_2$ are conditionally independent given $W$.

Sol:
When $w_0 = 0$, having the weird symptom means you must have at least one disease.

Given $W$, if we learn someone has $D_1$, this "explains away" the symptom—they're less likely to also have $D_2$ because $D_1$ alone is sufficient to cause $W$.

Conversely, if they don't have $D_1$, they must have $D_2$ (since $W$ occurred and $w_0 = 0$).
#### 38.
We want to design a spam filter for email. As described in Exercise 1, a major strategy is to find phrases that are much more likely to appear in a spam email than in a non-spam email. In that exercise, we only consider one such phrase: "free money". More realistically, suppose that we have created a list of 100 words or phrases that are much more likely to be used in spam than in non-spam.

Let $W_j$ be the event that an email contains the $j$th word or phrase on the list. Let $$p = P(\text{spam}), \quad p_j = P(W_j|\text{spam}), \quad r_j = P(W_j|\text{not spam}),$$ where "spam" is shorthand for the event that the email is spam.

Assume that $W_1, \ldots, W_{100}$ are conditionally independent given that the email is spam, and conditionally independent given that it is not spam. A method for classifying emails (or other objects) based on this kind of assumption is called a naive Bayes classifier. (Here "naive" refers to the fact that the conditional independence is a strong assumption, not to Bayes being naive. The assumption may or may not be realistic, but naive Bayes classifiers sometimes work well in practice even if the assumption is not realistic.)

Under this assumption we know, for example, that $$P(W_1, W_2, W_3^c, W_4^c, \ldots, W_{100}^c|\text{spam}) = p_1 p_2 (1-p_3)(1-p_4) \cdots (1-p_{100}).$$

Without the naive Bayes assumption, there would be vastly more statistical and computational difficulties since we would need to consider $2^{100} \approx 1.3 \times 10^{30}$ events of the form $A_1 \cap A_2 \cdots \cap A_{100}$ with each $A_j$ equal to either $W_j$ or $W_j^c$. A new email has just arrived, and it includes the 23rd, 64th, and 65th words or phrases on the list (but not the other 97). So we want to compute $$P(\text{spam}|W_1^c, \ldots, W_{22}^c, W_{23}, W_{24}^c, \ldots, W_{63}^c, W_{64}, W_{65}, W_{66}^c, \ldots, W_{100}^c).$$

Note that we need to condition on all the evidence, not just the fact that $W_{23} \cap W_{64} \cap W_{65}$ occurred. Find the conditional probability that the new email is spam (in terms of $p$ and the $p_j$ and $r_j$).

Sol:
Let $E = W_1^c \cap \cdots \cap W_{22}^c \cap W_{23} \cap W_{24}^c \cap \cdots \cap W_{63}^c \cap W_{64} \cap W_{65} \cap W_{66}^c \cap \cdots \cap W_{100}^c$

$P(\text{spam}|E)$:
By Bayes' theorem:

$$P(\text{spam}|E) = \frac{P(E|\text{spam}) \cdot P(\text{spam})}{P(E)}$$

$P(E|\text{spam})$:

$$P(E|\text{spam}) = p_{23} \cdot p_{64} \cdot p_{65} \cdot \prod_{j \neq 23,64,65} (1-p_j)$$

$P(E|\text{not spam})$:

$$P(E|\text{not spam}) = r_{23} \cdot r_{64} \cdot r_{65} \cdot \prod_{j \neq 23,64,65} (1-r_j)$$

$P(E)$:

$$P(E) = P(E|\text{spam}) \cdot p + P(E|\text{not spam}) \cdot (1-p)$$



$$P(\text{spam}|E) = \frac{p_{23} p_{64} p_{65} \prod_{j \neq 23,64,65} (1-p_j) \cdot p}{p_{23} p_{64} p_{65} \prod_{j \neq 23,64,65} (1-p_j) \cdot p + r_{23} r_{64} r_{65} \prod_{j \neq 23,64,65} (1-r_j) \cdot (1-p)}$$

## Monty Hall

#### 39.
(a) Consider the following 7-door version of the Monty Hall problem. There are 7 doors, behind one of which there is a car (which you want), and behind the rest of which there are goats (which you don't want). Initially, all possibilities are equally likely for where the car is. You choose a door. Monty Hall then opens 3 goat doors, and offers you the option of switching to any of the remaining 3 doors.

Assume that Monty Hall knows which door has the car, will always open 3 goat doors and offer the option of switching, and that Monty chooses with equal probabilities from all his choices of which goat doors to open. Should you switch? What is your probability of success if you switch to one of the remaining 3 doors?

Sol:
$$P(\text{win if switch}) = P(\text{car in remaining 3}) \cdot P(\text{pick right door}) = \frac{6}{7} \cdot \frac{1}{3} = \frac{2}{7}$$

$$P(\text{win if stay}) = \frac{1}{7}$$
(b) Generalize the above to a Monty Hall problem where there are $n \geq 3$ doors, of which Monty opens $m$ goat doors, with $1 \leq m \leq n-2$.

Sol:
Initially: $P(\text{car behind your door}) = \frac{1}{n}$, $P(\text{car behind other } n-1) = \frac{n-1}{n}$

After Monty opens $m$ goat doors:

$$P(\text{win if stay}) = \frac{1}{n}$$

$$P(\text{win if switch}) = \frac{n-1}{n} \cdot \frac{1}{n-m-1} = \frac{n-1}{n(n-m-1)}$$

Should you switch? Yes if $\frac{n-1}{n(n-m-1)} > \frac{1}{n}$, which simplifies to:

$$\frac{n-1}{n-m-1} > 1 \iff n-1 > n-m-1 \iff m > 0$$

Since $m \geq 1$, you should always switch.
#### 40.
Consider the Monty Hall problem, except that Monty enjoys opening door 2 more than he enjoys opening door 3, and if he has a choice between opening these two doors, he opens door 2 with probability $p$, where $\frac{1}{2} \leq p \leq 1$.

To recap: there are three doors, behind one of which there is a car (which you want), and behind the other two of which there are goats (which you don't want). Initially, all possibilities are equally likely for where the car is. You choose a door, which for concreteness we assume is door 1. Monty Hall then opens a door to reveal a goat, and offers you the option of switching. Assume that Monty Hall knows which door has the car, will always open a goat door and offer the option of switching, and as above assume that if Monty Hall has a choice between opening door 2 and door 3, he chooses door 2 with probability $p$ (with $\frac{1}{2} \leq p \leq 1$).

(a) Find the unconditional probability that the strategy of always switching succeeds (unconditional in the sense that we do not condition on which of doors 2 or 3 Monty opens).

Sol:
If $C_1$: Monty opens 2 or 3, you switch and lose (prob $\frac{1}{3} \cdot 0 = 0$)

If $C_2$: Monty must open 3, you switch to 2 and win (prob $\frac{1}{3} \cdot 1 = \frac{1}{3}$)

If $C_3$: Monty must open 2, you switch to 3 and win (prob $\frac{1}{3} \cdot 1 = \frac{1}{3}$)

$$P(\text{win if switch}) = 0 + \frac{1}{3} + \frac{1}{3} = \frac{2}{3}$$
(b) Find the probability that the strategy of always switching succeeds, given that Monty opens door 2.

Sol:
$$P(M_2|C_1) = p, \quad P(M_2|C_2) = 0, \quad P(M_2|C_3) = 1$$

$$P(M_2) = p \cdot \frac{1}{3} + 0 \cdot \frac{1}{3} + 1 \cdot \frac{1}{3} = \frac{p+1}{3}$$

$$P(C_1|M_2) = \frac{p \cdot \frac{1}{3}}{\frac{p+1}{3}} = \frac{p}{p+1}$$

$$P(C_3|M_2) = \frac{1 \cdot \frac{1}{3}}{\frac{p+1}{3}} = \frac{1}{p+1}$$
(c) Find the probability that the strategy of always switching succeeds, given that Monty opens door 3.

Sol:
Let $M_3$ = "Monty opens door 3"

$$P(M_3|C_1) = 1-p, \quad P(M_3|C_2) = 1, \quad P(M_3|C_3) = 0$$

$$P(M_3) = (1-p) \cdot \frac{1}{3} + 1 \cdot \frac{1}{3} + 0 = \frac{2-p}{3}$$

$$P(C_1|M_3) = \frac{(1-p) \cdot \frac{1}{3}}{\frac{2-p}{3}} = \frac{1-p}{2-p}$$

$$P(C_2|M_3) = \frac{1 \cdot \frac{1}{3}}{\frac{2-p}{3}} = \frac{1}{2-p}$$

If Monty opens 3, you switch to door 2:

$$P(\text{win}|M_3) = P(C_2|M_3) = \frac{1}{2-p}$$
#### 41.
The ratings of Monty Hall's show have dropped slightly, and a panicking executive producer complains to Monty that the part of the show where he opens a door lacks suspense: Monty always opens a door with a goat. Monty replies that the reason is so that the game is never spoiled by him revealing the car, but he agrees to update the game as follows.

Before each show, Monty secretly flips a coin with probability $p$ of Heads. If the coin lands Heads, Monty resolves to open a door with a goat (with equal probabilities if there is a choice). Otherwise, Monty resolves to open a random door, with equal probabilities. Of course, Monty will not open the door that the contestant initially chooses. The contestant knows $p$ but does not know the outcome of the coin flip. When the show starts, the contestant chooses a door. Monty (who knows where the car is) then opens a door. If the car is revealed, the game is over; if a goat is revealed, the contestant is offered the option of switching. Now suppose it turns out that the contestant chooses door 1 and then Monty opens door 2, revealing a goat. What is the contestant's probability of success if they switch to door 3?

Sol:
Let $C_i$ = "car behind door $i$", $G$ = "Monty opens door 2 revealing goat"

$P(C_3|G)$ (probability door 3 has car, given Monty opened door 2 showing goat):

Case 1: Coin is Heads (prob $p$ Monty opens a goat door

- If $C_1$: Opens door 2 with prob $\frac{1}{2}$, reveals goat
- If $C_2$: Can't open door 2 (has car)
- If $C_3$: Opens door 2 with prob 1, reveals goat

Case 2: Coin is Tails (prob $1-p$) - Monty opens randomly

- If $C_1$: Opens door 2 with prob $\frac{1}{2}$, reveals goat
- If $C_2$: Opens door 2 with prob $\frac{1}{2}$, reveals car (not our case)
- If $C_3$: Opens door 2 with prob $\frac{1}{2}$, reveals goat

$$P(G|C_1) = p \cdot \frac{1}{2} + (1-p) \cdot \frac{1}{2} = \frac{1}{2}$$

$$P(G|C_2) = p \cdot 0 + (1-p) \cdot 0 = 0$$

$$P(G|C_3) = p \cdot 1 + (1-p) \cdot \frac{1}{2} = \frac{p+1}{2}$$

$$P(G) = \frac{1}{2} \cdot \frac{1}{3} + 0 \cdot \frac{1}{3} + \frac{p+1}{2} \cdot \frac{1}{3} = \frac{1}{6} + \frac{p+1}{6} = \frac{p+2}{6}$$

$$P(C_3|G) = \frac{\frac{p+1}{2} \cdot \frac{1}{3}}{\frac{p+2}{6}} = \frac{\frac{p+1}{6}}{\frac{p+2}{6}} = \frac{p+1}{p+2}$$

#### 42.
Consider the following variation of the Monty Hall problem, where in some situations Monty may not open a door and give the contestant the choice of whether to switch doors. Specifically, there are 3 doors, with 2 containing goats and 1 containing a car. The car is equally likely to be anywhere, and Monty knows where the car is. Let $0 \leq p \leq 1$. The contestant chooses a door. If this initial choice has the car, Monty will open another door, revealing a goat (choosing with equal probabilities among his two choices of door), and then offer the contestant the choice of whether to switch to the other unopened door. If the contestant's initial choice has a goat, then with probability $p$ Monty will open another door, revealing a goat, and then offer the contestant the choice of whether to switch to the other unopened door; but with probability $1-p$, Monty will not open a door, and the contestant must stick with their initial choice.

The contestant decides in advance to use the following strategy: initially choose door 1. Then, if Monty opens a door and offers the choice of whether to switch, do switch.

(a) Find the unconditional probability that the contestant will get the car. Also, check what your answer reduces to in the extreme cases $p = 0$ and $p = 1$, and briefly explain why your answer makes sense in these two cases.

Sol:
Let $C_i$ = "car behind door $i$". Contestant chooses door 1.
Case $C_1$ (car behind door 1, prob $\frac{1}{3}$):

- Monty always opens a door (revealing goat) and offers switch

- Contestant switches and loses

- Contribution: $\frac{1}{3} \cdot 0 = 0$


Case $C_2$ or $C_3$ (car not behind door 1, prob $\frac{2}{3}$):

- With prob $p$: Monty opens a door and offers switch → contestant switches and wins

- With prob $1-p$: Monty doesn't open a door → contestant sticks with door 1 and loses

- Contribution: $\frac{2}{3} \cdot p \cdot 1 + \frac{2}{3} \cdot (1-p) \cdot 0 = \frac{2p}{3}$


$$P(\text{get car}) = 0 + \frac{2p}{3} = \frac{2p}{3}$$

- $p = 0$: $P = 0$. Monty never opens a door when contestant picks wrong, so contestant never gets to switch. Stuck with initial choice which is right only $\frac{1}{3}$ of time, but in those cases switching loses. Net: 0

- $p = 1$: $P = \frac{2}{3}$. Classic Monty Hall—always opens door and offers switch. Switching when you initially picked wrong ($\frac{2}{3}$ of time) wins.
  (b) Monty now opens door 2, revealing a goat. So the contestant switches to door 3. Given this information, find the conditional probability that the contestant will get the car.

Sol:
Let $O$ = "Monty opens door 2 revealing goat"

$$P(O|C_1) = \frac{1}{2} \cdot 1 = \frac{1}{2}$$ (Monty always opens a door, chooses door 2 with prob $\frac{1}{2}$)

$$P(O|C_2) = 0$$ (Can't reveal goat from door 2 if car is there)

$$P(O|C_3) = 1 \cdot p = p$$ (Monty opens door with prob $p$, must choose door 2)

$$P(O) = \frac{1}{2} \cdot \frac{1}{3} + 0 \cdot \frac{1}{3} + p \cdot \frac{1}{3} = \frac{1}{6} + \frac{p}{3} = \frac{1 + 2p}{6}$$

$$P(C_3|O) = \frac{p \cdot \frac{1}{3}}{\frac{1+2p}{6}} = \frac{\frac{p}{3}}{\frac{1+2p}{6}} = \frac{2p}{1+2p}$$

#### 43.
You are the contestant on the Monty Hall show. Monty is trying out a new version of his game, with rules as follows. You get to choose one of three doors. One door has a car behind it, another has a computer, and the other door has a goat (with all permutations equally likely). Monty, who knows which prize is behind each door, will open a door (but not the one you chose) and then let you choose whether to switch from your current choice to the other unopened door.

Assume that you prefer the car to the computer, the computer to the goat, and (by transitivity) the car to the goat.

(a) Suppose for this part only that Monty always opens the door that reveals your less preferred prize out of the two alternatives, e.g., if he is faced with the choice between revealing the goat or the computer, he will reveal the goat. Monty opens a door, revealing a goat (this is again for this part only). Given this information, should you switch? If you do switch, what is your probability of success in getting the car?

Sol:
Let $C$, $M$, $G$ denote car, computer, goat. You choose door 1. Let $O_G$ = "Monty opens door revealing goat"

Possible configurations where Monty reveals goat:

Case 1: Door 1 has car

- Other two doors: computer and goat

- Monty chooses between revealing computer or goat → reveals goat (less preferred)

- If you switch: get computer

- $P(O_G|\text{door 1 car}) = 1$


Case 2: Door 1 has computer

- Other two doors: car and goat

- Monty chooses between revealing car or goat → reveals goat (less preferred)

- If you switch: get car

- $P(O_G|\text{door 1 computer}) = 1$


Case 3: Door 1 has goat

- Other two doors: car and computer

- Monty must reveal computer or car, not goat

- $P(O_G|\text{door 1 goat}) = 0$


$$P(O_G) = 1 \cdot \frac{1}{3} + 1 \cdot \frac{1}{3} + 0 \cdot \frac{1}{3} = \frac{2}{3}$$

$$P(\text{door 1 car}|O_G) = \frac{1 \cdot \frac{1}{3}}{\frac{2}{3}} = \frac{1}{2}$$

$$P(\text{door 1 computer}|O_G) = \frac{1 \cdot \frac{1}{3}}{\frac{2}{3}} = \frac{1}{2}$$
(b) Now suppose that Monty reveals your less preferred prize with probability $p$, and your more preferred prize with probability $q = 1-p$. Monty opens a door, revealing a computer. Given this information, should you switch (your answer can depend on $p$)? If you do switch, what is your probability of success in getting the car (in terms of $p$)?

Sol:
Let $O_M$ = "Monty opens door revealing computer"

Case 1: Door 1 has car

- Other doors: computer and goat

- Monty reveals computer (more preferred between computer and goat) with prob $q = 1-p$

- If switch: get goat

- $P(O_M|\text{door 1 car}) = 1-p$


Case 2: Door 1 has computer

- Other doors: car and goat

- Monty must choose between car and goat

- Reveals goat (less preferred) with prob $p$, car (more preferred) with prob $1-p$

- Neither reveals computer

- $P(O_M|\text{door 1 computer}) = 0$


Case 3: Door 1 has goat

- Other doors: car and computer

- Monty reveals computer (less preferred between car and computer) with prob $p$

- If switch: get car

- $P(O_M|\text{door 1 goat}) = p$


$$P(O_M) = (1-p) \cdot \frac{1}{3} + 0 \cdot \frac{1}{3} + p \cdot \frac{1}{3} = \frac{1}{3}$$

$$P(\text{door 1 goat}|O_M) = \frac{p \cdot \frac{1}{3}}{\frac{1}{3}} = p$$

$$P(\text{door 1 car}|O_M) = \frac{(1-p) \cdot \frac{1}{3}}{\frac{1}{3}} = 1-p$$

If you switch: get car with prob $p$, get goat with prob $1-p$

#### 44.
Monty Hall has introduced a new twist in his game, by generalizing the assumption that the initial probabilities for where the car is are $(\frac{1}{3}, \frac{1}{3}, \frac{1}{3})$. Specifically, there are three doors, behind one of which there is a car (which the contestant wants), and behind the other two of which there are goats (which the contestant doesn't want). Initially, door $i$ has probability $p_i$ of having the car, where $p_1, p_2, p_3$ are known constants such that $0 < p_1 \leq p_2 \leq p_3 < 1$ and $p_1 + p_2 + p_3 = 1$. The contestant chooses a door. Then Monty opens a door (other than the one the contestant chose) and offers the contestant the option of switching to the other unopened door.

(a) Assume for this part that Monty knows in advance which door has the car. He always opens a door to reveal a goat, and if he has a choice of which door to open he chooses with equal probabilities. Suppose for this part that the contestant initially chooses door 3, and then Monty opens door 2, revealing a goat. Given the above information, find the conditional probability that door 3 has the car. Should the contestant switch doors? (If whether to switch depends on the $p_i$'s, give a fully simplified criterion in terms of the $p_i$'s.)

Sol:
Let $G$ = "Monty opens door 2 revealing goat"
$$P(G|\text{car at 1}) = \frac{1}{2}$$ (Monty chooses between doors 2 and 3 equally)

$$P(G|\text{car at 2}) = 0$$ (Can't reveal goat from door 2 if car is there)

$$P(G|\text{car at 3}) = 1$$ (Monty must open door 2, the only goat door available)

$$P(G) = \frac{1}{2} p_1 + 0 \cdot p_2 + 1 \cdot p_3 = \frac{p_1}{2} + p_3$$

$$P(\text{car at 3}|G) = \frac{p_3}{\frac{p_1}{2} + p_3} = \frac{p_3}{\frac{p_1 + 2p_3}{2}} = \frac{2p_3}{p_1 + 2p_3}$$

$$P(\text{car at 1}|G) = \frac{\frac{p_1}{2}}{\frac{p_1 + 2p_3}{2}} = \frac{p_1}{p_1 + 2p_3}$$

Should switch? Switch if $P(\text{car at 1}|G) > P(\text{car at 3}|G)$

$$\frac{p_1}{p_1 + 2p_3} > \frac{2p_3}{p_1 + 2p_3} \iff p_1 > 2p_3$$
(b) Now assume instead that Monty does not know in advance where the car is. He randomly chooses which door to open (other than the one the contestant chose), with equal probabilities. (The game is spoiled if he reveals the car.) Suppose again that the contestant initially chooses door 3, and then Monty opens door 2, revealing a goat. Given the above information, find the conditional probability that door 3 has the car. Should the contestant switch doors? (If whether to switch depends on the $p_i$'s, give a fully simplified criterion in terms of the $p_i$'s.)

Sol:
$$P(G|\text{car at 1}) = \frac{1}{2}$$ (Randomly opens door 2, which has goat)

$$P(G|\text{car at 2}) = 0$$ (Would reveal car)

$$P(G|\text{car at 3}) = \frac{1}{2}$$ (Randomly chooses door 2, which has goat)

$$P(G) = \frac{1}{2} p_1 + 0 \cdot p_2 + \frac{1}{2} p_3 = \frac{p_1 + p_3}{2}$$

$$P(\text{car at 3}|G) = \frac{\frac{1}{2} p_3}{\frac{p_1 + p_3}{2}} = \frac{p_3}{p_1 + p_3}$$

$$P(\text{car at 1}|G) = \frac{\frac{1}{2} p_1}{\frac{p_1 + p_3}{2}} = \frac{p_1}{p_1 + p_3}$$
Switch if and only if $p_1 > p_3$

$$P(G|\text{car at 1}) = \frac{1}{2}$$ (Monty chooses between doors 2 and 3 equally)

$$P(G|\text{car at 2}) = 0$$ (Can't reveal goat from door 2 if car is there)

$$P(G|\text{car at 3}) = 1$$ (Monty must open door 2)

$$P(G) = \frac{1}{2} p_1 + 0 \cdot p_2 + 1 \cdot p_3 = \frac{p_1}{2} + p_3$$

$$P(\text{car at 1}|G) = \frac{\frac{p_1}{2}}{\frac{p_1 + 2p_3}{2}} = \frac{p_1}{p_1 + 2p_3}$$

$$P(\text{car at 3}|G) = \frac{p_3}{\frac{p_1 + 2p_3}{2}} = \frac{2p_3}{p_1 + 2p_3}$$

Switch if and only if $2p_3 > p_1$
Intuitively this is just flipping the inequality sign from part a

(d) Repeat (b), except with the contestant initially choosing door 1 rather than door 3.

Sol:
$$P(G|\text{car at 1}) = \frac{1}{2}$$

$$P(G|\text{car at 2}) = 0$$

$$P(G|\text{car at 3}) = \frac{1}{2}$$

$$P(G) = \frac{p_1 + p_3}{2}$$

$$P(\text{car at 1}|G) = \frac{p_1}{p_1 + p_3}$$

$$P(\text{car at 3}|G) = \frac{p_3}{p_1 + p_3}$$

Switch if and only if $p_3 > p_1$
Same intuition, you're just flipping the inequality
#### 45.
Monty Hall is trying out a new version of his game. In this version, instead of there always being 1 car and 2 goats, the prizes behind the doors are generated independently, with each door having probability $p$ of having a car and $q = 1-p$ of having a goat. In detail:

There are three doors, behind each of which there is one prize: either a car or a goat. For each door, there is probability $p$ that there is a car behind it and $q = 1-p$ that there is a goat, independent of the other doors.

The contestant chooses a door. Monty, who knows the contents of each door, then opens one of the two remaining doors. In choosing which door to open, Monty will always reveal a goat if possible. If both of the remaining doors have the same kind of prize, Monty chooses randomly (with equal probabilities). After opening a door, Monty offers the contestant the option of switching to the other unopened door.

The contestant decides in advance to use the following strategy: first choose door 1. Then, after Monty opens a door, switch to the other unopened door.

(a) Find the unconditional probability that the contestant will get a car.

Sol:
Case 1: Both doors 2 and 3 have cars (prob $p^2$)

- Monty opens either door 2 or 3 randomly, reveals car

- Contestant switches to the other, gets car

- Probability of getting car: $p^2 \cdot 1 = p^2$


Case 2: Door 2 has car, door 3 has goat (prob $pq$)

- Monty must open door 3 (reveals goat)

- Contestant switches to door 2, gets car

- Probability of getting car: $pq \cdot 1 = pq$


Case 3: Door 2 has goat, door 3 has car (prob $qp$)

- Monty must open door 2 (reveals goat)

- Contestant switches to door 3, gets car

- Probability of getting car: $qp \cdot 1 = qp$


Case 4: Both doors 2 and 3 have goats (prob $q^2$)

- Monty opens either door randomly, reveals goat

- Contestant switches to the other, gets goat

- Probability of getting car: $q^2 \cdot 0 = 0$


$$P(\text{get car}) = p^2 + pq + qp + 0 = p^2 + 2pq = p(p + 2q) = p(p + 2(1-p)) = p(2 - p)$$
(b) Monty now opens door 2, revealing a goat. Given this information, find the conditional probability that the contestant will get a car.

Sol:
Let $O$ = "Monty opens door 2 revealing goat"

Contestant will switch to door 3, so we need $P(C_3|O)$.

When does Monty open door 2 revealing goat?

We need to consider all configurations of doors 1, 2, 3 and whether Monty opens door 2:

- If $G_2$ (door 2 has goat), Monty opens door 2 when:

    - $C_3$ (must open door 2): prob 1

    - $G_3$ (chooses door 2 randomly): prob $\frac{1}{2}$

- If $C_2$ (door 2 has car), Monty cannot reveal goat from door 2


$$P(O|C_1, C_2, C_3) = 0$$ (door 2 has car) $$P(O|C_1, C_2, G_3) = 0$$ (door 2 has car) $$P(O|C_1, G_2, C_3) = 1$$ (must open door 2) $$P(O|C_1, G_2, G_3) = \frac{1}{2}$$ (chooses randomly) $$P(O|G_1, C_2, C_3) = 0$$ (door 2 has car) $$P(O|G_1, C_2, G_3) = 0$$ (door 2 has car) $$P(O|G_1, G_2, C_3) = 1$$ (must open door 2) $$P(O|G_1, G_2, G_3) = \frac{1}{2}$$
$$P(C_3|O) = \frac{2p}{2p + 1 - p} = \frac{2p}{p + 1}$$
#### 46.
Monty Hall is trying out a new version of his game, with rules as follows. The contestant gets to choose one of four doors. One door has a car behind it, another has an apple, another has a book, and another has a goat. All 24 permutations for which door has which prize are equally likely. In order from least preferred to most preferred, the contestant's preferences are: goat, apple, book, car.

Monty, who knows which prize is behind each door, will open a door (other than the contestant's initial choice) and then let the contestant choose whether to switch to another unopened door. Monty will reveal the least preferred prize (among the 3 doors other than the contestant's initial choice) with probability $p$, the intermediately preferred prize with probability $1-p$, and the most preferred prize never.

The contestant decides in advance to use the following strategy: Initially choose door 1. After Monty opens a door, switch to one of the other two unopened doors, randomly choosing between them (with probability 1/2 each).

(a) Find the unconditional probability that the contestant will get the car.

Sol:
Case 1: Car behind door 1 (prob $\frac{1}{4}$)

- Contestant switches away from car

- Gets car with prob 0

- Contribution: $\frac{1}{4} \cdot 0 = 0$


Case 2: Car behind door 2, 3, or 4 (prob $\frac{3}{4}$)

- Monty opens one door (not door 1, not the car)

- Two unopened doors remain (one has car)

- Contestant randomly picks one of the two

- Gets car with prob $\frac{1}{2}$

- Contribution: $\frac{3}{4} \cdot \frac{1}{2} = \frac{3}{8}$


$$P(\text{get car}) = 0 + \frac{3}{8} = \frac{3}{8}$$

(b) Find the unconditional probability that Monty will reveal the apple.

Sol:
Condition on what's behind door 1:

Door 1 has car (prob $\frac{1}{4}$):

- Among doors 2, 3, 4: apple, book, goat (one of each)

- Least preferred: goat (revealed with prob $p$)

- Intermediate: apple or book (whichever is intermediate)

    - If goat is least, then apple is intermediate between book and goat

    - Revealed with prob $1-p$

- Actually, among {apple, book, goat}, ordering is: goat < apple < book

- So: least = goat (prob $p$), intermediate = apple (prob $1-p$), most = book (never)

- $P(\text{apple}|\text{door 1 car}) = 1-p$


Door 1 has apple (prob $\frac{1}{4}$):

- Among doors 2, 3, 4: car, book, goat

- Ordering: goat < book < car

- Least = goat (prob $p$), intermediate = book (prob $1-p$), most = car (never)

- $P(\text{apple}|\text{door 1 apple}) = 0$


Door 1 has book (prob $\frac{1}{4}$):

- Among doors 2, 3, 4: car, apple, goat

- Ordering: goat < apple < car

- Least = goat (prob $p$), intermediate = apple (prob $1-p$), most = car (never)

- $P(\text{apple}|\text{door 1 book}) = 1-p$


Door 1 has goat (prob $\frac{1}{4}$):

- Among doors 2, 3, 4: car, apple, book

- Ordering: apple < book < car

- Least = apple (prob $p$), intermediate = book (prob $1-p$), most = car (never)

- $P(\text{apple}|\text{door 1 goat}) = p$


$$P(\text{reveal apple}) = \frac{1}{4}(1-p) + \frac{1}{4} \cdot 0 + \frac{1}{4}(1-p) + \frac{1}{4} \cdot p$$

$$= \frac{1}{4}[1-p + 0 + 1-p + p] = \frac{1}{4}[2 - p] = \frac{2-p}{4}$$

(c) Monty now opens a door, revealing the apple. Given this information, find the conditional probability that the contestant will get the car.

Sol:
Let $A$ = "Monty reveals apple"

From part (b), we know:

- $P(A|\text{door 1 car}) = 1-p$, prob $\frac{1}{4}$

- $P(A|\text{door 1 apple}) = 0$, prob $\frac{1}{4}$

- $P(A|\text{door 1 book}) = 1-p$, prob $\frac{1}{4}$

- $P(A|\text{door 1 goat}) = p$, prob $\frac{1}{4}$


$$P(\text{door 1 car}|A) = \frac{(1-p) \cdot \frac{1}{4}}{\frac{2-p}{4}} = \frac{1-p}{2-p}$$

$$P(\text{door 1 book}|A) = \frac{(1-p) \cdot \frac{1}{4}}{\frac{2-p}{4}} = \frac{1-p}{2-p}$$

$$P(\text{door 1 goat}|A) = \frac{p \cdot \frac{1}{4}}{\frac{2-p}{4}} = \frac{p}{2-p}$$

If door 1 has car: Contestant switches, gets one of {apple (revealed), book, goat} - car prob = 0

If door 1 has book: Among other 3 doors, one is apple (revealed). Remaining 2: car and goat. Contestant picks randomly: car prob = $\frac{1}{2}$

If door 1 has goat: Among other 3 doors, one is apple (revealed). Remaining 2: car and book. Contestant picks randomly: car prob = $\frac{1}{2}$

$$P(\text{car}|A) = \frac{1-p}{2-p} \cdot 0 + \frac{1-p}{2-p} \cdot \frac{1}{2} + \frac{p}{2-p} \cdot \frac{1}{2}$$
#### 47.
You are the contestant on Monty Hall's game show. Hoping to double the excitement of the game, Monty will offer you two opportunities to switch to another door. Specifically, the new rules are as follows. There are four doors. Behind one door there is a car (which you want); behind the other three doors there are goats (which you don't want). Initially, all possibilities are equally likely for where the car is. Monty knows where the car is, and when he has a choice of which door to open, he chooses with equal probabilities.

You choose a door, which for concreteness we assume is door 1. Monty opens a door (other than door 1), revealing a goat, and then offers you the option to switch to another door. Monty then opens another door (other than your currently selected door), revealing another goat. So now there are two open doors (with goats) and two unopened doors. Again Monty offers you the option to switch.

You decide in advance to use one of the following four strategies: stay-stay, stay-switch, switch-stay, switch-switch, where, for example, "stay-switch" means that the first time Monty offers you the choice of switching, you stay with your current selection, but then the second time Monty offers you the choice, you do switch doors. In each part below the goal is to find or compare unconditional probabilities, i.e., from a vantage point of before the game has started.

(a) Find the probability of winning the car if you follow the stay-stay strategy.

Sol:
No new information, so $$P(\text{win}) = \frac{1}{4}$$
(b) Find the probability of winning the car if you follow the stay-switch strategy.

Sol:
If goat in door 1, you swap after door 2 open, you win with 0 probability and $\frac{1}{4}$ of happening.

Otherwise, he opens two doors, and then you have guaranteed win $\frac{3}{4}$ of the time, so we have $$P(\text{win}) = \frac{3}{4}$$
(c) Find the probability of winning the car if you follow the switch-stay strategy.

Sol:
If car behind door 1 (prob $\frac{1}{4}$):

- Monty opens one of {2, 3, 4}, all goats, say door 2

- You switch from door 1 to door 3 or 4 (equal prob)

- Prob you pick door with car: 0 (car is at door 1, you switched away)

- You now have a goat door, Monty opens another goat door

- You stay with your goat

- Win prob: 0


If car behind door 2 (prob $\frac{1}{4}$):

- Monty opens door 3 or 4 (both goats), equal prob

- You switch from door 1 to one of the two remaining doors (excluding opened one and door 1)

    - If Monty opened door 3: you pick door 2 or 4 with equal prob → car prob $\frac{1}{2}$

    - If Monty opened door 4: you pick door 2 or 3 with equal prob → car prob $\frac{1}{2}$

- Overall: prob $\frac{1}{2}$ you picked door 2 (car)

- Monty then opens another door (not yours, not car if you have it)

- You stay

- Win prob: $\frac{1}{2}$


By symmetry, same for car at door 3 or 4.

$$P(\text{win}) = \frac{1}{4} \cdot 0 + \frac{1}{4} \cdot \frac{1}{2} + \frac{1}{4} \cdot \frac{1}{2} + \frac{1}{4} \cdot \frac{1}{2} = \frac{3}{8}$$
(d) Find the probability of winning the car if you follow the switch-switch strategy.

Sol:
If car behind door 1 (prob $\frac{1}{4}$):

- After first switch, you're at a goat door (prob 1)

- Monty opens another goat door

- Two unopened doors: your goat and door 1 (car)

- You switch to door 1

- Win prob: 1


If car behind door 2 (prob $\frac{1}{4}$):

- Monty opens door 3 or 4 (goat)

- You switch to door 2 or the other unopened goat (prob $\frac{1}{2}$ each)

- If you're at door 2 (car): Monty opens remaining goat, you switch to goat, lose

- If you're at goat: Monty opens the other goat (not yours, not car at door 2), you switch to door 2, win

- Win prob: $0 \cdot \frac{1}{2} + 1 \cdot \frac{1}{2} = \frac{1}{2}$


By symmetry for doors 3 and 4.

$$P(\text{win}) = \frac{1}{4} \cdot 1 + \frac{1}{4} \cdot \frac{1}{2} + \frac{1}{4} \cdot \frac{1}{2} + \frac{1}{4} \cdot \frac{1}{2} = \frac{1}{4} + \frac{3}{8} = \frac{5}{8}$$
(e) Which of these four strategies is the best?

Sol: Stay switch, which intuitively makes sense as well, since you wait for maximal information first.
## First-step analysis and gambler's ruin

#### 48.
A fair die is rolled repeatedly, and a running total is kept (which is, at each time, the total of all the rolls up until that time). Let $p_n$ be the probability that the running total is ever exactly $n$ (assume the die will always be rolled enough times so that the running total will eventually exceed $n$, but it may or may not ever equal $n$).

(a) Write down a recursive equation for $p_n$ (relating $p_n$ to earlier terms $p_k$ in a simple way). Your equation should be true for all positive integers $n$, so give a definition of $p_0$ and $p_k$ for $k < 0$ so that the recursive equation is true for small values of $n$.

Sol:
To reach total $n$, we must first reach some total $n-k$ (where $k \in {1,2,3,4,5,6}$), then roll $k$.

$$p_n = \sum_{k=1}^{6} p_{n-k} \cdot \frac{1}{6} = \frac{1}{6}(p_{n-1} + p_{n-2} + p_{n-3} + p_{n-4} + p_{n-5} + p_{n-6})$$

Boundary conditions:

- $p_0 = 1$ (we start at 0, so we're "already there")
- $p_k = 0$ for $k < 0$ (can't reach negative totals)
  (b) Find $p_7$.

Sol:
$$p_1 = \frac{1}{6}(p_0 + 0 + 0 + 0 + 0 + 0) = \frac{1}{6}$$

$$p_2 = \frac{1}{6}(p_1 + p_0 + 0 + 0 + 0 + 0) = \frac{1}{6}\left(\frac{1}{6} + 1\right) = \frac{7}{36}$$

$$p_3 = \frac{1}{6}(p_2 + p_1 + p_0) = \frac{1}{6}\left(\frac{7}{36} + \frac{1}{6} + 1\right) = \frac{1}{6}\left(\frac{7}{36} + \frac{6}{36} + \frac{36}{36}\right) = \frac{49}{216}$$

$$p_4 = \frac{1}{6}(p_3 + p_2 + p_1 + p_0) = \frac{1}{6}\left(\frac{49}{216} + \frac{7}{36} + \frac{1}{6} + 1\right)$$

$$= \frac{1}{6}\left(\frac{49}{216} + \frac{42}{216} + \frac{36}{216} + \frac{216}{216}\right) = \frac{343}{1296}$$

$$p_5 = \frac{1}{6}(p_4 + p_3 + p_2 + p_1 + p_0) = \frac{1}{6}\left(\frac{343}{1296} + \frac{49}{216} + \frac{7}{36} + \frac{1}{6} + 1\right)$$

$$= \frac{1}{6}\left(\frac{343}{1296} + \frac{294}{1296} + \frac{252}{1296} + \frac{216}{1296} + \frac{1296}{1296}\right) = \frac{2401}{7776}$$

$$p_6 = \frac{1}{6}(p_5 + p_4 + p_3 + p_2 + p_1 + p_0)$$

$$= \frac{1}{6}\left(\frac{2401}{7776} + \frac{343}{1296} + \frac{49}{216} + \frac{7}{36} + \frac{1}{6} + 1\right)$$

$$= \frac{1}{6}\left(\frac{2401}{7776} + \frac{2058}{7776} + \frac{1764}{7776} + \frac{1512}{7776} + \frac{1296}{7776} + \frac{7776}{7776}\right) = \frac{16807}{46656}$$

$$p_7 = \frac{1}{6}(p_6 + p_5 + p_4 + p_3 + p_2 + p_1)$$

$$= \frac{1}{6}\left(\frac{16807}{46656} + \frac{2401}{7776} + \frac{343}{1296} + \frac{49}{216} + \frac{7}{36} + \frac{1}{6}\right)$$

$$= \frac{1}{6}\left(\frac{16807}{46656} + \frac{14406}{46656} + \frac{12348}{46656} + \frac{10584}{46656} + \frac{9072}{46656} + \frac{7776}{46656}\right)$$

$$= \frac{70993}{279936}$$
(c) Give an intuitive explanation for the fact that $p_n \to 1/3.5 = 2/7$ as $n \to \infty$.

Sol:
For large $n$, the probability of hitting exactly $n$ depends on the "gap size" of possible jumps.

When rolling a die, you jump by 1, 2, 3, 4, 5, or 6. The average jump is $\frac{1+2+3+4+5+6}{6} = 3.5$.

For large $n$, we're taking many rolls, so by the law of large numbers we're making jumps of roughly size 3.5 on average. The probability of landing exactly on $n$ (rather than jumping over it) approaches $\frac{1}{3.5} = \frac{2}{7}$.
#### 49.

A sequence of $n \geq 1$ independent trials is performed, where each trial ends in "success" or "failure" (but not both). Let $p_i$ be the probability of success in the $i$th trial, $q_i = 1-p_i$, and $b_i = q_i - 1/2$, for $i = 1, 2, \ldots, n$. Let $A_n$ be the event that the number of successful trials is even.

(a) Show that for $n = 2$, $P(A_2) = 1/2 + 2b_1b_2$.

Sol:
$A_2$ = "even number of successes" = {0 successes, 2 successes}

$$P(A_2) = P(\text{0 successes}) + P(\text{2 successes}) = q_1q_2 + p_1p_2$$

$$= q_1q_2 + (1-q_1)(1-q_2) = q_1q_2 + 1 - q_1 - q_2 + q_1q_2$$

$$= 1 - q_1 - q_2 + 2q_1q_2$$

Now substitute $q_i = \frac{1}{2} + b_i$:

$$= 1 - \left(\frac{1}{2} + b_1\right) - \left(\frac{1}{2} + b_2\right) + 2\left(\frac{1}{2} + b_1\right)\left(\frac{1}{2} + b_2\right)$$

$$= 1 - \frac{1}{2} - b_1 - \frac{1}{2} - b_2 + 2\left(\frac{1}{4} + \frac{b_1}{2} + \frac{b_2}{2} + b_1b_2\right)$$

$$= -b_1 - b_2 + \frac{1}{2} + b_1 + b_2 + 2b_1b_2 = \frac{1}{2} + 2b_1b_2$$

(b) Show by induction that $$P(A_n) = 1/2 + 2^{n-1}b_1b_2 \cdots b_n.$$


Sol:
$n=1$ $$P(A_1) = P(\text{0 successes}) = q_1 = \frac{1}{2} + b_1 = \frac{1}{2} + 2^0b_1$$
Group the first $n-1$ trials into a "supertrial."

Let $S_{n-1}$ = event that first $n-1$ trials have even number of successes

By induction hypothesis: $P(S_{n-1}) = \frac{1}{2} + 2^{n-2}b_1b_2 \cdots b_{n-1}$

Now consider trial $n$. We have even total successes if:

- $S_{n-1}$ occurs AND trial $n$ fails, OR
- $S_{n-1}^c$ occurs AND trial $n$ succeeds

$$P(A_n) = P(S_{n-1}) \cdot q_n + P(S_{n-1}^c) \cdot p_n$$

$$= P(S_{n-1}) \cdot q_n + (1 - P(S_{n-1})) \cdot (1-q_n)$$

$$= P(S_{n-1}) \cdot q_n + (1-q_n) - P(S_{n-1})(1-q_n)$$

$$= (1-q_n) + P(S_{n-1})(q_n - 1 + q_n) = (1-q_n) + P(S_{n-1})(2q_n - 1)$$

Note that $2q_n - 1 = 2(\frac{1}{2} + b_n) - 1 = 2b_n$:

$$= (1-q_n) + P(S_{n-1}) \cdot 2b_n$$

$$= \frac{1}{2} - b_n + \left(\frac{1}{2} + 2^{n-2}b_1 \cdots b_{n-1}\right) \cdot 2b_n$$

$$= \frac{1}{2} - b_n + b_n + 2^{n-1}b_1b_2 \cdots b_{n-1}b_n$$

$$= \frac{1}{2} + 2^{n-1}b_1b_2 \cdots b_n$$

(c) Check directly that the result of (b) is true in the following simple cases: $p_i = 1/2$ for some $i$; $p_i = 0$ for all $i$; $p_i = 1$ for all $i$.

Sol:
$p_i = \frac{1}{2}$ for some $i$ (fair coin)

Then $q_i = \frac{1}{2}$, so $b_i = \frac{1}{2} - \frac{1}{2} = 0$

$$P(A_n) = \frac{1}{2} + 2^{n-1}b_1 \cdots b_i \cdots b_n = \frac{1}{2} + 2^{n-1} \cdot 0 = \frac{1}{2}$$
(With one fair coin, even/odd successes are equally likely)

$p_i = 0$ for all $i$ (all fail)
Then $q_i = 1$, so $b_i = 1 - \frac{1}{2} = \frac{1}{2}$

$$P(A_n) = \frac{1}{2} + 2^{n-1}\left(\frac{1}{2}\right)^n = \frac{1}{2} + \frac{1}{2} = 1$$

(0 successes is even)

$p_i = 1$ for all $i$ (all succeed)

Then $q_i = 0$, so $b_i = 0 - \frac{1}{2} = -\frac{1}{2}$

$$P(A_n) = \frac{1}{2} + 2^{n-1}\left(-\frac{1}{2}\right)^n = \frac{1}{2} + 2^{n-1} \cdot \frac{(-1)^n}{2^n} = \frac{1}{2} + \frac{(-1)^n}{2}$$

- If $n$ even: $P(A_n) = \frac{1}{2} + \frac{1}{2} = 1$
- If $n$ odd: $P(A_n) = \frac{1}{2} - \frac{1}{2} = 0$
#### 50.
Calvin and Hobbes play a match consisting of a series of games, where Calvin has probability $p$ of winning each game (independently). They play with a "win by two" rule: the first player to win two games more than his opponent wins the match. Find the probability that Calvin wins the match (in terms of $p$), in two different ways:

(a) by conditioning, using the law of total probability.

Sol:
Let $P_k$ = probability Calvin wins the match starting from a state where Calvin is ahead by $k$ games.
Boundary conditions:

- $P_2 = 1$ (Calvin already won)

- $P_{-2} = 0$ (Hobbes already won)


Recursive equations:

From state 0 (tied): $$P_0 = p \cdot P_1 + (1-p) \cdot P_{-1}$$

From state 1 (Calvin ahead by 1): $$P_1 = p \cdot P_2 + (1-p) \cdot P_0 = p \cdot 1 + (1-p) \cdot P_0 = p + (1-p)P_0$$

From state -1 (Calvin behind by 1): $$P_{-1} = p \cdot P_0 + (1-p) \cdot P_{-2} = p \cdot P_0 + (1-p) \cdot 0 = pP_0$$

Substitute into equation for $P_0$:

$$P_0 = p[p + (1-p)P_0] + (1-p)[pP_0]$$

$$= p^2 + p(1-p)P_0 + p(1-p)P_0$$

$$= p^2 + 2p(1-p)P_0$$

$$P_0 - 2p(1-p)P_0 = p^2$$

$$P_0[1 - 2p(1-p)] = p^2$$

$$P_0[1 - 2p + 2p^2] = p^2$$

$$P_0[2p^2 - 2p + 1] = p^2$$
(b) by interpreting the problem as a gambler's ruin problem.

Sol:
Starting at position $i$ with barriers at 0 and $N$, probability of reaching $N$ before 0:

If $p \neq \frac{1}{2}$: $$P_i = \frac{1 - (q/p)^i}{1 - (q/p)^N}$$

where $q = 1-p$.

Shift coordinates so Calvin starts at position 2 (the middle), with barriers at 0 and 4.

$$P_2 = \frac{1 - (q/p)^2}{1 - (q/p)^4} = \frac{1 - q^2/p^2}{1 - q^4/p^4}$$

$$= \frac{p^2 - q^2}{p^4 - q^4} \cdot \frac{p^2}{1} = \frac{p^2(p^2 - q^2)}{p^4 - q^4}$$

$$= \frac{p^2(p^2 - q^2)}{(p^2 - q^2)(p^2 + q^2)} = \frac{p^2}{p^2 + q^2}$$

If $p = \frac{1}{2}$: $$P_0 = \frac{(1/2)^2}{(1/2)^2 + (1/2)^2} = \frac{1/4}{1/2} = \frac{1}{2}$$
#### 51.
A gambler repeatedly plays a game where in each round, he wins a dollar with probability 1/3 and loses a dollar with probability 2/3. His strategy is "quit when he is ahead by $2". Suppose that he starts with a million dollars. Show that the probability that he'll ever be ahead by $2 is less than 1/4.

Sol:
Let $P_k$ = probability of reaching +2 starting from position $k$. $$P_k = \frac{1}{3} P_{k+1} + \frac{2}{3} P_{k-1}$$From any position, probability of reaching +2 before $-\infty$ is: $$P_0 = (p/q)^2 = (1/2)^2 = \frac{1}{4}$$
And since this is with infinite wealth and no ruin, then by definition this is the upper bound.
#### 52.
As in the gambler's ruin problem, two gamblers, A and B, make a series of bets, until one of the gamblers goes bankrupt. Let A start out with $i$ dollars and B start out with $N-i$ dollars, and let $p$ be the probability of A winning a bet, with $0 < p < \frac{1}{2}$. Each bet is for $\frac{1}{k}$ dollars, with $k$ a positive integer, e.g., $k = 1$ is the original gambler's ruin problem and $k = 20$ means they're betting nickels. Find the probability that A wins the game, and determine what happens to this as $k \to \infty$.

Sol:
Since $p \neq \frac{1}{2}$, starting at position $m$ with barriers at 0 and $M$:

$$P_m = \frac{1 - (q/p)^m}{1 - (q/p)^M}$$

where $q = 1-p$.

Our problem: $m = ki$, $M = kN$

$$P_{ki} = \frac{1 - (q/p)^{ki}}{1 - (q/p)^{kN}}$$

So: $$P_A(\text{wins}) = \frac{1 - (q/p)^{ki}}{1 - (q/p)^{kN}}$$

As $k \to \infty$:

Let $r = q/p > 1$ (since $p < \frac{1}{2}$, we have $q > p$, so $r > 1$).

$$P_{ki} = \frac{1 - r^{ki}}{1 - r^{kN}}$$

Divide numerator and denominator by $r^{ki}$:

$$= \frac{r^{-ki} - 1}{r^{-ki} \cdot r^{kN} - 1} = \frac{r^{-ki} - 1}{r^{k(N-i)} - 1}$$

As $k \to \infty$:

- $r^{-ki} = (q/p)^{-ki} = (p/q)^{ki} \to 0$ (since $p/q < 1$)

- $r^{k(N-i)} = (q/p)^{k(N-i)} \to \infty$ (since $q/p > 1$)


$$\lim_{k \to \infty} P_{ki} = \lim_{k \to \infty} \frac{0 - 1}{\infty - 1} = \frac{-1}{\infty} = 0$$
#### 53.
There are 100 equally spaced points around a circle. At 99 of the points, there are sheep, and at 1 point, there is a wolf. At each time step, the wolf randomly moves either clockwise or counterclockwise by 1 point. If there is a sheep at that point, he eats it. The sheep don't move. What is the probability that the sheep who is initially opposite the wolf is the last one remaining?

Sol:
By symmetry, each of the 99 sheep is equally likely to be eaten last, therefore $$P(\text{opposite}) = \frac{1}{99}$$
#### 54.
An immortal drunk man wanders around randomly on the integers. He starts at the origin, and at each step he moves 1 unit to the right or 1 unit to the left, with probabilities $p$ and $q = 1-p$ respectively, independently of all his previous steps. Let $S_n$ be his position after $n$ steps.

(a) Let $p_k$ be the probability that the drunk ever reaches the value $k$, for all $k \geq 0$. Write down a difference equation for $p_k$ (you do not need to solve it for this part).

Sol:
To reach position $k$ (for $k \geq 1$), the drunk must first reach position $k-1$, then go from $k-1$ to $k$.

By the translational invariance of the random walk, the probability of reaching position $j+1$ starting from position $j$ is the same for all $j$. Let me call this probability $r$.

Then: $$p_k = p_{k-1} \cdot r \quad \text{for } k \geq 1$$

with the initial condition $p_0 = 1$

To find $r$ (the probability of reaching 1 from 0)

- With probability $p$, we step right to position 1 (success!)

- With probability $q$, we step left to position $-1$, and then must return to 0 (which by symmetry has probability $r$), and then reach 1 from 0 (probability $r$ again)

This gives: $$r = p + q \cdot r \cdot r = p + qr^2$$

Difference equation: $$\boxed{p_k = r \cdot p_{k-1}, \quad k \geq 1, \quad p_0 = 1}$$

where $r$ satisfies $qr^2 - r + p = 0$.
(b) Find $p_k$, fully simplified; be sure to consider all 3 cases: $p < 1/2$, $p = 1/2$, and $p > 1/2$. Feel free to assume that if $A_1, A_2, \ldots$ are events with $A_j \subseteq A_{j+1}$ for all $j$, then $P(A_n) \to P(\bigcup_{j=1}^{\infty} A_j)$ as $n \to \infty$ (because it is true; this is known as continuity of probability).

Sol:
From the difference equation $p_k = r \cdot p_{k-1}$ with $p_0 = 1$, we get: $$p_k = r^k$$

Now I need to find $r$ from $qr^2 - r + p = 0$.

Using the quadratic formula: $$r = \frac{1 \pm \sqrt{1-4pq}}{2q}$$

Since $1 - 4pq = 1 - 4p(1-p) = (1-2p)^2$: $$r = \frac{1 \pm |1-2p|}{2q}$$

Case 1: $p < 1/2$

Here $|1-2p| = 1-2p$, so: $$r = \frac{1 \pm (1-2p)}{2(1-p)}$$

The two solutions are:

- $r = \frac{1+(1-2p)}{2(1-p)} = \frac{2-2p}{2(1-p)} = 1$

- $r = \frac{1-(1-2p)}{2(1-p)} = \frac{2p}{2(1-p)} = \frac{p}{q}$


Since $p < 1/2$, we have $\frac{p}{q} < 1$. The walk has leftward drift, so we shouldn't reach every positive position with certainty. Thus: $r = \frac{p}{q}$.

Case 2: $p > 1/2$

Here $|1-2p| = 2p-1$, so: $$r = \frac{1 \pm (2p-1)}{2(1-p)}$$

The two solutions are:

- $r = \frac{2-2p}{2(1-p)} = 1$

- $r = \frac{2p}{2(1-p)} = \frac{p}{q} > 1$ (impossible!)


Thus: $r = 1$.

Case 3: $p = 1/2$

Here $|1-2p| = 0$, so $r = \frac{1}{1} = 1$.


$$\boxed{p_k = \begin{cases} \left(\dfrac{p}{1-p}\right)^k = \left(\dfrac{p}{q}\right)^k & \text{if } p < \dfrac{1}{2} \[0.5em] 1 & \text{if } p = \dfrac{1}{2} [0.5em] 1 & \text{if } p > \dfrac{1}{2} \end{cases}}$$
## Simpson's paradox
#### 55.

(a) Is it possible to have events $A, B, C$ such that $P(A|C) < P(B|C)$ and $P(A|C^c) < P(B|C^c)$, yet $P(A) > P(B)$? That is, $A$ is less likely than $B$ given that $C$ is true, and also less likely than $B$ given that $C$ is false, yet $A$ is more likely than $B$ if we're given no information about $C$. Show this is impossible (with a short proof) or find a counterexample (with a story interpreting $A, B, C$).

Sol:
By the law of total probability: $$P(A) = P(A|C)P(C) + P(A|C^c)P(C^c)$$ $$P(B) = P(B|C)P(C) + P(B|C^c)P(C^c)$$

Subtracting these: $$P(A) - P(B) = [P(A|C) - P(B|C)]P(C) + [P(A|C^c) - P(B|C^c)]P(C^c)$$

Given our assumptions:

- $P(A|C) - P(B|C) < 0$ (since $P(A|C) < P(B|C)$)

- $P(A|C^c) - P(B|C^c) < 0$ (since $P(A|C^c) < P(B|C^c)$)


Therefore: $$P(A) - P(B) = \underbrace{(\text{negative})}{\text{first term}} \cdot P(C) + \underbrace{(\text{negative})}{\text{second term}} \cdot P(C^c) < 0$$
(b) If the scenario in (a) is possible, is it a special case of Simpson's paradox, equivalent to Simpson's paradox, or neither? If it is impossible, explain intuitively why it is impossible even though Simpson's paradox is possible.

Sol:
Simpson's paradox works because the weights differ between scenarios. The proportion of Drug A patients who are severe differs from the proportion of Drug B patients who are severe, while for the example above, we are using weights from the same partition, so weighting is the same, so your weighted average cannot be more than your overall average.
#### 56.
Consider the following conversation from an episode of _The Simpsons_:

> Lisa: Dad, I think he's an ivory dealer! His boots are ivory, his hat is ivory, and I'm pretty sure that check is ivory.
>
> Homer: Lisa, a guy who has lots of ivory is less likely to hurt Stampy than a guy whose ivory supplies are low.

Here Homer and Lisa are debating the question of whether or not the man (named Blackheart) is likely to hurt Stampy the Elephant if they sell Stampy to him. They clearly disagree about how to use their observations about Blackheart to learn about the probability (conditional on the evidence) that Blackheart will hurt Stampy.

(a) Define clear notation for the various events of interest here.

Sol:
$I$ Blackheart has lots of ivory
$D$ Blackheart is an ivory dealer
$H$ Blackheart will hurt Stampy

(b) Express Lisa's and Homer's arguments (Lisa's is partly implicit) as conditional probability statements in terms of your notation from (a).

Sol:
Lisa: $$P(I|D) > P(I|D^c)$$ and then $$P(H|D) > P(H|D^c)$$ which means $$P(H|I) > P(H|I^c)$$
Homer:
$$P(H|I)$$ is low since the marginal utility of more ivory is low, so $P(\text{needs more ivory }|I)$ is low.

(c) Assume it is true that someone who has a lot of a commodity will have less desire to acquire more of the commodity. Explain what is wrong with Homer's reasoning that the evidence about Blackheart makes it less likely that he will harm Stampy.

Sol:
Homer's assumption is economic, and discusses the economic rationale. However, under Bayesian inferencing, $P(H|I)$ is high since ivory dealers by nature harm elephants.
#### 57.
(a) There are two crimson jars (labeled $C_1$ and $C_2$) and two mauve jars (labeled $M_1$ and $M_2$). Each jar contains a mixture of green gummi bears and red gummi bears. Show by example that it is possible that $C_1$ has a much higher percentage of green gummi bears than $M_1$, and $C_2$ has a much higher percentage of green gummi bears than $M_2$, yet if the contents of $C_1$ and $C_2$ are merged into a new jar and likewise for $M_1$ and $M_2$, then the combination of $C_1$ and $C_2$ has a lower percentage of green gummi bears than the combination of $M_1$ and $M_2$.

Sol:
Crimson jars:
- $C_1$: 3 green, 1 red → 75% green (total: 4 bears)

- $C_2$: 8 green, 12 red → 40% green (total: 20 bears)

Mauve jars:
- $M_1$: 10 green, 6 red → 62.5% green (total: 16 bears)

- $M_2$: 1 green, 3 red → 25% green (total: 4 bears)



- $C_1$ vs $M_1$: 75% > 62.5%

- $C_2$ vs $M_2$: 40% > 25%



- Crimson total: 11 green, 13 red (out of 24) → 45.8% green

- Mauve total: 11 green, 9 red (out of 20) → 55% green

(b) Explain how (a) relates to Simpson's paradox, both intuitively and by explicitly defining events $A, B, C$ as in the statement of Simpson's paradox.

Sol:
If we randomly select a bear and define A = "bear is green", B = "bear is from crimson jar", and C = "bear is from jar 1", then we have $P(A|B,C) > P(A|B^c,C)$ and $P(A|B,C^c) > P(A|B^c,C^c)$ (crimson beats mauve in both jar 1 and jar 2), yet $P(A|B) < P(A|B^c)$ (mauve beats crimson overall). The reversal occurs because the **weights differ**: most crimson bears come from jar 2 where green percentages are lower for everyone, while most mauve bears come from jar 1 where green percentages are higher for everyone, so even though crimson outperforms mauve within each jar type, mauve's overall average is pulled up by having more bears in the favorable jar while crimson's average is pulled down by having more bears in the unfavorable jar.
#### 58.
As explained in this chapter, Simpson's paradox says that it is possible to have events $A, B, C$ such that $P(A|B,C) < P(A|B^c, C)$ and $P(A|B,C^c) < P(A|B^c, C^c)$, yet $P(A|B) > P(A|B^c)$.

(a) Can Simpson's paradox occur if $A$ and $B$ are independent? If so, give a concrete example (with both numbers and an interpretation); if not, prove that it is impossible.

Sol:
If $A$ and $B$ are independent, then: $$P(A|B) = P(A|B^c) = P(A)$$

But Simpson's paradox requires $P(A|B) > P(A|B^c)$, which would mean $P(A) > P(A)$

(b) Can Simpson's paradox occur if $A$ and $C$ are independent? If so, give a concrete example (with both numbers and an interpretation); if not, prove that it is impossible.
Sol:
If $A$ and $C$ are independent, then $A$ is independent of $C$ conditional on any event. Therefore: $$P(A|B,C) = P(A|B) \quad \text{and} \quad P(A|B^c,C) = P(A|B^c)$$ $$P(A|B,C^c) = P(A|B) \quad \text{and} \quad P(A|B^c,C^c) = P(A|B^c)$$

- $P(A|B) < P(A|B^c)$

- $P(A|B) < P(A|B^c)$

- But $P(A|B) > P(A|B^c)$
  (c) Can Simpson's paradox occur if $B$ and $C$ are independent? If so, give a concrete example (with both numbers and an interpretation); if not, prove that it is impossible.

Sol:
By the law of total probability: $$P(A|B) = P(A|B,C)P(C|B) + P(A|B,C^c)P(C^c|B)$$ $$P(A|B^c) = P(A|B^c,C)P(C|B^c) + P(A|B^c,C^c)P(C^c|B^c)$$

If $B$ and $C$ are independent, then: $$P(C|B) = P(C|B^c) = P(C)$$

So both expressions use the same weights $P(C)$ and $P(C^c)$. Therefore: $$P(A|B) - P(A|B^c) = [P(A|B,C) - P(A|B^c,C)]P(C) + [P(A|B,C^c) - P(A|B^c,C^c)]P(C^c)$$
#### 59.
The book _Red State, Blue State, Rich State, Poor State_ by Andrew Gelman [12] discusses the following election phenomenon: within any U.S. state, a wealthy voter is more likely to vote for a Republican than a poor voter, yet the wealthier states tend to favor Democratic candidates!

(a) Assume for simplicity that there are only 2 states (called Red and Blue), each of which has 100 people, and that each person is either rich or poor, and either a Democrat or a Republican. Make up numbers consistent with the above, showing how this phenomenon is possible, by giving a $2 \times 2$ table for each state (listing how many people in each state are rich Democrats, etc.). So within each state, a rich voter is more likely to vote for a Republican than a poor voter, but the percentage of Democrats is higher in the state with the higher percentage of rich people than in the state with the lower percentage of rich people.

Sol:
Blue State (wealthy state, 100 people):
- Rich: 44/80 = 55% Democrat

- Poor: 16/20 = 80% Democrat

- Overall: 60% Democrat

- Within state: Rich less likely to be Democrat ✓


Red State (poor state, 100 people):
- Rich: 4/20 = 20% Democrat

- Poor: 20/80 = 25% Democrat

- Overall: 24% Democrat

- Within state: Rich less likely to be Democrat


The paradox:
- In both states, rich voters are less likely to be Democrats than poor voters

- But Blue State (80% rich) has 60% Democrats, while Red State (20% rich) has only 24% Democrats
  (b) In the setup of (a) (not necessarily with the numbers you made up there), let $D$ be the event that a randomly chosen person is a Democrat (with all 200 people equally likely), and $B$ be the event that the person lives in the Blue State. Suppose that 10 people move from the Blue State to the Red State. Write $P_{\text{old}}$ and $P_{\text{new}}$ for probabilities before and after they move. Assume that people do not change parties, so we have $P_{\text{new}}(D) = P_{\text{old}}(D)$. Is it possible that both $P_{\text{new}}(D|B) > P_{\text{old}}(D|B)$ and $P_{\text{new}}(D|B^c) > P_{\text{old}}(D|B^c)$ are true? If so, explain how it is possible and why it does not contradict the law of total probability $P(D) = P(D|B)P(B) + P(D|B^c)P(B^c)$; if not, show that it is impossible.

Sol:
Suppose the 10 people who move from Blue to Red consist of 3 Democrats and 7 Republicans.
After the move:

- Blue State: 57 Dem, 33 Rep (out of 90) → 57/90 = 63.3% Democrat (increased from 60%)

- Red State: 27 Dem, 83 Rep (out of 110) → 27/110 = 24.5% Democrat (increased from 24%)


Why this doesn't contradict the law of total probability:

The law states: $P(D) = P(D|B)P(B) + P(D|B^c)P(B^c)$

- Before: $P_{\text{old}}(D) = 0.60 \times 0.5 + 0.24 \times 0.5 = 0.42$

- After: $P_{\text{new}}(D) = 0.633 \times 0.45 + 0.245 \times 0.55 = 0.285 + 0.135 = 0.42$
## Mixed practice

#### 60.
A patient is being given a blood test for the disease conditionitis. Let $p$ be the prior probability that the patient has conditionitis. The blood sample is sent to one of two labs for analysis, lab A or lab B. The choice of which lab to use is made randomly, independent of the patient's disease status, with probability 1/2 for each lab. For lab A, the probability of someone testing positive given that they do have the disease is $a_1$, and the probability of someone testing negative given that they do not have the disease is $a_2$. The corresponding probabilities for lab B are $b_1$ and $b_2$.

(a) Find the probability that the patient has the disease, given that they tested positive.

Sol:
- $P(D) = p$
- $P(A) = P(B) = \frac{1}{2}$
- $P(+|D, A) = a_1$, $P(-|D^c, A) = a_2$ (so $P(+|D^c, A) = 1-a_2$)
- $P(+|D, B) = b_1$, $P(-|D^c, B) = b_2$ (so $P(+|D^c, B) = 1-b_2$)


By Bayes:

$$P(D|+) = \frac{P(+|D) \cdot P(D)}{P(+)}$$

$P(+|D)$:

$$P(+|D) = P(+|D, A) \cdot P(A) + P(+|D, B) \cdot P(B) = a_1 \cdot \frac{1}{2} + b_1 \cdot \frac{1}{2} = \frac{a_1 + b_1}{2}$$

$P(+|D^c)$:

$$P(+|D^c) = P(+|D^c, A) \cdot P(A) + P(+|D^c, B) \cdot P(B) = (1-a_2) \cdot \frac{1}{2} + (1-b_2) \cdot \frac{1}{2}$$

$$= \frac{2 - a_2 - b_2}{2}$$

$P(+)$:

$$P(+) = P(+|D) \cdot P(D) + P(+|D^c) \cdot P(D^c)$$

$$= \frac{a_1 + b_1}{2} \cdot p + \frac{2 - a_2 - b_2}{2} \cdot (1-p)$$

$$= \frac{1}{2}[p(a_1 + b_1) + (1-p)(2 - a_2 - b_2)]$$
(b) Find the probability that the patient's blood sample was analyzed by lab A, given that the patient tested positive.

Sol:
$$P(A|+) = \frac{P(+|A) \cdot P(A)}{P(+)}$$

$P(+|A)$:

$$P(+|A) = P(+|A, D) \cdot P(D) + P(+|A, D^c) \cdot P(D^c)$$

$$= a_1 \cdot p + (1-a_2) \cdot (1-p) = pa_1 + (1-p)(1-a_2)$$
$$P(+) = \frac{1}{2}[p(a_1 + b_1) + (1-p)(2 - a_2 - b_2)]$$

$$P(A|+) = \frac{[pa_1 + (1-p)(1-a_2)] \cdot \frac{1}{2}}{\frac{1}{2}[p(a_1 + b_1) + (1-p)(2 - a_2 - b_2)]}$$

$$\boxed{P(A|+) = \frac{pa_1 + (1-p)(1-a_2)}{p(a_1 + b_1) + (1-p)(2 - a_2 - b_2)}}$$
#### 61.
Fred decides to take a series of $n$ tests, to diagnose whether he has a certain disease (any individual test is not perfectly reliable, so he hopes to reduce his uncertainty by taking multiple tests). Let $D$ be the event that he has the disease, $p = P(D)$ be the prior probability that he has the disease, and $q = 1-p$. Let $T_j$ be the event that he tests positive on the $j$th test.

(a) Assume for this part that the test results are conditionally independent given Fred's disease status. Let $a = P(T_j|D)$ and $b = P(T_j|D^c)$, where $a$ and $b$ don't depend on $j$. Find the posterior probability that Fred has the disease, given that he tests positive on all $n$ of the $n$ tests.

Sol:
- $P(D) = p$, $P(D^c) = q = 1-p$

- $P(T_j|D) = a$ for all $j$

- $P(T_j|D^c) = b$ for all $j$

- Tests are conditionally independent given $D$ or $D^c$


Use Bayes' theorem:

$$P(D|T_1, \ldots, T_n) = \frac{P(T_1, \ldots, T_n|D) \cdot P(D)}{P(T_1, \ldots, T_n)}$$

By conditional independence:

$$P(T_1, \ldots, T_n|D) = \prod_{j=1}^{n} P(T_j|D) = a^n$$

$$P(T_1, \ldots, T_n|D^c) = \prod_{j=1}^{n} P(T_j|D^c) = b^n$$

Find $P(T_1, \ldots, T_n)$:

$$P(T_1, \ldots, T_n) = P(T_1, \ldots, T_n|D) \cdot P(D) + P(T_1, \ldots, T_n|D^c) \cdot P(D^c)$$

$$= a^n \cdot p + b^n \cdot q$$
(b) Suppose that Fred tests positive on all $n$ tests. However, some people have a certain gene that makes them always test positive. Let $G$ be the event that Fred has the gene. Assume that $P(G) = 1/2$ and that $D$ and $G$ are independent. If Fred does not have the gene, then the test results are conditionally independent given his disease status. Let $a' = P(T_j|D, G^c)$ and $b' = P(T_j|D^c, G^c)$, where $a'$ and $b'$ don't depend on $j$. Find the posterior probability that Fred has the disease, given that he tests positive on all $n$ of the tests.

Sol:
- $P(G) = \frac{1}{2}$

- $D$ and $G$ are independent

- If $G$: always test positive, so $P(T_j|G) = 1$

- If $G^c$: $P(T_j|D, G^c) = a'$, $P(T_j|D^c, G^c) = b'$


Use law of total probability over $G$:

$$P(D|T_1, \ldots, T_n) = P(D|G, T_1, \ldots, T_n) \cdot P(G|T_1, \ldots, T_n)$$ $$+ P(D|G^c, T_1, \ldots, T_n) \cdot P(G^c|T_1, \ldots, T_n)$$

First, find $P(G|T_1, \ldots, T_n)$:

$$P(G|T_1, \ldots, T_n) = \frac{P(T_1, \ldots, T_n|G) \cdot P(G)}{P(T_1, \ldots, T_n)}$$

$$P(T_1, \ldots, T_n|G) = 1$$ (always tests positive with gene)

$$P(T_1, \ldots, T_n|G^c) = P(T_1, \ldots, T_n|D, G^c) \cdot P(D) + P(T_1, \ldots, T_n|D^c, G^c) \cdot P(D^c)$$

$$= a'^n \cdot p + b'^n \cdot q$$

$$P(T_1, \ldots, T_n) = 1 \cdot \frac{1}{2} + (a'^n p + b'^n q) \cdot \frac{1}{2} = \frac{1 + a'^n p + b'^n q}{2}$$

$$P(G|T_1, \ldots, T_n) = \frac{1 \cdot \frac{1}{2}}{\frac{1 + a'^n p + b'^n q}{2}} = \frac{1}{1 + a'^n p + b'^n q}$$

$$P(G^c|T_1, \ldots, T_n) = \frac{a'^n p + b'^n q}{1 + a'^n p + b'^n q}$$

Now find $P(D|G, T_1, \ldots, T_n)$:

Given $G$, testing positive gives no information about disease status (always positive). Since $D$ and $G$ are independent:

$$P(D|G, T_1, \ldots, T_n) = P(D|G) = P(D) = p$$

Find $P(D|G^c, T_1, \ldots, T_n)$:

Given $G^c$, this is the same as part (a) with $a'$ and $b'$:

$$P(D|G^c, T_1, \ldots, T_n) = \frac{a'^n p}{a'^n p + b'^n q}$$

Combine:

$$P(D|T_1, \ldots, T_n) = p \cdot \frac{1}{1 + a'^n p + b'^n q} + \frac{a'^n p}{a'^n p + b'^n q} \cdot \frac{a'^n p + b'^n q}{1 + a'^n p + b'^n q}$$

$$= \frac{p + a'^n p}{1 + a'^n p + b'^n q} = \frac{p(1 + a'^n)}{1 + a'^n p + b'^n q}$$

$$\boxed{P(D|T_1, \ldots, T_n) = \frac{p(1 + a'^n)}{1 + a'^n p + b'^n q}}$$

#### 62.
A certain hereditary disease can be passed from a mother to her children. Given that the mother has the disease, her children independently will have it with probability 1/2. Given that she doesn't have the disease, her children won't have it either. A certain mother, who has probability 1/3 of having the disease, has two children.

(a) Find the probability that neither child has the disease.

Sol:
$$P(C_1^c \cap C_2^c) = P(C_1^c \cap C_2^c|M) \cdot P(M) + P(C_1^c \cap C_2^c|M^c) \cdot P(M^c)$$

$$= \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{3} + 1 \cdot \frac{2}{3} = \frac{1}{12} + \frac{8}{12} = \frac{3}{4}$$
(b) Is whether the elder child has the disease independent of whether the younger child has the disease? Explain.

Sol:
No.

$$P(C_1) = \frac{1}{2} \cdot \frac{1}{3} = \frac{1}{6}, \quad P(C_2) = \frac{1}{6}$$

$$P(C_1 \cap C_2) = \frac{1}{4} \cdot \frac{1}{3} = \frac{1}{12}$$

$$P(C_1) \cdot P(C_2) = \frac{1}{36} \neq \frac{1}{12}$$
(c) The elder child is found not to have the disease. A week later, the younger child is also found not to have the disease. Given this information, find the probability that the mother has the disease.

Sol:
$$P(M|C_1^c \cap C_2^c) = \frac{P(C_1^c \cap C_2^c|M) \cdot P(M)}{P(C_1^c \cap C_2^c)} = \frac{\frac{1}{4} \cdot \frac{1}{3}}{\frac{3}{4}} = \frac{1}{9}$$
#### 63.
Three fair coins are tossed at the same time. Explain what is wrong with the following argument: "there is a 50% chance that the three coins all landed the same way, since obviously it is possible to find two coins that match, and then the other coin has a 50% chance of matching those two".

Sol:
The argument is flawed because it uses post-hoc reasoning that ignores the actual probability distribution. While you can often find two coins that match after observing the outcome, this doesn't mean the third coin had a $0.5$ chance of matching them from the outset. The correct analysis considers all $8$ equally likely outcomes ($HHH$, $HHT$, $HTH$, $THH$, $HTT$, $THT$, $TTH$, $TTT$), of which only $2$ have all three coins matching (HHH and $TTT$), giving probability $\frac{2}{8}$ not $\frac{1}{2}$. The faulty reasoning commits a conditioning error by selectively picking two coins after seeing the result and treating the third coin's probability conditionally, rather than computing the unconditional joint probability that all three coins land the same way from the beginning. The argument essentially tries to reduce a three-coin problem to a two-coin problem by hand-waving away the complexity, but this loses critical information about which configurations are actually possible.
#### 64.
An urn contains red, green, and blue balls. Let $r, g, b$ be the proportions of red, green, blue balls, respectively ($r + g + b = 1$).

(a) Balls are drawn randomly with replacement. Find the probability that the first time a green ball is drawn is before the first time a blue ball is drawn.

Sol:
Given a draw is green or blue: $$P(\text{green}|\text{green or blue}) = \frac{P(\text{green})}{P(\text{green or blue})} = \frac{g}{g+b}$$
(b) Balls are drawn randomly without replacement. Find the probability that the first time a green ball is drawn is before the first time a blue ball is drawn. Is the answer the same or different than the answer in (a)?

Sol:
$\frac{g}{g+b}$

Imagine all balls lined up in the order they'll be drawn. The position of red balls is irrelevant. We only care about the relative order of green and blue balls. Among the $g+b$ green and blue balls, by symmetry each permutation is equally likely. The probability that the first of these balls in the line is green (rather than blue) is simply the proportion of green among green and blue balls.

(c) Generalize the result from (a) to the following setting. Independent trials are performed, and the outcome of each trial is classified as being exactly one of type 1, type 2, . . . , or type $n$, with probabilities $p_1, p_2, \ldots, p_n$, respectively. Find the probability that the first trial to result in type $i$ comes before the first trial to result in type $j$, for $i \neq j$.

Sol:
$$P(\text{type } i|\text{type } i \text{ or type } j) = \frac{p_i}{p_i + p_j}$$
In any sequence of trials, the relative order of when type $i$ versus type $j$ first appears depends only on their relative probabilities, not on the other types or the total number of trials.
#### 65.
Marilyn vos Savant was asked the following question for her column in _Parade_:

> You're at a party with 199 other guests when robbers break in and announce that they are going to rob one of you. They put 199 blank pieces of paper in a hat, plus one marked "you lose." Each guest must draw, and the person who draws "you lose" will get robbed. The robbers offer you the option of drawing first, last, or at any time in between. When would you take your turn?

The draws are made without replacement, and for (a) are uniformly random.

(a) Determine whether it is optimal to draw first, last, or somewhere in between (or whether it does not matter), to maximize the probability of not being robbed. Give a clear, concise, and compelling explanation.

Sol:
Doesn't matter, by symmetry all permutations are equally likely, so chance of robbery = $\frac{1}{200}$

(b) More generally, suppose that there is one "you lose" piece of paper, with "weight" $v$, and there are $n$ blank pieces of paper, each with "weight" $w$. At each stage, draws are made with probability proportional to weight, i.e., the probability of drawing a particular piece of paper is its weight divided by the sum of the weights of all the remaining pieces of paper. Determine whether it is better to draw first or second (or whether it does not matter); here $v > 0$, $w > 0$, and $n \geq 1$ are known constants.

Sol:
Let $P_1$ = probability of drawing "you lose" on first draw, $P_2$ = probability of drawing "you lose" on second draw. $$P_1 = \frac{v}{v + nw}$$

You draw second and lose if: first person draws blank AND you draw "you lose"
$$P_2 = P(\text{first draws blank}) \cdot P(\text{you draw "you lose"}|\text{first drew blank})$$

$$= \frac{nw}{v + nw} \cdot \frac{v}{v + (n-1)w}$$

**Compare** $P_1$ **and** $P_2$:

$$P_1 - P_2 = \frac{v}{v + nw} - \frac{nw}{v + nw} \cdot \frac{v}{v + (n-1)w}$$

$$= \frac{v}{v + nw} \left[1 - \frac{nw}{v + (n-1)w}\right]$$

$$= \frac{v}{v + nw} \cdot \frac{v + (n-1)w - nw}{v + (n-1)w}$$

$$= \frac{v}{v + nw} \cdot \frac{v - w}{v + (n-1)w}$$
- If $v > w$: $P_1 - P_2 > 0$, so $P_1 > P_2$ → draw second is better
- If $v = w$: $P_1 - P_2 = 0$, so $P_1 = P_2$ → indifferent
- If $v < w$: $P_1 - P_2 < 0$, so $P_1 < P_2$ → draw first is better

**Answer:**

- If the "you lose" paper has higher weight than blanks ($v > w$), draw second (or later)
- If the "you lose" paper has lower weight than blanks ($v < w$), draw **first**
- If equal weights ($v = w$), it doesn't matter (reduces to part a)

**Intuition:** When the "you lose" paper is heavier, it's more likely to be drawn early, so you want someone else to draw first. When it's lighter, it's less likely to be drawn early, so drawing first is relatively safe.
#### 66.
A fair die is rolled repeatedly, until the running total is at least 100 (at which point the rolling stops). Find the most likely value of the final running total (i.e., the value of the running total at the first time when it is at least 100).

Sol:
By the memoryless property of random walks, once walks are far away from the origin, the probability of hitting any specific value approaches a constant.
So, to hit $100$, we can have $a_{94}, a_{95}, a_{96}, a_{97}, a_{98}, a_{99}$ , and $101$ only has $a_{95}, a_{96}, a_{97}, a_{98}, a_{99}$, $102$ only $a_{96}, a_{97}, a_{98}, a_{99}$, etc, so the most likely has to be $100$.

#### 67.
Homer has a box of donuts, which currently contains exactly $c$ chocolate, $g$ glazed, and $j$ jelly donuts. Homer eats donuts one after another, each time choosing uniformly at random from the remaining donuts.

(a) Find the probability that the last donut remaining in the box is a chocolate donut.

Sol:
By symmetry, all permutations are equally likely, so we have $$P(\text{last chocolate}) = \frac{c}{c + g +j}$$
(b) Find the probability of the following event: glazed is the first type of donut that Homer runs out of, and then jelly is the second type of donut that he runs out of.

Sol:
For this, we first need to know $P(\text{last chocolate})$ from part 1, and then for the ordering, we know that by symmetry, we have $\frac{j}{g+j}$ for last donut being jelly. So then, since these are independent with part 1, we just have $$P(\text{glazed out first, then jelly}) = \frac{c}{c+g+j}*\frac{j}{g+j}$$

#### 68.
Let $D$ be the event that a person develops a certain disease, and $C$ be the event that the person was exposed to a certain substance (e.g., $D$ may correspond to lung cancer and $C$ may correspond to smoking cigarettes). We are interested in whether exposure to the substance is related to developing the disease (and if so, how they are related). The odds ratio is a very widely used measure in epidemiology of the association between disease and exposure, defined as $$\text{OR} = \frac{\text{odds}(D|C)}{\text{odds}(D|C^c)},$$ where conditional odds are defined analogously to unconditional odds: $\text{odds}(A|B) = \frac{P(A|B)}{P(A^c|B)}$. The relative risk of the disease for someone exposed to the substance, another widely used measure, is $$\text{RR} = \frac{P(D|C)}{P(D|C^c)}.$$

The relative risk is especially easy to interpret, e.g., $\text{RR} = 2$ says that someone exposed to the substance is twice as likely to develop the disease as someone who isn't exposed (though this does not necessarily mean that the substance causes the increased chance of getting the disease, nor is there necessarily a causal interpretation for the odds ratio).

(a) Show that if the disease is rare, both for exposed people and for unexposed people, then the relative risk is approximately equal to the odds ratio.

Sol:
Odds ratio: $$\text{OR} = \frac{\text{odds}(D|C)}{\text{odds}(D|C^c)} = \frac{P(D|C)/P(D^c|C)}{P(D|C^c)/P(D^c|C^c)} = \frac{P(D|C) \cdot P(D^c|C^c)}{P(D^c|C) \cdot P(D|C^c)}$$

When disease is rare:

- $P(D|C) \ll 1 \Rightarrow P(D^c|C) = 1 - P(D|C) \approx 1$

- $P(D|C^c) \ll 1 \Rightarrow P(D^c|C^c) = 1 - P(D|C^c) \approx 1$


Therefore: $$\text{OR} \approx \frac{P(D|C) \cdot 1}{1 \cdot P(D|C^c)} = \frac{P(D|C)}{P(D|C^c)} = \text{RR}$$
(b) Let $p_{ij}$ for $i = 0, 1$ and $j = 0, 1$ be the probabilities in the following $2 \times 2$ table.

||$D$|$D^c$|
|---|---|---|
|$C$|$p_{11}$|$p_{10}$|
|$C^c$|$p_{01}$|$p_{00}$|

For example, $p_{10} = P(C, D^c)$. Show that the odds ratio can be expressed as a cross-product ratio, in the sense that $$\text{OR} = \frac{p_{11}p_{00}}{p_{10}p_{01}}.$$

Sol:
$$P(D|C) = \frac{P(D \cap C)}{P(C)} = \frac{p_{11}}{p_{11} + p_{10}}$$

$$P(D^c|C) = \frac{p_{10}}{p_{11} + p_{10}}$$

$$P(D|C^c) = \frac{p_{01}}{p_{01} + p_{00}}$$

$$P(D^c|C^c) = \frac{p_{00}}{p_{01} + p_{00}}$$

$$\text{OR} = \frac{P(D|C)/P(D^c|C)}{P(D|C^c)/P(D^c|C^c)} = \frac{P(D|C) \cdot P(D^c|C^c)}{P(D^c|C) \cdot P(D|C^c)}$$

$$= \frac{\frac{p_{11}}{p_{11}+p_{10}} \cdot \frac{p_{00}}{p_{01}+p_{00}}}{\frac{p_{10}}{p_{11}+p_{10}} \cdot \frac{p_{01}}{p_{01}+p_{00}}}$$

$$= \frac{p_{11} \cdot p_{00}}{p_{10} \cdot p_{01}}$$

(c) Show that the odds ratio has the neat symmetry property that the roles of $C$ and $D$ can be swapped without changing the value: $$\text{OR} = \frac{\text{odds}(C|D)}{\text{odds}(C|D^c)}.$$

Sol:
$$\frac{\text{odds}(C|D)}{\text{odds}(C|D^c)} = \frac{P(C|D)/P(C^c|D)}{P(C|D^c)/P(C^c|D^c)}$$

Express in terms of joint probabilities:

$$P(C|D) = \frac{p_{11}}{p_{11} + p_{01}}$$

$$P(C^c|D) = \frac{p_{01}}{p_{11} + p_{01}}$$

$$P(C|D^c) = \frac{p_{10}}{p_{10} + p_{00}}$$

$$P(C^c|D^c) = \frac{p_{00}}{p_{10} + p_{00}}$$

$$\frac{\text{odds}(C|D)}{\text{odds}(C|D^c)} = \frac{\frac{p_{11}}{p_{01}}}{\frac{p_{10}}{p_{00}}} = \frac{p_{11} \cdot p_{00}}{p_{01} \cdot p_{10}} = \frac{p_{11}p_{00}}{p_{10}p_{01}}$$

This property is one of the main reasons why the odds ratio is so widely used, since it turns out that it allows the odds ratio to be estimated in a wide variety of problems where relative risk would be hard to estimate well.

#### 69.
A researcher wants to estimate the percentage of people in some population who have used illegal drugs, by conducting a survey. Concerned that a lot of people would lie when asked a sensitive question like "Have you ever used illegal drugs?", the researcher uses a method known as randomized response. A hat is filled with slips of paper, each of which says either "I have used illegal drugs" or "I have not used illegal drugs". Let $p$ be the proportion of slips of paper that say "I have used illegal drugs" ($p$ is chosen by the researcher in advance).

Each participant chooses a random slip of paper from the hat and answers (truthfully) "yes" or "no" to whether the statement on that slip is true. The slip is then returned to the hat. The researcher does not know which type of slip the participant had. Let $y$ be the probability that a participant will say "yes", and $d$ be the probability that a participant has used illegal drugs.

(a) Find $y$, in terms of $d$ and $p$.

Sol:
- They draw $S_1$ (prob $p$) AND statement is true (prob $d$), OR
- They draw $S_1^c$ (prob $1-p$) AND statement "I have not used illegal drugs" is true (prob $1-d$)

$$y = P(\text{yes}) = p \cdot d + (1-p) \cdot (1-d)$$

$$= pd + 1 - p - d + pd = 2pd - p - d + 1$$
(b) What would be the worst possible choice of $p$ that the researcher could make in designing the survey? Explain.

Sol:
Solving for $d$: $$y = pd + 1 - p - d + pd$$ $$y - 1 + p = d(2p - 1)$$ $$d = \frac{y - 1 + p}{2p - 1}$$

The worst choice is $p = \frac{1}{2}$.

When $p = \frac{1}{2}$: $$d = \frac{y - \frac{1}{2}}{0} \quad \text{(undefined!)}$$With $p = \frac{1}{2}$, half the slips say "have used" and half say "have not used." This creates perfect symmetry: $$y = \frac{1}{2} \cdot d + \frac{1}{2} \cdot (1-d) = \frac{1}{2}$$

The probability of saying "yes" is always $\frac{1}{2}$ regardless of $d$! The response provides no information about drug use.
The denominator becomes zero, making it impossible to estimate $d$ from $y$.

(c) Now consider the following alternative system. Suppose that proportion $p$ of the slips of paper say "I have used illegal drugs", but that now the remaining $1-p$ say "I was born in winter" rather than "I have not used illegal drugs". Assume that 1/4 of people are born in winter, and that a person's season of birth is independent of whether they have used illegal drugs. Find $d$, in terms of $y$ and $p$.

Sol:
Let $W$ = "born in winter", with $P(W) = \frac{1}{4}$ independent of $U$.
A participant says "yes" if:
- Draw "drug" slip (prob $p$) AND have used drugs (prob $d$), OR

- Draw "winter" slip (prob $1-p$) AND born in winter (prob $\frac{1}{4}$)


$$y = p \cdot d + (1-p) \cdot \frac{1}{4}$$

Solve for $d$: $$y = pd + \frac{1-p}{4}$$ $$y - \frac{1-p}{4} = pd$$ $$d = \frac{y - \frac{1-p}{4}}{p} = \frac{4y - 1 + p}{4p}$$
This is still well-defined! The winter birth question provides a "baseline" that breaks the symmetry problem.
#### 70.

At the beginning of the play _Rosencrantz and Guildenstern Are Dead_ by Tom Stoppard [25], Guildenstern is spinning coins and Rosencrantz is betting on the outcome for each. The coins have been landing Heads over and over again, prompting the following remark:

> Guildenstern: A weaker man might be moved to re-examine his faith, if in nothing else at least in the law of probability.

The coin spins have resulted in Heads 92 times in a row.

(a) Fred and his friend are watching the play. Upon seeing the events described above, they have the following conversation:

> Fred: That outcome would be incredibly unlikely with fair coins. They must be using trick coins (maybe with double-headed coins), or the experiment must have been rigged somehow (maybe with magnets).
>
> Fred's friend: It's true that the string HH...H of length 92 is very unlikely; the chance is $1/2^{92} \approx 2 \times 10^{-28}$ with fair coins. But any other specific string of H's and T's with length 92 has exactly the same probability! The reason the outcome seems extremely unlikely is that the number of possible outcomes grows exponentially as the number of spins grows, so any outcome would seem extremely unlikely. You could just as well have made the same argument even without looking at the results of their experiment, which means you really don't have evidence against the coins being fair.

Discuss these comments, to help Fred and his friend resolve their debate

Sol:
The intuition being, any random combination is $2^{-92}$ , but the problem is we are LOOKING for this specific combination, which means it is substantially unlikely for this to exist with the fair coin. We can also show this via Bayes.