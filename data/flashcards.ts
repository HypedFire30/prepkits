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
      term: "Communication Skills",
      definition: "The ability to convey information to another effectively and efficiently",
    },
    {
      id: "2",
      term: "Economics",
      definition: "Attempts to explain how wealth is created and distributed in communities, how people allocate their resources and any matter that deals with human wants and their satisfaction.",
    },
    {
      id: "3",
      term: "Ethics",
      definition: "The basic concepts and fundamental principles of decent human conduct",
    },
    {
      id: "4",
      term: "Information Management",
      definition: "Information management is the process of collecting and analyzing data that can be used in the strategic decision making process for a business",
    },
    {
      id: "5",
      term: "Coordinate",
      definition: "To bring the different elements of an activity or an organization into a relationship that will ensure efficiency",
    },
    {
      id: "6",
      term: "Purchasing",
      definition: "To acquire goods or services to accomplish the goals of an organization",
    },
    {
      id: "7",
      term: "Chain of Command",
      definition: "The order in which authority and power in an organization is delegated from top management to every employee at every level of the organization",
    },
    {
      id: "8",
      term: "Organization Goals",
      definition: "The overall objectives, purpose and mission of a business that have been established by its management and communicated to its employees",
    },
    {
      id: "9",
      term: "Project",
      definition: "Planned set of interrelated tasks to be executed over a fixed period and within certain cost and other limitations",
    },
    {
      id: "10",
      term: "Channels",
      definition: "The path through which messages are delivered",
    },
    {
      id: "11",
      term: "Tariff",
      definition: "A tax on imports",
    },
    {
      id: "12",
      term: "Commitments",
      definition: "Detailed examination of the elements or structure of something, typically as a basis for discussion or interpretation",
    },
    {
      id: "13",
      term: "Prioritize",
      definition: "A process that evaluates a group of items and ranks them in their order of importance or urgency",
    },
    {
      id: "14",
      term: "Purchase Order",
      definition: "A legal contract between a buyer and seller that describes the quantity price and products ordered, terms of payment and delivery",
    },
    {
      id: "15",
      term: "Rules Of Conduct",
      definition: "A written set of guidelines issued by an organization to its workers and management to help them conduct their actions in accordance with its primary values and ethical standards",
    },
    {
      id: "16",
      term: "Initiate",
      definition: "The process of beginning",
    },
    {
      id: "17",
      term: "Work Breakdown Structure (WBS)",
      definition: "Project networking modeling step in which the entire job is graphically subdivided into manageable work tasks.",
    },
    {
      id: "18",
      term: "Capability Maturity Model Integration (CMMI)",
      definition: "Monitoring the opportunity for loss for a business",
    },
    {
      id: "19",
      term: "Directing",
      definition: "The process of building an effective climate and creating opportunity for motivation supervising scheduling and disciplining",
    },
    {
      id: "20",
      term: "Managerial Control",
      definition: "A complete ban on specific goods coming into or leaving a country",
    },
    {
      id: "21",
      term: "Knowledge Management",
      definition: "Strategy designed to identify document and share an organization intellectual assets to benefit performance",
    },
    {
      id: "22",
      term: "Organize",
      definition: "State of being efficient or methodical",
    },
    {
      id: "23",
      term: "Emotional Intelligence",
      definition: "The ability to identify assess and influence ones own feelings and those of others",
    },
    {
      id: "24",
      term: "Blanket Purchase Order",
      definition: "A long term order by a buyer to a seller for supplying specific goods or services for a fixed amount of time",
    },
    {
      id: "25",
      term: "Time Management",
      definition: "The ability to use ones time effectively or productively",
    },
    {
      id: "26",
      term: "Data",
      definition: "Information in an unorganized form that have a relationship with current condition, ideas and knowledge",
    },
    {
      id: "27",
      term: "Project Management",
      definition: "Project management is using knowledge skills and techniques to execute a temporary group activity designed to develop a product, service or outcome both effectively and efficiently",
    },
    {
      id: "28",
      term: "Comparative Advantage",
      definition: "Concept in economics that a country should specialize in producing and exporting only those goods and services which it can produce more efficiently than other goods and services",
    },
    {
      id: "29",
      term: "Project Management Software",
      definition: "Software used for project planning scheduling budgeting and documentation. project management software is also used for collaboration and communication between project participants",
    },
    {
      id: "30",
      term: "Balance Of Trade",
      definition: "The difference in value between exports and imports of a nation",
    },
    {
      id: "31",
      term: "Quota",
      definition: "A limit on either the quantity or value of a product that may be imported",
    },
    {
      id: "32",
      term: "Self-understanding",
      definition: "Awareness of and ability to understand ones own actions and reactions",
    },
    {
      id: "33",
      term: "Trustworthiness",
      definition: "Able to be relied on as hones or truthful",
    },
    {
      id: "34",
      term: "Responsibility",
      definition: "The started duty to deal with something or of having control over someone or the opportunity or to act independently and making decisions without authorization",
    },
    {
      id: "35",
      term: "Import",
      definition: "Products that come in from another country",
    },
    {
      id: "36",
      term: "Research Report",
      definition: "A document prepared by an analyst or strategist who is a part of the investment research team in a stock brokerage or investment bank",
    },
    {
      id: "37",
      term: "Productivity",
      definition: "A measure of the efficiency of a person machine factory system etc in converting inputs into useful outputs",
    },
    {
      id: "38",
      term: "Global Trade",
      definition: "The worldwide business that involves making and collecting payments for transactions in goods and services and transporting them to various markets",
    },
    {
      id: "39",
      term: "Electronic Purchase Order",
      definition: "A legal contract between a buyer and seller that describes the quantity, price and products ordered terms of payment and delivery that is transmitted electronically over the internet",
    },
    {
      id: "40",
      term: "Internal Business Correspondence",
      definition: "Any written or digital communication exchanged by two or more parties within an organization",
    },
    {
      id: "41",
      term: "Information Technology Infrastructure",
      definition: "A comprehensive set of documents which defines best practices and accepted techniques in the information technology community",
    },
    {
      id: "42",
      term: "Professional Development",
      definition: "Process of improving capabilities of staff through access to education and training opportunities in the workplace through outside organizations or observing others perform the job",
    },
    {
      id: "43",
      term: "Business Risk",
      definition: "The probability of loss inherent in an organizations operations and environment that may impair its ability to provide returns on investment",
    },
    {
      id: "44",
      term: "Six Sigma",
      definition: "The strategy involves creating groups of people within the businesses or organization who have expert status in various methods and then each project is carried out according to a set of steps in an effort to reach specific as one in which 9999% of products created are expected to be statistically free from defects",
    },
    {
      id: "45",
      term: "Business Analysis",
      definition: "Investigation into the operations if a business to demonstrate the causes behind the results achieved and the effects of those results on the businesses",
    },
    {
      id: "46",
      term: "Economic Risk",
      definition: "The probability that conditions like exchange rates, government regulation, or political stability will affect an investment, usually one in a foreign country",
    },
    {
      id: "47",
      term: "Employment",
      definition: "The state of having paid work",
    },
    {
      id: "48",
      term: "Inventory Management",
      definition: "The process of buying and storing materials and products while controlling costs for ordering, shipping, handling and storage",
    },
    {
      id: "49",
      term: "Project Team",
      definition: "A group of individuals assembled to preform activities that contribute toward achieving a common task related goal",
    },
    {
      id: "50",
      term: "Vendor",
      definition: "A person or business that sells something",
    },
    {
      id: "51",
      term: "Inventory",
      definition: "Amount of merchandise on hand at any particular time",
    },
    {
      id: "52",
      term: "Negotiation",
      definition: "Bargaining process between two or more seeking to discover a common ground and reach an agreement to settle a matter of mutual concern",
    },
    {
      id: "53",
      term: "Total Quality Management",
      definition: "An overall approach to long term success that views continuous improvement in all aspects of an organization as a process and not as a short term goal. it aims to transform an organization through changes in the attitudes practices structures and systems",
    },
    {
      id: "54",
      term: "Natural Risks",
      definition: "The probability of harm to human health property or the environment posed by any aspect of the physical world other than human activity",
    },
    {
      id: "55",
      term: "Strategic Management",
      definition: "Analysis of the factors associated with customers and competitors and the business itself to provide the basis for maintaining the optimum management practices",
    },
    {
      id: "56",
      term: "Knowledge",
      definition: "Awareness or familiarity gained by experience of a fact or situation",
    },
    {
      id: "57",
      term: "Business Supplies",
      definition: "The materials that are consumed within an office setting during normal business operations",
    },
    {
      id: "58",
      term: "Performance",
      definition: "The action or process of carrying out or accomplishing an action task or function",
    },
    {
      id: "59",
      term: "Planning",
      definition: "Setting goals and determining how to reach them",
    },
    {
      id: "60",
      term: "Export",
      definition: "Products that leave for another country",
    },
    {
      id: "61",
      term: "Risk Avoidance",
      definition: "Technique of risk management that involves taking steps to remove a hazard engage in alternative activity or otherwise end a specific exposure",
    },
    {
      id: "62",
      term: "Operations",
      definition: "Jobs or tasks consisting of one or more elements performed typically in one location",
    },
    {
      id: "63",
      term: "Staffing",
      definition: "The selection and training of individuals for specific job functions, and delegating them the associated resposibilities",
    },
    {
      id: "64",
      term: "Business Equipment",
      definition: "An asset used for the operating functions of a company",
    },
    {
      id: "65",
      term: "Work Flow",
      definition: "Progression of steps that comprise a work process involve two or more persons and create or add value to the organizations activities",
    },
    {
      id: "66",
      term: "Free Trade",
      definition: "Commercial trade between nations through free market principals and without regulations",
    },
    {
      id: "67",
      term: "Human Risk",
      definition: "The probability of harm due to human actions or choices",
    },
    {
      id: "68",
      term: "Data Mining",
      definition: "Reviewing very large amounts of data for useful information.",
    },
    {
      id: "69",
      term: "Risk Retention",
      definition: "A strategy in which an entity sets aside a sum as a protection against a probable loss, instead of transferring the risk by purchasing an insurance policy",
    },
    {
      id: "70",
      term: "Business Services",
      definition: "Account design maintenance printing and supply of temporary personnel provided by specialized firms to other firms",
    },
    {
      id: "71",
      term: "Controlling",
      definition: "The process of setting standards and evaluating performance",
    },
    {
      id: "72",
      term: "Quality Management Framework",
      definition: "The act of overseeing all activities and tasks needed to maintain a desired level of excellence",
    },
    {
      id: "73",
      term: "Absolute Advantage",
      definition: "A country or business has an absolute advantage if it can produce a product more efficiently than others",
    },
    {
      id: "74",
      term: "Organizational Control",
      definition: "The process of establishing and maintaining authority over and throughout a business",
    },
    {
      id: "75",
      term: "Information",
      definition: "Facts provided or learned about something or someone",
    },
    {
      id: "76",
      term: "Competitive Advantage",
      definition: "A circumstance that puts a company in a favorable or superior business position",
    },
    {
      id: "77",
      term: "Risk Transfer",
      definition: "A strategy in which an insurable risk is shifted to another party by means of an insurance policy",
    },
    {
      id: "78",
      term: "Quality Management",
      definition: "The process of overseeing that a business' activities and or tasks meet a certain standard",
    },
    {
      id: "79",
      term: "Process Control",
      definition: "Activities involved in ensuring a process is predictable stable and consistently operating at the target level of performance with only normal vision",
    },
    {
      id: "80",
      term: "Financial Analysis",
      definition: "Evaluating an organizations financial statements to determine the profitability of the organization a division within the organization or a specific event or project",
    },
    {
      id: "81",
      term: "Implement",
      definition: "To execute a decision or plan",
    },
    {
      id: "82",
      term: "Solvency",
      definition: "Refers to the ability of an organization to meet its' financial obligations",
    },
    {
      id: "83",
      term: "Digital Customer Data",
      definition: "Includes information that a business maintains about customers such as credit card numbers passwords and transactions",
    },
    {
      id: "84",
      term: "Monitor",
      definition: "To oversee the progress or quality of a project or business task",
    },
    {
      id: "85",
      term: "Cash Flow Statements",
      definition: "A financial statement used by organizations that shows the cash in a out for a set period of time",
    },
    {
      id: "86",
      term: "Digital Assets",
      definition: "Refers to an organizations website social media and email",
    },
    {
      id: "87",
      term: "Confidentiality",
      definition: "Keeping information secret",
    },
    {
      id: "88",
      term: "Change Management Life Cycle",
      definition: "Process through which an organization implements change using a three-phase process that includes identify engage and implement",
    },
    {
      id: "89",
      term: "Supply Chain Management",
      definition: "Oversees the materials, information and finances as a product moves through the channel of distribution from manufacturer to consumer",
    },
    {
      id: "90",
      term: "Streamline",
      definition: "Implementing a process to make an organization more efficient",
    },
    {
      id: "91",
      term: "Innovation",
      definition: "The process of introducing a new idea or process",
    },
    {
      id: "92",
      term: "Delegate",
      definition: "To assign",
    },
    {
      id: "93",
      term: "Learning",
      definition: "Obtaining knowledge or skills through experience or instruction",
    },
    {
      id: "94",
      term: "Project Schedule",
      definition: "A document outlining tasks to be completed and the timeframe in which those tasks must be completed",
    },
    {
      id: "95",
      term: "Evaluate",
      definition: "To assess",
    },
    {
      id: "96",
      term: "Change",
      definition: "The process of making or doing something different",
    },
    {
      id: "97",
      term: "Change Management",
      definition: "Utilizes a systematic approach to implement change within an organization",
    },
    {
      id: "98",
      term: "Handling telephone calls",
      definition: "-- Know what to talk about -- Tell the other person who you are -- Don't waste their time -- Talk clearly and confidently -- Thank them for their time",
    },
    {
      id: "99",
      term: "What written reports should include",
      definition: "-- Title page -- Abstract (summary of findings) -- Introduction (what the problem is) -- Materials and Methods -- Results -- Discussion (what it all means) -- Conclusions -- References (citations)",
    },
    {
      id: "100",
      term: "Brand promise",
      definition: "Statements made to a customer to identify what they should expect out of a product or service. -- Aka a slogan",
    },
    {
      id: "101",
      term: "Concept of economic resources",
      definition: "Resources are finite things necessary to running a company -- Natural resources (land, water, oil, etc) -- Human resources (workers) -- Capital (money, machines, and goods)",
    },
    {
      id: "102",
      term: "Principles of supply and demand",
      definition: "-- Large quantity and low demand = low prices -- Small quantity and high demand = high prices",
    },
    {
      id: "103",
      term: "Business ethics",
      definition: "Important to making the general public happy about what happens in the business world -- Creates a good reputation -- Balances the needs of stakeholders with the needs of the company -- Helps the business thrive in a global economy -- Retains employees -- Keeps the business from being penalized",
    },
    {
      id: "104",
      term: "Concept of competition",
      definition: "-- Improves customer service -- Identifies the strengths and weaknesses of the company -- Gives consumers the best goods/services for the lowest price",
    },
    {
      id: "105",
      term: "Relationship between companies and the government",
      definition: "Business on Government -- Backs politicians (ideas) -- Trade unions -- Political action committees -- Invests in government policies. Government on Business -- Laws and regulations -- Government agencies to help (small) companies",
    },
    {
      id: "106",
      term: "GDP",
      definition: "\"Gross Domestic Product\" -- Measure of the dollar value of goods/services provided by a country per year -- Shows if economy is relatively good/bad",
    },
    {
      id: "107",
      term: "Global trade",
      definition: "Aka International Trade -- Exchange of goods/services across international borders -- Affected by industrialization, globalization, and outsourcing -- New competition (and innovation)",
    },
    {
      id: "108",
      term: "Investment types",
      definition: "-- Bonds -- Stocks -- Mutual funds",
    },
    {
      id: "109",
      term: "Bonds",
      definition: "When you purchase a bond, you lend money to a company/business. In return, the government/company will pay you back.",
    },
    {
      id: "110",
      term: "Stocks",
      definition: "When you purchase a stock, you buy a piece of the company. -- Vote as a shareholder -- Can determine what a company can and can't do",
    },
    {
      id: "111",
      term: "Mutual funds",
      definition: "Collection of stocks and bonds held by a group of people -- Through mutual funds, you share risk and reward with others",
    },
    {
      id: "112",
      term: "Accounting",
      definition: "Keeping financial records -- Individual/business can see where money is coming from -- How to spend money more efficiently -- Where money is going",
    },
    {
      id: "113",
      term: "Balance sheets",
      definition: "Summarizes -- Assets -- Liabilities -- Shareholders' equity",
    },
    {
      id: "114",
      term: "Marketing and its significance",
      definition: "To remain competitive, companies must market to the whole world -- Product, placement, promotion vary (depending on location) -- Brands become known/trusted worldwide",
    },
    {
      id: "115",
      term: "Overhead costs",
      definition: "All expenses a business must pay to stay running. DOESN'T include -- Cost of materials -- Labor -- 3rd-party expenses",
    },
    {
      id: "116",
      term: "Employees and expense control",
      definition: "Employees have a large impact on business spending -- Help company save (when travelling) -- Control energy costs (lights, etc) -- Not waste office supplies -- Take care of what is used -- Keep printing to a minimum -- Accept reduced work hours",
    },
    {
      id: "117",
      term: "Career opportunities in entrepreneurship",
      definition: "Entrepreneurs . . . -- Are their own boss -- Total authority -- Impact on economy/society -- Leave a legacy",
    },
    {
      id: "118",
      term: "United States judicial system",
      definition: "2 different litigants present their case before a neutral party -- Allows the judge/jury to determine the truth",
    },
    {
      id: "119",
      term: "Environmental law",
      definition: "Regulations that try to safeguard the economy from human activity",
    },
    {
      id: "120",
      term: "Administrative law",
      definition: "-- Procedures determined by a government agency; involves operations, rules, etc -- Unique to each government agency -- Can only be challenged once a member of the public has gone through every administrative appeal",
    },
    {
      id: "121",
      term: "Types of business ownership",
      definition: "-- Sole proprietorship -- General partnership -- Limited partnership -- Limited liability company -- Corporation",
    },
    {
      id: "122",
      term: "Sole proprietorship",
      definition: "One individual operating the business alone",
    },
    {
      id: "123",
      term: "General partnership",
      definition: "2 or more people operate business by sharing expenses and profits",
    },
    {
      id: "124",
      term: "Limited partnership",
      definition: "One partner does not have liability for the other",
    },
    {
      id: "125",
      term: "Limited liability company",
      definition: "Formed by one or more individuals through a special written agreement",
    },
    {
      id: "126",
      term: "Corporation",
      definition: "Operated by a board of directors",
    },
    {
      id: "127",
      term: "Active listening skills",
      definition: "-- Clarify, listen, give feedback -- Make eye contact -- Lean forward; appropriate body language -- Paraphrase what speaker has said; repeat important points -- Empathetic, open, aware -- No distractions",
    },
    {
      id: "128",
      term: "Professional emails",
      definition: "-- Clear subject (identifies the purpose) -- Greet the person by name -- Short and to the point -- Close appropriately",
    },
    {
      id: "129",
      term: "Business letters",
      definition: "Must include -- Sender's address -- MLA date -- Inside address -- Salutation -- Body (block format) -- Closing -- Signature",
    },
    {
      id: "130",
      term: "Positive customer relations",
      definition: "-- Frequent contact with customer base -- Easy communication with customers -- Honest, upcoming -- Rewards system -- Exceed customer's expectations",
    },
    {
      id: "131",
      term: "Difficult customers + customer complaints",
      definition: "-- Be patient; customer first -- Listen and empathize -- Restate their problem -- Go about solving the issue or accurately refer them elsewhere",
    },
    {
      id: "132",
      term: "Company image through employee performance",
      definition: "Employees should care about the company's mission, vision, and values -- Work in a way that reflects this",
    },
    {
      id: "133",
      term: "Economic services VS economic goods",
      definition: "-- Businesses make a profit through both -- Products are tangible items (food, clothes, etc) -- Services are non-tangible (baby-sitting, tutoring, etc)",
    },
    {
      id: "134",
      term: "Businesses and society",
      definition: "-- Business shapes society -- State of economy influences how people live -- Bring changes/innovations to society -- Changes businesses by setting rules/standards",
    },
    {
      id: "135",
      term: "Types of economic systems",
      definition: "-- Traditional -- Command -- Market -- Mixed",
    },
    {
      id: "136",
      term: "Traditional economy",
      definition: "Bartering for and trading goods, resources, and services",
    },
    {
      id: "137",
      term: "Command economy",
      definition: "Government controls the economy by controlling the production/sales of goods and services",
    },
    {
      id: "138",
      term: "Market economy",
      definition: "Each person makes their own economic decisions",
    },
    {
      id: "139",
      term: "Mixed economy",
      definition: "The government controls some aspects of what is sold/who can buy",
    },
    {
      id: "140",
      term: "Private enterprise",
      definition: "Business activities are not controlled by the state",
    },
    {
      id: "141",
      term: "Public enterprise",
      definition: "Business activities are created and controlled by the state",
    },
    {
      id: "142",
      term: "Factors that affect a business's profit",
      definition: "-- Profit margin (how much a business spends vs how much it makes) -- Costs (investment, operating, etc) -- State of the economy -- Market",
    },
    {
      id: "143",
      term: "Job specialization and productivity",
      definition: "The more job specialization there is, the more the productivity increases",
    },
    {
      id: "144",
      term: "Impact of the Law of Diminishing Returns",
      definition: "-- No matter how much time, human, and capital resources put into something, there is a certain amount more that the thing can make the company -- Prevents wasting resources on things with a low return rate",
    },
    {
      id: "145",
      term: "How the economy affects consumer spending",
      definition: "People usually decide to spend money when the economy is good. -- Save money when the economy is bad",
    },
    {
      id: "146",
      term: "Impact of inflation on business",
      definition: "-- Businesses increase their costs to still make a profit -- Lose customers as a result of higher prices",
    },
    {
      id: "147",
      term: "Desirable personality traits",
      definition: "-- Creative (outside the box) -- Dependable (people follow) -- Compassionate (respect) -- Enthusiastic (right attitude) -- Motivated (effective) -- Resilient (improve from failure) -- Confident (believe in yourself)",
    },
    {
      id: "148",
      term: "Concept of leadership",
      definition: "-- Ethical -- Respectful -- Objective -- Open-minded -- Skilled in their field -- Good communications (listening and talking)",
    },
    {
      id: "149",
      term: "Value of time and money",
      definition: "Money now is better than money later",
    },
    {
      id: "150",
      term: "Insurance",
      definition: "When you buy an insurance, you agree that if something happens to the insured thing, it will be fixed, replaced, or protected -- Up to a certain point",
    },
    {
      id: "151",
      term: "Ethics in accounting",
      definition: "Accountants work with people's money, so you need ethical accountants to prevent theft, etc",
    },
    {
      id: "152",
      term: "Cash flow statements",
      definition: "-- How much money is coming into/going out of a business -- How much profit -- Where to cut spending",
    },
    {
      id: "153",
      term: "Income statements",
      definition: "-- How much a business has made in a certain accounting period -- Net profit/loss in a time period",
    },
    {
      id: "154",
      term: "Human resource management",
      definition: "-- Must work ethically -- Safety in the workplace -- Zero discrimination -- Improves public perception of the company",
    },
    {
      id: "155",
      term: "Marketing functions list",
      definition: "-- Distribution -- Financing -- Marketing info management -- Pricing -- Product and service management -- Promotion -- Selling",
    },
    {
      id: "156",
      term: "Health and safety regulations",
      definition: "-- OSHA is a government agency that tries to make sure workplaces are safe -- Businesses are required to provide their employees with protection from harm",
    },
  ],
  "entrepreneurship": [
    {
      id: "1",
      term: "Acquisition",
      definition: "The purchase of a company by another, larger firm, which absorbs the smaller company into its operations.",
    },
    {
      id: "2",
      term: "Board Of Directors",
      definition: "A group of individuals elected by a firm's shareholders and charged with overseeing, and taking legal responsibility for, the firm's actions.",
    },
    {
      id: "3",
      term: "Business Plan",
      definition: "Document in which the entrepreneur summarizes her or his business strategy for the proposed new venture and how that strategy will be implemented.",
    },
    {
      id: "4",
      term: "Chief Executive Officer (CEO)",
      definition: "The person responsible for the firm's overall performance.",
    },
    {
      id: "5",
      term: "Co-operative",
      definition: "An organization that is formed to benefit its owners in the form of reduced prices and/or the distribution of surpluses at year-end.",
    },
    {
      id: "6",
      term: "Common Stock",
      definition: "Shares whose owners usually have last claim on the corporation's assets (after creditors and owners of preferred stock) but who have voting rights in the firm.",
    },
    {
      id: "7",
      term: "Conglomerate Merger",
      definition: "A merger of two firms in completely unrelated businesses.",
    },
    {
      id: "8",
      term: "Corporate Governance",
      definition: "The relationship between shareholders, the board of directors, and other top managers in the corporation.",
    },
    {
      id: "9",
      term: "Divestiture",
      definition: "Occurs when a company sells part of its existing business operations to another company.",
    },
    {
      id: "10",
      term: "Employee Stock Ownership Plan (ESOP)",
      definition: "When a corporation buys its own stock with loaned funds and giving them to its employees. Employees \"earn'' the stock based on some condition such as seniority. Employees control the stock's voting rights immediately, even though they may not take physical possession of the stock until specified conditions are met. This aligns the employees' interest with those of the shareholders, as they are shareholders themselves.",
    },
    {
      id: "11",
      term: "Entrepreneur",
      definition: "A business person who accepts both the risks and the opportunities involved in creating and operating a new business venture.",
    },
    {
      id: "12",
      term: "Franchise",
      definition: "A form of business by which the owner (franchisor) of a product, service or method obtains distribution/marketing through affiliated dealers (franchisees). example: mcdonalds",
    },
    {
      id: "13",
      term: "Franchising Agreement",
      definition: "Specifies the duties and responsibilities of the franchisee and the franchiser.",
    },
    {
      id: "14",
      term: "Friendly Takeover",
      definition: "An acquisition in which the management of the acquired company welcomes the firm's buyout by another company.",
    },
    {
      id: "15",
      term: "General Partner",
      definition: "A partner who is actively involved in managing the firm and has unlimited liability.",
    },
    {
      id: "16",
      term: "Horizontal Merger",
      definition: "A merger of two firms that have previously been direct competitors in the same industry.",
    },
    {
      id: "17",
      term: "Hostile Takeover",
      definition: "An acquisition in which the management of the acquired company fights the firm's buyout by another company.",
    },
    {
      id: "18",
      term: "Initial Public Offering (IPO)",
      definition: "Selling shares of stock in a company for the first time to the general investing public.",
    },
    {
      id: "19",
      term: "Inside Directors",
      definition: "Members of a corporation's board of directors who are also full-time employees of the corporation.",
    },
    {
      id: "20",
      term: "Limited Liability",
      definition: "Investor liability is limited to their personal investments in the corporation; courts cannot touch the personal assets of investors in the event that the corporation goes bankrupt.",
    },
    {
      id: "21",
      term: "Limited Partner",
      definition: "A partner who generally does not participate actively in the business, and whose liability is limited to the amount invested in the partnership.",
    },
    {
      id: "22",
      term: "Merger",
      definition: "The union of two companies to form a single new business.",
    },
    {
      id: "23",
      term: "Microenterprise",
      definition: "An enterprise that the owner operates part-time from the home while continuing regular employment elsewhere.",
    },
    {
      id: "24",
      term: "Outside Directors",
      definition: "Members of a corporation's board of directors who are not also employees of the corporation on a day-to-day basis.",
    },
    {
      id: "25",
      term: "Parent Corporation",
      definition: "A corporation that owns a subsidiary.",
    },
    {
      id: "26",
      term: "Partnership",
      definition: "A business with two or more owners who share in the operation of the firm and in financial responsibility for the firm's debts.",
    },
    {
      id: "27",
      term: "Preferred Stock",
      definition: "Shares whose owners have first claim on the corporation's assets and profits but who usually have no voting rights in the firm.",
    },
    {
      id: "28",
      term: "Private Corporation",
      definition: "A business whose stock is held by a small group of individuals and is not usually available for sale to the general public.",
    },
    {
      id: "29",
      term: "Public Corporation",
      definition: "A business whose stock is widely held and available for sale to the general public.",
    },
    {
      id: "30",
      term: "Small Business",
      definition: "An independently owned and managed business that does not dominate its market.",
    },
    {
      id: "31",
      term: "Sole Proprietorship",
      definition: "Business owned and usually operated by one person who is responsible for all of its debts.",
    },
    {
      id: "32",
      term: "Spinoff",
      definition: "Strategy of setting up one or more corporate units as new, independent corporations. The corporation that does the spin off is a parent corporation. (division of a business, type of divestiture)",
    },
    {
      id: "33",
      term: "Stock",
      definition: "A share of ownership in a corporation.",
    },
    {
      id: "34",
      term: "Stockholders (or Shareholders)",
      definition: "Those who own shares of stock in a company.",
    },
    {
      id: "35",
      term: "Strategic Alliance",
      definition: "An enterprise in which two or more persons or companies temporarily join forces to undertake a particular project.",
    },
    {
      id: "36",
      term: "Subsidiary Corporation",
      definition: "One that is owned by another corporation.",
    },
    {
      id: "37",
      term: "Tender Offer",
      definition: "An offer to buy shares made by a prospective buyer directly to a corporation's shareholders.",
    },
    {
      id: "38",
      term: "Unlimited Liability",
      definition: "A person who invests in a business is liable for all debts incurred by the business; personal possessions can be taken to pay debts.",
    },
    {
      id: "39",
      term: "Vertical Merger",
      definition: "A merger of two firms that have previously had a buyer—seller relationship.",
    },
    {
      id: "40",
      term: "Managerial Accounting",
      definition: "Capturing the business's day-to-day financial activities in pursuit of an organization's goals.",
    },
    {
      id: "41",
      term: "Commercial Banks",
      definition: "Banks that offer service to the general public and companies",
    },
    {
      id: "42",
      term: "Debt Financing",
      definition: "Borrowing money and not giving up ownership, comes with interest and strict rules",
    },
    {
      id: "43",
      term: "A Business's Current Assets That Are Listed On Financial Statements Are",
      definition: "Liquid",
    },
    {
      id: "44",
      term: "What is the base amount used for vertical analysis of items on the income statement?",
      definition: "Net sales",
    },
    {
      id: "45",
      term: "A Common Risk Of Innovation Is",
      definition: "Loss of jobs",
    },
    {
      id: "46",
      term: "Buyout",
      definition: "The purchase of a controlling share in a company",
    },
    {
      id: "47",
      term: "Cash Flow Statement",
      definition: "A financial statement that shows the movement in the Cash account of a company. It presents cash inflows (receipts) and outflows (payments) in the three activities of business: operating, investing, and financing",
    },
    {
      id: "48",
      term: "Investment",
      definition: "The act of committing money or capital to an endeavour with the expectation of obtaining an additional income or profit",
    },
    {
      id: "49",
      term: "Financing",
      definition: "The act of providing funds/capital for business activities, making purchases or investing and help them achieve their goals",
    },
    {
      id: "50",
      term: "Balance Sheet",
      definition: "A financial statement that summarizes a company's assets, liabilities and shareholders' equity at a specific point in time. These three balance sheet segments give investors an idea as to what the company owns and owes, as well as the amount invested by shareholders. Assets = Liabilities + Shareholders' Equity",
    },
    {
      id: "51",
      term: "Asset",
      definition: "A piece of property or equipment purchased exclusively or primarily for business use. categories of assets: current and non-current, short-term and long-term, operating and capitalized, and tangible and intangible",
    },
    {
      id: "52",
      term: "Liability",
      definition: "A company's financial debt or obligations that arise during the course of its business operations",
    },
    {
      id: "53",
      term: "Shareholder's Equity",
      definition: "The net value of a company, or the amount that would be returned to shareholders if all the company's assets were liquidated and all its debts repaid",
    },
    {
      id: "54",
      term: "Liquidate",
      definition: "Convert assets into cash or cash equivalents by selling them on the open market",
    },
    {
      id: "55",
      term: "Financier",
      definition: "Person or organization that provides capital for a company",
    },
    {
      id: "56",
      term: "Vertical Analysis",
      definition: "A method of financial statement analysis in which each entry for each of the three major categories of accounts (assets, liabilities and equities), in a balance sheet is represented as a proportion of the total account",
    },
    {
      id: "57",
      term: "Economic Downturn",
      definition: "A fall in economic growth just before recession",
    },
    {
      id: "58",
      term: "Net Sales",
      definition: "Net sales are the amount of sales generated by a company after the deduction of returns, allowances for damaged or missing goods and any discounts allowed",
    },
    {
      id: "59",
      term: "Paradigm Shift",
      definition: "A paradigm shift is a major change in how some process is accomplished. A paradigm shift can happen when new technology is introduced that radically alters the production process of a good",
    },
    {
      id: "60",
      term: "Sovereign Immunity",
      definition: "A legal doctrine by which the sovereign or state cannot commit a legal wrong and is immune from civil suit or criminal prosecution",
    },
    {
      id: "61",
      term: "Eminent Domain",
      definition: "The right of a government or its agent to expropriate private property for public use, with payment of compensation",
    },
    {
      id: "62",
      term: "Absolute Privilege",
      definition: "A special right, advantage, or immunity granted or available only to a particular person or group of people",
    },
    {
      id: "63",
      term: "Infringement",
      definition: "Act of breaking the law or agreements in a contract",
    },
    {
      id: "64",
      term: "Consideration (in Contract)",
      definition: "A benefit which must be bargained for between the parties, and is the essential reason for a party entering into a contract",
    },
    {
      id: "65",
      term: "National Labor Relations Act",
      definition: "An act protecting rights of employees and employers, encouraging collective bargaining (negotiation of wages and other subjects by a group fo employees)",
    },
    {
      id: "66",
      term: "Vocational Rehabilitation Act",
      definition: "Prohibits discrimination on the basis of disability in programs conducted by Federal agencies",
    },
    {
      id: "67",
      term: "Fair Labor Standards Act",
      definition: "Establishes minimum wage, overtime pay, record-keeping, and youth employment standards affecting employees",
    },
    {
      id: "68",
      term: "Americans with disabilities act",
      definition: "A civil rights law that prohibits discrimination based on disability",
    },
    {
      id: "69",
      term: "Open Corporation",
      definition: "A corporation whose ownership shares are available for exchange on a public market",
    },
    {
      id: "70",
      term: "Consolidation",
      definition: "Combining small companies into one large one",
    },
    {
      id: "71",
      term: "Industrial User",
      definition: "A company that buys materials from other manufacturers to satisfy their own needs",
    },
    {
      id: "72",
      term: "Indirect Agent",
      definition: "Promoters who are third-parties to a business, like a partner or affiliate, rather than a company's personnels",
    },
    {
      id: "73",
      term: "Agent",
      definition: "A person who represents a person or company in matters of business and who can make business decisions, agreements, etc., for them",
    },
    {
      id: "74",
      term: "Operating Policy",
      definition: "A governing principle that mandates or constrains actions within a business",
    },
    {
      id: "75",
      term: "Binding Contract",
      definition: "An agreement in writing between two or more individuals or entities in which a court can impose penalties in the event one party attempts to negate on his or her promise",
    },
    {
      id: "76",
      term: "What Are The Three Main Factors In Feasibility Study?",
      definition: "1. staffing needs 2. return on investment 3. raw material needs",
    },
    {
      id: "77",
      term: "Tactical Plans",
      definition: "Short-term plans for a business",
    },
    {
      id: "78",
      term: "Strategic Plans",
      definition: "Long-term plans for a business",
    },
    {
      id: "79",
      term: "Market-segment Analysis",
      definition: "Analyzing a group of potential customers and collecting information on them",
    },
    {
      id: "80",
      term: "What Factors Should A Small Business Owner Consider When Hiring Someone?",
      definition: "Necessary skills and affordability",
    },
    {
      id: "81",
      term: "Quota",
      definition: "A limited or fixed number or amount of people or things, in particular",
    },
    {
      id: "82",
      term: "Trade Credit",
      definition: "The credit extended to you by suppliers who let you buy now and pay later",
    },
    {
      id: "83",
      term: "Return On Equity",
      definition: "The ability of a company to generate income with their investments",
    },
    {
      id: "84",
      term: "When Determining Its Hiring Needs, A Business Must Consider Its",
      definition: "Financial status and productivity needs",
    },
    {
      id: "85",
      term: "Secondary Needs",
      definition: "Wants such as entertainment or leisure",
    },
    {
      id: "86",
      term: "Primary Needs",
      definition: "Needs such as food, shelter",
    },
    {
      id: "87",
      term: "Payroll Stub",
      definition: "A notice that the direct deposit transaction has gone through",
    },
    {
      id: "88",
      term: "Corporate Chain",
      definition: "Chain of a business, starbucks is a corporate chain",
    },
    {
      id: "89",
      term: "Economic System",
      definition: "A system of production, resource allocation, and distribution of goods and services within a society or a given geographic area",
    },
    {
      id: "90",
      term: "Performance Measure",
      definition: "Regular measurement of outcomes and results, which generates data on the effectiveness and efficiency of programs",
    },
    {
      id: "91",
      term: "Measure Of Central Tendency",
      definition: "Mean, median, mode",
    },
    {
      id: "92",
      term: "Geometric Mean",
      definition: "9 in 3,9,27",
    },
    {
      id: "93",
      term: "Logistics",
      definition: "The part of supply chain management that plans the flow and storage of goods/services between the point of origin and the point of consumption in order to meet customer's requirements",
    },
    {
      id: "94",
      term: "ARCI matrix",
      definition: "Accountable, responsible, consultive, informed. it defines roles and responsibilities",
    },
    {
      id: "95",
      term: "Sweepstakes",
      definition: "A type of contest where a prize or prizes may be awarded to a winner or winners. (kind of like a gamble)",
    },
    {
      id: "96",
      term: "Rebate",
      definition: "A partial refund to someone who has paid",
    },
    {
      id: "97",
      term: "Supervisory Management",
      definition: "The action of overseeing and managing employees in the workplace. (low)",
    },
    {
      id: "98",
      term: "Middle Level Management",
      definition: "They implement company strategy in the most efficient way. are higher in power than supervisory, but lower than execs.",
    },
    {
      id: "99",
      term: "Dashboard",
      definition: "A panel that organizes and presents information in a way that is easy to read",
    },
    {
      id: "100",
      term: "Capillary",
      definition: "Cloud-based marketplace",
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
      term: "Hospitality",
      definition: "Meeting the needs of guests with kindness and goodwill.",
    },
    {
      id: "2",
      term: "Food & Beverage Industry",
      definition: "Businesses that prepare food for customers.",
    },
    {
      id: "3",
      term: "Vacation",
      definition: "A period of time during which a person rests and is free from daily obligations.",
    },
    {
      id: "4",
      term: "Lodging",
      definition: "A place to sleep for one or more nights.",
    },
    {
      id: "5",
      term: "Recreation",
      definition: "Any activity people do for rest, relaxation, and enjoyment.",
    },
    {
      id: "6",
      term: "Travel Industry",
      definition: "Business that physically moves people from one place to another.",
    },
    {
      id: "7",
      term: "Business Travel",
      definition: "Travel people do as part of their jobs.",
    },
    {
      id: "8",
      term: "Pleasure Travel",
      definition: "Travel done for rest and relaxation.",
    },
    {
      id: "9",
      term: "Independent Business",
      definition: "A business that has only one location and one unit.",
    },
    {
      id: "10",
      term: "Chain",
      definition: "A business that has more than one location under the same name and ownership.",
    },
    {
      id: "11",
      term: "Franchisee",
      definition: "The right to do business using the brand and products of another business.",
    },
    {
      id: "12",
      term: "Lodging Property",
      definition: "A business that provides overnight accommodations.",
    },
    {
      id: "13",
      term: "Brand",
      definition: "A name, logo, tagline, or any combination of these that distinguishes a product from its competitors.",
    },
    {
      id: "14",
      term: "Package",
      definition: "A trip that includes several segments of the hospitality business, for one fee.",
    },
    {
      id: "15",
      term: "Hotel Management",
      definition: "The day to day running of a hotel.",
    },
    {
      id: "16",
      term: "Why is the hospitality industry important to the economy?",
      definition: "It generates trillions of dollars and provides many jobs.",
    },
    {
      id: "17",
      term: "List the four segments of the hospitality industry",
      definition: "Food service, lodging, recreation, and travel & tourism.",
    },
    {
      id: "18",
      term: "Word of-Mouth Publicity",
      definition: "Informal conversation people have about their experiences with a business.",
    },
    {
      id: "19",
      term: "Customer Service",
      definition: "Total customer experience with a business.",
    },
    {
      id: "20",
      term: "Empathy",
      definition: "Ability to put yourself in someone else's shoes and know how that person feels.",
    },
    {
      id: "21",
      term: "Why is it important for employees to be well groomed and clean?",
      definition: "The image of a hospitality business comes from the impression that is made by its staff.",
    },
    {
      id: "22",
      term: "Peak",
      definition: "Season with the highest demand.",
    },
    {
      id: "23",
      term: "Recession",
      definition: "Is a period when the economy is slowing down and doing poorly.",
    },
    {
      id: "24",
      term: "Expansion",
      definition: "Is a period when the economy is growing and doing well.",
    },
    {
      id: "25",
      term: "Souvenir",
      definition: "An item that reminds you of a place you have visited.",
    },
    {
      id: "26",
      term: "Advertising",
      definition: "The act or practice of calling public attention to one's product and/or service, especially by paid announcements in newspapers and magazines, over radio or television, on billboards, etc.",
    },
    {
      id: "27",
      term: "Upselling",
      definition: "Is a sales technique whereby a seller induces the customer to purchase more expensive items, upgrades or other add-ons in an attempt to make a more profitable sale.",
    },
    {
      id: "28",
      term: "Market",
      definition: "Consists of all the people who could potentially buy what you are selling.",
    },
    {
      id: "29",
      term: "Commercial Food Service",
      definition: "A food and beverage business that competes for customers.",
    },
    {
      id: "30",
      term: "Market Segment",
      definition: "Is a subgroup of a larger market with similar needs and wants for the product being sold.",
    },
    {
      id: "31",
      term: "Target Market",
      definition: "Is the market segment that you choose to market towards.",
    },
    {
      id: "32",
      term: "Theme",
      definition: "Is a specific idea around which something is organized.",
    },
    {
      id: "33",
      term: "Full Service Restaurant",
      definition: "A restaurant in which customers are seated at big tables, give their orders to a server, and are served their food at the table.",
    },
    {
      id: "34",
      term: "Food Production",
      definition: "Is the process of changing raw foods into menu items.",
    },
    {
      id: "35",
      term: "Standardized Recipe",
      definition: "A recipe that has been tested for its consistency.",
    },
    {
      id: "36",
      term: "Suggestive Selling",
      definition: "Recommending additional products or services to a customer while that customer is buying something else. A hotel reservations front desk might recommend a larger room.",
    },
    {
      id: "37",
      term: "Station",
      definition: "The location in the room where food and beverage is available.",
    },
    {
      id: "38",
      term: "Banquet Servers",
      definition: "The people responsible for serving the food and beverages during the banquet.",
    },
    {
      id: "39",
      term: "Tort",
      definition: "Private wrongdoing against another person.",
    },
    {
      id: "40",
      term: "Administrative Law",
      definition: "Rules and regulations that have been established by government agencies and have authority to enact and enforce business functions, including aviation, taxation, and commerce.",
    },
    {
      id: "41",
      term: "Retailers",
      definition: "Businesses that buy consumer goods or services and sell them to ultimate consumers.",
    },
    {
      id: "42",
      term: "Ground Rules",
      definition: "Basic rules.",
    },
    {
      id: "43",
      term: "Business Process Management",
      definition: "Focuses on alignment by stressing innovation, flexibility, and technology in order to meet customers' needs.",
    },
    {
      id: "44",
      term: "Organizational Resources",
      definition: "Everything that business uses to operate (i.e. equipment, capital, patents, brand names).",
    },
    {
      id: "45",
      term: "Accounting",
      definition: "Process of keeping financial records.",
    },
    {
      id: "46",
      term: "Primary Information",
      definition: "Collected for purpose at hand (suggestion cards collected from guest).",
    },
    {
      id: "47",
      term: "Secondary Information",
      definition: "Collected by others (competitors' website, government documents, online industry report).",
    },
    {
      id: "48",
      term: "Presentation Software",
      definition: "Include slides, video, graphics, sound, colour.",
    },
    {
      id: "49",
      term: "Malware",
      definition: "Illegal computer program that is used to disrupt computer processes, destroy computer programs, and access confidential business info.",
    },
    {
      id: "50",
      term: "Trade/Professional Organization",
      definition: "Consist of individuals or groups that work within a particular industry; benefits include networking opportunities, establishment of consistent industry standards, trade shows, and venues for members to further education within industry.",
    },
    {
      id: "51",
      term: "Product Extension",
      definition: "(i.e. hotel chain added to new line of hotels).",
    },
    {
      id: "52",
      term: "Podcast",
      definition: "Digital audio or visual programs that can be automatically/manually downloaded from Internet to customers' mp3 players or computers.",
    },
    {
      id: "53",
      term: "Social Bookmarking Websites",
      definition: "Allow subscribers to post, tag, and rank links to articles, blogs, photos, and video online.",
    },
    {
      id: "54",
      term: "Filters",
      definition: "Computer programs that block out unwanted information, such as junk emails.",
    },
    {
      id: "55",
      term: "Digital Colour",
      definition: "One aspect of digital imaging which develops computer-generated ads and promotional materials and printing of those materials.",
    },
    {
      id: "56",
      term: "Amplified Word-of-Mouth",
      definition: "Marketeers purposely encourage their customers to share information about business with others in community.",
    },
    {
      id: "57",
      term: "Factual Strategy",
      definition: "Involves explaining what product is, what it does, and how it benefits consumer.",
    },
    {
      id: "58",
      term: "Advertising Proof",
      definition: "Shows advertiser exactly way that ad will appear in print after it is typeset.",
    },
    {
      id: "59",
      term: "Database",
      definition: "Computerize storage for info. and facts; can be tracked down.",
    },
    {
      id: "60",
      term: "Intermediaries",
      definition: "Go-betweens (i.e. distribution channel members).",
    },
    {
      id: "61",
      term: "Fiscal",
      definition: "Public treasury/revenue.",
    },
    {
      id: "62",
      term: "Quotas",
      definition: "Proportional part/share of fixed total amount.",
    },
    {
      id: "63",
      term: "Requisition",
      definition: "Written request to obtain supplies/ingredients.",
    },
    {
      id: "64",
      term: "Queues",
      definition: "Data and programs waiting to be processed.",
    },
    {
      id: "65",
      term: "Gophers",
      definition: "Designed for distributing, searching, and retrieving documents over the Internet.",
    },
    {
      id: "66",
      term: "Liability",
      definition: "A company's legal debts or obligations that arise during the course of business operations. Liabilities are settled over time through the transfer of economic benefits including money, goods or services.",
    },
    {
      id: "67",
      term: "Phishing",
      definition: "Occurs when a scammer sends out an e-mail pretending to be a legitimate company, such as a credit-card company, in order to gain personal information. The phisher typically sends readers to a fake website that asks them to enter personal information, which can include credit card numbers, social security numbers, bank account numbers, etc. It's a good idea to be especially suspicious of any requests for personal information you receive online. Avoid giving out personal information unless you contact the company yourself.",
    },
    {
      id: "68",
      term: "Insurance",
      definition: "A practice or arrangement by which a company or government agency provides a guarantee of compensation for specified loss, damage, illness, or death in return for a payment.",
    },
    {
      id: "69",
      term: "Product Placement",
      definition: "A practice in which manufacturers of goods or providers of a service gain exposure for their products by paying for them to be featured in movies and television programs.",
    },
    {
      id: "70",
      term: "Autocratic",
      definition: "A leadership style in which the leader dictates policies and procedures, decides what goals are to be achieved, and directs and controls all activities.",
    },
    {
      id: "71",
      term: "Consensus",
      definition: "Participants have shared values and goals, and have a broad agreement on specific issues and overall direction. Consensus implies that everyone accepts and supports the decision, and understands the reasons for making it.",
    },
    {
      id: "72",
      term: "Democratic",
      definition: "Involves a team guided by a leader where all individuals are involved in the decision-making process to determine what needs to be done, and how it should be done. The group's leader has the authority to make the final decision of the organization.",
    },
    {
      id: "73",
      term: "Laissez Faire",
      definition: "Leaders try to give the least possible guidance to subordinates, and try to achieve control through less obvious means. They believe that people excel when they are left alone to respond to their responsibilities and obligations in their own ways.",
    },
  ],
  "marketing": [
    {
      id: "1",
      term: "Appropriation (Tort)",
      definition: "Involves a business or person who uses, without permission, another person's name, likeness, and other unique characteristics for the benefit or gain of the user",
    },
    {
      id: "2",
      term: "Torts",
      definition: "Civil wrongdoings that cause harm or injury to another party",
    },
    {
      id: "3",
      term: "Wrongful Interference (Tort)",
      definition: "Predatory behavior undertaken by a business to draw either customers or employees away from a competitor",
    },
    {
      id: "4",
      term: "Defamation (Tort)",
      definition: "Making false, malicious statements about a person or organization",
    },
    {
      id: "5",
      term: "Conversion (Tort)",
      definition: "When personal property is taken from the owner and given to someone else to use",
    },
    {
      id: "6",
      term: "Corporation",
      definition: "A type of business that is operated by several people and owned by stockholders",
    },
    {
      id: "7",
      term: "Partnership",
      definition: "A form of business ownership in which the business is owned by two or more persons",
    },
    {
      id: "8",
      term: "Sole Proprietorship",
      definition: "Form of business ownership in which the business is owned by one person",
    },
    {
      id: "9",
      term: "Cooperative",
      definition: "Owned and operated by its user-owners to supply goods and services to its members",
    },
    {
      id: "10",
      term: "Channel Management",
      definition: "Involves understanding the concepts and processes needed to identify, select, monitor, and evaluate sales channels",
    },
    {
      id: "11",
      term: "Promotion",
      definition: "Involves understanding the concepts and strategies needed to communicate information about goods, services, images, and/or ideas to achieve a desired outcome",
    },
    {
      id: "12",
      term: "Pricing",
      definition: "The marketing function that involves determining and adjusting prices to maximize return and meet customers' perceptions of value",
    },
    {
      id: "13",
      term: "Product/Service Management",
      definition: "The marketing function that involves obtaining, developing, maintaining, and improving a product or service mix in response to market opportunities",
    },
    {
      id: "14",
      term: "Intermediarires",
      definition: "Middlemen and incude sales agents, wholesalers, and retailers who perform specific functions in the movement of goods form producers to consumers",
    },
    {
      id: "15",
      term: "Direct Channels of Distribution",
      definition: "Involve producers and either industrial or ultimate consumers",
    },
    {
      id: "16",
      term: "Green Marketing",
      definition: "Practice of pricing, promoting, and distributing products in such a way that they do not harm the natural environment",
    },
    {
      id: "17",
      term: "Consumer Protection",
      definition: "Deals with safety features and product labeling standards that protect the consumer",
    },
    {
      id: "18",
      term: "Social Awareness",
      definition: "The practice of enlightening the community of business actions to promote social welfare",
    },
    {
      id: "19",
      term: "International Marketing",
      definition: "Marketing goods and services in foreign countries",
    },
    {
      id: "20",
      term: "Hidden Complaint",
      definition: "Conceal the real complaint a customer has by stating another believable but secondary complaint for their dissatisfaction",
    },
    {
      id: "21",
      term: "Sincere Complaint",
      definition: "A complaint when the customer expresses an honest dissatisfaction",
    },
    {
      id: "22",
      term: "Service Complaint",
      definition: "A complaint which results from poor service",
    },
    {
      id: "23",
      term: "Business Complaint",
      definition: "A complaint in which the customer is dissatisfied with the business in general",
    },
    {
      id: "24",
      term: "Brand Promise",
      definition: "A business's agreement (spoken or unspoken) with customers that will consistently meet their expectations and deliver on its brand characteristics and values",
    },
    {
      id: "25",
      term: "Time Utility",
      definition: "When products are available at the time they are needed or wanted by customers",
    },
    {
      id: "26",
      term: "Form Utility",
      definition: "Usefulness created by altering or changing the form or shape of a good to make it more useful to customers",
    },
    {
      id: "27",
      term: "Place Utility",
      definition: "Usefulness created by making sure that goods and services are available at the place where they are needed or wanted by customers.",
    },
    {
      id: "28",
      term: "Possession Utility",
      definition: "Usefulness created when ownership of a product is transferred from the seller to the user",
    },
    {
      id: "29",
      term: "Quality Control",
      definition: "Ensuring that products met predetermined standards for excellence; also part of operations",
    },
    {
      id: "30",
      term: "Purchasing",
      definition: "Acquiring necessary goods and services; part of operations",
    },
    {
      id: "31",
      term: "Inventory Management",
      definition: "Supervising inventory levels to make sure there is an appropriate balance; part of operations",
    },
    {
      id: "32",
      term: "Competition",
      definition: "Rivalry between two or more business to attract scarce (limited) customer dollars",
    },
    {
      id: "33",
      term: "Profit Motive",
      definition: "Desire to make profit, which moves people to invest in business",
    },
    {
      id: "34",
      term: "Inflation",
      definition: "Rapid rise in prices usually occurring when demand exceeds supply",
    },
    {
      id: "35",
      term: "Excise Tax",
      definition: "A special government tax on certain items, such as gasoline, certain businesses, cars, etc.",
    },
    {
      id: "36",
      term: "Subsidy",
      definition: "Government financial help given to a business",
    },
    {
      id: "37",
      term: "Bonds",
      definition: "A piece of paper (real or virtual) that says the governing body or corporation will borrow your money at a particular interest rate for a particular period of time; Interest-bearing certificates issued by government that promise to pay bond owners a certain sum at a specified time",
    },
    {
      id: "38",
      term: "Discount",
      definition: "The amount by which the price of something is reduced",
    },
    {
      id: "39",
      term: "Union Stewards",
      definition: "Union members elected by their peers to handle any grievances or problems members might have with management",
    },
    {
      id: "40",
      term: "Union President",
      definition: "Responsibilities include leading the union as a whole rather than assisting individuals",
    },
    {
      id: "41",
      term: "Mediator",
      definition: "Involved in union negotiations, clarifying issues, and making suggestions concerning the contract",
    },
    {
      id: "42",
      term: "Arbitrator",
      definition: "Assists with (union) negotiations; In binding arbitration, this person's decisions regarding the contract are final and cannot be changed",
    },
    {
      id: "43",
      term: "Empathy",
      definition: "The ability to put yourself in another person's place",
    },
    {
      id: "44",
      term: "Self-Understanding",
      definition: "Comprehending one's personal needs interests, values, and motives and recognizing their effects on one's behavior",
    },
    {
      id: "45",
      term: "Productivity",
      definition: "The amount and value of goods and services produced (outputs) from set amounts of resources (inputs)",
    },
    {
      id: "46",
      term: "Consensus",
      definition: "Decision-making outcome that requires the substantial agreement of each group member",
    },
    {
      id: "47",
      term: "Minority Rule",
      definition: "Few people in the group make the decision",
    },
    {
      id: "48",
      term: "Vision",
      definition: "A desire for the future that is achieved over time with determination and hard work",
    },
    {
      id: "49",
      term: "Store of Value",
      definition: "When money is saved rather than spent",
    },
    {
      id: "50",
      term: "Medium of Exchange",
      definition: "When money is used to obtain goods and services",
    },
    {
      id: "51",
      term: "Bartering",
      definition: "Trading one good or service for another good or service",
    },
    {
      id: "52",
      term: "Measure of Value",
      definition: "When money functions as this, the individual holding the money assesses what s/he is willing to pay for a good or service",
    },
    {
      id: "53",
      term: "Commercial Bank",
      definition: "Provides a variety of financial services to individuals and business. Besides providing savings accounts and other saving options, banks also make loans and offer credit cards. Many large banks have trust departments and help individuals plan for retirement. It may be possible to obtain all necessary financial services from that institution",
    },
    {
      id: "54",
      term: "Taxation Department",
      definition: "Collects various types of taxes",
    },
    {
      id: "55",
      term: "High Interest Rates",
      definition: "A business condition that can create economic risks",
    },
    {
      id: "56",
      term: "Accounting",
      definition: "The process of keeping and interpreting financial records",
    },
    {
      id: "57",
      term: "Liability",
      definition: "Financial obligations a business has",
    },
    {
      id: "58",
      term: "Liquid Asset",
      definition: "Cash or any asset that can quickly be converted into cash",
    },
    {
      id: "59",
      term: "Accounts Receivable",
      definition: "Money owed to the business for purchases made by customers",
    },
    {
      id: "60",
      term: "Dividends",
      definition: "Sums of money paid to investors or stockholders as earnings on investments",
    },
    {
      id: "61",
      term: "Cash Conversion Cycle",
      definition: "The ratio that reflects the number of days between a company paying for raw materials and receiving cash from selling the products made from those raw materials",
    },
    {
      id: "62",
      term: "Profit Margin",
      definition: "The amount of money that a business earns on sales after expenses; expressed as a ratio",
    },
    {
      id: "63",
      term: "Human Resources Management",
      definition: "The process of planning, staffing, leading, and organizing the employees of a business",
    },
    {
      id: "64",
      term: "Distribution Channels",
      definition: "Paths, or routes, that goods or services take from the producer to the ultimate consumer or industrial user",
    },
    {
      id: "65",
      term: "Marketing Research",
      definition: "The systematic gathering, recording, and analyzing of data about a specific issue, situation, or concern",
    },
    {
      id: "66",
      term: "Variable",
      definition: "Any factor that is subject to change",
    },
    {
      id: "67",
      term: "Case Study",
      definition: "An in-depth analysis of a person, group, or event",
    },
    {
      id: "68",
      term: "Experiment",
      definition: "A marketing research method that tests cause and effect by testing marketing new products or comparing test groups with control groups",
    },
    {
      id: "69",
      term: "Hypothesis",
      definition: "Proposed explanation for something",
    },
    {
      id: "70",
      term: "Semantic-Differential Rating Scales",
      definition: "Measure attitude",
    },
    {
      id: "71",
      term: "Volume-Tracking Scanner",
      definition: "A method of collecting information about customers' buying habits and inventory status because the scanning system can track large volumes of goods",
    },
    {
      id: "72",
      term: "Secondary Data",
      definition: "Information that have been collected for purposes other than the project at hand.",
    },
    {
      id: "73",
      term: "Marketing-Information Management",
      definition: "This function involves gathering, accessing, synthesizing, evaluating, and disseminating information to aid in making marketing decisions",
    },
    {
      id: "74",
      term: "Selling",
      definition: "This function involves determining customer needs and wants and responding through planned, personalized communication that influences purchase decisions and enhances future business opportunity",
    },
    {
      id: "75",
      term: "Objectives",
      definition: "The things the business want to attain",
    },
    {
      id: "76",
      term: "Promotional Mix",
      definition: "The combination of marketing communication channels that a business uses to send its messages to consumers",
    },
    {
      id: "77",
      term: "Market Segmentation",
      definition: "Dividing the market into groups that have similar characteristics",
    },
    {
      id: "78",
      term: "Psychographic Segmentation",
      definition: "The market divided on the basis of a lifestyle choice",
    },
    {
      id: "79",
      term: "Geographic Segmentation",
      definition: "Dividing a market on the basis of location",
    },
    {
      id: "80",
      term: "Demographics",
      definition: "The physical and social characteristics of a population",
    },
    {
      id: "81",
      term: "Rate of Usage",
      definition: "A type of behavioral segmentation, which involves dividing customers into groups according to their response to a product",
    },
    {
      id: "82",
      term: "Presentation",
      definition: "The way in which the information is communicated",
    },
    {
      id: "83",
      term: "Objectivity",
      definition: "Presenting unbiased information",
    },
    {
      id: "84",
      term: "Information System",
      definition: "A method of gathering, storing, and analyzing data for the purpose of making business decisions",
    },
    {
      id: "85",
      term: "Private Enterprise",
      definition: "An economic system in which individuals and groups, rather than government, own or control the means of production. Considered a mixed economy because individuals and business are the primary economic decision makers, while the government helps to regulate and control the system",
    },
    {
      id: "86",
      term: "Environmental Scan",
      definition: "An analysis of external forces that influence a business's success; Collecting information about the environment (e.g. competitors and economic decisions) surrounding the business",
    },
    {
      id: "87",
      term: "Consumer Spending Habits",
      definition: "An economic factor that may be a threat or an opportunity",
    },
    {
      id: "88",
      term: "Quality Inspection",
      definition: "Checking a sample item for defects after it has already been produced",
    },
    {
      id: "89",
      term: "Quality Assurance",
      definition: "The process businesses use to prevent defective products from being created",
    },
    {
      id: "90",
      term: "Platform Project",
      definition: "One that creates something entirely new",
    },
    {
      id: "91",
      term: "Derivative Project",
      definition: "Enhances, adds to, or extends an existing project",
    },
    {
      id: "92",
      term: "Breakthrough Project",
      definition: "Relies on the use of new technology",
    },
    {
      id: "93",
      term: "R&D Project",
      definition: "Takes on new visions or pursuits for the business",
    },
    {
      id: "94",
      term: "Process Orientation",
      definition: "A focus on how things are done, rather than just outcomes",
    },
    {
      id: "95",
      term: "Lean Production",
      definition: "Maximizing customer value while minimizing waste",
    },
    {
      id: "96",
      term: "Continual Improvement",
      definition: "A focus on increasing efficiency and effectiveness in all areas of the organization",
    },
    {
      id: "97",
      term: "Concurrent Engineering",
      definition: "Performing the stages of product design and development simultaneously, instead of one after another",
    },
    {
      id: "98",
      term: "Product Innovation",
      definition: "Involves the development of totally new or improved products",
    },
    {
      id: "99",
      term: "Process Innovation",
      definition: "Changing the way that a product is produced or delivered",
    },
    {
      id: "100",
      term: "Positioning Innovation",
      definition: "Involves identifying new, different ways to position a product or a company",
    },
    {
      id: "101",
      term: "Paradigm Innovation",
      definition: "A shift in the way of thinking that causes a change",
    },
    {
      id: "102",
      term: "Below-Cost Pricing",
      definition: "When a company prices its products below cost, making it difficult for other companies to complete with the low prices causing the other companies to possibly go out of business",
    },
    {
      id: "103",
      term: "One-Price Policy",
      definition: "When a business charges one price for all items it sells",
    },
    {
      id: "104",
      term: "Price Skimming",
      definition: "A pricing strategy that involves setting prices higher than those of the competition",
    },
    {
      id: "105",
      term: "Markup",
      definition: "The difference between the cost of a product and its selling price",
    },
    {
      id: "106",
      term: "Mind-Mapping Process",
      definition: "A creative-thinking process that involves generating ideas by making associations",
    },
    {
      id: "107",
      term: "Express Warranties",
      definition: "Warranties that are in writing or expressed verbally",
    },
    {
      id: "108",
      term: "Positioning (Product-Mix Strategy)",
      definition: "A product-mix strategy in which a business creates a certain image or impression of a product in the minds of consumers",
    },
    {
      id: "109",
      term: "Contraction",
      definition: "A product mix-strategy in which a business removes, or deletes, product items or product lines from its product mix",
    },
    {
      id: "110",
      term: "Alteration",
      definition: "A product mix-strategy in which a business makes changes to its products or product lines",
    },
    {
      id: "111",
      term: "Expansion",
      definition: "A product mix-strategy in which a business expands its product mix by adding additional product items or product lines",
    },
    {
      id: "112",
      term: "Subheadline",
      definition: "Adds information to that expressed in the headline",
    },
    {
      id: "113",
      term: "Tag Line",
      definition: "A slogan used in an advertisement",
    },
    {
      id: "114",
      term: "Touch Points",
      definition: "The interactions that customers have with the business; can be divided into three categories: pre-purchase, purchase, and post-purchase experiences",
    },
    {
      id: "115",
      term: "Product Promotion",
      definition: "Used to stimulate consumer purchases of goods or services",
    },
    {
      id: "116",
      term: "Advertising",
      definition: "Any paid form of nonpersonal presentation of ideas, images, goods, or services",
    },
    {
      id: "117",
      term: "Sales Promotion",
      definition: "Includes promotional activities other than advertising",
    },
    {
      id: "118",
      term: "Publicity",
      definition: "Any nonpersonal presentation of ideas, goods, or services that is not paid for by the company or individual which benefits from it",
    },
    {
      id: "119",
      term: "Personal Selling",
      definition: "The form of promotion that uses planned, personalized communication in order to influence purchase decisions and enhance future business opportunities",
    },
    {
      id: "120",
      term: "Telemarketing",
      definition: "An advertising medium that utilizes telephone service to promote a product either by phoning prospective customers or providing a number for them to call",
    },
    {
      id: "121",
      term: "Do Not Call Laws",
      definition: "Allow consumers to register their phone numbers with a \"do not call\" registry",
    },
    {
      id: "122",
      term: "Direct Mail",
      definition: "A promotional medium that comes to consumers' homes in the form of letters, catalogs, postcards, and folders",
    },
    {
      id: "123",
      term: "Viral Marketing",
      definition: "A promotional tactic that involves sending or forwarding promotional messages over the Internet (e.g. email, social-media websites, and blogs) to generate buzz about a brand, company, or product",
    },
    {
      id: "124",
      term: "Public Relations",
      definition: "Involves establishing good relationships between the business and the public",
    },
    {
      id: "125",
      term: "Clientele",
      definition: "Consists of a body of customers upon which the organization can rely for significant repeat business",
    },
    {
      id: "126",
      term: "Administrative Law",
      definition: "Deals with the rules and regulations that have been established by governmental agencies.",
    },
    {
      id: "127",
      term: "Exclusive Distribution",
      definition: "Involves selling a product through just one middleman in a geographic area and allows the manufacturer to maintain tight control over the product",
    },
    {
      id: "128",
      term: "Intensive Distribution",
      definition: "Involves selling a product through every available wholesaler and retailer in a geographic area where consumers might look for it",
    },
    {
      id: "129",
      term: "Selective Distribution",
      definition: "Involves selling a product through a limited number of wholesalers and retailers in a geographical area",
    },
    {
      id: "130",
      term: "Wholesalers",
      definition: "Intermediaries who help move goods between producers and retailers",
    },
    {
      id: "131",
      term: "Agents",
      definition: "Intermediaries who assist in the sale and/or promotion of goods and services but do not take title to them",
    },
    {
      id: "132",
      term: "Industrial Distributors",
      definition: "Intermediaries that sell products to industrial users (businesses)",
    },
    {
      id: "133",
      term: "Radio Frequency Identification (RFID)",
      definition: "A small computer chip that is attached to the item. The tag contains product information such as price, style, model number, etc., and allows channel members to track the item's movement from the time it leaves the production line to the point of purchase",
    },
    {
      id: "134",
      term: "Universal Product Codes",
      definition: "Bar-coded tag that are read by a scanner",
    },
    {
      id: "135",
      term: "Supplier Performance Index",
      definition: "A method to measure and evaluate a channel member's performance",
    },
    {
      id: "136",
      term: "Executive Summary",
      definition: "Provides an overview of the entire report and contains the most important information included in the body of the report",
    },
    {
      id: "137",
      term: "Customer Relationship Management",
      definition: "An effort to build loyal, trusting, personal, and long-term associations with the clients or customers that have the potential to generate profit for the business",
    },
    {
      id: "138",
      term: "Product/Service Management",
      definition: "The marketing function that involves obtaining, developing, maintaining, and improving a product or service mix in response to market opportunities",
    },
    {
      id: "139",
      term: "Human Resource Management",
      definition: "The process of planning, staffing, leading, and organizing the employees of the business",
    },
    {
      id: "140",
      term: "Operations Management",
      definition: "The process of planning, controlling, and monitoring the day-to-day activities required for continued business functioning",
    },
    {
      id: "141",
      term: "Law of Diminishing Returns",
      definition: "An economic principle stating that after a certain point, hiring additional employees will result in a decrease in the overall level of production",
    },
    {
      id: "142",
      term: "Bank Notes",
      definition: "Currency",
    },
    {
      id: "143",
      term: "Corporate Bonds",
      definition: "Bonds issued by corporations to fund operating expenses",
    },
    {
      id: "144",
      term: "Mutual Fund",
      definition: "A collection of shareholders' money that invested by professional fund managers in an assortment of different securities, such as stocks and bonds",
    },
    {
      id: "145",
      term: "Municipal Bonds",
      definition: "Issued by local governments",
    },
    {
      id: "146",
      term: "Sales Tax",
      definition: "A fee that the government charges on retail products",
    },
    {
      id: "147",
      term: "Property Tax",
      definition: "A tax on land and buildings",
    },
    {
      id: "148",
      term: "Income Tax",
      definition: "A tax on the income a person earns, such as wages earned by performing work for an employer",
    },
    {
      id: "149",
      term: "Groupthink",
      definition: "A psychological phenomenon that evolves when conformity and the cohesiveness of the group become more important than the group's objective, purpose, or problem",
    },
    {
      id: "150",
      term: "FRUGGING (Fund-Raising Under the Guise of Research)",
      definition: "An unethical and, in some jurisdictions, an illegal practice in which a researcher pretends to conduct research but is really trying to solicit a donation for a group or organization",
    },
    {
      id: "151",
      term: "Test Marketing",
      definition: "The process of introducing a new product to a limited market to determine what its acceptance will be",
    },
    {
      id: "152",
      term: "Observation",
      definition: "Involves gathering data by watching consumers",
    },
    {
      id: "153",
      term: "Surveys",
      definition: "Involve asking consumers questions to learn their opinions and the reasons behind those opinions",
    },
    {
      id: "154",
      term: "Consumer Panel",
      definition: "A group of consumers formed for the purpose of discussing a specific topic, usually a good or service",
    },
    {
      id: "155",
      term: "Internal Secondary Data",
      definition: "Data from within the business that has been collected for purposes other than the project at hand",
    },
    {
      id: "156",
      term: "Warranty Agreements",
      definition: "Outline condition under which the seller will repair or replace a product",
    },
    {
      id: "157",
      term: "Exploratory Research",
      definition: "Involves collecting information to help the business define its issue, situation, or concern, and decide how to proceed with its research",
    },
    {
      id: "158",
      term: "Sampling Plan",
      definition: "The course of action for gathering marketing information from a section or portion of a target market",
    },
    {
      id: "159",
      term: "Constant Sum",
      definition: "A type of comparative rating scale that requires the respondent to assign a value (e.g., percentage or points) to the options provided on the questionnaire",
    },
    {
      id: "160",
      term: "Likert Scale",
      definition: "Rates respondents' attitudes or feelings according to a degree",
    },
    {
      id: "161",
      term: "Semantic Differential Scale",
      definition: "Provides seven spaces, which are bounded by descriptive antonyms at each end, such as durable and fragile. The respondent places an \"X\" at the point or space on the continuum that best describes his/her feelings about the object or idea s/he is rating.",
    },
    {
      id: "162",
      term: "Frequency",
      definition: "A type of category scale and provides respondents with options such as very often, often, sometimes, rarely, and never",
    },
    {
      id: "163",
      term: "Meta Tags",
      definition: "HTML codes that display information about web pages",
    },
    {
      id: "164",
      term: "Stock Plan",
      definition: "A list of items that a business needs to purchase for inventory",
    },
    {
      id: "165",
      term: "Income Statement",
      definition: "A financial summary that shows how much money the business has made or has lost over a period of time",
    },
    {
      id: "166",
      term: "Data Cleansing",
      definition: "The process of detecting incorrect or insufficient data",
    },
    {
      id: "167",
      term: "Respondent-Selection Error",
      definition: "When interviewers survey an inappropriate sample of the population",
    },
    {
      id: "168",
      term: "Deliberate-Falsification Error",
      definition: "When people provide false information on purpose",
    },
    {
      id: "169",
      term: "Respondent-Inability Error",
      definition: "When respondents forget the answer to a question (e.g. What did you have for lunch last Tuesday)",
    },
    {
      id: "170",
      term: "Structured Questions",
      definition: "Provide options from which the respondent can chose",
    },
    {
      id: "171",
      term: "Unstructured Questions",
      definition: "Open-ended questions that allow respondents to provide qualitative information and in-depth responses",
    },
    {
      id: "172",
      term: "Focus Group",
      definition: "A group that gathers to discuss a specific topic",
    },
    {
      id: "173",
      term: "In-Depth Personal Interview",
      definition: "Involves a face-to-face discussion between the research interviewer and a respondent",
    },
    {
      id: "174",
      term: "Habitual/Routine Buying Behavior",
      definition: "Buying inexpensive goods on a frequent basis, such as computer printer paper",
    },
    {
      id: "175",
      term: "Complex Buying Behavior",
      definition: "Involves much customer involvement because the items are expensive and purchased infrequently, such as cars, laptop computers, and homes",
    },
    {
      id: "176",
      term: "Mass Marketing",
      definition: "Involves designing products and directing marketing activities to appeal to the whole market",
    },
    {
      id: "177",
      term: "Situation Analysis",
      definition: "A determination of a business's current situation and the direction in which the business is headed",
    },
    {
      id: "178",
      term: "Sales Forecast",
      definition: "A prediction of future sales over a specific period of time",
    },
    {
      id: "179",
      term: "Qualitative Methods",
      definition: "Based on expert opinions and feedback, as well as personal experience",
    },
    {
      id: "180",
      term: "Trademark",
      definition: "A symbol, design, or word used by a producer to identify a good or service",
    },
    {
      id: "181",
      term: "Obstruction of Justice",
      definition: "A formal charge in which the judicial system accuses an individual with a crime of withholding critical evidence that can affect the outcome of a trial",
    },
    {
      id: "182",
      term: "Arrest Warrant",
      definition: "An order issued by a judge that instructs law-enforcement officers to bring to jail an individual who has been charged with a crime",
    },
    {
      id: "183",
      term: "Integrated Software Applications",
      definition: "Consist of two or more related computer programs that work together to record information or perform specific business tasks or functions",
    },
    {
      id: "184",
      term: "Request For Quotation (RFQ)",
      definition: "Summarizes the details about the business's needs, bid requirements, and deadlines",
    },
    {
      id: "185",
      term: "Lean Operations",
      definition: "When businesses optimize their resources and productivity levels and reduce wasted resources, including time, materials, money, etc.",
    },
    {
      id: "186",
      term: "Scanner Fraud",
      definition: "A deliberate action that involves overcharging customers, usually for smaller goods, with the expectation that the customer will not notice or fuss about it.",
    },
    {
      id: "187",
      term: "Predatory Pricing",
      definition: "The practice of pricing goods extremely low with the goal of driving the competition out of business",
    },
    {
      id: "188",
      term: "Retail Price Maintenance",
      definition: "Involves producers pressuring retailers to sell goods at the suggested retail price",
    },
    {
      id: "189",
      term: "Price Fixing",
      definition: "An illegal agreement in which businesses agree on prices of their goods or services, resulting in little choice for customers",
    },
    {
      id: "190",
      term: "Optimal Pricing Software",
      definition: "Makes calculations using a variety of product and pricing data",
    },
    {
      id: "191",
      term: "Opportunity Cost",
      definition: "The benefit that is lost when you decide to use scarce resources for one purpose rather than another",
    },
    {
      id: "192",
      term: "Maturity Phase",
      definition: "When sales of a product peak and then slowly start to decline",
    },
    {
      id: "193",
      term: "Decline Phase",
      definition: "When sales of a product drop sharply, and businesses then tend to reduce advertising",
    },
    {
      id: "194",
      term: "Trend",
      definition: "A general direction in which people or events are moving",
    },
    {
      id: "195",
      term: "Elasticity",
      definition: "An indication of how changes in price will affect changes in the amounts demanded and supplied",
    },
    {
      id: "196",
      term: "Contract",
      definition: "Agreements among two or more parties stating that one party is to do something in return for something provided by another party",
    },
    {
      id: "197",
      term: "Parternship",
      definition: "A form of business ownership in which the business is owned by two or more persons",
    },
    {
      id: "198",
      term: "Guarantee",
      definition: "A promise to the consumer that a product's purchase price will be refunded if the product is not satisfactory",
    },
    {
      id: "199",
      term: "Consumer Channel Activities",
      definition: "Delivery, Installation, and Price",
    },
    {
      id: "200",
      term: "Distribution",
      definition: "Takes place through one or more channel members, such as supermarkets",
    },
    {
      id: "201",
      term: "Extranet",
      definition: "Refers to a computer network that connects certain businesses, and allows the members of a distribution channel to efficiently communicate",
    },
    {
      id: "202",
      term: "Intranet",
      definition: "Refers to the computer network that allows employees to collaborate and exchange information within the business",
    },
    {
      id: "203",
      term: "Reverse Distribution",
      definition: "Involves customers returning used products to the manufacturer",
    },
    {
      id: "204",
      term: "Informal Report",
      definition: "A short report that presents facts without analysis",
    },
    {
      id: "205",
      term: "Formal Report",
      definition: "A report that is more complex, has several different parts, and provides an analysis of the facts int he report",
    },
    {
      id: "206",
      term: "Activity Report",
      definition: "An account of sales calls or other business activities carried out by staff",
    },
    {
      id: "207",
      term: "Product Utility",
      definition: "Refers to the usefulness of a product",
    },
    {
      id: "208",
      term: "Financial Analysis",
      definition: "The process of planning, maintaining, monitoring, controlling, and reporting the use of financial resources",
    },
    {
      id: "209",
      term: "Strategic Management",
      definition: "The process of planning, controlling, and organizing an organization or department",
    },
    {
      id: "210",
      term: "Marketing",
      definition: "The process of creating, communicating, and delivering value to customers and managing customer relationships in ways that benefit the organizations and its stakeholders",
    },
    {
      id: "211",
      term: "Closing the Sale",
      definition: "Occurs when a salesperson gains an agreement to purchase from a customer",
    },
    {
      id: "212",
      term: "Competition Oriented Pricing",
      definition: "A pricing method in which a seller uses prices of competing products as a benchmark instead of considering own costs or the customer demand",
    },
    {
      id: "213",
      term: "Cost-Plus Pricing",
      definition: "This type of pricing includes the variable costs associated with goods, as well as a portion of the fixed costs of operating the business",
    },
    {
      id: "214",
      term: "Customer Service",
      definition: "The process of helping a customer purchase a product or service and/or providing assistance after a purchase has been made",
    },
    {
      id: "215",
      term: "Data Collection Instrument",
      definition: "To gather information; surveys, interviews, observations, federal and state government agencies, research companies, business publications, trade association publication",
    },
    {
      id: "216",
      term: "Demand Oriented Pricing",
      definition: "A pricing method in which the price of the product is changed according to its demand",
    },
    {
      id: "217",
      term: "Direct Marketing Channels",
      definition: "Advertising that sends a promotional message to a targeted group of prospects and customers rather than a mass audience",
    },
    {
      id: "218",
      term: "Feature Benefit Selling",
      definition: "Selling technique in which the seller matches a feature with an advantage or benefit that the customer wants or thinks is desirable",
    },
    {
      id: "219",
      term: "Greeting Approach",
      definition: "When a salesperson first interacts with a customer by welcoming them to the store and saying that they are available for questions",
    },
    {
      id: "220",
      term: "Headline",
      definition: "A phrase in an advertisement that grabs the consumer's attention, creates interest and encourages them to read a promotional message",
    },
    {
      id: "221",
      term: "Illustration",
      definition: "A photograph, drawing, or other graphic that is used in a promotional message",
    },
    {
      id: "222",
      term: "Market Identification",
      definition: "Identifying the most profitable areas to offer a new product or service",
    },
    {
      id: "223",
      term: "Marketing Information Management",
      definition: "The process and methods that generates, stores, analyzes, and distributes information to promote good decision making for a business",
    },
    {
      id: "224",
      term: "Marketing Plan",
      definition: "A formal document that specifies a company's activities for a determined amount of time",
    },
    {
      id: "225",
      term: "Mark-up Pricing",
      definition: "Adding a constant percentage to the price of an item to determine its selling price",
    },
    {
      id: "226",
      term: "Objections",
      definition: "Concerns or doubts that a customer has for not making a purchase",
    },
    {
      id: "227",
      term: "Primary Research",
      definition: "Data that is gathered for the first time",
    },
    {
      id: "228",
      term: "Product Knowledge",
      definition: "Information about a good/service; can include its application, function, features, use",
    },
    {
      id: "229",
      term: "Product Life Cycle",
      definition: "Stages that product goes through: Introduction, Growth, Maturity, Decline",
    },
    {
      id: "230",
      term: "Product Mix",
      definition: "The different goods/services that a company provides",
    },
    {
      id: "231",
      term: "Product Service Management",
      definition: "Creating and changing the information about a company's catalog of offereings",
    },
    {
      id: "232",
      term: "Promotional Plan",
      definition: "An outline of the marketing tools, strategies, and resources that a company tends to use to promote a product or service",
    },
    {
      id: "233",
      term: "ROMI",
      definition: "Return on Marketing Investment; the profitability returned to the business based on funds spent on marketing",
    },
    {
      id: "234",
      term: "Secondary Research",
      definition: "Data that has been previously collected for a non marketing activity and is now available for the business's use",
    },
    {
      id: "235",
      term: "Selling Policy",
      definition: "A business's decisions regarding forms of payment, returns and exchanges, sales quotas, sales commission, and ethical issues",
    },
    {
      id: "236",
      term: "Service Close",
      definition: "When a salesperson encourages a customer to purchase with information regarding services available",
    },
    {
      id: "237",
      term: "Situation Anaylsis",
      definition: "The study of internal and external factors that affect marketing strategy",
    },
    {
      id: "238",
      term: "Slogan",
      definition: "A catchy phrase or words that identify a product or business",
    },
    {
      id: "239",
      term: "Statistics",
      definition: "Numbers that represent a fact or presents a view of a situation",
    },
    {
      id: "240",
      term: "Target Marketing",
      definition: "The process of communicating with a particular group who is most likely to become customers",
    },
    {
      id: "241",
      term: "Warranty",
      definition: "A promise that is given to a customer that a product will meet certain standards",
    },
  ],
}

