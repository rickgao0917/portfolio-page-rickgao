## Section 2.2 Definition and Intuition

#### Definition 2.2.1 (Conditional Probability)
If $A$ and $B$ are events with $P(B) > 0$, then the conditional probability of $A$ given $B$, denoted by $P(A|B)$, is defined as $$P(A|B) = \frac{P(A \cap B)}{P(B)}$$
Where $A$ is the event whose uncertainty you want to update, and $B$ is the evidence you observe. $P(A)$ is considered the $prior$ of $A$, and $P(A|B)$ is considered the $posterior$ of $A$.

#### Example 2.2.2 (Two Cards)
Assume a standard deck of shuffled cards. Let $A$ be the event that the first card is a heart, and $B$ that the second card is red. Find $P(A|B)$

By the naive definition of probability, we have $P(A\cap B) = \frac{13*25}{52*51}$ , and $P(B) = \frac{26*51}{52*51}$ . $$P(A|B) = \frac{\frac{25}{204}}{\frac{1}{2}} = \frac{25}{102}$$ While $$P(B|A) = \frac{\frac{25}{204}}{\frac{1}{4}} = \frac{25}{51}$$
Note that $P(A|B)$ is generally not equal to $P(B|A)$ , and is considered *prosecutor's fallacy*

The idea is that you want to renormalize the probability after conditioning on $B$.

#### Example 2.2.5 (Two Children)
Mr. Jones has two children, at the eldest of them is a girl. What is the probability that both children are girls?

$BB, BG, GB, GG$, let the first be the eldest. So in this case, we have $GB, GG$ as our total sample space, so $P(\text{both girls} | \text{eldest girl}) = \frac{1}{2}$ .

Mr. Smith has two children. At least one of them is a boy. What is the probability that both children are boys?

$BB,BG,GB,GG$. In this case, our sample space is $BB,BG,GB$, so it is $\frac{1}{3}$

#### Example 2.2.6 (Random child is girl)
A family has two children. You randomly run into one of the two, and learn that she is a girl. With assumptions as in the previous example, what is the conditional probability that both are girls?

You are sampling from $\{BB, GG, GB, BG\}$, so you can get 4 $G$ encounters and 4 $B$ encounters. So chacne of seeing a girl is $\frac{1}{2}$, and then there is a $\frac{1}{4}$ of both girls. So then we have $P(\text{both girls} | \text{one girl}) = \frac{\frac{1}{4}}{\frac{1}{2}}$

#### Example 2.2.7 (A girl born in winter)
A family has two children. Find the probability that both children are girls, given that at least one of the two is a girl who was born in winter. In addition to the assumptions from Example 2.2.5, assume that the four seasons are equally likely and that gender is independent of season. (This means that knowing the gender gives no information about the probabilities of the seasons, and vice versa; see Section 2.5 for much more about independence.)

We want to find $$P(\text{both girls} | \text{at least one winter girl}) = \frac{P(\text{both girls} | \text{at least one winter girl})}{P(\text{at least one winter girl})}$$
We have $P(\text{at least one winter girl})$, which, out of the 8 combinations of Gender, Season, is $\frac{1}{8}$, so we have $1-(\frac{7}{8})^2$, or 15 cases. Then of those, 7 cases have two girls. So we have: $$\frac{\frac{7}{15}}{\frac{15}{64}} = \frac{7}{15}$$
## Section 2.3 Bayes' rule and the law of total probability

#### Theorem 2.3.1 (Probability of the intersection of two events)
For any events $A,B$ with $p_a, p_b >0$ , $$P(A \cap B) = P(B)P(A|B) = P(A)P(B|A)$$
This allows us to find conditional prob abilities without going back to the definition, and can help us more easily find $P(A\cap B)$ , and can generalize this to the intersection of $n$ events by applying the theorem repeatedly.

