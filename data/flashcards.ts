export interface Flashcard {
  id: string
  term: string
  definition: string
}

export interface FlashcardSet {
  clusterId: string
  flashcards: Flashcard[]
}

// Example flashcards - easy to update by editing this file
export const flashcardSets: Record<string, Flashcard[]> = {
  "business-administration": [
    {
      id: "1",
      term: "SWOT Analysis",
      definition: "A strategic planning technique used to identify Strengths, Weaknesses, Opportunities, and Threats related to business competition or project planning.",
    },
    {
      id: "2",
      term: "Mission Statement",
      definition: "A formal summary of the aims and values of a company, organization, or individual.",
    },
    {
      id: "3",
      term: "Stakeholder",
      definition: "A person with an interest or concern in something, especially a business.",
    },
    {
      id: "4",
      term: "ROI (Return on Investment)",
      definition: "A performance measure used to evaluate the efficiency of an investment or compare the efficiency of different investments.",
    },
  ],
  "entrepreneurship": [
    {
      id: "1",
      term: "Business Plan",
      definition: "A formal written document containing business goals, the methods on how these goals can be attained, and the time frame within which these goals need to be achieved.",
    },
    {
      id: "2",
      term: "Startup",
      definition: "A newly established business, typically characterized by innovation and high growth potential.",
    },
    {
      id: "3",
      term: "Venture Capital",
      definition: "Financing that investors provide to startup companies and small businesses that are believed to have long-term growth potential.",
    },
    {
      id: "4",
      term: "Bootstrapping",
      definition: "Building a company from the ground up with nothing but personal savings, and with luck, the cash coming in from the first sales.",
    },
  ],
  "finance": [
    {
      id: "1",
      term: "Accounting",
      definition: "A system that monitors an individual, business, or other organizations financial standing. This includes recording and verifying financial information to determine a profit or loss for a given time period as well as the value of assets, liabilities, and owners' equity.",
    },
    {
      id: "2",
      term: "Financial Globalization",
      definition: "The worldwide development of economic, financial, trade and communication integration. This pushes business executives to consider broad views in the global marketplace as countries and their economies become interconnected and interdependent.",
    },
    {
      id: "3",
      term: "Debtor",
      definition: "A person or business that owes money, goods, or services to another.",
    },
    {
      id: "4",
      term: "Costing",
      definition: "A process to determine the cost of production or operation of a business by assigning expenses to various stages of production or operations of a firm.",
    },
    {
      id: "5",
      term: "Expenditure",
      definition: "The payment of cash for goods or services to settle an obligation; usually seen as an invoice or receipt.",
    },
    {
      id: "6",
      term: "Financial Information Management",
      definition: "Managing data such as credit card numbers, accounting balances or other monetary facts about an individual, business, or other organization that are used when evaluating credit, loans, or other financial activities.",
    },
    {
      id: "7",
      term: "Estate Tax",
      definition: "A tax paid on wealth, collected after a person has died.",
    },
    {
      id: "8",
      term: "Savings",
      definition: "The portion of a disposable income that is not spent on essential expenses in a household or business. A variety of savings vehicles are available to increase the value of savings including a bank savings account, stocks, bonds, etc.",
    },
    {
      id: "9",
      term: "Financial Position",
      definition: "The status of the assets, liabilities and owners' equity of an individual, business, or other organization as shown in its financial statements.",
    },
    {
      id: "10",
      term: "Money Market",
      definition: "A network of banks, discount houses, institutional vendors, and money dealers who borrow and lend among themselves for the short term (90 days). Any investment has a risk, but a money market account is considered a safe place to invest due to its short term nature.",
    },
    {
      id: "11",
      term: "External Risk",
      definition: "The possibility of loss, damage, or injury outside of a business or other organization.",
    },
    {
      id: "12",
      term: "Consolidation",
      definition: "Combining assets, equity, liabilities, and operating accounts of a business and its subsidiaries into one financial statement OR combining two or more businesses through the purchase, merger, or ownership transfer to create a new business.",
    },
    {
      id: "13",
      term: "Voluntary Compliance",
      definition: "The assumption that taxpayers will stay in compliance with tax laws and accurately report their income amounts and tax deductions fairly and honestly.",
    },
    {
      id: "14",
      term: "Creditor",
      definition: "The entity that provides available capital resources to debtors, in exchange for compensation.",
    },
    {
      id: "15",
      term: "Risk Management",
      definition: "The process of controlling an individual, business, or other organization for damage, loss, or injury to ensure the safety of the community, environment, and legal responsibilities.",
    },
    {
      id: "16",
      term: "Inventory System",
      definition: "An inventory system allows a business to maintain the optimum number of each item. In doing so, a business can operate production of a good or service, sales or customer service at a lower cost.",
    },
    {
      id: "17",
      term: "Compliance",
      definition: "Verification that a vendor meets the requirements of accepted practices, regulations, legislation, rules, standards, and/or the terms of a contract.",
    },
    {
      id: "18",
      term: "Financial Institutions",
      definition: "Organizations that are public or private whom act as a channel between savers and borrowers of funds. There are two types of institutions: depository and non-depository. Depository organizations are usually banks or credit unions. Non-depository organizations are often recognized as insurance companies or mutual funds.",
    },
    {
      id: "19",
      term: "Financial Records",
      definition: "The financial documentation for an individual, business or other organization. The most common records are a Cash Flow Statement, Income Statement, Balance Sheet and Tax Returns.",
    },
    {
      id: "20",
      term: "Data",
      definition: "Information in an unorganized form (alphabets, numbers, or symbols) that have a relationship with current conditions, ideas, or knowledge.",
    },
    {
      id: "21",
      term: "Customer Relationship Management (CRM)",
      definition: "At a minimum, this is a database of customer contacts, purchase history, and technical support. Additional elements can include profiles of potential clients, understanding and leveraging the needs of current customers, and enhanced customer service based on data analysis.",
    },
    {
      id: "22",
      term: "Budgeting",
      definition: "The process of determining a time specific financial plan for an individual, business or other organization to achieve a monetary goal.",
    },
    {
      id: "23",
      term: "Securities and Exchange Commission (SEC)",
      definition: "Government agency created in 1934 that is responsible for enforcing securities-related laws and setting standards for financial information about businesses that are traded on a stock exchange. The SEC has five commissions who are appointed by the President and confirmed by the senate who serve five year terms.",
    },
    {
      id: "24",
      term: "Internal Risk",
      definition: "The possibility of loss, damage or injury within a business or other organization.",
    },
    {
      id: "25",
      term: "Invest",
      definition: "Any activity where money is put at risk in the short term for the purpose of creating a profit in the long term. Most investment activities include conducting research and developing a long term plan for any assets that will be put at risk. Investment activities want to create and/or increase a positive outcome for the benefactor.",
    },
    {
      id: "26",
      term: "Economies of Scale",
      definition: "An internal or external reduction in long term costs when production or operation increases in size.",
    },
    {
      id: "27",
      term: "Client Services",
      definition: "Any activity provided by a vendor on behalf of a client. Depending on the business this can include customer service, financial management, information technology, social media support, database management, etc. The services provided to a client are agreed on by both parties and detailed in a contract unless otherwise specified.",
    },
    {
      id: "28",
      term: "Financial Resources",
      definition: "Funds available to a business or person for spending in the form of cash, credit or securities.",
    },
    {
      id: "29",
      term: "Financial Markets",
      definition: "A market for the sale or purchase of stocks, bonds, bills of exchange, commodities, fortunes and options, foreign currency which work as an exchange for capital, and credit. In the United States, well recognized markets include the New York Stock Exchange (NYSE), the S&P 500, and the Chicago Mercantile Exchange (MCE or Merc).",
    },
    {
      id: "30",
      term: "Commodities Exchange",
      definition: "An open and organized marketplace where ownership titles or standard units of commodities are traded by its members.",
    },
    {
      id: "31",
      term: "Capital Market",
      definition: "A market for demand and supply of debt and equity capital. This is a highly decentralized system made up of three major parts: the stock market, bond market, and money market.",
    },
    {
      id: "32",
      term: "Capital Expenditures",
      definition: "The amount spent to acquire or upgrade an asset that will increase the efficiency of the production or operations of a business for the long term.",
    },
    {
      id: "33",
      term: "Gross Revenue",
      definition: "Amount of money that the purchasers of a company's products or services actually pay for those items.",
    },
    {
      id: "34",
      term: "Tax",
      definition: "Payment made to the government for services they provide.",
    },
    {
      id: "35",
      term: "Social Security (FICA)",
      definition: "A tax paid by workers so that they may receive benefits upon retirement.",
    },
    {
      id: "36",
      term: "Credit",
      definition: "A way to receive cash or goods, while paying later.",
    },
    {
      id: "37",
      term: "Periodic Inventory System",
      definition: "An inventory method in which items are counted only occasionally, by visual inspection - and can be completed manually, or through the use of technology, such as barcode scanners.",
    },
    {
      id: "38",
      term: "Database",
      definition: "The systematic organization of information that allows easy updating and analysis of data.",
    },
    {
      id: "39",
      term: "Financial Ratio",
      definition: "Financial ratios provide a comparison between financial statement items to determine the strength or weakness of a company. The most common ratios are: net sales to net worth and net income to net sales.",
    },
    {
      id: "40",
      term: "Cost of Goods Sold",
      definition: "This line on an income statement shows the cost of raw materials and labor to produce a finished product or service that is available to a consumer.",
    },
    {
      id: "41",
      term: "Client",
      definition: "A customer of a professional service provider or the primary contractor.",
    },
    {
      id: "42",
      term: "Transaction",
      definition: "An agreement or contract that occurs between two or more parties and establishes a legal obligation. This can also be defined as an exchange of goods or services between a buyer and seller.",
    },
    {
      id: "43",
      term: "Compliance Program",
      definition: "The systematic process of a business or other organization to ensure that regulations imposed by a government agency are being met.",
    },
    {
      id: "44",
      term: "Capital",
      definition: "The most common definition of 'capital' is money invested in a business to generate income. Capital can also be defined as wealth in the form of an asset which can be an indication of strength in an individual, business, or country.",
    },
    {
      id: "45",
      term: "Inventory Management",
      definition: "The process of buying and storing materials and products while controlling costs (for ordering, shipping, handling, and storage).",
    },
    {
      id: "46",
      term: "Exchange Rate",
      definition: "The value of one currency in terms of another, established on the foreign exchange market.",
    },
    {
      id: "47",
      term: "Convergence",
      definition: "The joining of two or more unique factors or phenomena, such as technologies. For example, the development of a smartphone was the convergence of telecommunications and internet technologies.",
    },
    {
      id: "48",
      term: "Just-In-Time Inventory",
      definition: "An inventory management method that coordinates the demand and supply for goods, delivering them just before they are needed.",
    },
    {
      id: "49",
      term: "Securities",
      definition: "An investment tool such as bonds, debentures, notes, options, and shares.",
    },
    {
      id: "50",
      term: "Risk Retention",
      definition: "A strategy in which an entity sets aside a sum as a protection against a probable loss, instead of transferring the risk by purchasing an insurance policy.",
    },
    {
      id: "51",
      term: "Data Mining",
      definition: "Reviewing very large amounts of data for useful information. This activity often uses advanced statistical tools to determine trends, patterns, and relationships. Data mining can also be referred to as data surfing.",
    },
    {
      id: "52",
      term: "Business Law",
      definition: "Laws that govern business and transactions between businesses.",
    },
    {
      id: "53",
      term: "Finance",
      definition: "The process of managing money for an individual, business or other organization.",
    },
    {
      id: "54",
      term: "Differential Cost",
      definition: "The difference in cost between two or more business decisions.",
    },
    {
      id: "55",
      term: "Securities Information",
      definition: "Information provided regarding an investment instrument issued by a corporation, government or other organization that demonstrates whether it is debt or equity.",
    },
    {
      id: "56",
      term: "Internal Audit",
      definition: "An examination of an organization's financial statements that is conducted by an employee of the organization.",
    },
    {
      id: "57",
      term: "Accounting System",
      definition: "The (often) computerized system of collecting, processing, analyzing and presenting accurate financial data to support management decisions.",
    },
    {
      id: "58",
      term: "Customer Relations",
      definition: "The way a business interacts with its customers in order to obtain new customers while maintaining the current customer base.",
    },
    {
      id: "59",
      term: "Compliance Officer",
      definition: "An employee of a business or other organization whose task is to ensure that regulations imposed by a government agency are being met as well as internal policies and procedures.",
    },
    {
      id: "60",
      term: "Financial Analysis",
      definition: "Evaluating an organization's financial statements to determine the profitability of the organization, a division within the organization or a specific event or project.",
    },
    {
      id: "61",
      term: "Sunk Cost",
      definition: "A cost that a business has incurred, but cannot recover.",
    },
    {
      id: "62",
      term: "Indirect Costs",
      definition: "Those costs which cannot be directly linked to a good, service or project.",
    },
    {
      id: "63",
      term: "Regression",
      definition: "A data-mining technique that takes a numerical dataset and develops a mathematical formula that fits the data.",
    },
    {
      id: "64",
      term: "Sustainability Reporting",
      definition: "Reporting by an entity that outlines it's economic, environmental and social performance.",
    },
    {
      id: "65",
      term: "Insurance Market",
      definition: "Composed of the companies involved in buying and selling insurance.",
    },
    {
      id: "66",
      term: "Time Value of Money",
      definition: "The increase of an amount of money due to earned interest or dividends.",
    },
    {
      id: "67",
      term: "Managerial Accounting",
      definition: "Accounting that focuses on revenues and expenses of a business, reporting variances to management.",
    },
    {
      id: "68",
      term: "Equity",
      definition: "Includes earnings that a company has retained and the amount of funds invested in that company by its owners.",
    },
    {
      id: "69",
      term: "Property Tax",
      definition: "The main source of money for many local governments. This tax is based on the value of property such as land and buildings.",
    },
    {
      id: "70",
      term: "External Audit",
      definition: "An examination of an organization's financial statements by an independent accountant, not affiliated with the organization.",
    },
    {
      id: "71",
      term: "Solvency",
      definition: "Refers to the ability of an organization to meet its financial obligations.",
    },
    {
      id: "72",
      term: "Risk Transfer",
      definition: "A strategy in which an insurance risk is shifted to another party (the insurer) by means of an insurance policy.",
    },
    {
      id: "73",
      term: "Activity Based Costing",
      definition: "A method used by businesses to accurately allocate overhead costs to specific products.",
    },
    {
      id: "74",
      term: "Cost Allocation",
      definition: "Refers to the method in which indirect costs are assigned to a product.",
    },
    {
      id: "75",
      term: "Direct Cost",
      definition: "Those costs which can be directly tied to a good, service or product.",
    },
    {
      id: "76",
      term: "Information Management",
      definition: "The process of collecting and analyzing data that can be used in the strategic decision making process for a business.",
    },
    {
      id: "77",
      term: "Reporting",
      definition: "Used in finance to disclose an organization's financial standing.",
    },
    {
      id: "78",
      term: "Marginal Analysis",
      definition: "A decision making tool that compares the cost of an activity versus the benefits of the activity.",
    },
    {
      id: "79",
      term: "Professional Development",
      definition: "Process of improving capabilities of staff through access to education and training opportunities in the workplace, through outside organizations, or observing others perform the job.",
    },
    {
      id: "80",
      term: "Professional Relationship",
      definition: "Contacts made through business connections and interactions.",
    },
    {
      id: "81",
      term: "Variance Analysis",
      definition: "Refers to the difference between a planned and actual budget.",
    },
    {
      id: "82",
      term: "Corporate Governance",
      definition: "Refers to the rules and practices that direct and control an organization.",
    },
    {
      id: "83",
      term: "Six Sigma",
      definition: "The strategy involves creating groups of people within the business or organization who have expert status in various methods, and then each project is carried out according to a set of steps in an effort to reach specific financial milestones. A six sigma process is defined as one in which 99.99966% of products created are expected to be statistically free from defects.",
    },
    {
      id: "84",
      term: "Board of Directors",
      definition: "A group of individuals elected by stakeholders of an organization to govern the organization.",
    },
    {
      id: "85",
      term: "Transparency",
      definition: "Fully and accurately disclosing of financial information to the public.",
    },
    {
      id: "86",
      term: "Classification",
      definition: "A data-mining technique that uses a decision tree that requires a series of decisions.",
    },
    {
      id: "87",
      term: "Management Functions",
      definition: "The four functions of management include: planning, organizing, leading and controlling.",
    },
    {
      id: "88",
      term: "Inflation",
      definition: "Refers to rising prices and is an indicator of the stability of an economy.",
    },
    {
      id: "89",
      term: "Insurance",
      definition: "A contract between a business and the insurer that covers a specific business risk.",
    },
    {
      id: "90",
      term: "Risk Avoidance",
      definition: "Used when a business anticipates risk and refrains from certain business activities in order to avoid the risk.",
    },
    {
      id: "91",
      term: "Currency",
      definition: "Money.",
    },
    {
      id: "92",
      term: "Tax Law",
      definition: "The area of law that governs taxation. A tax is a fee charged by the government on a product, service, income or activity. The Internal Revenue Code is the name for all federal laws, which was written in 1939 and has been revised multiple times to present day. Each state that collects a tax has their own department of taxation as well as local municipalities.",
    },
    {
      id: "93",
      term: "Perpetual Inventory System",
      definition: "An inventory system that continually keeps track of the number of items in inventory, and can be done manually or by computer.",
    },
    {
      id: "94",
      term: "Sales Tax",
      definition: "Charged to customers as a percentage of the price of the item being purchased.",
    },
    {
      id: "95",
      term: "Income Tax",
      definition: "Calculated as a percentage of the taxable income workers earn while on the job.",
    },
    {
      id: "96",
      term: "Customer",
      definition: "An individual, business, or other organization that receives products or services for their own use.",
    },
    {
      id: "97",
      term: "Price",
      definition: "The value, in terms of money, placed on a good or service.",
    },
    {
      id: "98",
      term: "Financial Goal",
      definition: "Monetary objectives of an individual, business or other organization that are decided by future needs of those entities.",
    },
    {
      id: "99",
      term: "Bank Statement",
      definition: "A document showing activity on your account over the previous month, including a beginning and ending balance and all inflows and outflows during that time.",
    },
  ],
  "hospitality-tourism": [
    {
      id: "1",
      term: "Guest Experience",
      definition: "The overall interaction between a guest and a hospitality business throughout the entire customer journey.",
    },
    {
      id: "2",
      term: "Revenue per Available Room (RevPAR)",
      definition: "A metric used in the hospitality industry to measure hotel performance, calculated by multiplying average daily rate by occupancy rate.",
    },
    {
      id: "3",
      term: "Concierge",
      definition: "A hotel employee whose job is to assist guests with various tasks like making restaurant reservations, arranging transportation, and providing local information.",
    },
    {
      id: "4",
      term: "Yield Management",
      definition: "A variable pricing strategy based on understanding, anticipating, and influencing consumer behavior to maximize revenue or profits.",
    },
  ],
  "marketing": [
    {
      id: "1",
      term: "Target Market",
      definition: "A specific group of consumers at which a company aims its products and services.",
    },
    {
      id: "2",
      term: "Brand Positioning",
      definition: "The process of positioning your brand in the mind of your customers, differentiating it from competitors.",
    },
    {
      id: "3",
      term: "Marketing Mix (4 Ps)",
      definition: "Product, Price, Place, and Promotion - the four key elements of a marketing strategy.",
    },
    {
      id: "4",
      term: "Customer Acquisition Cost (CAC)",
      definition: "The cost associated with convincing a customer to buy a product/service, including research, marketing, and advertising costs.",
    },
  ],
}

