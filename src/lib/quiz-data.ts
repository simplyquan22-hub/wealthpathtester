
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
    question: "An investor who only seeks out information that confirms their existing beliefs about a 'hot' stock is exhibiting which bias?",
    options: [
      "Confirmation Bias",
      "Loss Aversion",
      "Bandwagon Effect",
      "Anchoring"
    ],
    correctAnswer: "Confirmation Bias",
    explanation: "Confirmation bias is the tendency to search for, interpret, favor, and recall information that confirms or supports one's preexisting beliefs. This often leads to ignoring red flags in an investment.",
    section: "Psychology & Money Management"
  },
  {
    id: 2,
    question: "What is the primary difference between 'Systematic Risk' and 'Unsystematic Risk'?",
    options: [
      "Systematic risk is specific to one company, while unsystematic risk affects the whole market.",
      "Systematic risk (market risk) is undiversifiable, while unsystematic (specific) risk can be reduced through diversification.",
      "Unsystematic risk is related to interest rates, while systematic risk is related to company management.",
      "Both can be completely eliminated with a well-balanced portfolio."
    ],
    correctAnswer: "Systematic risk (market risk) is undiversifiable, while unsystematic (specific) risk can be reduced through diversification.",
    explanation: "Systematic risk, or market risk, affects the entire market (e.g., interest rate changes, recessions). Unsystematic risk is specific to a company or industry and can be mitigated by owning a variety of assets.",
    section: "Psychology & Money Management"
  },
  {
    id: 3,
    question: "When your income increases by 20%, you increase your spending by 20%. This phenomenon is known as:",
    options: [
      "The Wealth Effect",
      "Lifestyle Creep",
      "The Law of Diminishing Returns",
      "Inflationary Spending"
    ],
    correctAnswer: "Lifestyle Creep",
    explanation: "Lifestyle creep, or lifestyle inflation, is when spending increases as income grows. While seeming natural, it can severely limit one's ability to build wealth over the long term.",
    section: "Psychology & Money Management"
  },
  {
    id: 4,
    question: "What is 'Human Capital' in the context of personal finance?",
    options: [
      "The total amount of cash in your emergency fund.",
      "Your network of professional contacts.",
      "Your future earning potential based on your skills, knowledge, and experience.",
      "The initial amount of money you use to start investing."
    ],
    correctAnswer: "Your future earning potential based on your skills, knowledge, and experience.",
    explanation: "Human capital is your most valuable asset when you're young. It represents your ability to earn money throughout your career. Investing in skills and education directly increases it.",
    section: "Psychology & Money Management"
  },
  {
    id: 5,
    question: "The concept of 'Time in the market, not timing the market' is a direct counter-argument to which investor behavior?",
    options: [
      "Dollar-cost averaging",
      "Frequent trading based on market predictions",
      "Portfolio rebalancing",
      "Buy and hold investing"
    ],
    correctAnswer: "Frequent trading based on market predictions",
    explanation: "This phrase highlights that trying to predict market tops and bottoms is often a losing game. Consistent, long-term investment (time in the market) has historically been more successful.",
    section: "Psychology & Money Management"
  },
  {
    id: 6,
    question: "What is the 'real rate of return' on an investment?",
    options: [
      "The return shown on your brokerage statement.",
      "The return before taxes are paid.",
      "The return after adjusting for inflation.",
      "The total return including dividends and capital gains."
    ],
    correctAnswer: "The return after adjusting for inflation.",
    explanation: "The real rate of return shows the true increase in your purchasing power. It is calculated by subtracting the inflation rate from your investment's nominal return.",
    section: "Why Investing Beats Saving"
  },
  {
    id: 7,
    question: "The 'Rule of 72' is a quick mental shortcut used to estimate what?",
    options: [
      "The number of years it will take for an investment to double in value.",
      "The future value of a single investment.",
      "The ideal expense ratio for an ETF.",
      "The correct asset allocation for your age."
    ],
    correctAnswer: "The number of years it will take for an investment to double in value.",
    explanation: "By dividing 72 by the annual rate of return, you can get a rough estimate of how many years it will take for your investment to double. For example, at an 8% return, it takes about 9 years (72/8).",
    section: "Why Investing Beats Saving"
  },
  {
    id: 8,
    question: "Which of these is NOT a primary reason investing is considered superior to saving for long-term goals?",
    options: [
      "Potential to outpace inflation.",
      "Benefit of compound growth.",
      "Capital is 100% safe and government-insured at all levels.",
      "Ability to generate passive income through dividends or interest."
    ],
    correctAnswer: "Capital is 100% safe and government-insured at all levels.",
    explanation: "While bank savings are often insured (like by the FDIC), invested capital is subject to market risk and is not insured against loss in value.",
    section: "Why Investing Beats Saving"
  },
  {
    id: 9,
    question: "An opportunity cost of keeping too much cash in a savings account during a bull market is...",
    options: [
      "The risk of the bank failing.",
      "Forgoing higher potential returns from the stock market.",
      "The monthly fees charged by the bank.",
      "Losing purchasing power due to taxes."
    ],
    correctAnswer: "Forgoing higher potential returns from the stock market.",
    explanation: "Opportunity cost is the potential benefit you miss out on when choosing one alternative over another. Keeping cash in savings means missing out on the growth it could have experienced if invested.",
    section: "Why Investing Beats Saving"
  },
  {
    id: 10,
    question: "What is the primary purpose of a 3-6 month emergency fund?",
    options: [
      "To prevent the forced sale of long-term investments to cover unexpected expenses.",
      "To have 'dry powder' to invest when the market dips.",
      "To earn a high rate of return in a liquid account.",
      "To meet the minimum requirements for opening a brokerage account."
    ],
    correctAnswer: "To prevent the forced sale of long-term investments to cover unexpected expenses.",
    explanation: "The emergency fund acts as a crucial buffer. It provides liquidity for emergencies (job loss, medical bills) so you don't have to disrupt your investment strategy and sell assets at a potentially bad time.",
    section: "Getting Ready Before Investing"
  },
  {
    id: 11,
    question: "Paying off a credit card with a 22% APR is financially equivalent to what?",
    options: [
      "Earning a 22% tax-free return on an investment.",
      "A risk-free, guaranteed return of 22% on your money.",
      "Getting a 22% raise at your job.",
      "Matching the historical average return of the S&P 500."
    ],
    correctAnswer: "A risk-free, guaranteed return of 22% on your money.",
    explanation: "Paying off high-interest debt provides a guaranteed 'return' equal to the interest rate. It's a powerful, risk-free financial move that's very difficult to beat with market investments.",
    section: "Getting Ready Before Investing"
  },
  {
    id: 12,
    question: "What does an investor's 'time horizon' refer to?",
    options: [
      "The time of day they prefer to trade.",
      "How long they are willing to wait for a stock to become profitable.",
      "The length of time they expect to hold an investment before needing the money.",
      "The age at which they plan to retire."
    ],
    correctAnswer: "The length of time they expect to hold an investment before needing the money.",
    explanation: "Your time horizon is a critical factor in determining risk tolerance. A longer time horizon (e.g., for retirement in 30 years) allows you to take on more risk for higher potential returns.",
    section: "Getting Ready Before Investing"
  },
  {
    id: 13,
    question: "What is the main difference between 'risk tolerance' and 'risk capacity'?",
    options: [
      "Tolerance is for stocks; capacity is for bonds.",
      "Tolerance is your emotional comfort with risk; capacity is your financial ability to withstand losses.",
      "Capacity is your emotional comfort with risk; tolerance is your financial ability to withstand losses.",
      "They are the same thing and used interchangeably in finance."
    ],
    correctAnswer: "Tolerance is your emotional comfort with risk; capacity is your financial ability to withstand losses.",
    explanation: "You might feel comfortable with risk (high tolerance), but if you have a low income and high debt, you may not be able to afford a large loss (low capacity). Both are key to designing a portfolio.",
    section: "Getting Ready Before Investing"
  },
  {
    id: 14,
    question: "A company that reinvests most of its profits back into the business for expansion rather than paying dividends is typically classified as a:",
    options: [
      "Value Stock",
      "Blue-Chip Stock",
      "Growth Stock",
      "Income Stock"
    ],
    correctAnswer: "Growth Stock",
    explanation: "Growth companies are focused on scaling their operations, and they use their earnings to fund R&D, acquisitions, and other expansion efforts to increase their market share and future profits.",
    section: "Stocks: Size & Style"
  },
  {
    id: 15,
    question: "Which of these 'market caps' typically has the highest potential for growth but also the highest volatility?",
    options: [
      "Large-cap",
      "Small-cap",
      "Mid-cap",
      "Mega-cap"
    ],
    correctAnswer: "Small-cap",
    explanation: "Small-cap companies are younger and have more room to grow compared to their large-cap counterparts. This growth potential comes with higher risk and price volatility.",
    section: "Stocks: Size & Style"
  },
  {
    id: 16,
    question: "Which term best describes stocks of companies in sectors like utilities and consumer staples that tend to perform consistently regardless of the economic cycle?",
    options: [
      "Cyclical Stocks",
      "Defensive Stocks",
      "Blue-Chip Stocks",
      "Momentum Stocks"
    ],
    correctAnswer: "Defensive Stocks",
    explanation: "Defensive stocks provide goods and services that people need regardless of the economy's health (e.g., electricity, toothpaste). This makes them more stable during economic downturns.",
    section: "Stocks: Size & Style"
  },
  {
    id: 17,
    question: "An investor seeking companies that may be undervalued by the market, trading for less than their intrinsic worth, is following which style?",
    options: [
      "Growth Investing",
      "Value Investing",
      "Momentum Investing",
      "Index Investing"
    ],
    correctAnswer: "Value Investing",
    explanation: "Value investors are like bargain hunters. They look for solid companies that are temporarily out of favor with the market, believing their true worth will eventually be recognized.",
    section: "Stocks: Size & Style"
  },
  {
    id: 18,
    question: "What is an ETF's 'expense ratio'?",
    options: [
      "The annual fee charged by the fund, expressed as a percentage of your investment.",
      "A measure of the fund's past performance relative to its benchmark.",
      "The ratio of stocks to bonds inside the fund.",
      "The tax you pay when you sell the ETF."
    ],
    correctAnswer: "The annual fee charged by the fund, expressed as a percentage of your investment.",
    explanation: "The expense ratio covers the fund's operating costs. A lower expense ratio means more of your money stays invested and working for you, which has a huge impact over the long term.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 19,
    question: "What is 'tracking error' in the context of an index fund?",
    options: [
      "A mistake in your brokerage account statement.",
      "The tax consequence of frequent trading within the fund.",
      "The difference between the fund's return and the return of the index it's supposed to mimic.",
      "The delay in processing a mutual fund trade."
    ],
    correctAnswer: "The difference between the fund's return and the return of the index it's supposed to mimic.",
    explanation: "Ideally, an S&P 500 index fund's return should perfectly match the S&P 500's return. In reality, fees and transaction costs create a small difference, known as tracking error.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 20,
    question: "The key structural difference that often leads to ETFs being more tax-efficient than mutual funds is:",
    options: [
      "The 'in-kind' creation and redemption process for ETF shares.",
      "ETFs are not required to distribute capital gains to shareholders.",
      "ETFs are regulated by a different government body.",
      "Mutual funds are only for retirement accounts."
    ],
    correctAnswer: "The 'in-kind' creation and redemption process for ETF shares.",
    explanation: "This mechanism allows ETFs to avoid selling securities and realizing capital gains to meet investor redemptions, which is a common occurrence in mutual funds that can create a tax liability for all shareholders.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 21,
    question: "A passively managed fund seeks to do what?",
    options: [
      "Track the performance of a specific market index as closely as possible.",
      "Use expert managers to pick stocks they believe will beat the market.",
      "Generate the highest possible returns, regardless of risk.",
      "Invest only in government bonds for maximum safety."
    ],
    correctAnswer: "Track the performance of a specific market index as closely as possible.",
    explanation: "Passive management (like in an index fund) doesn't try to beat the market. It aims to replicate the market's performance by holding all (or a representative sample) of the securities in an index.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 22,
    question: "If you buy an S&P 500 index fund, your investment is concentrated in which country's market?",
    options: [
      "China",
      "The United States",
      "A mix of global developed countries",
      "The United Kingdom"
    ],
    correctAnswer: "The United States",
    explanation: "The S&P 500 is an index of the 500 largest publicly traded companies in the United States. To invest internationally, you would need to look for international or global index funds.",
    section: "ETFs / Index Funds / Mutual Funds"
  },
  {
    id: 23,
    question: "What is the typical relationship between prevailing interest rates and bond prices?",
    options: [
      "When interest rates rise, bond prices also rise.",
      "When interest rates rise, bond prices fall.",
      "Interest rates have no effect on bond prices.",
      "Bond prices and interest rates move together but not always."
    ],
    correctAnswer: "When interest rates rise, bond prices fall.",
    explanation: "This is an inverse relationship. If new bonds are being issued with higher interest rates (yields), existing bonds with lower rates become less attractive, so their prices must fall to compete.",
    section: "Bonds"
  },
  {
    id: 24,
    question: "A bond's 'duration' is a measure of its:",
    options: [
      "Time until maturity.",
      "Sensitivity to changes in interest rates.",
      "Credit quality rating from Moody's or S&P.",
      "Total return since it was issued."
    ],
    correctAnswer: "Sensitivity to changes in interest rates.",
    explanation: "Duration, measured in years, tells you how much a bond's price is likely to change for every 1% change in interest rates. A longer duration means higher sensitivity (more risk).",
    section: "Bonds"
  },
  {
    id: 25,
    question: "High-yield bonds, also known as 'junk bonds', have higher yields than government bonds because they have higher:",
    options: [
      "Credit risk",
      "Interest rate risk",
      "Inflation risk",
      "Liquidity risk"
    ],
    correctAnswer: "Credit risk",
    explanation: "High-yield bonds are issued by companies with a higher risk of not being able to pay back their debt (defaulting). Investors demand a higher yield to compensate for this extra credit risk.",
    section: "Bonds"
  },
  {
    id: 26,
    question: "What is a 'Qualified Dividend'?",
    options: [
      "A dividend that meets certain IRS requirements to be taxed at lower capital gains rates.",
      "Any dividend paid by a foreign company.",
      "A dividend that is guaranteed to be paid every quarter.",
      "A dividend that is automatically reinvested through a DRIP."
    ],
    correctAnswer: "A dividend that meets certain IRS requirements to be taxed at lower capital gains rates.",
    explanation: "Qualified dividends are taxed at the more favorable long-term capital gains tax rates, whereas ordinary (unqualified) dividends are taxed at your regular income tax rate.",
    section: "Dividends"
  },
  {
    id: 27,
    question: "What is a stock's 'Dividend Yield'?",
    options: [
      "The total dollar amount of the dividend paid per share.",
      "The annual dividend per share divided by the stock's current price.",
      "The percentage increase in the dividend payment from the previous year.",
      "A company's total dividends paid by its net income."
    ],
    correctAnswer: "The annual dividend per share divided by the stock's current price.",
    explanation: "Dividend yield is a percentage that shows how much a company pays in dividends each year relative to its stock price. It's a way to measure the return you get from dividends.",
    section: "Dividends"
  },
{
    id: 28,
    question: "What is the primary benefit of a Dividend Reinvestment Plan (DRIP)?",
    options: [
      "It allows you to buy more shares commission-free, leveraging the power of compounding.",
      "It guarantees the company will always increase its dividend.",
      "It makes your dividends tax-free until you sell the shares.",
      "It automatically sells your shares when the dividend is cut."
    ],
    correctAnswer: "It allows you to buy more shares commission-free, leveraging the power of compounding.",
    explanation: "DRIPs put your investment on autopilot. Your dividends are used to buy more shares (even fractional ones), which then earn their own dividends, creating a powerful snowball effect of wealth.",
    section: "Dividends"
  },
  {
    id: 29,
    question: "In a 'core-satellite' portfolio construction, what is the role of the 'core'?",
    options: [
      "To hold speculative, high-risk assets for outsized returns.",
      "To provide broad, diversified market exposure through low-cost index funds.",
      "To invest only in individual 'meme' stocks and cryptocurrencies.",
      "To hold cash and gold exclusively as a defensive measure."
    ],
    correctAnswer: "To provide broad, diversified market exposure through low-cost index funds.",
    explanation: "The 'core' is the foundation of the portfolio, usually comprising the largest portion (e.g., 70-80%) and made up of stable, diversified investments like total market index funds.",
    section: "Portfolio Foundation"
  },
  {
    id: 30,
    question: "What is the primary purpose of asset allocation?",
    options: [
      "To pick the single best-performing stock for the year.",
      "To eliminate all investment risk from a portfolio.",
      "To balance risk and reward by diversifying across different asset classes.",
      "To maximize short-term gains through frequent trading."
    ],
    correctAnswer: "To balance risk and reward by diversifying across different asset classes.",
    explanation: "Asset allocation is the strategic process of dividing your portfolio among major categories like stocks, bonds, and cash. It's considered the most important driver of your long-term returns and risk level.",
    section: "Portfolio Foundation"
  },
  {
    id: 31,
    question: "Historically, what has been the main role of bonds in a traditional 60/40 stock/bond portfolio?",
    options: [
      "To provide stability and income, and to hedge against stock market volatility.",
      "To provide aggressive, high-risk growth.",
      "To act as a speculative bet on interest rate changes.",
      "To invest in emerging technology companies."
    ],
    correctAnswer: "To provide stability and income, and to hedge against stock market volatility.",
    explanation: "Bonds are typically less volatile than stocks and often have a low or negative correlation during downturns. This provides a stabilizing 'cushion' for the overall portfolio.",
    section: "Portfolio Foundation"
  },
  {
    id: 32,
    question: "Adding a small allocation to an asset class like 'Emerging Markets' would be an example of what?",
    options: [
      "Building the 'core' of your portfolio.",
      "A 'satellite' position used to enhance returns or diversification.",
      "A strategy to eliminate all market risk.",
      "A typical strategy for a retiree seeking only income."
    ],
    correctAnswer: "A 'satellite' position used to enhance returns or diversification.",
    explanation: "Satellite holdings are smaller, often riskier, positions that 'orbit' the core. They are used to target specific areas for potentially higher growth, like emerging market economies.",
    section: "Portfolio Foundation"
  },
  {
    id: 33,
    question: "A 'market order' to buy a stock does what?",
    options: [
      "Executes the trade at the best available price at that moment, guaranteeing execution but not the price.",
      "Executes the trade at a specific price you name, or not at all.",
      "Executes the trade only at the end of the trading day.",
      "Guarantees you will get the same price as the last person who traded."
    ],
    correctAnswer: "Executes the trade at the best available price at that moment, guaranteeing execution but not the price.",
    explanation: "A market order prioritizes speed. It's an instruction to buy or sell immediately at the current market price. A 'limit order', by contrast, prioritizes price over speed.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 34,
    question: "What is a key tax advantage of a Traditional 401(k) or IRA?",
    options: [
      "Contributions are made with after-tax dollars.",
      "Withdrawals in retirement are always tax-free.",
      "Contributions may be tax-deductible, reducing your current taxable income.",
      "They are completely exempt from capital gains taxes."
    ],
    correctAnswer: "Contributions may be tax-deductible, reducing your current taxable income.",
    explanation: "The primary benefit of a Traditional IRA/401(k) is the immediate tax break. You contribute pre-tax money, which lowers your income tax bill for the year. Taxes are paid on withdrawals in retirement.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 35,
    question: "At what age can you typically begin penalty-free withdrawals from a Traditional IRA or 401(k)?",
    options: [
      "59 ½",
      "55",
      "62",
      "65"
    ],
    correctAnswer: "59 ½",
    explanation: "Withdrawing from these retirement accounts before age 59 ½ usually results in a 10% penalty on top of the ordinary income tax owed, though some exceptions apply.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 36,
    question: "What is a primary benefit of a Roth IRA?",
    options: [
      "Qualified withdrawals in retirement are 100% tax-free.",
      "All contributions are tax-deductible in the present.",
      "It has a higher annual contribution limit than a 401(k).",
      "It allows you to borrow against your contributions tax-free."
    ],
    correctAnswer: "Qualified withdrawals in retirement are 100% tax-free.",
    explanation: "With a Roth, you pay taxes on contributions today so that all your investment growth and withdrawals are completely free from taxes in retirement. This is a huge advantage, especially if you expect to be in a higher tax bracket later.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 37,
    question: "The 'Backdoor Roth IRA' is a strategy used by whom?",
    options: [
      "Individuals whose income is too high to contribute to a Roth IRA directly.",
      "Retirees who want to avoid required minimum distributions.",
      "Teenagers who want to start investing early with earned income.",
      "Anyone who wants to contribute more than the annual limit."
    ],
    correctAnswer: "Individuals whose income is too high to contribute to a Roth IRA directly.",
    explanation: "This strategy involves making a non-deductible contribution to a Traditional IRA and then immediately converting it to a Roth IRA, bypassing the income limitations for direct Roth contributions.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 38,
    question: "The catch-up contribution for IRAs applies to individuals who are:",
    options: [
      "Under age 25",
      "Age 50 and over",
      "Self-employed",
      "New to investing"
    ],
    correctAnswer: "Age 50 and over",
    explanation: "To help those nearing retirement save more, the IRS allows individuals aged 50 and older to contribute an additional amount to their IRA each year, above the standard limit.",
    section: "Tickers + Brokerage Accounts + IRA Basics"
  },
  {
    id: 39,
    question: "The Efficient Market Hypothesis (EMH) suggests what?",
    options: [
      "Stock prices fully reflect all available information, making it difficult to consistently outperform the market.",
      "Markets are always irrational and easy to beat with the right strategy.",
      "Only large-cap stocks are priced efficiently, while small-caps are not.",
      "Technical analysis is the only valid way to find undervalued stocks."
    ],
    correctAnswer: "Stock prices fully reflect all available information, making it difficult to consistently outperform the market.",
    explanation: "EMH is the theoretical foundation for passive investing. It argues that since all information is already priced in, trying to find 'bargains' is futile, and the best strategy is to simply own the market through an index fund.",
    section: "Core Strategies"
  },
  {
    id: 40,
    question: "The main appeal of a 'Total Stock Market Index Fund' over an S&P 500 fund is that it also includes:",
    options: [
      "Mid-cap and small-cap stocks",
      "International stocks",
      "Government and corporate bonds",
      "Real estate investment trusts (REITs)"
    ],
    correctAnswer: "Mid-cap and small-cap stocks",
    explanation: "A total market fund provides even broader diversification than an S&P 500 fund by including thousands of mid- and small-cap stocks, giving you exposure to the entire U.S. stock market.",
    section: "Core Strategies"
  },
  {
    id: 41,
    question: "A key metric for a Dividend Growth investor is a company's:",
    options: [
      "History of consistently increasing its dividend payout.",
      "Recent inclusion in the S&P 500.",
      "Highest all-time stock price.",
      "Level of social media hype and discussion."
    ],
    correctAnswer: "History of consistently increasing its dividend payout.",
    explanation: "This strategy prioritizes reliable, growing income. A long track record of dividend increases (like a 'Dividend Aristocrat') is a strong sign of financial health and shareholder-friendly management.",
    section: "Core Strategies"
  },
  {
    id: 42,
    question: "An investor who contributes $200 to an ETF every two weeks, regardless of the price, is practicing what strategy?",
    options: [
      "Lump sum investing",
      "Market timing",
      "Dollar-cost averaging",
      "Yield chasing"
    ],
    correctAnswer: "Dollar-cost averaging",
    explanation: "Dollar-cost averaging is an unemotional, disciplined strategy. By investing a fixed amount on a regular schedule, you automatically buy more shares when prices are low and fewer when they are high.",
    section: "Core Strategies"
  },
  {
    id: 43,
    question: "A 'factor tilt' towards 'value' in a portfolio means you are...",
    options: [
      "Only buying stocks that have gone up in price recently.",
      "Overweighting your portfolio with stocks that are considered undervalued relative to their fundamentals.",
      "Avoiding all technology and growth-oriented stocks.",
      "Investing only in companies that pay high dividend yields."
    ],
    correctAnswer: "Overweighting your portfolio with stocks that are considered undervalued relative to their fundamentals.",
    explanation: "Factor tilting involves deviating from a market-cap weighted index to emphasize specific characteristics (factors) like 'value' or 'size' that have historically been associated with higher returns.",
    section: "Designing Portfolios"
  },
  {
    id: 44,
    question: "Which of the following would be considered a 'thematic' investment?",
    options: [
      "An ETF that invests only in cybersecurity companies",
      "A Total Stock Market Index Fund",
      "A U.S. Treasury Bond Fund",
      "A Large-Cap Value ETF"
    ],
    correctAnswer: "An ETF that invests only in cybersecurity companies",
    explanation: "Thematic investing focuses on specific, long-term trends (like cybersecurity, robotics, or clean energy) rather than traditional sectors or market caps.",
    section: "Designing Portfolios"
  },
  {
    id: 45,
    question: "What is 'correlation' in portfolio management?",
    options: [
      "A measure of a stock's dividend yield compared to its peers.",
      "How closely the returns of two assets move in relation to each other.",
      "The annual management fee of a mutual fund.",
      "The speed at which a trade is executed by a broker."
    ],
    correctAnswer: "How closely the returns of two assets move in relation to each other.",
    explanation: "Diversification works by combining assets with low or negative correlation. For example, stocks and bonds often have low correlation, so when one goes down, the other may go up, smoothing out portfolio returns.",
    section: "Designing Portfolios"
  },
  {
    id: 46,
    question: "Which of these is considered a 'hedge' against inflation?",
    options: [
      "Holding cash in a checking account.",
      "A long-term fixed-rate government bond.",
      "Treasury Inflation-Protected Securities (TIPS).",
      "A high-yield corporate bond fund."
    ],
    correctAnswer: "Treasury Inflation-Protected Securities (TIPS).",
    explanation: "TIPS are a type of U.S. Treasury bond where the principal value adjusts with inflation. This feature specifically protects the investor's purchasing power, making them a direct hedge.",
    section: "Designing Portfolios"
  },
  {
    id: 47,
    question: "What is 'rebalancing risk'?",
    options: [
      "The risk that your portfolio's asset allocation drifts too far from its original target.",
      "The risk that transaction costs and taxes from rebalancing will slightly reduce returns.",
      "The risk that rebalancing forces you to sell assets at a loss.",
      "The risk that your broker will not allow you to rebalance your portfolio."
    ],
    correctAnswer: "The risk that transaction costs and taxes from rebalancing will slightly reduce returns.",
    explanation: "While rebalancing is crucial for risk management, the act of selling assets can incur transaction fees and, in taxable accounts, capital gains taxes. This is a minor 'cost' of the strategy.",
    section: "Rebalancing"
  },
  {
    id: 48,
    question: "An investor has a target of 60% stocks / 40% bonds. After a strong year for stocks, the portfolio is now 70/30. What does rebalancing entail?",
    options: [
      "Buying more stocks to continue the momentum.",
      "Selling stocks to buy more bonds.",
      "Selling all assets and moving to cash.",
      "Doing nothing and letting the winners run."
    ],
    correctAnswer: "Selling stocks to buy more bonds.",
    explanation: "Rebalancing is a disciplined 'buy low, sell high' process. You sell the asset class that has performed well (and is now overweight) to buy the asset class that has underperformed (and is now underweight).",
    section: "Rebalancing"
  },
  {
    id: 49,
    question: "What is 'rebalancing based on tolerance bands'?",
    options: [
      "Rebalancing on a fixed schedule, like annually or quarterly.",
      "Rebalancing only when your personal risk tolerance changes.",
      "Rebalancing only when an asset class deviates from its target by a set percentage (e.g., 5%).",
      "A strategy that avoids rebalancing altogether to reduce taxes."
    ],
    correctAnswer: "Rebalancing only when an asset class deviates from its target by a set percentage (e.g., 5%).",
    explanation: "This is a more dynamic approach than calendar-based rebalancing. It avoids unnecessary trades but ensures the portfolio's risk profile doesn't drift too far from the intended target.",
    section: "Rebalancing"
  },
  {
    id: 50,
    question: "A portfolio that is never rebalanced is likely to become:",
    options: [
      "More conservative over time as bonds mature.",
      "Perfectly aligned with its original target allocation.",
      "More concentrated and riskier than intended.",
      "More tax-efficient than a rebalanced portfolio."
    ],
    correctAnswer: "More concentrated and riskier than intended.",
    explanation: "Over time, the higher-growth assets (typically stocks) will make up a larger and larger percentage of the portfolio. This 'portfolio drift' leads to a risk level that is much higher than what the investor originally planned for.",
    section: "Rebalancing"
  }
];
