import React from "react";
import { InPageNav } from "@nice-digital/nds-in-page-nav";
import { Grid, GridItem, Container } from "@nice-digital/nds-grid";

import { storiesOf } from "@storybook/react";

const Default = () => (
	<Container>
		<Grid reverse>
			<GridItem cols={12} md={4}>
				<InPageNav
					headingsContainerSelector=".js-in-page-nav-headings-container"
					headingsExcludeSelector=".js-in-page-nav-ignore"
				/>
			</GridItem>
			<GridItem cols={12} md={8} className="js-in-page-nav-headings-container">
				<h2 className="mt--0">H2 Heading One</h2>
				<h3 id="id-already-here">H3 Heading</h3>
				<p>
					The above h3 already has an id so will not have one generated, but all
					the other headings will have one generated from their text
				</p>
				<h2>H2 Heading Two</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fugit
					harum iure mollitia ut veritatis. Error est illum quisquam rerum.
				</p>
				<h3>H3 Heading One</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
					dignissimos enim exercitationem laboriosam nesciunt, nisi nostrum
					officia quaerat quibusdam quis sapiente, unde velit veniam!
					Accusantium ad adipisci, aspernatur cupiditate distinctio, dolores
					ducimus est fugiat illo itaque minima molestias nemo nesciunt, numquam
					perferendis porro quis repudiandae sapiente sequi sit veritatis
					voluptas.
				</p>
				<h3>H3 Heading Two</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
					cupiditate dolorem esse eum ipsa laborum nam non, praesentium, quam
					reprehenderit sapiente sed sequi vel veniam voluptas. Accusamus
					adipisci alias animi autem blanditiis dicta, distinctio dolorum
					ducimus eaque earum esse est et excepturi exercitationem explicabo
					fuga, fugiat itaque iure labore libero maiores maxime mollitia natus
					nemo nobis nostrum pariatur provident quae, quaerat qui quidem quis
					quisquam reiciendis repellat sunt ut voluptas. Commodi earum explicabo
					molestiae quam! A amet at beatae corporis deleniti dicta distinctio
					dolores enim esse est et exercitationem facere facilis hic illum ipsum
					iste, itaque laboriosam laborum minus molestiae mollitia nemo numquam
					odit officiis placeat possimus quae quis reiciendis repellat
					repellendus reprehenderit sit suscipit tempora temporibus totam vel.
					Deserunt eos iusto laboriosam, rem veniam voluptates. Accusamus ad
					beatae consectetur corporis cum delectus deserunt doloremque eius
					excepturi exercitationem illum, impedit ipsa iste, libero maxime
					mollitia nam odio odit pariatur qui quibusdam quidem quod quos ratione
					similique sit suscipit, unde veritatis vitae voluptatem! Beatae libero
					molestiae neque omnis quas repellendus repudiandae, rerum totam. Alias
					at autem sed? Accusantium ad amet aspernatur beatae, debitis delectus,
					dolor ducimus facere inventore nam natus necessitatibus odit officiis
					quae quasi quod, quos recusandae sit velit vitae.
				</p>
				<h3>H3 Heading Three</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
					laboriosam saepe sapiente sed sint totam vitae voluptatum? Aut
					distinctio doloremque dolorum ea illo officiis placeat recusandae
					totam. Consequuntur excepturi pariatur repellat! Aliquam cumque
					cupiditate, eos esse exercitationem expedita id itaque minima neque
					odio omnis perferendis porro repellendus repudiandae saepe vel veniam.
					Consectetur dolorum eligendi error fugit id iste minima, praesentium
					qui sed sunt. Architecto consequuntur debitis doloribus eos esse est
					exercitationem fuga illum, incidunt labore laboriosam soluta sunt
					vitae? Amet architecto autem consequuntur culpa cumque delectus
					deleniti dolore enim fugit, ipsa iusto laborum libero maiores
					molestias nesciunt nisi non odit quasi quidem quos repudiandae rerum
					sapiente suscipit tenetur totam ullam ut vel. Asperiores doloribus
					fugiat non odit quos rerum, saepe similique voluptatem! Beatae, eos
					est facere neque perspiciatis repellat totam voluptate. Ab aliquid
					architecto aspernatur atque cupiditate exercitationem, harum, libero
					maiores odit optio qui recusandae suscipit velit voluptates
					voluptatibus? Accusamus, assumenda consequuntur culpa cumque
					distinctio dolore enim fugit harum id illum iusto laborum libero
					minima perferendis, placeat quaerat quia quis quos repellat suscipit
					tempora tempore vel vero. Alias aspernatur autem dolorem dolores
					eaque, earum, fuga illum, ipsa iste maiores minima mollitia nam nemo
					quasi sunt tempora tempore ut velit vitae.
				</p>
				<h3>H3 Heading Four</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
					aspernatur aut consequatur dolor dolores eius eos ex, facere facilis,
					fugit illum natus neque numquam officiis omnis quas quo sequi tempora
					tempore temporibus, unde voluptas voluptate voluptatibus voluptatum.
					Corporis dolor harum ipsum optio possimus! Aspernatur beatae cum eaque
					expedita explicabo laboriosam possimus. Architecto, commodi corporis
					deleniti, eveniet iure maxime minima necessitatibus nemo nulla
					provident quas quisquam rem saepe, sequi suscipit totam voluptatum!
					Eligendi ex fugiat laborum natus quia, quo tenetur vero! Ad alias
					aperiam culpa, dolorem harum minima. A ad assumenda aut consequatur
					deleniti ducimus, ea eaque eos et ex facere facilis in incidunt
					laboriosam maxime odit officia officiis optio, pariatur perferendis
					placeat porro provident quasi reiciendis rem repellendus, sunt ullam
					ut voluptatem voluptatibus. Animi autem consectetur corporis culpa
					dolorem enim facere fugiat ipsa, ipsum iste laborum magnam molestiae
					nemo nostrum officia perferendis placeat praesentium, quas quibusdam
					suscipit ut vero voluptatum! Ab animi doloribus eaque earum in iure
					minima modi provident sapiente. A architecto ducimus id illum in nam
					nostrum sapiente sint soluta totam. Assumenda consectetur, delectus
					eveniet exercitationem numquam optio reprehenderit sapiente sint sit
					ut. Adipisci amet cumque, delectus facilis fugiat illo, maiores
					mollitia nostrum, officia rem repudiandae vero.
				</p>

				<h2 className="js-in-page-nav-ignore">Ignore this one</h2>
				<p>This heading will not appear in the in page nav</p>
			</GridItem>
		</Grid>
	</Container>
);

storiesOf("Components/In Page Nav", module).add("Default", Default);
