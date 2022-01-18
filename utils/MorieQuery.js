const MorieQuery = `
  query($skip: Int!, $first: Int!) {
		tokens(skip: $skip, first: $first) {
			id
			tokenID
			imageURI
			contentURI
		}
	}
`;

export default MorieQuery;
