
export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  section: string;
};

export const quizData: Question[] = [
  {
    id: 1,
    question: "Which is the best definition of “wealth”?",
    options: [
      "Cash sitting in a bank account",
      "Total assets you own that generate value",
      "Your annual salary",
      "Total amount you spend each year"
    ],
    correctAnswer: "Total assets you own that generate value",
    explanation: "Wealth is the total value of assets you own that can generate more value or be converted to cash, not just the money you earn or have in a bank.",
    section: "Psychology & Money Management"
  },
  {
    id: 2,
    question: "Selling investments too early because you’re scared is an example of which bias?",
    options: [
      "Herd mentality",
      "Loss aversion",
      "Overconfidence",
      "Anchoring"
    ],
    correctAnswer: "Loss aversion",
    explanation: "Loss aversion describes the tendency to prefer avoiding losses over acquiring equivalent gains. It can lead to irrational decisions like selling winning investments prematurely.",
    section: "Psychology & Money Management"
  },
  {
    id: 3,
    question: "Which behavior causes financial stagnation even as income grows?",
    options: [
      "Dollar-cost averaging",
      "Diversification",
      "Lifestyle inflation",
      "Long-term compounding"
    ],
    correctAnswer: "Lifestyle inflation",
    explanation: "Lifestyle inflation occurs when your spending increases as your income grows, preventing you from building wealth because you're spending the extra money instead of saving or investing it.",
    section: "Psychology & Money Management"
  },
  {
    id: 4,
    question: "“Control money or it controls you” relates MOST to:",
    options: [
      "luck",
      "budgeting apps",
      "intentional money flow",
      "credit card rewards"
    ],
    correctAnswer: "intentional money flow",
    explanation: "This phrase emphasizes the importance of being proactive and intentional with your financial decisions (your money flow) to achieve your goals, rather than letting your finances dictate your life.",
    section: "Psychology & Money Management"
  },
  {
    id: 5,
    question: "The foundation of changing financial outcomes starts primarily with:",
    options: [
      "advanced stock picking",
      "mindset and beliefs",
      "perfect timing",
      "high salary"
    ],
    correctAnswer: "mindset and beliefs",
    explanation: "Your financial success is deeply rooted in your mindset. Your beliefs about money shape your habits and decisions, forming the true foundation for change.",
    section: "Psychology & Money Management"
  },
  {
    id: 6,
    question: "The #1 reason saving alone is not enough:",
    options: [
      "banks charge fees",
      "inflation erodes purchasing power",
      "savings accounts can crash",
      "savings accounts charge taxes on growth"
    ],
    correctAnswer: "inflation erodes purchasing power",
    explanation: "Inflation causes the value of money to decrease over time. If your savings don't grow at a rate higher than inflation, your purchasing power diminishes.",
    section: "Why Investing Beats Saving"
  },
  {
    id: 7,
    question: "Compound growth is best described as:",
    options: [
      "interest you earn only on new deposits",
      "dividends that never increase",
      "interest on interest",
      "interest only at year end"
    ],
    correctAnswer: "interest on interest",
    explanation: "Compounding is the process where your investment returns start to earn their own returns. It's the concept of earning 'interest on your interest,' which accelerates wealth growth.",
    section: "Why Investing Beats Saving"
  },
  {
    id: 8,
    question: "Historically, stock markets average around ___ per year long-term.",
    options: [
      "2%–3%",
      "7%–10%",
      "12%–18%",
      "20%+ always"
    ],
    correctAnswer: "7%–10%",
    explanation: "While past performance is no guarantee of future results, historically, major stock market indexes like the S&P 500 have averaged returns in the 7-10% range over long periods.",
    section: "Why Investing Beats Saving"
  },
  {
    id: 9,
    question: "Investing is about:",
    options: [
      "rapidly flipping stocks",
      "timing highs and lows",
      "putting your money to work to create growth",
      "never taking risk"
    ],
    correctAnswer: "putting your money to work to create growth",
    explanation: "The core purpose of investing is to deploy your capital into assets that have the potential to grow in value over time, creating more wealth.",
    section: "Why Investing Beats Saving"
  },
  {
    id: 10,
    question: "Before investing you should:",
    options: [
      "put everything into stocks immediately",
      "eliminate all low-interest debt",
      "have an emergency fund 3–6 months",
      "buy individual tech stocks first"
    ],
    correctAnswer: "have an emergency fund 3–6 months",
    explanation: "An emergency fund of 3-6 months' worth of living expenses provides a safety net, so you won't be forced to sell your investments at a bad time if an unexpected event occurs.",
    section: "Getting Ready Before Investing"
  },
  {
    id: 11,
    question: "High interest debt (e.g. 20% cards) should:",
    options: [
      "be ignored if you are young",
      "be paid down before aggressive investing",
      "be transferred to crypto",
      "be refinanced to mortgages"
    ],
    correctAnswer: "be paid down before aggressive investing",
    explanation: "The guaranteed 'return' you get from paying off high-interest debt (like a 20% credit card) is almost impossible to beat consistently through investing. It's a risk-free way to improve your finances.",
    section: "Getting Ready Before Investing"
  },
  {
    id: 12,
    question: "Even $50–$100 a month investing is powerful because:",
    options: [
      "low fees",
      "compounding",
      "it’s easy to cancel if needed",
      "brokers require it"
    ],
    correctAnswer: "compounding",
    explanation: "Thanks to the power of compounding, even small, consistent investments can grow into significant sums over a long period. The key is starting early and staying consistent.",
    section: "Getting Ready Before Investing"
  },
  {
    id: 13,
    question: "Risk tolerance refers to:",
    options: [
      "how much risk your friend takes",
      "how much volatility you are emotionally comfortable with",
      "the level of your income",
      "how many accounts you have"
    ],
    correctAnswer: "how much volatility you are emotionally comfortable with",
    explanation: "Risk tolerance is a personal, emotional measure of how much your portfolio can fluctuate in value before you feel panicked or stressed. It's crucial for building a sustainable investment strategy.",
    section: "Getting Ready Before Investing"
  },
  {
    id: 14,
    question: "Large-cap stocks are typically:",
    options: [
      "new risky startups",
      "large established companies",
      "penny stocks",
      "crypto-based firms"
    ],
    correctAnswer: "large established companies",
    explanation: "Large-cap stocks represent large, well-established companies with a history of stable growth and significant market share, like Apple or Microsoft.",
    section: "Stocks: Size & Style"
  },
  {
    id: 15,
    question: "Small cap stocks have:",
    options: [
      "lowest volatility",
      "highest potential long-term returns",
      "guaranteed dividends",
      "only international companies"
    ],
    correctAnswer: "highest potential long-term returns",
    explanation: "While they come with higher risk and volatility, smaller companies have more room to grow, offering the potential for higher returns over the long term compared to large-cap stocks.",
    section: "Stocks: Size & Style"
  },
  {
    id: 16,
    question: "Blue-chip stocks are known for:",
    options: [
      "unstable revenue",
      "being young companies",
      "quality + stability + often dividends",
      "IPO phase growth"
    ],
    correctAnswer: "quality + stability + often dividends",
    explanation: "Blue-chip stocks are high-quality, stable, and financially sound companies that are leaders in their industries. Many also have a long history of paying dividends to shareholders.",
    section: "Stocks: Size & Style"
  },
  {
    id: 17,
    question: "Growth stocks usually:",
    options: [
      "return profits to shareholders mostly as dividends",
      "reinvest heavily into the business",
      "never grow",
      "only exist in healthcare"
    ],
    correctAnswer: "reinvest heavily into the business",
    explanation: "Growth stocks are associated with companies that are focused on expanding. They typically reinvest their earnings back into the business to fuel further growth, rather than paying them out as dividends.",
    section: "Stocks: Size & Style"
  },
  {
    id: 18,
    question: "ETFs trade like:",
    options: [
      "bonds only",
      "real estate",
      "individual stocks",
      "certificates of deposit"
    ],
    correctAnswer: "individual stocks",
    explanation: "Exchange-Traded Funds (ETFs) are bought and sold on stock exchanges throughout the trading day, just like individual stocks, offering high liquidity and price transparency.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 19,
    question: "Index funds attempt to:",
    options: [
      "beat the market through active trades",
      "mimic a market index",
      "guarantee performance",
      "avoid diversification"
    ],
    correctAnswer: "mimic a market index",
    explanation: "An index fund is a type of mutual fund or ETF designed to track the performance of a specific market benchmark, like the S&P 500, providing broad market exposure.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 20,
    question: "S&P 500 index fund gives exposure to:",
    options: [
      "500 largest U.S companies",
      "500 global bonds",
      "only tech stocks",
      "only foreign markets"
    ],
    correctAnswer: "500 largest U.S companies",
    explanation: "An S&P 500 index fund holds stocks in the 500 largest publicly traded companies in the United States, offering a diversified snapshot of the U.S. stock market.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 21,
    question: "Mutual funds settle trades:",
    options: [
      "anytime intraday",
      "only at market close",
      "only on weekends",
      "only monthly"
    ],
    correctAnswer: "only at market close",
    explanation: "Unlike ETFs, mutual fund trades are executed only once per day at the net asset value (NAV) price, which is calculated after the market closes.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 22,
    question: "ETFs and index funds are popular because they are:",
    options: [
      "expensive",
      "low-fee and diversified",
      "illegal in IRAs",
      "require 10k minimums"
    ],
    correctAnswer: "low-fee and diversified",
    explanation: "Their popularity stems from offering instant diversification across many securities at a very low cost (expense ratio), making them accessible and efficient for most investors.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 23,
    question: "A bond is essentially:",
    options: [
      "partial ownership in a company",
      "a loan to an issuer",
      "a crypto token",
      "a commodity contract"
    ],
    correctAnswer: "a loan to an issuer",
    explanation: "When you buy a bond, you are lending money to an entity (a corporation or government), which promises to pay you back with interest over a set period.",
    section: "Bonds"
  },
  {
    id: 24,
    question: "Bonds help portfolios by:",
    options: [
      "maximizing short term return",
      "adding extreme volatility",
      "stabilizing during stock downturns",
      "eliminating all risk"
    ],
    correctAnswer: "stabilizing during stock downturns",
    explanation: "Bonds typically have a low correlation with stocks, meaning they often move in the opposite direction. This provides a stabilizing effect on a portfolio during periods of stock market volatility.",
    section: "Bonds"
  },
  {
    id: 25,
    question: "Government bonds are generally:",
    options: [
      "lower risk",
      "highest risk",
      "not allowed",
      "fake protection"
    ],
    correctAnswer: "lower risk",
    explanation: "Bonds issued by stable governments (like U.S. Treasury bonds) are considered among the safest investments because they are backed by the full faith and credit of the government.",
    section: "Bonds"
  },
  {
    id: 26,
    question: "A dividend is:",
    options: [
      "a fee you pay the broker",
      "a bonus from the IRS",
      "a portion of earnings paid to shareholders",
      "a tax refund"
    ],
    correctAnswer: "a portion of earnings paid to shareholders",
    explanation: "A dividend is a distribution of a company's profits to its shareholders, serving as a reward for their investment.",
    section: "Dividends"
  },
  {
    id: 27,
    question: "DRIP means:",
    options: [
      "trading every day",
      "auto reinvesting dividends",
      "dividend only in December",
      "crypto staking only"
    ],
    correctAnswer: "auto reinvesting dividends",
    explanation: "DRIP stands for Dividend Reinvestment Plan. It's an arrangement that allows shareholders to automatically use their cash dividends to purchase more shares of the stock.",
    section: "Dividends"
  },
  {
    id: 28,
    question: "Reinvesting dividends accelerates wealth by:",
    options: [
      "buying fewer shares",
      "compounding",
      "reducing ownership",
      "adding management fees"
    ],
    correctAnswer: "compounding",
    explanation: "By reinvesting dividends, you buy more shares, which in turn generate more dividends. This creates a powerful compounding effect that can significantly boost your total return over time.",
    section: "Dividends"
  },
  {
    id: 29,
    question: "Most portfolios are built from:",
    options: [
      "land & collectibles",
      "stocks + bonds + alternatives",
      "franchises only",
      "credit cards"
    ],
    correctAnswer: "stocks + bonds + alternatives",
    explanation: "A diversified portfolio is typically constructed using a mix of asset classes, with stocks and bonds forming the core. Alternatives like real estate or commodities can be added for further diversification.",
    section: "Portfolio Foundation"
  },
  {
    id: 30,
    question: "Stocks mainly provide:",
    options: [
      "stability",
      "guaranteed income",
      "long-term growth",
      "tax write-offs"
    ],
    correctAnswer: "long-term growth",
    explanation: "The primary role of stocks in a portfolio is to provide capital appreciation and long-term growth, as they represent ownership in a growing business.",
    section: "Portfolio Foundation"
  },
  {
    id: 31,
    question: "Bonds mainly provide:",
    options: [
      "massive volatility",
      "stability + income",
      "rapid growth",
      "growth only"
    ],
    correctAnswer: "stability + income",
    explanation: "Bonds offer stability to a portfolio due to their low correlation with stocks and provide a predictable income stream through regular interest (coupon) payments.",
    section: "Portfolio Foundation"
  },
  {
    id: 32,
    question: "Alternatives (like real estate) should usually be what % range?",
    options: [
      "50%–60%",
      "5%–15%",
      "100%",
      "0%"
    ],
    correctAnswer: "5%–15%",
    explanation: "Alternatives are typically used as a smaller, satellite holding in a portfolio (often 5-15%) to add diversification beyond traditional stocks and bonds.",
    section: "Portfolio Foundation"
  },
  {
    id: 33,
    question: "A ticker symbol is:",
    options: [
      "slang for dividends",
      "a shortcut code for a security",
      "an internal broker password",
      "an industry category"
    ],
    correctAnswer: "a shortcut code for a security",
    explanation: "A ticker symbol is a unique series of letters (e.g., AAPL for Apple) assigned to a security for trading purposes on a stock exchange.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 34,
    question: "A brokerage account allows you to:",
    options: [
      "buy / sell investments",
      "only save cash",
      "only buy CDs",
      "only buy lottery tickets"
    ],
    correctAnswer: "buy / sell investments",
    explanation: "A brokerage account is a specialized financial account that you need to open to buy and sell investments like stocks, bonds, and ETFs.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 35,
    question: "Traditional IRA contributions:",
    options: [
      "are always nondeductible",
      "may be tax deductible depending on income",
      "must be cash only",
      "must be crypto only"
    ],
    correctAnswer: "may be tax deductible depending on income",
    explanation: "Contributions to a Traditional IRA may be tax-deductible, which lowers your taxable income for the year. Deductibility depends on your income and whether you have a workplace retirement plan.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 36,
    question: "Roth IRA contributions are:",
    options: [
      "pre-tax",
      "after-tax",
      "untaxed forever",
      "contribution free"
    ],
    correctAnswer: "after-tax",
    explanation: "You contribute to a Roth IRA with money you've already paid taxes on (after-tax). The major benefit is that your qualified withdrawals in retirement are completely tax-free.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 37,
    question: "Roth IRA withdrawals in retirement are:",
    options: [
      "tax-free",
      "taxed like income",
      "penalty only",
      "illegal"
    ],
    correctAnswer: "tax-free",
    explanation: "Because you paid taxes on the money going in, all your investment growth and qualified withdrawals from a Roth IRA during retirement are 100% tax-free.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 38,
    question: "IRA contribution limit (2025) under age 50 approx:",
    options: [
      "$3,000",
      "$7,000",
      "$14,000",
      "$25,000"
    ],
    correctAnswer: "$7,000",
    explanation: "Contribution limits are set by the IRS and periodically adjust for inflation. For 2024, the limit is $7,000 for those under 50.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 39,
    question: "Buy & Hold works because:",
    options: [
      "short term timing is easy",
      "long term market growth dominates temporary dips",
      "dividend yields never drop",
      "markets always go straight up daily"
    ],
    correctAnswer: "long term market growth dominates temporary dips",
    explanation: "The 'Buy and Hold' strategy is effective because, over the long run, the general upward trend of the market tends to overcome short-term volatility and downturns.",
    section: "Core Strategies"
  },
  {
    id: 40,
    question: "Indexing strategy means:",
    options: [
      "you attempt to outperform the market",
      "you own the market itself",
      "day trading",
      "penny stocks only"
    ],
    correctAnswer: "you own the market itself",
    explanation: "An indexing strategy involves buying funds that track a broad market index (like the S&P 500). Instead of trying to beat the market, you aim to match its performance, effectively 'owning' a piece of the entire market.",
    section: "Core Strategies"
  },
  {
    id: 41,
    question: "Dividend Growth strategy:",
    options: [
      "focuses on companies that increase payouts over time",
      "focuses on only IPOs",
      "focuses on FX trading",
      "bans ETFs"
    ],
    correctAnswer: "focuses on companies that increase payouts over time",
    explanation: "This strategy involves investing in companies with a strong history of consistently increasing their dividend payments, providing a growing stream of income and signaling financial health.",
    section: "Core Strategies"
  },
  {
    id: 42,
    question: "Dollar Cost Averaging removes:",
    options: [
      "diversification",
      "emotional timing",
      "compounding",
      "tax benefits"
    ],
    correctAnswer: "emotional timing",
    explanation: "By investing a fixed amount of money at regular intervals, Dollar-Cost Averaging (DCA) removes the temptation to 'time the market.' You buy more shares when prices are low and fewer when they are high, smoothing out your average cost.",
    section: "Core Strategies"
  },
  {
    id: 43,
    question: "Core Market exposure =",
    options: [
      "the foundation broad market exposure",
      "niche industry bets",
      "cash only",
      "futures contracts"
    ],
    correctAnswer: "the foundation broad market exposure",
    explanation: "The 'core' of a portfolio is its foundation, typically made up of broadly diversified index funds (like a total stock market fund) that provide exposure to the entire market.",
    section: "Designing Portfolios"
  },
  {
    id: 44,
    question: "Factor tilts intentionally focus on:",
    options: [
      "low return companies",
      "specific characteristics (ex value, small cap, quality)",
      "illegal securities",
      "avoiding research"
    ],
    correctAnswer: "specific characteristics (ex value, small cap, quality)",
    explanation: "Factor 'tilting' is an investment strategy where you intentionally overweight parts of your portfolio toward specific factors (like 'value' or 'small-cap') that have historically shown potential to outperform the broader market.",
    section: "Designing Portfolios"
  },
  {
    id: 45,
    question: "Themes include:",
    options: [
      "only grocery stores",
      "AI, clean energy, robotics etc",
      "only oil & gas",
      "bonds only"
    ],
    correctAnswer: "AI, clean energy, robotics etc",
    explanation: "Thematic investing involves focusing on specific long-term trends or ideas, such as artificial intelligence, clean energy, or robotics, that are expected to shape the future.",
    section: "Designing Portfolios"
  },
  {
    id: 46,
    question: "Hedge/Defense exposures:",
    options: [
      "exist to stabilize volatility",
      "exist for fast growth",
      "are illegal in IRAs",
      "are for day traders only"
    ],
    correctAnswer: "exist to stabilize volatility",
    explanation: "Defensive assets, like bonds or gold, are included in a portfolio to act as a hedge, helping to stabilize returns and reduce volatility during stock market downturns.",
    section: "Designing Portfolios"
  },
  {
    id: 47,
    question: "Rebalancing exists to:",
    options: [
      "chase top performing assets",
      "bring portfolio back to target allocation",
      "collect more fees",
      "increase volatility"
    ],
    correctAnswer: "bring portfolio back to target allocation",
    explanation: "Rebalancing is the process of periodically buying or selling assets to maintain your original desired asset allocation and, most importantly, your intended level of risk.",
    section: "Rebalancing"
  },
  {
    id: 48,
    question: "If U.S. stocks surge and go overweight, rebalancing likely means:",
    options: [
      "adding more U.S stocks",
      "selling some U.S stocks & adding to lagging areas",
      "closing IRA",
      "switching to all bonds"
    ],
    correctAnswer: "selling some U.S stocks & adding to lagging areas",
    explanation: "To rebalance, you would sell some of the asset that has become overweight (U.S. stocks) and use the proceeds to buy more of the underweight assets, bringing your portfolio back to its target percentages.",
    section: "Rebalancing"
  },
  {
    id: 49,
    question: "Rebalancing is primarily about:",
    options: [
      "tax fraud",
      "risk control",
      "trend following",
      "hyper trading"
    ],
    correctAnswer: "risk control",
    explanation: "The main purpose of rebalancing is to manage risk. Without it, a portfolio can become too concentrated in a single asset class, exposing you to more risk than you originally intended.",
    section: "Rebalancing"
  },
  {
    id: 50,
    question: "A portfolio that is never rebalanced will:",
    options: [
      "always stay at target",
      "drift and become a different risk mix than intended",
      "automatically reduce risk",
      "automatically delete exposure"
    ],
    correctAnswer: "drift and become a different risk mix than intended",
    explanation: "Over time, different assets grow at different rates. Without rebalancing, your portfolio will 'drift' away from its original allocation, potentially becoming much riskier or more conservative than you planned.",
    section: "Rebalancing"
  }
];