#### Theorem 2.3.2 (Probability of the intersection of $n$ events)
For any events $A_1,\cdots, A_n$ with $P(A_1,\cdots,A_n) > 0$, we have: $$P(A1,\cdots,A_n) = P(A_1)P(A_2|A_1)P(A_3|A_1,A_2)\cdots P(A_n|A_1,\cdots,A_{n-1})$$
#### Theorem 2.3.3 (Bayes' rule)
$$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$
Often easier to find one form of conditioning over the other.
#### Definition 2.3.4 (Odds)
The odds of an event $A$ are $$P(A)/P(A^c)$$
If $P(A) = \frac{2}{3}$, you could say that the odds are 2 to 1.
#### Theorem 2.3.5 (Odds form of Bayes' Rule)
For any events $A$ and $B$ with positive probabilities, the odds of $A$ after conditioning on $B$ are $$\frac{P(A|B)}{P(A^c | B)} = \frac{P(B|A)}{P(B|A^c)}\frac{P(A)}{P(A^c)}$$
The posterior odds are equal to the prior odds times the likelihood ratio.
#### Theorem 2.3.6 (Law of total probability)
Let $A_1,\cdots,A_n$ be a partition of the sample space $S$ ($A_i$) are disjoint events and the union is $S$ , with $P(A_i) > 0$ for all $i$ , then $$P(B) = \sum_{i= 1}^nP(B|A_i)P(A_i)$$ Since $A_i$ form a partition of $S$, we can decompose $B$ as $$B = (B \cap A_1) \cup (B \cap A_2) \cup \cdots \cup (B \cap A_n)$$
Since $A_i$ are disjoint, we can sum their probabilities $$P(B) = P(B \cap A_1) + P(B \cap A_2)+\cdots + P(B \cap A_n)$$
And applying Theorem 2.3.1 to each of the $P(B \cap A_n)$  $$P(B) = P(B|A_1)P(A_1) + \cdots + P(B|A_n)P(A_n)$$
To get the unconditional probability of $B$ , you can divide the sample space into disjoint slices of $A_i$, and find the conditional probability of $B$ in each of those slices, and take the weighted sum of each of those slices.
#### Example 2.3.7 (Random coin)
You have one fair coin, and one biased coin which lands Heads with probability $\frac{3}{4}$. You pick one of the coins at random and flip it three times. It lands Heads all three times. Given this information, what is the probability that the coin you picked is the fair one?

Let $P(B)$ be the probability that any coin lands $H$ 3 times, $P(A)$ be the chosen coin is fair.
$$P(B) = \frac{1}{2}*\frac{1}{2}^3+\frac{1}{2}*\frac{3}{4}^3$$
$$P(A) = \frac{1}{2}$$
We want to find $P(A|B)$ , and by Bayes' $$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$
So
$$ P(A|B) = \frac{\frac{1}{2}*\frac{1}{2}^3}{\frac{1}{2}*\frac{1}{2}^3+\frac{1}{2}*\frac{3}{4}^3} \approx 0.23$$
#### Note 2.3.8 (Prior vs. Posterior)
You could not say $P(A) = 1$ in the above since we know $A$ happened, because it is true that $P(A|A) = 1$, $P(A)$ is the prior of $A$ and $P(B)$ is the prior of $B$ - both probabilities before we observe any data.

#### Example 2.3.9 (Testing for a rare disease)
A patient named Fred is tested for a disease called conditionitis, a medical condition that afflicts 1% of the population. The test result is positive, i.e., the test claims that Fred has the disease. Let $D$ be the event that Fred has the disease and $T$ be the event that he tests positive.

Suppose that the test is "95% accurate"; there are different measures of the accuracy of a test, but in this problem it is assumed to mean that $P(T|D) = 0.95$ and $P(T^c|D^c) = 0.95$. The quantity $P(T|D)$ is known as the _sensitivity_ or _true positive rate_ of the test, and $P(T^c|D^c)$ is known as the _specificity_ or _true negative rate_.

Find the conditional probability that Fred has conditionitis, given the evidence provided by the test result.

$$P(D|T) = \frac{P(T|D)P(D)}{P(T)}$$

$$P(D|T) = \frac{0.95*0.01}{0.01*0.95+0.05*0.99} \approx 0.16$$
The rationale for such a low true positive rate is because conditionitis is a rare disease, and the conditional probability $P(D|T)$ reflects this.
#### Example 2.3.10 (Six-fingered man)
A crime has been committed in a certain country. The perpetrator is one (and only one) of the $n$ men who live in the country. Initially, these $n$ men are all deemed equally likely to be the perpetrator. An eyewitness then reports that the crime was committed by a man with six fingers on his right hand.

Let $p_0$ be the probability that an innocent man has six fingers on his right hand, and $p_1$ be the probability that the perpetrator has six fingers on his right hand, with $p_0 < p_1$. (We may have $p_1 < 1$, since eyewitnesses are not 100% reliable.) Let $a = p_0/p_1$ and $b = (1 - p_1)/(1 - p_0)$.

Rugen lives in the country. He is found to have six fingers on his right hand.

(a) Given this information, what is the probability that Rugen is the perpetrator?

(b) Now suppose that all $n$ men who live in the country have their hands checked, and Rugen is the _only_ one with six fingers on his right hand. Given this information, what is the probability that Rugen is the perpetrator?

(a)

$$P(R|M) = \frac{P(M|R)P(R)}{P(M|R)P(R) + P(M|R^c)P(R^c)} = \frac{p_1 \cdot \frac{1}{n}}{p_1 \cdot \frac{1}{n} + p_0 \left(1 - \frac{1}{n}\right)} = \frac{1}{1 + a(n-1)}.$$

