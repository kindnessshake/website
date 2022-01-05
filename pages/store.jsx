import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@Components/ecommerce snipcart/index.module.css";
import { request } from "@Components/DatoCMS/datocms";
import Image from "next/image";

const MYQUERY = `query MyQuery {
  allProducts {
    id
    name
    image {
      url
      title
      alt
    }
    description
    price
  }
}
`;

export async function getStaticProps() {
	const data = await request({
		query: MYQUERY,
	});
	return {
		props: { data },
		revalidate: 10,
	};
}

const StorePage = ({ data }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Kindness Store</title>
				<link rel="preconnect" href="https://cdn.snipcart.com" />
				<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" />
			</Head>

			<main className="markdown" style={{ width: "100%" }}>
				<h1 className="text-center m-5">
					Welcome to
					<br />
					the Kindness Store!
				</h1>
				<p className="text-center m-5">
					Here you will find some of the merchandise we are selling to support the causes we believe in
				</p>
				<div className={` ${styles.grid}`}>
					{data.allProducts.map(item => (
						<>
							<div key={item.id} className={`col-sm-4 col-md-4 ${styles.product}`}>
								<Image src={item.image.url} alt={item.image.alt} title={item.image.title} height={640} width={640} />
								<h3>{item.name}</h3>
								<p>{item.description}</p>
								<span>${item.price}</span>
								<div>
									<button
										className="snipcart-add-item"
										data-item-id={item.id}
										data-item-image={item.image.url}
										data-item-name={item.name}
										data-item-url="/"
										data-item-price={item.price}>
										Add to Cart
									</button>
								</div>
							</div>
						</>
					))}
				</div>
			</main>
			<script src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"></script>
			<div
				hidden
				id="snipcart"
				data-config-modal-style="side"
				data-api-key="NmUzYzExMmEtMjQwMC00NTY2LWFjYTEtOGRiOWNiZjlkNjQ4NjM3NzYwOTI5MjM4NTk4MDg2"></div>
		</div>
	);
};

export default StorePage;
