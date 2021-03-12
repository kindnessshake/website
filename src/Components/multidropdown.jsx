import React from 'react'
import { Menu } from 'antd'
import {
	MailOutlined,
	HomeOutlined,
	TeamOutlined,
	InstagramOutlined,
	UsergroupAddOutlined
} from '@ant-design/icons'
import Link from 'next/link'
import { Container } from 'reactstrap'

const { SubMenu } = Menu

class MultiDropdownNavbar extends React.Component {
	state = {
		current: 'mail'
	}

	handleClick = e => {
		console.log('click ', e)
		this.setState({ current: e.key })
	}

	render() {
		const { current } = this.state
		return (
			<div id="multidropdown">
				<Container className="m-auto" id="multidropdown">
					<Menu
						onClick={this.handleClick}
						selectedKeys={[current]}
						mode="horizontal"
						theme="dark"
					>
						<Menu.Item key="home" icon={<HomeOutlined />}>
							<Link id="navitem" href="/" passHref>
								Home
							</Link>
						</Menu.Item>
						<SubMenu key="aboutus" icon={<TeamOutlined />} title="About us ">
							<Menu.Item key="story" icon={<TeamOutlined />}>
								<Link href="/ourstory" passHref>
									Our Story
								</Link>
							</Menu.Item>
							<Menu.Item key="team" icon={<TeamOutlined />}>
								<Link href="/ourteam" passHref>
									Our Team
								</Link>
							</Menu.Item>
							<Menu.Item key="supporters" icon={<TeamOutlined />}>
								<Link href="/oursupporters" passHref>
									Our supporters
								</Link>
							</Menu.Item>
							<Menu.Item key="achievements" icon={<TeamOutlined />}>
								<Link href="/ourachievements" passHref>
									Our achievements
								</Link>
							</Menu.Item>
						</SubMenu>
						<Menu.Item key="socialmedia" icon={<InstagramOutlined />}>
							<Link href="/socialmedia" passHref>
								Our social media
							</Link>
						</Menu.Item>
						<SubMenu
							key="Membership"
							icon={<UsergroupAddOutlined />}
							title="Membership"
						>
							<Menu.Item key="becomemember" icon={<UsergroupAddOutlined />}>
								<Link href="/becomeamember" passHref>
									Become a member
								</Link>
							</Menu.Item>
							<Menu.Item key="belocalbuylocal" icon={<UsergroupAddOutlined />}>
								<Link href="/belocalbuylocal" passHref>
									Be Local Buy Local
								</Link>
							</Menu.Item>
						</SubMenu>
						<Menu.Item key="contactus" icon={<MailOutlined />}>
							<Link href="/contactus" passHref>
								Contact Us
							</Link>
						</Menu.Item>
						<Menu.Item key="volunteerwithus" icon={<MailOutlined />}>
							<Link href="/volunteerwithus" passHref>
								Volunteer with Us
							</Link>
						</Menu.Item>
					</Menu>
				</Container>
			</div>
		)
	}
}

export default MultiDropdownNavbar