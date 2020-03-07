import React, { useState } from 'react';
import HeaderComponent from './header';
import MatchesComponent from './matchesComponent';
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

const GET_SCHEDULE = gql`
  query getSchedule ($type: String!, $status: String!, $page: Int!){
	schedule(type: $type, status: $status, page: $page){
		matchID
		seriesName
		playerOfTheMatch
		startDate
		venue
		matchID
 	  playerOfTheMatch
	  startDate
    matchType
    matchNumber
    statusMessage
    homeTeamName
		awayTeamName
	}
}`

const HomePage = () =>{

	const [ type, updateType ] = useState('All');
	const [ status, updateStatus ] = useState('Completed');
	const [ page, updatePage ] = useState(0);
	

	const { data, loading, error, fetchMore } = useQuery(GET_SCHEDULE,{
		variables:{
			type: type,
			status:status, 
			page:page
		}
	});


	const getGameDetails = (param,head) => {
		console.log(param)
		
		let obj = {}
		if(head == "type"){
			obj= {
				type: param,
				status: status,
				page: page
			}
			updateType(param);

		}else if(head == "status"){
			obj= {
				type: type,
				status:param, 
				page:page
			}
			updateStatus(param);

		}else if(head == "page"){
			obj= {
				type: type,
				status:status, 
				page:param
			}
			updatePage(param);

		}
		console.log(obj);

		fetchMore({
			variables: obj,
			

			updateQuery: (prev, { fetchMoreResult }) => {
				console.log(fetchMoreResult)
				if (!fetchMoreResult) {
					return prev;
				}
				return {
					...fetchMoreResult
				}
				
			},
		});
	}



	console.log(data);

  	return (
      <div >
      	<HeaderComponent getGameDetails={getGameDetails} />
      	<div className="pa2">
      	{data?
          <div>
          	<MatchesComponent data={data} getGameDetails={getGameDetails}  />
          </div>: <div className="calisto fw5 f3 bg-white shadow-4 pointer br2 w-60 tc center-ns mb2">No Matches Available</div> }
      	</div>      	
      </div>
    
  );
}

export default HomePage;
