import React from 'react'
import Banner from './Components/Banner'
import {Link} from 'react-router-dom'
import Hero from './Components/Hero'



function Error() {
	return (
	<React.Fragment>
		<Hero>
			<Banner title="404" subtitle="Page not found">
			<Link to="/" className="btn-primary">
			return home
			</Link>
			</Banner>
		</Hero>
	</React.Fragment>
	)
}
export default Error