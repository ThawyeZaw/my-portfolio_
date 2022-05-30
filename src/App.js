import './App.css'
import images from './assets/image'

import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Outlet, Link, useLocation } from 'react-router-dom'

import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import VanillaTilt from 'vanilla-tilt'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App() {
	const [isActive, setActive] = useState(false)
	const location = useLocation()
	// const [isDark, setDark] = useState(false)

	//functions
	const toggleClass = () => {
			setActive(!isActive)
		},
		changeTheme = () => {
			$('body').toggleClass('dark')
			if ($('body').hasClass('dark')) {
				localStorage.setItem('theme', 'dark')
				//setDark(true)
			}
			if (!$('body').hasClass('dark')) {
				localStorage.setItem('theme', '')
				//setDark(false)
			}
		},
		Tilt = props => {
			const { options, ...rest } = props
			const tilt = useRef(null)

			useEffect(() => {
				VanillaTilt.init(tilt.current, options)
			}, [options])

			return <div ref={tilt} {...rest} />
		},
		options = {
			scale: 1.03,
			speed: 800,
			max: 10,
		},
		chooseTopic = i => {
			$(`.works ul > li`).removeClass('active')
			$(`.works ul > #${i[0]}`).addClass('active')
			$('.card').css('display', 'none')
			$(`.card.${i[1]}`).css('display', 'flex')
		}

	//variables
	const navItems = [
			[1, '#', 'Home'],
			[2, '#work', 'Works'],
			[3, '#skill', 'Skills'],
			[4, '#about', 'About'],
			[5, '#contact', 'Contact'],
		],
		skillitems = [
			[1, images.devices, 'Front End', 'Front End is what the user see on a website and I make it pretty, responsive and interactive.', ['1. HTML', '2. CSS', '3. Bootstrap 5', '4. JavaScript', '5. jquery', '6. React']],
			[2, images.server, 'Back End', 'Back End is server side and databases skills. I am not a expert but I know some stuffs with it.', ['1. PHP', '2. Node.js', '3. APIs', '4. SQL', '5. MongoDB']],
			[3, images.web_dev, 'Web Design', 'As, I develop my websites by myself, I also design them by myself before coding and developing it.', ['1. Adobe XD', '2. Figma', '3. SVG', '4. UI, UX Trends']],
		],
		timelineItems = [
			[
				1,
				'2015-2022',
				'Study English at NELC',
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!',
			],
			[
				2,
				'2020-2022',
				'CDM student',
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!',
			],
			[
				3,
				'2020-Now',
				'Learning web-development',
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!',
			],
			[
				4,
				'2021-Now',
				'Study Japanese',
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!',
			],
		],
		topicItems = [
			['1', 'all'],
			['2', 'websites'],
			['3', 'mini-games'],
			['4', 'others'],
		],
		projects = [
			['1', images.R_P_S, 'Rock-Paper-Scissors', './rock_paper_scissors', 'mini-games'],
			['2', images.TTT, 'Tic-Tac-Toe', './tic-tac-toe', 'mini-games'],
			['3', images.E_M, 'Easy-Maths', './Math', 'others'],
			['4', images.Dic, 'Dictionary', './dictionary', 'others'],
			['5', images.D_C, 'Digital Clock', './digital_clock', 'others'],
		]

	//components
	const Img = props => {
			return <img src={props.link} alt={props.altText} />
		},
		Nav = () => {
			return (
				<>
					<nav className={isActive ? 'nav sticky' : 'nav'}>
						<Img link={images.logo} altText='TYZ' />
						<div className={isActive ? 'navmini active stickymini' : 'navmini'}>
							<ul>
								{navItems.map(item => {
									return (
										<li key={item[0]}>
											<a href={item[1]}>{item[2]}</a>
										</li>
									)
								})}
							</ul>
							<div className='theme'>
								<button onClick={changeTheme}>
									<FontAwesomeIcon icon={faAdjust} />
								</button>
							</div>
						</div>
						<div className={isActive ? 'bars change' : 'bars'} onClick={toggleClass}>
							<div className='bar1' />
							<div className='bar2' />
							<div className='bar3' />
						</div>
					</nav>
					<Outlet />
				</>
			)
		},
		Home = () => {
			return (
				<section className='home' id='home'>
					<div className='flex'>
						<div className='intro' data-aos='fade-right' data-aos-delay={300}>
							<p className='one'>Thaw ye Zaw</p>
							<p className='two'>I am a web designer and developer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur minima sequi et aliquid, nulla quam laboriosam quae consectetur.</p>
							<p className='more'>
								<a href='#skill'>Read More</a>
							</p>
						</div>
						<div className='hello' data-aos='zoom-in' data-aos-delay={300}>
							<Img link={images.freelancer} altText='Still loading' />
						</div>
					</div>
				</section>
			)
		},
		Work = () => {
			return (
				<section className='works' id='work'>
					<div className='title'>
						<h1>My Works</h1>
					</div>
					<div className='topics'>
						<ul>
							{topicItems.map(item => {
								return (
									<li
										onClick={() => {
											chooseTopic(item)
										}}
										id={item[0]}
										key={item[0]}
									>
										{item[1]}
									</li>
								)
							})}
						</ul>
					</div>
					<div className='wrapper'>
						<div className='cards'>
							{projects.map(card => {
								return (
									// eslint-disable-next-line no-useless-concat
									<div className={'card ' + 'all ' + card[4]} key={card[0]}>
										<Img link={card[1]} altText='' />
										<div className='card_back'>
											<p className='card_title'>{card[2]}</p>
											<p className='card_text'>
												<a href={card[3]} target='_blank' rel='noreferrer'>
													View Project
												</a>
											</p>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</section>
			)
		},
		Skill = () => {
			const SkillItem = props => {
				return (
					<Tilt className='skillitems' options={options} data-aos='zoom-in-up'>
						<Img link={props.image} altText='Loading' />
						<h2>{props.heading}</h2>
						<p>{props.text}</p>
						<div className='skilldetails'>
							<ul>
								{props.list.map(item => {
									return <li key={item}>{item}</li>
								})}
							</ul>
						</div>
					</Tilt>
				)
			}

			return (
				<section className='skill' id='skill'>
					<div className='title'>
						<h1>My Skills</h1>
					</div>
					<div className='flex'>
						<img src={images.skills} alt='Still Loading' className='skill' data-aos='fade-right' />
						<div className='myintro' data-aos='fade-left'>
							<h1>Hello!</h1>
							<div className='skillme'>
								<p>
									Technology is my passion and designing is my hobby.
									<br />
									That's why I love web development and I like web design.
									<br />
								</p>
							</div>
							<div className='progress'>
								<div className='up'>
									<p>Web development ( front end )</p>
									<p className='right'>80%</p>
								</div>
								<div className='bars'>
									<div className='skills front' />
								</div>
								<div className='up'>
									<p>Web development ( back end )</p>
									<p className='right'>20%</p>
								</div>
								<div className='bars'>
									<div className='skills back' />
								</div>
								<div className='up'>
									<p>Web design ( UI &amp; UX )</p>
									<p className='right'>70%</p>
								</div>
								<div className='bars'>
									<div className='skills design' />
								</div>
							</div>
							<p className='more'>Check CV</p>
						</div>
					</div>
					<div className='skillscontain'>
						<div className='moreskills'>
							{skillitems.map(item => {
								return <SkillItem key={item[0]} image={item[1]} heading={item[2]} text={item[3]} list={item[4]} />
							})}
						</div>
					</div>
				</section>
			)
		},
		About = () => {
			const TimelineItem = props => {
				return (
					<div className='timeline_event' data-aos='fade-up'>
						<div className='timeline_event_icon '>
							<p className='timeline_event_date'>{props.time}</p>
						</div>
						<div className='timeline_event_content '>
							<p className='timeline_event_title'>{props.heading}</p>
							<div className='timeline_event_description'>
								<p>{props.text}</p>
							</div>
						</div>
					</div>
				)
			}

			return (
				<section className='about' id='about'>
					<div className='title'>
						<h1>About Me</h1>
					</div>
					<div className='flex'>
						<img src={images.young} alt='Still Loading' className='about' data-aos='fade-right' />
						<div className='aboutme' data-aos='fade-left'>
							<h2>Hi! I am,</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti explicabo in debitis reprehenderit voluptate fugit quisquam quis natus tenetur necessitatibus. Aliquam,</p>
							<p className='more'>Read More</p>
						</div>
					</div>
					<div className='timeline-section'>
						<div className='timeline'>
							{timelineItems.map(item => {
								return <TimelineItem key={item[0]} time={item[1]} heading={item[2]} text={item[3]} />
							})}
						</div>
					</div>
				</section>
			)
		},
		Contact = () => {
			return (
				<section className='contact' id='contact'>
					<div className='flex'>
						<div className='title'>
							<h1>Contact me</h1>
							<Img link={images.email} altText='Loading' />
							<span>CONTACT EMAIL : thawyezaw15@gmail.com</span>
						</div>
						<div className='form'>
							<form action='https://formsubmit.co/thawyezaw15@gmail.com' method='POST'>
								<datalist id='name_text'></datalist>
								<input type='text' placeholder='Name' name='His_or_her_name' list='name_text' required></input>
								<input type='text' placeholder='Email' name='Email_gmail' list='name_text' id='email' required></input>
								<input type='text' placeholder='Who are you?' name='type' list='who' required></input>
								<datalist id='who'>
									<option>Developer</option>
									<option>Employer</option>
									<option>Friend</option>
									<option>Learner</option>
								</datalist>
								<textarea placeholder='Text message to Thaw ye Zaw' rows='2' required name='message'></textarea>
								<button type='submit' value='submit'>
									Submit
								</button>
								<input type='hidden' name='_next' value='https://thawyezaw.netlify.app/#contact'></input>
							</form>
						</div>
					</div>
				</section>
			)
		},
		Loader = () => {
			return (
				<div className='loader-wrapper'>
					<span className='loader'>
						<span className='loader-inner' />
					</span>
				</div>
			)
		}

	//useEffect
	useEffect(() => {
		$('.loader-wrapper').fadeOut('slow')
	}, [isActive])

	useEffect(() => {
		$(window).scroll(function () {
			// sticky navbar on scroll script
			if (this.scrollY > 5) {
				$('nav').addClass('sticky')
				$('.navmini').addClass('stickymini')
			} else {
				$('nav').removeClass('sticky')
				$('.navmini').removeClass('stickymini')
			}
		})

		var theme = localStorage.getItem('theme')

		if (theme) $('body').addClass('dark')

		$(`.works ul > #1`).addClass('active')

		$('.loader-wrapper').fadeOut('slow')

		AOS.init()
	}, [location])

	return (
		<>
			<Loader />
			<Nav />
			<Home />
			<Work />
			<Skill />
			<About />
			<Contact />
		</>
	)
}