(b)

$$P(R|M, N) = \frac{P(M, N|R)P(R)}{P(M, N|R)P(R) + P(M, N|R^c)P(R^c)}$$

$$= \frac{p_1(1 - p_0)^{n-1} \cdot \frac{1}{n}}{p_1(1 - p_0)^{n-1} \cdot \frac{1}{n} + p_0(1 - p_1)(1 - p_0)^{n-2} \left(1 - \frac{1}{n}\right)}$$

$$= \frac{1}{1 + ab(n-1)}$$
## Section 2.4 Conditional probabilities are probabilities
When you condition on $E$, you shift into the universe where you know $E$ occurred. Conditional probabilities still satisfy all properties of probability.
- Conditional probabilities are between $0$ and $1$
- $P(S|E) = 1, P(\emptyset | E) = 0$
- If $A_1, A_2, \cdots$ are disjoint, then $P(\cup_{j=1}^{\infty}A_j|E) = \sum_{j=1}^{\infty}P(A_j|E)$
- $P(A^c|E) = 1 - P(A|E)$
- PIE: $P(A \cup B | E) = P(A|E) + P(B|E) - P(A\cup B | E)$

#### Note 2.4.1
When you write $P(A|E)$, it does not mean $A|E$ is an event. Instead, $P(\cdot | E)$ is a probability function that assigns probabilities in accordance to the knowledge the $E$ has occurred, and $P(\cdot)$ is another probability function that assigns probabilities without regard for $E$. You take an event $A$ and plug it into $P(\cdot)$ and $P(\cdot | E)$, and you get separate numbers back.

$$\tilde{P}(\emptyset) = P(\emptyset|E) = \frac{P(\emptyset \cap E)}{P(E)} = 0, \quad \tilde{P}(S) = P(S|E) = \frac{P(S \cap E)}{P(E)} = 1.$$

Second, if $A_1, A_2, \ldots$ are disjoint events, then

$$\tilde{P}(A_1 \cup A_2 \cup \cdots) = \frac{P((A_1 \cap E) \cup (A_2 \cap E) \cup \cdots)}{P(E)} = \frac{\sum_{j=1}^{\infty} P(A_j \cap E)}{P(E)} = \sum_{j=1}^{\infty} \tilde{P}(A_j).$$

All probabilities are technically conditional, just depends on the assumptions you make. Say you make background assumptions $K$, your full probability function should be $P(A|K)$ but if $K$ is assumed then you have just $P(A)$ .
#### Theorem 2.4.2 (Bayes' Rule with extra conditioning)
Provided that $P(A \cap E) > 0$ and $P(B \cap E) > 0$ , you have $$P(A|B,E) = \frac{P(B|A, E)P(A|E)}{P(B|E)}$$
#### Theorem 2.4.3 (LOTP with extra conditioning)
Let $A_1, \cdots, A_n$ be a part of a partition of $S$. Provided that $P(A_i \cap E) > 0 \forall i$, we have $$P(B|E) = \sum^n_{i=1}P(B|A_i, E)P(A_i|E)$$
#### Example 2.4.4 (Random coin, continued)
Continuing with the scenario from Example 2.3.7, suppose that we have now seen our chosen coin land Heads three times. If we toss the coin a fourth time, what is the probability that it will land Heads once more?

From earlier, we know that there's a $0.23$ chance of the coin being fair. Let $A$ be the event that the chosen coin lands Heads 3 times in a row, and H be the event for the fourth heads. We have $P(H|A)$ , and by LOTP with extra conditioning, gives us $P(H|A)$ as a weighted average of $P(H|F,A)$ and $P(H|,F^c, A)$, $$P(H|A) = P(H|F,A)P(F|A) + P(H|F^c,A)P(F^c|A)$$
$$\approx \frac{1}{2}*0.23 + \frac{3}{4}*(1-0.23) \approx 0.69$$
#### Example 2.4.5 (Unanimous agreement)
The article "Why too much evidence can be a bad thing" by Lisa Zyga says:

> _Under ancient Jewish law, if a suspect on trial was unanimously found guilty by all judges, then the suspect was acquitted. This reasoning sounds counterintuitive, but the legislators of the time had noticed that unanimous agreement often indicates the presence of systemic error in the judicial process._

There are $n$ judges deciding a case. The suspect has prior probability $p$ of being guilty. Each judge votes whether to convict or acquit the suspect. With probability $s$, a systemic error occurs (e.g., the defense is incompetent). If a systemic error occurs, then the judges unanimously vote to convict (i.e., all $n$ judges vote to convict).

Whether a systemic error occurs is independent of whether the suspect is guilty. Given that a systemic error doesn't occur and that the suspect is guilty, each judge has probability $c$ of voting to convict, independently. Given that a systemic error doesn't occur and that the suspect is not guilty, each judge has probability $w$ of voting to convict, independently. Suppose that

