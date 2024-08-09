import useGraphQuery, { GET_ALL_PERSONS } from "../utils/useQuery";

const Finance = () => {
    const {loading, error, data} = useGraphQuery(GET_ALL_PERSONS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (data) console.log(data);


    return (
        <>
        {data.person[0].firstName} {data.person[0].lastName}
        </>
    );
}
export default Finance;