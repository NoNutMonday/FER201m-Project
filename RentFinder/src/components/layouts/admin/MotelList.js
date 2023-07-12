import React from "react";

// react-bootstrap components
import { Badge, Button, Card, Navbar, Nav, Table, Container, Row, Col } from "react-bootstrap";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setMotels, updateMotel } from "../../../core/redux/motel";

function MotelList() {
	const queryClient = useQueryClient()

    const dispatch = useDispatch()

	const state = useSelector(state => state.motels.motels)

	const handleChange = (id) => {
		const confirm = window.confirm('Are you sure ?')

		if (confirm) {
			const motel = state?.find(item => item.id === id)

			const newMotel = {
				...motel,
				published: motel.published === 1 ? 0 : 1
			}

			mutation.mutate(newMotel)
		}
	
	}

	const mutation = useMutation({
        mutationFn: (newMotel) => fetch(`http://localhost:9999/motels/${newMotel?.id}`, {
            method: 'PUT',
            body: JSON.stringify(newMotel),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }

        })
            .then(res => res.json())
            .then(data => {
                dispatch(updateMotel({ motel: data }))
            }),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['motels'] })
        }
    })

	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">Motel Table List</Card.Title>
								<p className="card-category">
									Here is a subtitle for this table
								</p>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<Table className="table-hover table-striped">
									<thead>
										<tr>
											<th className="border-0">ID</th>
											<th className="border-0">Name</th>
											<th className="border-0">Address</th>
											<th className="border-0">Capacity</th>
											<th className="border-0">Price</th>
											<th className="border-0">Status</th>
											<th className="border-0"></th>
										</tr>
									</thead>
									<tbody>
										{
											state?.map(item => (
												<tr key={item.id}>
													<td>{item.id}</td>
													<td>{item.name}</td>
													<td>{item.address}</td>
													<td>{item.capacity}</td>
													<td>{item.price}</td>
													<td>
														<Badge bg={item.published ? 'success' : 'danger'} text='light'>
															{item.published ? 'Published' : 'UnPublished'}
														</Badge>
													</td>
													<td>
														<Button variant={item.published ? 'danger' : 'success'} onClick={() => handleChange(item.id)}>
															<i className="fas fa-refresh"></i>
														</Button>
													</td>
												</tr>
											))
										}

									</tbody>
								</Table>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default MotelList;