$$0 < p < 1, \quad 0 < s < 1, \quad \text{and} \quad 0 < w < \frac{1}{2} < c < 1.$$

(a) For this part only, suppose that exactly $k$ out of $n$ judges vote to convict, where $k < n$. Given this information, find the probability that the suspect is guilty.

(b) Now suppose that all $n$ judges vote to convict. Given this information, find the probability that the suspect is guilty.

(c) Is the answer to (b), viewed as a function of $n$, an increasing function? Give a short, intuitive explanation in words.

(a) Since $k < n$, a systemic error didn't occur. We will implicitly condition on this in this part. Let $G$ be the event that the suspect is guilty and $X$ be the number of judges who vote to convict. Using Bayes' rule, LOTP, and the Binomial PMF,

$$P(G|X = k) = \frac{P(X = k|G)P(G)}{P(X = k)} = \frac{pc^k(1-c)^{n-k}}{pc^k(1-c)^{n-k} + (1-p)w^k(1-w)^{n-k}}.$$

(b) Let $U$ be the event $X = n$ and $B$ be the event that a systemic error occurs. Then

$$P(G|U) = \frac{P(U|G)P(G)}{P(U)} = \frac{pP(U|G)}{pP(U|G) + (1-p)P(U|G^c)}.$$

By LOTP with extra conditioning,

$$P(U|G) = P(U|G, B)P(B|G) + P(U|G, B^c)P(B^c|G) = s + (1-s)c^n,$$

$$P(U|G^c) = P(U|G^c, B)P(B|G^c) + P(U|G^c, B^c)P(B^c|G^c) = s + (1-s)w^n.$$

Therefore,

$$P(G|U) = \frac{p(s + (1-s)c^n)}{p(s + (1-s)c^n) + (1-p)(s + (1-s)w^n)}.$$
(c)
No, since $n$ yields a high chance of error, the answer to b reverts to the prior probability

Some ways to do conditioning on more than one piece of material:
1. $P(A|B,C) = \frac{P(A,B,C)}{P(B,C)}$
   Natural if you think about $B$, $C$ in tandem. You can use LOTP in both the numerator and denominator, and can write the numerator as $P(B,C|A)P(A)$, giving Bayes' and use LOTP for denominator.
2. Bayes' rule with extra conditioning on $C$ $$P(A|B,C) = \frac{P(B|A,C)P(A|C)}{P(B|C)}$$to think everything is conditioned on $C$.
3. Bayes' rule with extra conditioning on $B$ $$P(A|B,C) = \frac{P(B|A,B)P(A|B)}{P(C|B)}$$
   to think when everything is conditioned on $B$
## Section 2.5 Independence of events
When events provide no information about each other, it is called independence.
#### Definition 2.5.1 (Independence of two events)
Events $A, B$ are *independent* if $$P(A\cap B) = P(A)P(B)$$ If $P(A)> 0$ and $P(B)> 0$ , this is equal to $$P(A|B) = P(A)$$ and also equal to $$P(B|A) = P(B)$$
Events are independent if you can multiply their individual probabilities and get their intersection. If $A$ independent of $B$, then $B$ independent of $A$.
#### Note 2.5.2
Independence is separate from disjointness. If $A, B$ are disjoint, then $P(A\cap B) = 0$, so disjoint events can only be independent if $P(A) = 0$ or $P(B) = 0$, since knowing $A$ occurs tells us that $B$ definitely did not occur, so $A$ conveys information about $B$

It also makes sense that if $A$ provides no information on $B$, it would also provide no information on $B^c$ .
#### Proposition 2.5.3
If $A, B$ are independent, then $A, B^c$ are independent, $A^c,B$ and $A^c,B^c$ are also independent

Proof:
Let $A,B$ be independent, we show that $A,B^c$ are independent. If $P(A) = 0$, then $A$ is independent of every event, including $B^c$, so assume $P(A) \neq 0$, then $$P(B^c|A) = 1 - P(B|A) = 1 - P(B) = P(B^c)$$
so $A, B^c$ are independent. If you swap $A, B$, you now have $A^c, B$ are independent. Then if you let $A = A^c$, then you have $A^c, B^c$ as independent.
#### Definition 2.5.4 (Independence of three events)
Events, $A,B,C$ are independent if all of the following equations hold:
- $P(A \cap B) = P(A)P(B)$
- $P(A \cap C) = P(A)P(C)$
- $P(B \cap C) = P(B)P(C)$
- $P(A\cap B \cap C) = P(A)P(B)P(C)$
  If only the first three conditions hold, it is only pairwise independent. Pairwise independent does not imply independence, as it is possible just learning about $A$ or $B$ does not benefit predicting $C$, but learning both $A,B$ is highly predictive. Equivalently, indepedence does not imply pairwise independence.
