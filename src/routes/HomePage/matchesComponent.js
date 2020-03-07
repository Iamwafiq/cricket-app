import React,{ Component } from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';
import flag from './flag.svg'

class MatchesComponent extends Component {
	constructor (props){
		super(props);
		this.state={
			pageNumber: 0,
		}
	}

	increasePage() {
		var {pageNumber} = this.state;
		pageNumber= pageNumber+1;
		this.setState({
			pageNumber: pageNumber
		})
		this.props.getGameDetails(pageNumber, "page");
	}

	decreasePage() {
		var {pageNumber} = this.state;
		if(!pageNumber == 0){
			pageNumber= pageNumber-1;
		}
		this.setState({
			pageNumber: pageNumber
		})
		this.props.getGameDetails(pageNumber, "page");
	}

	buildTable () {

		const {data, loading,} = this.props;
		console.log(data);
		const {startDate} = data;
		const games = data.schedule.map((d)=>(
			<div key={d.matchID} className="bg-white shadow-4 pointer br2 center-ns mb2">
				<div className="flex justify-between items-center pa3">
					<div className="f5 fw5">
					{d.seriesName}
					</div>
					<div className="f7 gray mr2"> ❯ </div>
				</div>
				<div className="bb"></div>
				<div className="f7 fw5 pa2">{d.matchNumber},{d.venue}</div>
				<div className="flex mb2">
					<div className="flex w-40 flex-column justify-center items-evenly">
						<div className="flex w-50 h3 f5">
						<img className="h2 pa2 " src={flag}/>
						<span>{d.homeTeamName}</span>
					</div>
					<div className="flex w-50 h3 f5">
						<img className="h2 pa2 " src={flag}/>
						<span className="">{d.awayTeamName}</span>
					</div>
				</div>		
			</div>
				<div className="pa1 br4 f8 fw4 tc black-90 bg-orange mt1 truncate-ns center-ns">{d.statusMessage}</div>
			</div>
		))
			
		return(
			<div>
				{games}
			</div>
		)
	}
	render(){
		const {data, loading} = this.props;
		return(
			<div>
				<div className="flex-row pb4">
					<button className="fl bg-white-90 gray hover-black-80 " onClick={()=>this.decreasePage()}>❮</button>
					<button className="fr bg-white-90 gray hover-black-80 " onClick={()=>this.increasePage()}>❯</button>
				</div>
					{data && data.schedule.length? <div>{this.buildTable()}</div>: 
					<div className="calisto fw5 f3 bg-white shadow-4 pointer br2 w-60 tc center-ns mb2">No Matches Available</div>}
			</div>
		)	
	}
}
export default MatchesComponent;
