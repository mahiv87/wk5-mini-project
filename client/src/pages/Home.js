import React, { useState, useEffect, useCallback } from 'react';
// import Auth from '../utils/auth';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
	CheckCircle,
	Devices,
	FormatQuote,
	SettingsBrightness
} from '@mui/icons-material';

import styles from './Home.module.css';
import {
	scale400,
	scale500,
	companySlideInLeft500,
	companySlideInRight500,
	infoSlideInLeft500,
	infoSlideInRight500,
	infoSlideInLeft700,
	springFadeIn,
	container
} from '../utils/framerVariants';
import ContactComponent from '../components/Contact/ContactComponent';
import FaqComponent from '../components/FAQ/FaqComponent';

const Home = () => {
	const [companyRef, companyInView] = useInView();
	const [infoRef, infoInView] = useInView();
	const [testimonialRef, testimonialInView] = useInView();
	const [containerRef, containerInView] = useInView();
	const [featureRef, featureInView] = useInView();

	const companyControl = useAnimation();
	const infoControl = useAnimation();
	const testimonialControl = useAnimation();
	const containerControl = useAnimation();
	const featureControl = useAnimation();

	const handleCompanyAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				companyControl.start('visible');
			} else {
				companyControl.start('hidden');
			}
		},
		[companyControl]
	);

	const handleInfoAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				infoControl.start('visible');
			} else {
				infoControl.start('hidden');
			}
		},
		[infoControl]
	);

	const handleTestimonialAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				testimonialControl.start('visible');
			} else {
				testimonialControl.start('hidden');
			}
		},
		[testimonialControl]
	);

	const handleContainerAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				containerControl.start('visible');
			} else {
				containerControl.start('hidden');
			}
		},
		[containerControl]
	);

	const handleFeatureAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				featureControl.start('visible');
			} else {
				featureControl.start('hidden');
			}
		},
		[featureControl]
	);

	useEffect(() => {
		handleCompanyAnimation(companyRef, companyInView);
	}, [handleCompanyAnimation, companyRef, companyInView]);

	useEffect(() => {
		handleInfoAnimation(infoRef, infoInView);
	}, [handleInfoAnimation, infoRef, infoInView]);

	useEffect(() => {
		handleTestimonialAnimation(testimonialRef, testimonialInView);
	}, [handleTestimonialAnimation, testimonialRef, testimonialInView]);

	useEffect(() => {
		handleContainerAnimation(containerRef, containerInView);
	}, [handleContainerAnimation, containerRef, containerInView]);

	useEffect(() => {
		handleFeatureAnimation(featureRef, featureInView);
	}, [handleFeatureAnimation, featureRef, featureInView]);

	return (
		<div className={styles.homeContainer}>
			<section className={styles.hero}>
				<main className={styles.container}>
					<article className={styles.contentLeft}>
						<div className={styles.logoContainer}>
							<p className={styles.projectTracker}>Project Tracker</p>
						</div>
						<h1 className={styles.tagline}>Manage projects effortlessly</h1>
						{/* <div className={styles.tryButton}>
							<p className={styles.tryButtonText}>Try it now</p>
						</div> */}
					</article>
					<article className={styles.contentRight}>
						<div className={styles.blobTopLeft}></div>
						<div className={styles.imgTopRight}></div>
						<div className={styles.imgCenterLeft}></div>
						<div className={styles.blobCenter}></div>
						<div className={styles.imgCenterRight}></div>
						<div className={styles.blobBottomLeft}></div>
						<div className={styles.imgBottomRight}></div>
					</article>
				</main>
			</section>
			<section className={styles.trustedContainer}>
				<h2 className={styles.trustedBy}>Trusted By</h2>
				<div className={styles.companiesContainer}>
					<motion.div
						ref={companyRef}
						variants={companySlideInLeft500}
						animate={companyControl}
						initial="hidden"
						className={styles.companyOne}
					></motion.div>
					<motion.div
						ref={companyRef}
						variants={companySlideInLeft500}
						animate={companyControl}
						initial="hidden"
						className={styles.companyTwo}
					></motion.div>
					<motion.div
						ref={companyRef}
						variants={companySlideInRight500}
						animate={companyControl}
						initial="hidden"
						className={styles.companyThree}
					></motion.div>
					<motion.div
						ref={companyRef}
						variants={companySlideInRight500}
						animate={companyControl}
						initial="hidden"
						className={styles.companyFour}
					></motion.div>
				</div>
			</section>
			<section className={styles.infoContainer}>
				<article className={styles.infoContent}>
					<motion.h2
						ref={infoRef}
						variants={infoSlideInLeft700}
						animate={infoControl}
						initial="hidden"
						className={styles.infoHeading}
					>
						Discover a new workflow
					</motion.h2>
					<motion.article
						ref={infoRef}
						variants={infoSlideInLeft500}
						animate={infoControl}
						initial="hidden"
						className={styles.paragraphContainer}
					>
						<h3 className={styles.paragraphText}>
							Introducing Project Tracker, the ultimate solution for developers
							to keep their projects in check. Organize, track, and manage all
							your work in one place.
						</h3>
					</motion.article>
					<motion.div
						ref={infoRef}
						variants={infoSlideInRight500}
						animate={infoControl}
						initial="hidden"
						className={styles.decorationsContainer}
					>
						<div className={styles.infoDecoration}></div>
					</motion.div>
				</article>
			</section>
			<section className={styles.testimonialsContainer}>
				<div className={styles.testimonialsContent}>
					<motion.article
						ref={testimonialRef}
						variants={scale400}
						animate={testimonialControl}
						initial="hidden"
						className={styles.testimonialsCardLeft}
					>
						<p className={styles.testimonialsText}>
							<FormatQuote />
							Project Tracker revolutionized the way our team manages multile
							projects. It's easy to use and provides the right set of
							functionalities
							<FormatQuote />
						</p>
						<p className={styles.testimonialsClient}>Very Large Tech Firm</p>
					</motion.article>
					<motion.article
						ref={testimonialRef}
						variants={scale500}
						animate={testimonialControl}
						initial="hidden"
						className={styles.testimonialsCardRight}
					>
						<p className={styles.testimonialsText}>
							<FormatQuote />
							Our workflow has improved dramatically with Project Tracker. It's
							become an essential tool for our development team
							<FormatQuote />
						</p>
						<p className={styles.testimonialsClient}>Startup Coders</p>
					</motion.article>
				</div>
			</section>
			<section className={styles.featuresContainer}>
				<div className={styles.featuresHeading}>
					<p className={styles.featuresTitle}>
						Manage your projects stress free
					</p>
					<p className={styles.featuresSubtitle}>
						Project Tracker helps you manage your projects throughout the day
					</p>
				</div>
				<motion.div
					ref={containerRef}
					variants={container}
					animate={containerControl}
					initial="hidden"
					className={styles.featureCardContainer}
				>
					<motion.div
						ref={featureRef}
						variants={springFadeIn}
						// animate={featureControl}
						// initial="hidden"
						className={styles.featureCard}
					>
						<div className={styles.featureCardContent}>
							<div className={styles.featureCardMain}>
								<div className={styles.featureCardHeading}>
									<Devices sx={{ color: '#ef476f', fontSize: 40 }} />
									<h3 className={styles.featureCardTitle}>For every device</h3>
								</div>
								<p className={styles.featureCardText}>
									Project Tracker works seamlessly across your Windows, iOS, and
									Android
								</p>
							</div>
						</div>
					</motion.div>
					<motion.div
						ref={featureRef}
						variants={springFadeIn}
						// animate={featureControl}
						// initial="hidden"
						className={styles.featureCard}
					>
						<div className={styles.featureCardContent}>
							<div className={styles.featureCardMain}>
								<div className={styles.featureCardHeading}>
									<SettingsBrightness sx={{ color: '#ef476f', fontSize: 40 }} />
									<h3 className={styles.featureCardTitle}>Light & Dark</h3>
								</div>
								<p className={styles.featureCardText}>
									Some prefer dark. Some prefer light. Whatever style you like,
									it's your choice
								</p>
							</div>
						</div>
					</motion.div>
					<motion.div
						ref={featureRef}
						variants={springFadeIn}
						// animate={featureControl}
						// initial="hidden"
						className={styles.featureCard}
					>
						<div className={styles.featureCardContent}>
							<div className={styles.featureCardMain}>
								<div className={styles.featureCardHeading}>
									<CheckCircle sx={{ color: '#ef476f', fontSize: 40 }} />
									<h3 className={styles.featureCardTitle}>Complete Tasks</h3>
								</div>
								<p className={styles.featureCardText}>
									Focus on what currently matters
								</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</section>
			<FaqComponent />
			<ContactComponent />
		</div>
	);
};

export default Home;

/* <section className="container mx-auto flex flex-col justify-center items-center text-center w-full h-[calc(100vh-5rem)]">
				<h1 className="text-6xl font-thasadith animate-fadeIn dark:text-neutral-200">
					Welcome to Project Tracker
				</h1>
				{!Auth.loggedIn() && (
					<p className="text-center my-2 text-neutral-500 italic opacity-0 animate-fadeInLong">
						login or signup to continue
					</p>
				)}
			</section> */
