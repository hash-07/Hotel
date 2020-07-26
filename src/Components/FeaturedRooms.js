import React from 'react'
import {RoomContext} from '../Components/RoomProvider'
import Loading from '../Components/Loading'
import Rooms from '../Rooms'
import Title from './Title'


export default class FeaturedRooms extends React.Component {
	static contextType = RoomContext;

	render() {
		const {loading, FeaturedRooms: rooms} = this.context;
		
		return (
			<div>
				 from featured rooms
				<Rooms/>
				<Loading/>
			</div>
		)
	}
}