#### Example 2.5.5 (Pairwise independence doesn't imply independence)
Consider two coin tosses, let $A$ be heads for the first toss, and $B$ be heads for the second toss, and $C$ be the event that both tosses are the same result. Then, $A,B,C$ are pairwise independent, and not independent as $$P(A\cap B \cap C) = \frac{1}{4}$$, while $P(A)P(B)P(C) = \frac{1}{8}$
#### Definition 2.5.6 (Independence of many events)
For $n$ events $A_1, \cdots, A_n$ to be independent, we require any pair to satisfy $P(A_i \cap A_j) = P(A_i)P(A_j)$ for $i \neq j$, and any triplet to satisfy $P(A_i \cap A_j \cap A_k) = P(A_i)P(A_j)P(A_k)$ for $i,j,k$ distinct, and similarly for all $k$ number of groupings. For infinitely many events, they are independent if every finite subset of the events is independent.
#### Definition 2.5.7 (Conditional independence)
Events $A, B$ are conditionally independent given $E$ if $$P(A\cap B |E) = P(A|E)P(B|E)$$
#### Note 2.5.8
Two events can be conditionally independent given $E$, but not necessarily so given $E^c$ . Two events can be independent, but not conditionally given $E$, and two events can be conditionally independent given $E$, but not independent.

$P(A,B) = P(A)P(B)$ does not imply $P(A, B|E) = P(A|E)P(B|E)$ , you can't just insert $E$ like we did in $LOTP$. $LOTP$ always holds, where $P(A,B)$ may or may not equal $P(A)P(B)$ depending on what $A,B$ are.
#### Example 2.5.9 (Conditional independence given $E$ vs. given $E^c$)
Suppose there are two types of classes: good classes and bad classes. In good classes, if you work hard, you are very likely to get an A. In bad classes, the professor randomly assigns grades to students regardless of their effort. Let $G$ be the event that a class is good, $W$ be the event that you work hard, and $A$ be the event that you receive an A. Then $W$ and $A$ are conditionally independent given $G^c$, but they are not conditionally independent given $G$.
#### Example 2.5.10 (Conditional independence doesn't imply independence)
Returning once more to the scenario from Example 2.3.7, suppose we have chosen either a fair coin or a biased coin with probability $3/4$ of Heads, but we do not know which one we have chosen. We flip the coin a number of times. Conditional on choosing the fair coin, the coin tosses are independent, with each toss having probability $1/2$ of Heads. Similarly, conditional on choosing the biased coin, the tosses are independent, each with probability $3/4$ of Heads.

However, the coin tosses are not unconditionally independent, because if we don't know which coin we've chosen, then observing the sequence of tosses gives us information about whether we have the fair coin or the biased coin in our hand. This in turn helps us to predict the outcomes of future tosses from the same coin.

To state this formally, let $F$ be the event that we've chosen the fair coin, and let $A_1$ and $A_2$ be the events that the first and second coin tosses land Heads. Conditional on $F$, $A_1$ and $A_2$ are independent, but $A_1$ and $A_2$ are not unconditionally independent because $A_1$ provides information about $A_2$.
#### Example 2.5.11 (Independence doesn't imply conditional independence)
Friends Alice and Bob are the only two people who ever call me on the phone. Each day, they decide independently whether to call me that day. Let $A$ be the event that Alice calls me next Friday and $B$ be the event that Bob calls me next Friday. Assume $A$ and $B$ are unconditionally independent with $P(A) > 0$ and $P(B) > 0$.

However, given that I receive exactly one call next Friday, $A$ and $B$ are no longer independent: the call is from Alice if and only if it is not from Bob. In other words, letting $C$ be the event that I receive exactly one call next Friday, $P(B|C) > 0$ while $P(B|A,C) = 0$, so $A$ and $B$ are not conditionally independent given $C$.
#### Example 2.5.12 (Why is the baby crying?)
A certain baby cries if and only if she is hungry, tired, or both. Let $C$ be the event that the baby is crying, $H$ be the event that she is hungry, and $T$ be the event that she is tired. Let $P(C) = c$, $P(H) = h$, and $P(T) = t$, where none of $c$, $h$, $t$ are equal to 0 or 1. Let $H$ and $T$ be independent.

(a) Find $c$, in terms of $h$ and $t$.

(b) Find $P(H|C)$, $P(T|C)$, and $P(H,T|C)$.

(c) Are $H$ and $T$ conditionally independent given $C$? Explain in two ways: algebraically using the quantities from (b), and with an intuitive explanation in words.

