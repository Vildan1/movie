export default function Page({ params }: { params: { id: string } }) {
	return <div>Film ID: {params.id}</div>;
}
