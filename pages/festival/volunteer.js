import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Row, Col, Button } from "antd";
import { request } from "@Components/DatoCMS/datocms";
import ReactPlayer from "react-player";
import parse from "html-react-parser";

export async function getStaticProps() {
	const data = await request({
		query: `
		query MyQuery {
			festivalVolunteer {
    		content
  		}
		}`,
	});
	return {
		props: { data },
		revalidate: 10,
	};
}

const Stalls = ({ data }) => {
	return (
		<>
			<div className="festivalbanner">
				<img
					src="/static/img/festival/2022/social_covers_Linkedin.png"
					width="100%"
					height="100%"
					alt="img"
				/>
			</div>
			<div className="markdown  mx-3">
				<Row
					align="middle"
					justify="center">
					<Col
						xs={{
							span: 24,
						}}
						lg={{
							span: 12,
						}}
						align="middle"
						justify="center">
						{parse(
							data
								.festivalVolunteer
								.content,
						)}
						<Button
							type="primary"
							shape="round"
							size="large"
							ghost
							style={{
								borderColor:
									"#ccc",
								height:
									"auto",
							}}>
							<a
								href="https://forms.office.com/Pages/ResponsePage.aspx?id=e2oMoFFCKkyIxLG02GGZZ-OrEyowzMJAkXo-6-r4yZBUOUUzUEpERkk4NlBKUFJJV0xNUEVWMkdaSS4u"
								target="_blank">
								VOLUNTEERS
								EOI
							</a>
						</Button>
					</Col>
				</Row>
			</div>
			<div>
				<Row
					align="middle"
					justify="center">
					<h2>
						Proudly
						sponsored by
					</h2>
				</Row>
				<Row
					align="middle"
					justify="center">
					<br />
					<Col
						xs={{
							span: 12,
						}}
						lg={{ span: 6 }}
						align="middle"
						justify="center">
						<img
							src="/static/img/festival/bottomBanner/darwin-waterfront.png"
							width="100%"
							alt="darwinwaterfront"
						/>
					</Col>
					<Col
						xs={{
							span: 12,
						}}
						lg={{ span: 6 }}
						align="middle"
						justify="center">
						<img
							src="/static/img/festival/bottomBanner/ntevents.png"
							width="100%"
							alt="ntg-logo"
						/>
					</Col>
					<Col
						xs={{
							span: 12,
						}}
						lg={{ span: 6 }}
						align="middle"
						justify="center">
						<img
							src="/static/img/festival/bottomBanner/ntg.png"
							width="100%"
							alt="ntg-logo"
						/>
					</Col>
					<Col
						xs={{
							span: 12,
						}}
						lg={{ span: 6 }}
						align="middle"
						justify="center">
						<img
							src="/static/img/festival/bottomBanner/studynt.png"
							width="100%"
							alt="ntg-logo"
						/>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Stalls;