(a) $$P(C) = P(H \cup T) = P(H)+P(T) - P(H \cap T) = h + t - ht$$(b)
$$P(H|C) = \frac{P(C|H)P(H)}{P(C)} = \frac{h}{c}$$
$$P(T|C) = \frac{P(C|T)P(T)}{P(C)} = \frac{t}{c}$$
$$P(H,T|C) = \frac{P(C|H,T)P(H,T)}{P(C)} = \frac{ht}{c}$$
(c)
No, $H,T$ are not conditionally independent given $C$, since $$P(H,T|C) = \frac{ht}{c} \leq P(H|C)P(T|C) = \frac{ht}{c^2}$$
## Section 2.6 Coherency of Bayes' rule
If we receive multiple pieces of information and with to update probabilities, it does not matter which order it is updated.
#### Example 2.6.1 (Testing for a rare disease, continued)
Fred, who tested positive for conditionitis in Example 2.3.9, decides to get tested a second time. The new test is independent of the original test (given his disease status) and has the same sensitivity and specificity. Unfortunately for Fred, he tests positive a second time.

Find the probability that Fred has the disease, given the evidence, in two ways: in one step, conditioning on both test results simultaneously, and in two steps, first updating the probabilities based on the first test result, and then updating again based on the second test result.

Let $D$ be the event that he has the disease, $T_1$ that the first test result is positive, and $T_2$ that the second test result is positive. In Example 2.3.9, we used Bayes' rule and the law of total probability to find $P(D|T_1)$. Another quick solution uses the odds form of Bayes' rule:

$$\frac{P(D|T_1)}{P(D^c|T_1)} = \frac{P(D)}{P(D^c)} \frac{P(T_1|D)}{P(T_1|D^c)} = \frac{1}{99} \cdot \frac{0.95}{0.05} \approx 0.19.$$

Since $P(D|T_1)/(1 - P(D|T_1)) = 0.19$, we have $P(D|T_1) = 0.19/(1 + 0.19) \approx 0.16$, in agreement with our answer from before. The odds form of Bayes' rule is faster in this case because we don't need to compute the unconditional probability $P(T_1)$ in the denominator of the ordinary Bayes' rule. Now, again using the odds form of Bayes' rule, let's find out what happens if Fred tests positive a second time.

**One-step method:** Updating based on both test results at once, we have

$$\frac{P(D|T_1 \cap T_2)}{P(D^c|T_1 \cap T_2)} = \frac{P(D)}{P(D^c)} \frac{P(T_1 \cap T_2|D)}{P(T_1 \cap T_2|D^c)}$$

$$= \frac{1}{99} \cdot \frac{0.95^2}{0.05^2} = \frac{361}{99} \approx 3.646,$$

which corresponds to a probability of 0.78.


**Two-step method:** After the first test, the posterior odds of Fred having the disease are

$$\frac{P(D|T_1)}{P(D^c|T_1)} = \frac{1}{99} \cdot \frac{0.95}{0.05} \approx 0.19,$$

from the above. These posterior odds become the new prior odds, and then updating based on the second test gives

$$\frac{P(D|T_1 \cap T_2)}{P(D^c|T_1 \cap T_2)} = \frac{P(D|T_1)}{P(D^c|T_1)} \frac{P(T_2|D, T_1)}{P(T_2|D^c, T_1)}$$

$$= \left(\frac{1}{99} \cdot \frac{0.95}{0.05}\right) \frac{0.95}{0.05} = \frac{361}{99} \approx 3.646,$$
## Section 2.7 Conditioning as a problem-solving tool
Allows you to condition on $E$ and $E^c$ and then through LOTP, sum them together

### Subsection 2.7.1 Strategy: Condition on what you wish you knew
#### Example 2.7.1 (Monty Hall)
On the game show Let’s Make a Deal, hosted by Monty Hall, a contestant chooses one of three closed doors, two of which have a goat behind them and one of which has a car. Monty, who knows where the car is, then opens one of the two remaining doors. The door he opens always has a goat behind it (he never reveals the car!). If he has a choice, then he picks a door at random with equal probabilities. Monty then oﬀers the contestant the option of switching to the other unopened door. If the contestant’s goal is to get the car, should she switch doors?

Let's label the doors 1 through 3. Without loss of generality, we can assume the contestant picked door 1 (if she didn't, we could simply relabel the doors, or rewrite this solution with the door numbers permuted). Monty opens a door, revealing a goat. As the contestant decides whether or not to switch to the remaining unopened door, what does she really wish she knew? Naturally, her decision would be a lot easier if she knew where the car was! This suggests that we should condition on the location of the car. Let $C_i$ be the event that the car is behind door $i$, for $i = 1, 2, 3$. By the law of total probability,

$$P(\text{get car}) = P(\text{get car}|C_1) \cdot \frac{1}{3} + P(\text{get car}|C_2) \cdot \frac{1}{3} + P(\text{get car}|C_3) \cdot \frac{1}{3}.$$

