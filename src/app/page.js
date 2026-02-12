"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './page.module.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};



const faqs = [
    { q: "DO YOU DO WEB DESIGN OR WEB DEVELOPMENT?", a: "We offer both web design and web development services." },
    { q: "I'M AN AGENCY, DO YOU DEVELOP FIGMA DESIGNS?", a: "Yes, we specialize in converting Figma designs to Webflow or custom code." },
    { q: "WHY DO I DEVELOP SOLELY USING WEBFLOW?", a: "Webflow allows for rapid development, clean code, and easy client management." },
    { q: "HOW MUCH DOES IT COST?", a: "Costs vary depending on project complexity. Contact us for a quote." },
    { q: "IS THERE ANY EXTRA COST INVOLVED?", a: "We provide upfront pricing with no hidden fees." },
    { q: "HOW LONG DOES IT TAKE?", a: "Timelines depend on the project scope, typically ranging from 2-4 weeks." },
    { q: "DO I NEED A DEVELOPER TO MAKE FUTURE UPDATES ON MY WEBSITE?", a: "No, Webflow Editor makes it easy for you to update content yourself." }
];

export default function TaskPage() {
    const [activeNav, setActiveNav] = useState('SCHEDULE A CALL');
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>

            {/* Header */}
            <header className={styles.header}>
                {/* Logo */}
                <div className={styles.logoSection}>
                    <img src="/images/logo.png" alt="Logo" className={styles.logoImage} />
                </div>

                {/* Navigation */}
                <nav className={styles.nav}>
                    {['HOME', 'WORK', 'CONTACT'].map((item) => (
                        <span
                            key={item}
                            className={activeNav === item ? styles.scheduleBtn : styles.navLink}
                            onClick={() => setActiveNav(item)}
                        >
                            {item}
                        </span>
                    ))}
                    <button
                        className={activeNav === 'SCHEDULE A CALL' ? styles.scheduleBtn : styles.navLink}
                        onClick={() => setActiveNav('SCHEDULE A CALL')}
                    >
                        SCHEDULE A CALL
                    </button>
                </nav>
            </header>

            {/* Right Side Tab */}
            <div className={styles.sideTab}>
                <div className={styles.tabInitial}>W.</div>
                <div className={styles.tabText}>
                    Honors
                </div>
            </div>

            {/* Left Side Indicator */}
            <div className={styles.sideIndicator}>
                <div className={styles.indicatorInitial}>W</div>
                <div className={styles.indicatorText}>
                    Professional Partner
                </div>
            </div>

            {/* Main Content */}
            <main className={styles.mainContent}>
                <div className={styles.contentWrapper}>
                    {/* Hero Section */}
                    <motion.div
                        className={styles.heroSection}
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* Hero Text */}
                        <div className={styles.heroTitle}>
                            <motion.h1 variants={fadeInUp}>
                                <motion.div variants={fadeInUp}>STUNNING</motion.div>
                                <motion.div variants={fadeInUp}>BRANDS</motion.div>
                                <div className={styles.heroLineWithSub}>
                                    <motion.span variants={fadeInUp}>& DIGITAL</motion.span>
                                    <motion.div className={styles.subtextInline} variants={fadeInUp}>
                                        <div>FREELANCER</div>
                                        <div>DIGITAL DESIGNER</div>
                                        <div>WEBFLOW EXPERT</div>
                                    </motion.div>
                                </div>
                                <motion.div variants={fadeInUp}>EXPERIENCES</motion.div>
                            </motion.h1>
                        </div>
                    </motion.div>

                    {/* Work Seen On Section */}
                    <motion.div
                        className={styles.workSection}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.workHeader}>
                            <p className={styles.workLabel}>WORK SEEN ON</p>
                        </div>

                        <div className={styles.logosContainer}>
                            {/* FLUX ACADEMY Logo */}
                            <div className={styles.fluxWrapper}>
                                <div><img src="images/F.png" /></div>
                            </div>

                            {/* Yahoo Logo */}
                            <div className={styles.yahooLogo}>
                                yahoo!
                            </div>

                            {/* F3 Logo */}
                            <div className={styles.f3Wrapper}>
                                <div className={styles.f3Main}>F3</div>
                                <div className={styles.f3Sub}>FIA FORMULA 3 CHAMPIONSHIP</div>
                            </div>

                            {/* awwwards Logo */}
                            <div className={styles.awwwardsLogo}>
                                awwwards.
                            </div>
                        </div>
                    </motion.div>

                    {/* About Section */}
                    <motion.div
                        className={styles.aboutSection}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <div className={styles.aboutGrid}>
                            <div className={styles.aboutText}>
                                <span className={styles.aboutLabel}>ABOUT</span>
                                Ethan Suero is an independent focused on crafting immersive digital experiences. He believes every project is an opportunity to deliver a unique and memorable digital experience that delights users and builds brand equity.
                            </div>
                        </div>
                    </motion.div>

                    {/* Projects Section */}
                    <div className={styles.projectsSection}>
                        {/* Project 1: Houston Exponential */}
                        <motion.div
                            className={styles.projectItem}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                        >
                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>HOUSTON EXPONENTIAL</h3>
                                <p className={styles.projectDesc}>
                                    A new digital HUB for houston's biggest startup ecosystem.
                                </p>
                            </div>
                            <div className={styles.projectImageWrapper}>
                                <img src="https://picsum.photos/seed/houston/800/500?grayscale" alt="Houston Exponential" />
                            </div>
                        </motion.div>

                        {/* Project 2: NAMI ML (Reversed) */}
                        <motion.div
                            className={`${styles.projectItem} ${styles.projectItemRev}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                        >
                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>NAMI ML</h3>
                                <p className={styles.projectDesc}>
                                    A brand new digital identity and website for the subscription App service that focuses on happy subscribers.
                                </p>
                            </div>
                            <div className={styles.projectImageWrapper}>
                                <img src="https://picsum.photos/seed/nami/800/500?grayscale" alt="NAMI ML" />
                            </div>
                        </motion.div>

                        {/* Project 3: Thin Reel */}
                        <motion.div
                            className={styles.projectItem}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                        >
                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>THIN REEL</h3>
                                <p className={styles.projectDesc}>
                                    How we turned a local studio into one of the biggest video agencies in the south of the UK.
                                </p>
                            </div>
                            <div className={styles.projectImageWrapper}>
                                <img src="https://picsum.photos/seed/thinreel/800/500?grayscale" alt="Thin Reel" />
                            </div>
                        </motion.div>
                    </div>

                    {/* More Projects Section */}
                    <div className={styles.moreProjectsSection}>
                        <motion.div
                            className={styles.moreProjectsGrid}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                        >
                            <div className={styles.moreProjectsLabel}>MORE PROJECTS</div>
                            <div className={styles.projectList}>
                                <div className={styles.projectListItem}>
                                    HUNTER YEANY
                                </div>
                                <div className={styles.projectListItem}>
                                    VELOCE
                                </div>
                                <div className={styles.projectListItem}>
                                    WALKER
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Thoughtful Process Section */}
                    <div className={styles.thoughtfulSection}>
                        <motion.div
                            className={styles.thoughtfulContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                        >
                            <div className={styles.thoughtfulTitleLine}>THOUGHTFUL</div>
                            <div className={styles.thoughtfulBottomLine}>
                                <div className={styles.thoughtfulTitleLine}>PROCESS</div>
                                <div className={styles.thoughtfulSubtitle}>I THINK A LOT</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Process Grid Section */}
                    <div className={styles.processGridSection}>
                        <motion.div
                            className={styles.processGrid}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                        >
                            {/* 01 ANALYSIS */}
                            <motion.div className={styles.processCard} variants={fadeInUp}>
                                <div className={styles.processHeader}>
                                    <span className={styles.processNumber}>01/</span>
                                    <h3 className={styles.processTitle}>ANALYSIS</h3>
                                </div>
                                <p className={styles.processDesc}>
                                    Live workshop where we define the main problems and challenges before building a strategic plan moving forward.
                                </p>
                            </motion.div>

                            {/* 02 RESEARCH */}
                            <motion.div className={styles.processCard} variants={fadeInUp}>
                                <div className={styles.processHeader}>
                                    <span className={styles.processNumber}>02/</span>
                                    <h3 className={styles.processTitle}>RESEARCH</h3>
                                </div>
                                <p className={styles.processDesc}>
                                    Competitive & Market research with the aim of finding that sweet spot that will set your brand apart.
                                </p>
                            </motion.div>

                            {/* 03 DESIGN */}
                            <motion.div className={styles.processCard} variants={fadeInUp}>
                                <div className={styles.processHeader}>
                                    <span className={styles.processNumber}>03/</span>
                                    <h3 className={styles.processTitle}>DESIGN</h3>
                                </div>
                                <p className={styles.processDesc}>
                                    Here's where your digital product starts to become a tangible thing with visual elements and a great UX design.
                                </p>
                            </motion.div>

                            {/* 04 DEVELOPMENT */}
                            <motion.div className={styles.processCard} variants={fadeInUp}>
                                <div className={styles.processHeader}>
                                    <span className={styles.processNumber}>04/</span>
                                    <h3 className={styles.processTitle}>DEVELOPMENT</h3>
                                </div>
                                <p className={styles.processDesc}>
                                    Using Webflow, a no-code tool that allow us full creative development & is easy to manage by your team after launch.
                                </p>
                            </motion.div>

                            {/* 05 ONBOARDING */}
                            <motion.div className={styles.processCard} variants={fadeInUp}>
                                <div className={styles.processHeader}>
                                    <span className={styles.processNumber}>05/</span>
                                    <h3 className={styles.processTitle}>ONBOARDING</h3>
                                </div>
                                <p className={styles.processDesc}>
                                    How to update and maintain your new digital product in minutes using no-code tools that are easy to use.
                                </p>
                            </motion.div>

                            {/* 06 SUPPORT */}
                            <motion.div className={styles.processCard} variants={fadeInUp}>
                                <div className={styles.processHeader}>
                                    <span className={styles.processNumber}>06/</span>
                                    <h3 className={styles.processTitle}>SUPPORT</h3>
                                </div>
                                <p className={styles.processDesc}>
                                    I got you, even after launching your digital product you can still count on me for every question or issue.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Humble Brag Section */}
                    <div className={styles.humbleSection}>
                        <motion.div
                            className={styles.humbleContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className={styles.humbleTitleLine}>HUMBLE</div>
                            <div className={styles.humbleBottomLine}>
                                <div className={styles.humbleTitleLine}>BRAG</div>
                                <div className={styles.humbleSubtitle}>
                                    I WON SOME AWARDS<br />ALONG THE WAY
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Awards Section */}
                    <motion.div
                        className={styles.awardsSection}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className={styles.awardsTrack}>
                            {/* --- FIRST SET OF 7 CARDS --- */}

                            {/* Card 1: Blue */}
                            <div className={`${styles.awardCard} ${styles.awardCardBlue}`}>
                                <div >
                                    <img src="/images/img1.png" alt="" />
                                </div>
                            </div>

                            {/* Card 2: Yellow */}
                            <div className={`${styles.awardCard} ${styles.awardCardYellow}`}>
                                <div >
                                    <img src="/images/img2.png" alt="" />
                                </div>
                            </div>

                            {/* Card 3: Mint */}
                            <div className={`${styles.awardCard} ${styles.awardCardMint}`}>
                                <div >
                                    <img src="/images/img4.png" alt="" />
                                </div>
                            </div>

                            {/* Card 4: Red */}
                            <div className={`${styles.awardCard} ${styles.awardCardRed}`}>
                                <div >
                                    <img src="/images/img3.png" alt="" />
                                </div>
                            </div>

                            {/* Card 5: Blue (Detailed) */}
                            <div className={`${styles.awardCard} ${styles.awardCardBlue}`}>
                                <div >
                                    <img src="/images/img4.png" alt="" />
                                </div>
                            </div>

                            {/* Card 6: Yellow */}
                            <div className={`${styles.awardCard} ${styles.awardCardYellow}`}>
                                <div >
                                    <img src="/images/img5.png" alt="" />
                                </div>
                            </div>

                            {/* Card 7: Red (New) */}
                            <div className={`${styles.awardCard} ${styles.awardCardRed}`}>
                                <div >
                                    <img src="/images/img6.png" alt="" />
                                </div>
                            </div>

                            {/* --- DUPLICATE SET FOR INFINITE SCROLL --- */}

                            {/* Card 1: Blue */}
                            <div className={`${styles.awardCard} ${styles.awardCardBlue}`}>
                                <div >
                                    <img src="/images/img1.png" alt="" />
                                </div>
                            </div>

                            {/* Card 2: Yellow */}
                            <div className={`${styles.awardCard} ${styles.awardCardYellow}`}>
                                <div >
                                    <img src="/images/img2.png" alt="" />
                                </div>
                            </div>

                            {/* Card 3: Mint */}
                            <div className={`${styles.awardCard} ${styles.awardCardMint}`}>
                                <div >
                                    <img src="/images/img4.png" alt="" />
                                </div>
                            </div>

                            {/* Card 4: Red */}
                            <div className={`${styles.awardCard} ${styles.awardCardRed}`}>
                                <div >
                                    <img src="/images/img3.png" alt="" />
                                </div>
                            </div>

                            {/* Card 5: Blue (Detailed) */}
                            <div className={`${styles.awardCard} ${styles.awardCardBlue}`}>
                                <div >
                                    <img src="/images/img4.png" alt="" />
                                </div>
                            </div>

                            {/* Card 6: Yellow */}
                            <div className={`${styles.awardCard} ${styles.awardCardYellow}`}>
                                <div >
                                    <img src="/images/img5.png" alt="" />
                                </div>
                            </div>

                            {/* Card 7: Red (New) */}
                            <div className={`${styles.awardCard} ${styles.awardCardRed}`}>
                                <div >
                                    <img src="/images/img6.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Award Table Section */}
                    <div className={styles.awardTableSection}>
                        <div className={styles.awardTableContainer}>
                            {/* Row 1 */}
                            <div className={styles.awardTableRow}>
                                <div className={styles.awardTableCell}>HOUSTON EXPONENTIAL</div>
                                <div className={styles.awardTableCell}>AWWWARDS</div>
                                <div className={styles.awardTableCell}>HONORS</div>
                                <div className={`${styles.awardTableCell} ${styles.awardTableCellLight}`}>2022</div>
                            </div>

                            {/* Row 2 */}
                            <div className={styles.awardTableRow}>
                                <div className={styles.awardTableCell}>HOUSTON EXPONENTIAL</div>
                                <div className={styles.awardTableCell}>CSS DESIGN AWARDS</div>
                                <div className={styles.awardTableCell}>UI / UX / INNOVATION</div>
                                <div className={`${styles.awardTableCell} ${styles.awardTableCellLight}`}>2022</div>
                            </div>

                            {/* Row 3 */}
                            <div className={styles.awardTableRow}>
                                <div className={styles.awardTableCell}>ATOMLE</div>
                                <div className={styles.awardTableCell}>AWWWARDS</div>
                                <div className={styles.awardTableCell}>NOMINEE</div>
                                <div className={`${styles.awardTableCell} ${styles.awardTableCellLight}`}>2021</div>
                            </div>

                            {/* Row 4 */}
                            <div className={styles.awardTableRow}>
                                <div className={styles.awardTableCell}>ATOMLE</div>
                                <div className={styles.awardTableCell}>CSS DESIGN AWARDS</div>
                                <div className={styles.awardTableCell}>UI / UX / INNOVATION</div>
                                <div className={`${styles.awardTableCell} ${styles.awardTableCellLight}`}>2021</div>
                            </div>

                            {/* Row 5 */}
                            <div className={styles.awardTableRow}>
                                <div className={styles.awardTableCell}>THIN REEL MEDIA</div>
                                <div className={styles.awardTableCell}>AWWWARDS</div>
                                <div className={styles.awardTableCell}>NOMINEE</div>
                                <div className={`${styles.awardTableCell} ${styles.awardTableCellLight}`}>2021</div>
                            </div>

                            {/* Row 6 */}
                            <div className={styles.awardTableRow}>
                                <div className={styles.awardTableCell}>THIN REEL MEDIA</div>
                                <div className={styles.awardTableCell}>CSS DESIGN AWARDS</div>
                                <div className={styles.awardTableCell}>UI / UX / INNOVATION</div>
                                <div className={`${styles.awardTableCell} ${styles.awardTableCellLight}`}>2022</div>
                            </div>
                        </div>
                    </div>









                    {/* Testimonial Section */}
                    <div className={styles.testimonialSection}>
                        <motion.div
                            className={styles.testimonialCard}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                        >
                            {/* Header */}
                            <div className={styles.testiHeader}>
                                <div className={styles.testiHeaderItem}>NAME: FRAZER HURRELL</div>
                                <div className={styles.testiHeaderItem}>ROLE: CREATIVE TECHNOLOGIST</div>
                                <div className={styles.testiHeaderItem}>COMPANY: YAHOO!</div>
                                <div className={styles.testiHeaderItem}>PROJECT: BRITISH AIRWAYS</div>
                            </div>

                            {/* Main Content */}
                            <div className={styles.testiContent}>
                                <div className={styles.testiImageWrapper}>
                                    <img src="images/human.png" alt="Frazer Hurrell" />
                                </div>
                                <div className={styles.testiTextWrapper}>
                                    <span className={styles.quoteIcon}>“</span>
                                    <p className={styles.testiQuote}>
                                        From the initial meeting to the final delivery, Ethan has created a feeling of trust and delivered everything we asked of him. The quality of his work speaks for itself and he is able to execute at a pace. He is an excellent Webflow developer and we will be calling on his services again, very soon.
                                    </p>
                                </div>
                            </div>

                            {/* Footer Nav */}
                            <div className={styles.testiFooter}>
                                <div className={styles.navArrow}><img src="images/arrowleft.png" alt="" /></div>
                                <div className={styles.testiCounter}>01/04</div>
                                <div className={styles.navArrow}><img src="images/arrow.png" alt="" /></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Clients Section */}
                    <div className={styles.clientsSection}>
                        <div className={styles.clientsHeader}>WORKED WITH SOME OF THE BEST OUT THERE</div>
                        <motion.div
                            className={styles.clientsGrid}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >

                            {/* HUNTER YEANY */}
                            <motion.div className={styles.logoHunter} variants={fadeInUp}>
                                <div><img src="images/hunter.png" /></div>
                            </motion.div>

                            {/* nuu */}
                            <motion.div className={styles.logoNuu} variants={fadeInUp}>nuu</motion.div>

                            {/* yahoo! */}
                            <motion.div className={styles.yahooLogo} variants={fadeInUp}><div><img src="images/yahoo.png" /></div></motion.div>

                            {/* Houston Exponential */}
                            <motion.div className={styles.logoHouston} variants={fadeInUp}>
                                <div><img src="images/houston.png" /></div>
                            </motion.div>

                            {/* NAMI */}
                            <motion.div className={styles.logoNami} variants={fadeInUp}>
                                <img src="images/name.png" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Common Questions Section */}
                    <div className={styles.questionsSection}>
                        <motion.div
                            className={styles.questionsContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                        >
                            <div className={styles.questionsTopRow}>
                                <div className={styles.questionsTitleLine}>COMMON</div>
                                <div className={styles.questionsSubtitle}>
                                    SOME QUESTIONS<br />PEOPLE USUALLY ASK
                                </div>
                            </div>
                            <div className={styles.questionsTitleLine}>QUESTIONS</div>
                        </motion.div>
                    </div>

                    {/* FAQ Section */}
                    <div className={styles.faqSection}>
                        <motion.div
                            className={styles.faqContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                        >
                            {faqs.map((faq, index) => (
                                <motion.div
                                    className={styles.faqItem}
                                    variants={fadeInUp}
                                    key={index}
                                >
                                    <div
                                        className={styles.faqHeader}
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <div className={styles.faqQuestion}>
                                            {faq.q}
                                        </div>
                                        <div className={styles.faqIcon}>
                                            {openFaqIndex === index ? '-' : '+'}
                                        </div>
                                    </div>

                                    {openFaqIndex === index && (
                                        <motion.div
                                            className={styles.faqAnswer}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {faq.a}
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </main >
        </div >
    );
}