Suppose the contestant employs the switching strategy. If the car is behind door 1, then switching will fail, so $P(\text{get car}|C_1) = 0$. If the car is behind door 2 or 3, then because Monty always reveals a goat, the remaining unopened door must contain the car, so switching will succeed. Thus,

$$P(\text{get car}) = 0 \cdot \frac{1}{3} + 1 \cdot \frac{1}{3} + 1 \cdot \frac{1}{3} = \frac{2}{3},$$

so the switching strategy succeeds 2/3 of the time. The contestant should switch to the other door.
### Subsection 2.7.2 Strategy: condition on the first step
In recursive problems, can condition on the first step of the experiment
#### Example 2.7.2 (Branching process)
A single amoeba, Bobo, lives in a pond. After one minute Bobo will either die, split into two amoebas, or stay the same, with equal probability, and in subsequent minutes all living amoebas will behave the same way, independently. What is the probability that the amoeba population will eventually die out?

$D$ be the event that the population will die out. Let $B_i$ be the event that Bobo turns into $i$ amoebas after the first minute, for $i = 0,1,2$. $P(D|B_0) = 1$ and $P(D|B_1) = D$, since if Bobo stays the same we have the original case, and then if Bobo splits, we have two independent cases of the first problem, so $P(D|B_2) = P(D)^2$ , giving us: $$P(D) = P(D|B_0)*\frac{1}{3} + P(D|B_1)*\frac{1}{3} + P(D|B_2)*frac{1}{3}$$
$$ P(D) = 1*\frac{1}{3} + P(D)*\frac{1}{3} + P(D)^2*\frac{1}{3}$$
$$P(D) = 1$$ so amoeba will die out with probability 1.
#### Example 2.7.3 (Gambler's ruin)
Two gamblers, $A$ and $B$, make a sequence of \$1 bets. In each bet, gambler $A$ has probability $p$ of winning, and gambler$B$ has probability $q = 1−p$ of winning. Gambler $A$ starts with $i$ dollars and gambler $B$ starts with $N−i$ dollars; the total wealth between the two remains constant since every time $A$ loses a dollar, the dollar goes to $B$, and vice versa.

Same recursive structure, for player $A$ after the first game, $A$ is either at $i+1$ or $i-1$ wealth. Let $p_i$ denote $A$ win, and $W$ denote $A$ wins the game. We have
$$p_i = P(W|A \text{ start at }i \text{ wins R1})*p + P(W|A  \text{ start at }i \text{ loses R1})q$$

$$= P(W|A \text{ start at }i+1)*p + P(W|A \text{ start at }i-1)*q$$

$$= p_{i+1}*p + p_{i-1}*q = p*p_{i+1}-p_i+q*p_{i-1} = 0$$
Which is a second-order linear difference equation. For a difference equation in the form $$a*y_{n+1}+b*y_{n-1} = 0$$
the characteristic equation is $$a*r^2+b*r+c = 0$$
So we have: $$p*r^2-r+q = 0 $$
Which by the quadratic formula, we have roots of $1, \frac{q}{p}$ for when $p \neq \frac{1}{2}$ .
The general solution to the second-order linear homogeneous difference equation, given two distinct roots $r_1, r_2$ is $$p_i = A*r_1^i + B*r_i^2$$
Plugging in our roots, the general solution to the problem is $$p_i = A*1^i + B*(\frac{q}{p})^i = A+B(\frac{q}{p})^i$$
the boundary conditions give $a = 0$ and $b = \frac{1}{N}$ , we have
$$p_i = \begin{cases} \frac{1-\left(\frac{q}{p}\right)^i}{1-\left(\frac{q}{p}\right)^N} & \text{if } p \neq 1/2, \ \frac{i}{N} & \text{if } p = 1/2. \end{cases}$$
for the probability of $A$ winning with a starting wealth of $i$.
For the $p=\frac{1}{2}$ case, the solution is simply $\frac{i}{N}$ , since

$$\lim_{p \to \frac{1}{2}} \frac{1 - \left(\frac{q}{p}\right)^i}{1 - \left(\frac{q}{p}\right)^N} = \frac{i}{N}$$

$$\lim_{x \to 1} \frac{1 - x^i}{1 - x^N} = \lim_{x \to 1} \frac{ix^{i-1}}{Nx^{N-1}} = \frac{i}{N}.$$
## Section 2.8 Pitfalls and paradoxes
#### Note 2.8.1 (Prosecutor's Fallacy)
In 1998, Sally Clark was tried for murder after two of her sons died shortly after birth. During the trial, an expert witness for the prosecution testified that the probability of a newborn dying of sudden infant death syndrome (SIDS) was $1/8500$, so the probability of two deaths due to SIDS in one family was $(1/8500)^2$, or about one in 73 million. Therefore, he continued, the probability of Clark's innocence was one in 73 million.

There are at least two major problems with this line of reasoning. First, the expert witness found the probability of the intersection of "first son dies of SIDS" and "second son dies of SIDS" by multiplying the individual event probabilities; as we know, this is only valid if deaths due to SIDS are \textit{independent} within a family. This independence would not hold if genetic or other family-specific risk factors cause all newborns within certain families to be at increased risk of SIDS.

Second, the so-called expert has confused two different conditional probabilities: $P(\text{innocence}|\text{evidence})$ is different from $P(\text{evidence}|\text{innocence})$. The witness claims that the probability of observing two newborn deaths if the defendant were innocent is extremely low; that is, $P(\text{evidence}|\text{innocence})$ is small. What we are interested in, however, is $P(\text{innocence}|\text{evidence})$, the probability that the defendant is innocent given all the evidence. By Bayes' rule,
$$P(\text{innocence}|\text{evidence}) = \frac{P(\text{evidence}|\text{innocence})P(\text{innocence})}{P(\text{evidence})},$$

so to calculate the conditional probability of innocence given the evidence, we must take into account $P(\text{innocence})$, the prior probability of innocence. This probability is extremely high: although double deaths due to SIDS are rare, so are double infanticides! Expanding the denominator as
$$P(\text{evidence}|\text{innocence})P(\text{innocence}) + P(\text{evidence}|\text{guilt})P(\text{guilt}),$$

note that if $P(\text{guilt})$ is small enough so that the second term is negligible compared to the first term, then the denominator of $P(\text{innocence}|\text{evidence})$ is approximately equal to the numerator, making $P(\text{innocence}|\text{evidence})$ close to 1.

The posterior probability of innocence given the evidence depends strongly on both $P(\text{evidence}|\text{innocence})$, which is very low, and $P(\text{innocence})$, which is very high. The expert's probability of $(1/8500)^2$, questionable in and of itself, is only part of the equation.
#### Note 2.8.2 (Defense attorney's fallacy)
The defense attorney's fallacy involves ignoring crucial conditioning information. A defense attorney argues that evidence of abuse is irrelevant since only $1/10{,}000$ abusive husbands murder their wives, so $P(G|A) = 1/10{,}000$. However, this fails to condition on the fact that the wife _was murdered_ ($M$). The relevant probability is $P(G|A, M)$, not $P(G|A)$.

Using Bayes' rule with the given statistics (1 in 10 husbands abuse, 1 in 5 murdered wives were killed by husbands, 50% of murderous husbands previously abused):

$$P(G|A, M) = \frac{P(A|G, M)P(G|M)}{P(A|G, M)P(G|M) + P(A|G^c, M)P(G^c|M)} = \frac{0.5 \cdot 0.2}{0.5 \cdot 0.2 + 0.1 \cdot 0.8} = \frac{5}{9}$$

The posterior probability $P(G|A, M) \approx 0.56$ is over 5,000 times larger than $P(G|A)$, making the abuse evidence highly relevant. The defense attorney's $P(G|A)$ is irrelevant because it doesn't account for the murder having occurred.
#### Example 2.8.3 (Simpson's Paradox)
- Event $A$: successful surgery
- Event $B$: Dr. Nick is the surgeon
- Event $C$: surgery is heart surgery
  Dr. Hibbert: Heart (70/90 success), Band-Aid (10/10 success) → 80/100 overall
  Dr. Nick: Heart (2/10 success), Band-Aid (81/90 success) → 83/100 overall
  $$P(A|B, C) < P(A|B^c, C) \text{ and } P(A|B, C^c) < P(A|B^c, C^c)$$ but $$P(A|B) > P(A|B^c)$$
  Dr. Nick has lower success in _both_ types of surgery individually, but higher overall success.
  $$P(A|B) = P(A|C, B)P(C|B) + P(A|C^c, B)P(C^c|B)$$ $$P(A|B^c) = P(A|C, B^c)P(C|B^c) + P(A|C^c, B^c)P(C^c|B^c)$$
  The weights $P(C|B)$ and $P(C|B^c)$ are _different_. Since the weights differ, the inequality can flip when we don't condition on $C$:
  $$P(A|B) > P(A|B^c)$$
- $P(A|B) = 0.83 = (2/10) \cdot 0.1 + (81/90) \cdot 0.9$
- $P(A|B^c) = 0.80 = (70/90) \cdot 0.9 + (10/10) \cdot 0.1$

Dr. Nick performs easier surgeries (90% Band-Aid vs 10% heart), while Dr. Hibbert performs harder ones (90% heart vs 10% Band-Aid), causing the paradox.
